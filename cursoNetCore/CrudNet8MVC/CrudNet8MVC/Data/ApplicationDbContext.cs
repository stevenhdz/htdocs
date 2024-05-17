using CrudNet8MVC.Models;
using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext: DbContext {
    //ctor
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
    {   

    }

    public DbSet<Contact> ContactModel { get; set; }
    //add models here
}
