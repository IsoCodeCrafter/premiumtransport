export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 80; // Navbar yüksekliği
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - navHeight;

    // Smooth scroll yerine animasyonlu scroll
    window.scrollTo({
      top: Math.max(0, offsetPosition), // Negatif değerleri önle
      behavior: 'smooth'
    });
  }
};