import { updateActiveLink } from "./updateActiveLink"; // pastikan path benar

beforeEach(() => {
  document.body.innerHTML = `
        <nav class="list">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>
        <section id="about" style="height: 100vh;"></section>
        <section id="services" style="height: 100vh;"></section>
        <section id="contact" style="height: 100vh;"></section>
    `;
  // Panggil fungsi updateActiveLink di sini untuk menginisialisasi
  updateActiveLink();
});

test("should activate the correct link when scrolling", () => {
  window.scrollY = 150; // Mengatur scroll untuk mengaktifkan 'About'
  window.dispatchEvent(new Event("scroll"));

  // Panggil updateActiveLink setelah event scroll
  updateActiveLink();

  const activeLink = document.querySelector(".list a.active");
  expect(activeLink).not.toBeNull(); // Pastikan activeLink tidak null
  expect(activeLink.getAttribute("href")).toBe("#about"); // Ganti dengan bagian yang sesuai
});

test("should activate the About link when at the top", () => {
  window.scrollY = 0; // Mengatur scroll ke posisi paling atas
  window.dispatchEvent(new Event("scroll"));

  // Pastikan fungsi di-trigger dengan scroll
  updateActiveLink();

  const activeLink = document.querySelector(".list a.active");
  expect(activeLink).not.toBeNull(); // Pastikan activeLink tidak null
  expect(activeLink.getAttribute("href")).toBe("#about"); // Harapkan link About aktif
});
