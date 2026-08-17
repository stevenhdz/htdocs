package stevenalexander.hernandezjimenez.controller;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.r2dbc.core.DatabaseClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/test-db")
public class TestDBController {
    private final DatabaseClient client;
    private final MessageSource messageSource;

    public TestDBController(DatabaseClient client, MessageSource messageSource) {
        this.client = client; this.messageSource = messageSource;
    }

    @GetMapping
    public Mono<String> testConnection() {
        var locale = LocaleContextHolder.getLocale();
        return client.sql("SELECT 1").fetch().rowsUpdated()
                .map(n -> messageSource.getMessage("db.connection.success", null, locale))
                .onErrorReturn(messageSource.getMessage("db.connection.failed", null, locale));
    }
}
