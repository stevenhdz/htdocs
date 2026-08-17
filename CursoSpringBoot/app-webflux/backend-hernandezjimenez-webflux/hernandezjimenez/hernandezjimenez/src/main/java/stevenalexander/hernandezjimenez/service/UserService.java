package stevenalexander.hernandezjimenez.service;

import org.springframework.context.MessageSource;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;
import stevenalexander.hernandezjimenez.model.PasswordResetToken;
import stevenalexander.hernandezjimenez.model.User;
import stevenalexander.hernandezjimenez.repository.PasswordResetTokenRepository;
import stevenalexander.hernandezjimenez.repository.UserRepository;

import java.time.Instant;
import java.util.Locale;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordResetTokenRepository tokenRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final EmailService emailService;
    private final MessageSource messageSource;

    public UserService(UserRepository userRepository,
                       PasswordResetTokenRepository tokenRepository,
                       BCryptPasswordEncoder passwordEncoder,
                       EmailService emailService,
                       MessageSource messageSource) {
        this.userRepository = userRepository;
        this.tokenRepository = tokenRepository;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
        this.messageSource = messageSource;
    }

    public Mono<User> register(String name, String email, String rawPassword) {
        return userRepository.existsByEmail(email)
                .flatMap(exists -> {
                    if (Boolean.TRUE.equals(exists)) {
                        return Mono.error(new RuntimeException("Email ya registrado"));
                    }
                    return Mono.fromCallable(() -> passwordEncoder.encode(rawPassword))
                            .subscribeOn(Schedulers.boundedElastic())
                            .flatMap(hash -> userRepository.save(new User(null, email, hash, name, "USER")));
                });
    }

    public Mono<User> authenticate(String email, String rawPassword) {
        return userRepository.findByEmail(email)
                .flatMap(u -> Mono.fromCallable(() -> passwordEncoder.matches(rawPassword, u.getPassword()))
                        .subscribeOn(Schedulers.boundedElastic())
                        .filter(Boolean::booleanValue)
                        .map(match -> u));
    }

    public Mono<String> createPasswordResetToken(String email, Locale locale) {
        return userRepository.findByEmail(email)
                .switchIfEmpty(Mono.error(new RuntimeException("Usuario no encontrado")))
                .flatMap(user -> {
                    String token = UUID.randomUUID().toString();
                    Instant expiry = Instant.now().plusSeconds(3600);
                    PasswordResetToken prt = new PasswordResetToken(null, token, user.getId(), expiry);
                    String link = "http://localhost:3000/#/reset?token=" + token;

                    String subject = messageSource.getMessage("user.forgotPassword.subject", null, locale);
                    String body = messageSource.getMessage("user.forgotPassword.message", null, locale) + link;

                    return tokenRepository.save(prt)
                            .then(emailService.sendPasswordRecoveryEmail(user.getEmail(), subject, body))
                            .thenReturn(link);
                });
    }

    public Mono<Void> resetPassword(String token, String newPassword) {
        return tokenRepository.findByToken(token)
                .switchIfEmpty(Mono.error(new RuntimeException("Token inválido")))
                .flatMap(prt -> {
                    if (prt.getExpiryDate().isBefore(Instant.now())) {
                        return Mono.error(new RuntimeException("Token expirado"));
                    }
                    return userRepository.findById(prt.getUserId())
                            .flatMap(user -> Mono.fromCallable(() -> passwordEncoder.encode(newPassword))
                                    .subscribeOn(Schedulers.boundedElastic())
                                    .doOnNext(user::setPassword)
                                    .then(userRepository.save(user))
                            )
                            .then(tokenRepository.delete(prt));
                });
    }
}
