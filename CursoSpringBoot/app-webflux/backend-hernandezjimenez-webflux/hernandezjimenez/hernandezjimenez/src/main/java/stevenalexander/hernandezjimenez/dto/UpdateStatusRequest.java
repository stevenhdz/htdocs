package stevenalexander.hernandezjimenez.dto;

public class UpdateStatusRequest {
    private String status;
    private String note;

    public UpdateStatusRequest() {}

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
}