export function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2; // posisi tengah jendela
    console.log(`Scroll Position: ${scrollPosition}`); // Tambahkan log ini

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        console.log(`Section: ${section.id}, Top: ${sectionTop}, Height: ${sectionHeight}`); // Tambahkan log ini

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const activeLink = document.querySelector(`.list a[href="#${section.id}"]`);
            console.log(`Active Link: ${activeLink}`); // Tambahkan log ini
            if (activeLink) {
                // Hapus kelas active dari semua link
                document.querySelectorAll('.list a').forEach(link => link.classList.remove('active'));
                // Tambahkan kelas active ke link yang sesuai
                activeLink.classList.add('active');
            }
        }
    });
}
