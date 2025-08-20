package stevenalexander.hernandezjimenez.controller;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.dto.*;
import stevenalexander.hernandezjimenez.service.JwtUtil;
import stevenalexander.hernandezjimenez.service.UserService;

import java.util.Locale;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UserService userService;
    private final JwtUtil jwtUtil;
    private final MessageSource messageSource;

    public AuthController(UserService userService, JwtUtil jwtUtil, MessageSource messageSource) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
        this.messageSource = messageSource;
    }

    @PostMapping("/register")
    public Mono<ResponseEntity<Map<String, String>>> register(@RequestBody RegisterRequest req) {
        Locale locale = LocaleContextHolder.getLocale();
        return userService.register(req.getName(), req.getEmail(), req.getPassword())
                .map(u -> ResponseEntity.ok(Map.of(
                        "message", messageSource.getMessage("user.register.success", null, locale)
                )))
                .onErrorResume(ex -> Mono.just(ResponseEntity.status(400).body(Map.of(
                        "error", messageSource.getMessage("user.register.failed", null, locale)
                ))));
    }

    @PostMapping("/login")
    public Mono<ResponseEntity<Map<String, String>>> login(@RequestBody AuthRequest req) {
        Locale locale = LocaleContextHolder.getLocale();
        return userService.authenticate(req.getEmail(), req.getPassword())
                .map(user -> {
                    String token = jwtUtil.generateToken(user.getEmail());
                    return ResponseEntity.ok(Map.of(
                            "token", token,
                            "message", messageSource.getMessage("user.login.success", null, locale)
                    ));
                })
                .switchIfEmpty(Mono.just(ResponseEntity.status(401).body(Map.of(
                        "error", messageSource.getMessage("user.login.failed", null, locale)
                ))));
    }

    @PostMapping("/forgot-password")
    public Mono<ResponseEntity<Map<String, String>>> forgotPassword(@RequestBody Map<String, String> payload) {
        Locale locale = LocaleContextHolder.getLocale();
        String email = payload.get("email");
        return userService.createPasswordResetToken(email, locale)
                .map(link -> ResponseEntity.ok(Map.of(
                        "message", messageSource.getMessage("user.forgotPassword.sent", null, locale)
                )))
                .onErrorResume(ex -> Mono.just(ResponseEntity.badRequest().body(Map.of(
                        "error", messageSource.getMessage("error.badRequest", null, locale)
                ))));
    }

    @PostMapping("/reset-password")
    public Mono<ResponseEntity<Map<String, String>>> resetPassword(@RequestBody ResetPasswordRequest req) {
        Locale locale = LocaleContextHolder.getLocale();
        return userService.resetPassword(req.getToken(), req.getNewPassword())
                .thenReturn(ResponseEntity.ok(Map.of(
                        "message", messageSource.getMessage("user.resetPassword.success", null, locale)
                )))
                .onErrorResume(ex -> Mono.just(ResponseEntity.badRequest().body(Map.of(
                        "error", messageSource.getMessage("user.resetPassword.failed", null, locale)
                ))));
    }
}