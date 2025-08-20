package stevenalexander.hernandezjimenez.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.Instant;

@Table("password_reset_tokens")
public class PasswordResetToken {
    @Id
    private Long id;
    private String token;
    private Long userId;
    private Instant expiryDate;

    public PasswordResetToken() {}
    public PasswordResetToken(Long id, String token, Long userId, Instant expiryDate) {
        this.id=id; this.token=token; this.userId=userId; this.expiryDate=expiryDate;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getToken() { return token; }
    public void setToken(String token) { this.token = token; }
    public Long getUserId() { return userId; }
    public void setUserId(Long userId) { this.userId = userId; }
    public Instant getExpiryDate() { return expiryDate; }
    public void setExpiryDate(Instant expiryDate) { this.expiryDate = expiryDate; }
}
