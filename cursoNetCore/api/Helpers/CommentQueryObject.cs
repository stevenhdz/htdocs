namespace api.Helpers
{
    public class CommentQueryObject
    {
        public required string Symbol { get; set; }
        public bool IsDecsending { get; set; } = true;
    }
}