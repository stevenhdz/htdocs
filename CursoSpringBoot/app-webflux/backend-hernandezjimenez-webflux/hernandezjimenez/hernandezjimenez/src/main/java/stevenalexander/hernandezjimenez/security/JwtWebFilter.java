package stevenalexander.hernandezjimenez.security;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.ReactiveSecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;
import stevenalexander.hernandezjimenez.model.User;
import stevenalexander.hernandezjimenez.repository.UserRepository;
import stevenalexander.hernandezjimenez.service.JwtUtil;

import java.util.List;

@Component
public class JwtWebFilter implements WebFilter {

    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;

    public JwtWebFilter(JwtUtil jwtUtil, UserRepository userRepository) {
        this.jwtUtil = jwtUtil;
        this.userRepository = userRepository;
    }

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain) {
        String header = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            if (jwtUtil.validateToken(token)) {
                String email = jwtUtil.getEmailFromToken(token);
                return userRepository.findByEmail(email)
                        .map(u -> new UsernamePasswordAuthenticationToken(
                                u.getEmail(), null,
                                List.of(new SimpleGrantedAuthority("ROLE_" + u.getRole()))
                        ))
                        .flatMap(auth -> chain.filter(exchange)
                                .contextWrite(ReactiveSecurityContextHolder.withAuthentication(auth)))
                        .switchIfEmpty(chain.filter(exchange));
            }
        }
        return chain.filter(exchange);
    }
}
