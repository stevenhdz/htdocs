-- 1) Seguridad y cuentas
CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) NOT NULL UNIQUE,          -- 'ADMIN', 'USER'
  name VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE users (
  id CHAR(36) PRIMARY KEY DEFAULT (uuid()),
  email VARCHAR(255) NOT NULL UNIQUE,        -- 🔒 cifrado app-level si aplica
  password_hash VARCHAR(255) NOT NULL,
  display_name VARCHAR(120),
  locale VARCHAR(10) DEFAULT 'es-CO',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  deleted_at DATETIME NULL,
  KEY idx_users_deleted (deleted_at)
) ENGINE=InnoDB;

CREATE TABLE user_roles (
  user_id CHAR(36) NOT NULL,
  role_id INT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  CONSTRAINT fk_user_roles_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_user_roles_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE RESTRICT
) ENGINE=InnoDB;

-- 2) Catálogos
CREATE TABLE municipalities (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  slug VARCHAR(150) NOT NULL UNIQUE,
  name VARCHAR(150) NOT NULL,
  lat DOUBLE,
  lon DOUBLE,
  image_url VARCHAR(500),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

CREATE TABLE activities (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  municipality_id BIGINT NOT NULL,
  slug VARCHAR(150) NOT NULL UNIQUE,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  difficulty TINYINT DEFAULT 1,                -- 1..5
  points INT DEFAULT 10,
  is_active TINYINT(1) DEFAULT 1,
  geofence POLYGON NULL,                       -- opcional (MySQL Spatial)
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_act_muni FOREIGN KEY (municipality_id) REFERENCES municipalities(id) ON DELETE CASCADE,
  KEY idx_activities_muni_active (municipality_id, is_active)
) ENGINE=InnoDB;

-- i18n opcional
CREATE TABLE municipality_i18n (
  municipality_id BIGINT NOT NULL,
  locale VARCHAR(10) NOT NULL,
  display_name VARCHAR(200) NOT NULL,
  description TEXT,
  PRIMARY KEY (municipality_id, locale),
  CONSTRAINT fk_muni_i18n FOREIGN KEY (municipality_id) REFERENCES municipalities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE activity_i18n (
  activity_id BIGINT NOT NULL,
  locale VARCHAR(10) NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  PRIMARY KEY (activity_id, locale),
  CONSTRAINT fk_activity_i18n FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 3) QR y validaciones
-- ENUMs en columna
CREATE TABLE qr_codes (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  activity_id BIGINT NOT NULL,
  code_hash VARCHAR(255) NOT NULL,
  valid_from DATETIME NULL,
  valid_to   DATETIME NULL,
  rotation_hint VARCHAR(50),
  UNIQUE KEY uq_qr_activity_hash (activity_id, code_hash),
  CONSTRAINT fk_qr_activity FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE user_activity (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  activity_id BIGINT NOT NULL,
  status ENUM('PENDING','APPROVED','REJECTED','DUPLICATE') NOT NULL DEFAULT 'PENDING',
  scanned_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  validated_at DATETIME NULL,
  lat DOUBLE,
  lon DOUBLE,
  device_fingerprint VARCHAR(255),            -- 🔒
  qr_code_id BIGINT NULL,
  unique_hash VARCHAR(255),
  UNIQUE KEY uq_user_activity (user_id, activity_id),
  KEY idx_user_activity_user (user_id),
  KEY idx_user_activity_status (status),
  CONSTRAINT fk_ua_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_ua_activity FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE CASCADE,
  CONSTRAINT fk_ua_qr FOREIGN KEY (qr_code_id) REFERENCES qr_codes(id) ON DELETE SET NULL
) ENGINE=InnoDB;

-- 4) Planes y suscripciones
CREATE TABLE plans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(50) NOT NULL UNIQUE,            -- 'BASIC', 'PLUS'
  name VARCHAR(100) NOT NULL,
  currency VARCHAR(10) NOT NULL DEFAULT 'COP',
  price_cents INT NOT NULL,
  period ENUM('month','year') NOT NULL DEFAULT 'month',
  features JSON NOT NULL,
  is_active TINYINT(1) DEFAULT 1
) ENGINE=InnoDB;

CREATE TABLE subscriptions (
  id CHAR(36) PRIMARY KEY DEFAULT (uuid()),
  user_id CHAR(36) NOT NULL,
  plan_id INT NOT NULL,
  status ENUM('TRIAL','ACTIVE','PAST_DUE','CANCELED','EXPIRED') NOT NULL,
  current_period_start DATETIME NOT NULL,
  current_period_end   DATETIME NOT NULL,
  cancel_at DATETIME NULL,
  canceled_at DATETIME NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  KEY idx_subscriptions_user (user_id),
  KEY idx_subscriptions_status (status),
  CONSTRAINT fk_sub_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_sub_plan FOREIGN KEY (plan_id) REFERENCES plans(id)
) ENGINE=InnoDB;

CREATE TABLE trials (
  user_id CHAR(36) PRIMARY KEY,
  started_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME NOT NULL,
  CONSTRAINT fk_trials_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 5) Pagos
CREATE TABLE payments (
  id CHAR(36) PRIMARY KEY DEFAULT (uuid()),
  subscription_id CHAR(36) NOT NULL,
  provider VARCHAR(50) NOT NULL,              -- 'PayU','Stripe'
  provider_payment_id VARCHAR(100) NOT NULL,
  amount_cents INT NOT NULL,
  currency VARCHAR(10) NOT NULL DEFAULT 'COP',
  status ENUM('REQUIRES_ACTION','PROCESSING','SUCCEEDED','FAILED','REFUNDED') NOT NULL,
  requested_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  completed_at DATETIME NULL,
  raw_metadata JSON NULL,
  UNIQUE KEY uq_payments_provider (provider, provider_payment_id),
  KEY idx_payments_sub (subscription_id),
  CONSTRAINT fk_pay_sub FOREIGN KEY (subscription_id) REFERENCES subscriptions(id) ON DELETE CASCADE
) ENGINE=InnoDB;

CREATE TABLE payment_webhooks (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  provider VARCHAR(50) NOT NULL,
  event_id VARCHAR(100) NOT NULL,
  received_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  signature_valid TINYINT(1) NOT NULL DEFAULT 0,
  payload JSON NOT NULL,
  UNIQUE KEY uq_webhook_event (provider, event_id)
) ENGINE=InnoDB;

CREATE TABLE payment_receipts (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  payment_id CHAR(36) NOT NULL,
  invoice_number VARCHAR(100),
  issued_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  url_pdf VARCHAR(500),
  KEY idx_receipt_payment (payment_id),
  CONSTRAINT fk_receipt_payment FOREIGN KEY (payment_id) REFERENCES payments(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 6) Ranking (materializado)
CREATE TABLE ranking_snapshot (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  scope VARCHAR(50) NOT NULL,                 -- 'GLOBAL' o 'MUNI:{id}'
  generated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  data JSON NOT NULL,
  KEY idx_ranking_scope_time (scope, generated_at)
) ENGINE=InnoDB;

-- 7) Observabilidad y cumplimiento
CREATE TABLE audit_logs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  actor_user_id CHAR(36) NULL,
  action VARCHAR(100) NOT NULL,               -- 'CREATE_ACTIVITY','UPDATE_PLAN',...
  entity VARCHAR(100) NOT NULL,               -- 'activity','municipality','user',...
  entity_id VARCHAR(100),
  ts DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  diff JSON NULL,
  KEY idx_audit_actor_time (actor_user_id, ts),
  CONSTRAINT fk_audit_actor FOREIGN KEY (actor_user_id) REFERENCES users(id) ON DELETE SET NULL
) ENGINE=InnoDB;

CREATE TABLE deletion_jobs (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  requested_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  executed_at DATETIME NULL,
  status VARCHAR(20) NOT NULL DEFAULT 'PENDING',  -- 'PENDING','DONE','FAILED'
  notes VARCHAR(500),
  KEY idx_deljob_user (user_id),
  CONSTRAINT fk_deljob_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB;

-- 8) Recomendaciones (telemetría ligera)
CREATE TABLE recommendation_events (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  user_id CHAR(36) NOT NULL,
  municipality_id BIGINT NULL,
  activity_id BIGINT NULL,
  type VARCHAR(20) NOT NULL,                  -- 'VIEW','CLICK','SAVE','DISMISS'
  ts DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  props JSON NULL,
  KEY idx_re_user_time (user_id, ts),
  KEY idx_re_muni (municipality_id),
  KEY idx_re_activity (activity_id),
  CONSTRAINT fk_re_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_re_muni FOREIGN KEY (municipality_id) REFERENCES municipalities(id) ON DELETE SET NULL,
  CONSTRAINT fk_re_activity FOREIGN KEY (activity_id) REFERENCES activities(id) ON DELETE SET NULL
) ENGINE=InnoDB;
