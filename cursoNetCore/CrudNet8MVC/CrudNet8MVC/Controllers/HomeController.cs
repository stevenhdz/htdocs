using CrudNet8MVC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Diagnostics.Contracts;

namespace CrudNet8MVC.Controllers
{
    public class HomeController : Controller
    {
        private readonly ApplicationDbContext _context;
        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            return View(await _context.ContactModel.ToListAsync());
        }

        [HttpGet]
        public IActionResult Create() { 
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(Contact contact)
        {
            if (ModelState.IsValid)
            {
                contact.DateStart = DateTime.Now;
                _context.ContactModel.Add(contact);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View();
        }

        [HttpGet]
        public IActionResult Edit(int? id)
        {
            if (id == null) {
                return NotFound();
            }

            var contact = _context.ContactModel.Find(id);

            if(contact == null) { 
              return NotFound();
            }

            return View(contact);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(Contact contacto)
        {
            if (ModelState.IsValid)
            {
                _context.Update(contacto);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }

            return View();
        }

        [HttpGet]
        public IActionResult Detail(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var contacto = _context.ContactModel.Find(id);
            if (contacto == null)
            {
                return NotFound();
            }

            return View(contacto);
        }

        [HttpGet]
        public IActionResult Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var contacto = _context.ContactModel.Find(id);
            if (contacto == null)
            {
                return NotFound();
            }

            return View(contacto);
        }

        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteContact(int? id)
        {
            var contacto = await _context.ContactModel.FindAsync(id);
            if (contacto == null)
            {
                return View();
            }

            _context.ContactModel.Remove(contacto);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
