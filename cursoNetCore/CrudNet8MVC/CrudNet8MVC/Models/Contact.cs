using System.ComponentModel.DataAnnotations;

namespace CrudNet8MVC.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "The name is mandatory")]
        public required string Name { get; set; }

        [Required(ErrorMessage = "The telephone is mandatory")]
        public required string Telephone { get; set; }

        [Required(ErrorMessage = "The email is mandatory")]
        public required string Email { get; set; }

        public DateTime DateStart { get; set; }
    }

}