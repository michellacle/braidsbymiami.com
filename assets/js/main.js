const menuButton = document.querySelector("[data-menu-button]");
const navLinks = document.querySelector("[data-nav-links]");

if (menuButton && navLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const contactForm = document.querySelector("[data-contact-form]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const subject = encodeURIComponent("Braids by Miami appointment request");
    const message = [
      `Name: ${data.get("name") || ""}`,
      `Email: ${data.get("email") || ""}`,
      `Phone: ${data.get("phone") || ""}`,
      `Service: ${data.get("service") || ""}`,
      `Preferred date: ${data.get("date") || ""}`,
      "",
      data.get("message") || ""
    ].join("\n");
    window.location.href = `mailto:hello@braidsbymiami.com?subject=${subject}&body=${encodeURIComponent(message)}`;
  });
}
