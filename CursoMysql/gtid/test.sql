-- En el servidor maestro
SET GLOBAL enforce-gtid-consistency = ON;
SET GLOBAL gtid_mode = ON;
SHOW VARIABLES LIKE 'gtid_mode';

-- En el servidor esclavo, configurarlo para que use GTID
CHANGE MASTER TO MASTER_HOST='master_host', MASTER_USER='replica_user', MASTER_PASSWORD='password', MASTER_AUTO_POSITION = 1;
START SLAVE;