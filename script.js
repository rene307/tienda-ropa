// ============================================================
// CONFIGURACIÓN RÁPIDA
// Cambia solo estos datos para personalizar la página.
// ============================================================

const CONFIG = {
  whatsapp: "569XXXXXXXX",
  mensaje: "Hola, vi tu página y quisiera solicitar información.",
};

// Año automático.
document.getElementById("year").textContent = new Date().getFullYear();

// Header al hacer scroll.
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
});

// Menú móvil.
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

// WhatsApp.
const whatsappBtn = document.getElementById("whatsappBtn");

whatsappBtn.href =
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(CONFIG.mensaje)}`;

// Botón VIP.
// Por ahora abre WhatsApp. Más adelante puede conectarse a un backend
// para generar accesos temporales.
document.getElementById("vipButton").addEventListener("click", () => {
  const mensajeVip =
    "Hola, quisiera consultar por el acceso privado VIP.";

  window.open(
    `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(mensajeVip)}`,
    "_blank"
  );
});

// Control +18.
// Usa sessionStorage para que no aparezca nuevamente en la misma sesión.
const ageModal = document.getElementById("ageModal");
const ageConfirm = document.getElementById("ageConfirm");

if (!sessionStorage.getItem("adultConfirmed")) {
  ageModal.classList.add("active");
  document.body.classList.add("locked");
}

ageConfirm.addEventListener("click", () => {
  sessionStorage.setItem("adultConfirmed", "true");
  ageModal.classList.remove("active");
  document.body.classList.remove("locked");
});
