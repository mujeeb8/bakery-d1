const cakeImages = [
  "Screenshot 2026-11-11 211350.png",
  "Screenshot 2026-11-11 211426.png",
  "Screenshot 2026-11-11 211450.png",
  "Screenshot 2026-11-11 211506.png",
  "Screenshot 2026-11-11 211537.png",
  "Screenshot 2026-11-11 211600.png",
  "Screenshot 2026-11-11 211613.png",
  "Screenshot 2026-11-11 211629.png",
  "Screenshot 2026-11-11 211701.png",
  "Screenshot 2026-11-11 211718.png",
  "Screenshot 2026-11-11 211742.png",
];

const collection = document.querySelector(".collection");
collection.insertAdjacentHTML(
  "beforeend",
  `<div class="gallery-intro"><p class="eyebrow">MÁS PARA AMAR</p><h3>Explora el diario completo de pasteles.</h3></div><div class="cake-gallery">${cakeImages.map((image, index) => `<button class="cake-card" data-image="${image}" aria-label="Ver pastel ${index + 1}"><img src="assets/${image}" alt="Pastel personalizado de Dayi's Sweet ${index + 1}"><span>VER ${String(index + 1).padStart(2, "0")}</span></button>`).join("")}</div>`,
);
document.body.insertAdjacentHTML(
  "beforeend",
  `<dialog class="order-dialog"><button class="close-dialog" aria-label="Cerrar">×</button><p class="eyebrow">VAMOS A CELEBRAR</p><h2>Cuéntanos sobre tu pastel.</h2><p>Envía tu ocasión, fecha y sabor favorito a Dayi's Sweet en Instagram.</p><a href="https://www.instagram.com/cakes_bydayi/" target="_blank">MENSAJE POR INSTAGRAM ↗</a></dialog>`,
);
const dialog = document.querySelector(".order-dialog");
document
  .querySelectorAll("nav button, .grid button")
  .forEach((button) =>
    button.addEventListener("click", () => dialog.showModal()),
  );
document
  .querySelector(".close-dialog")
  .addEventListener("click", () => dialog.close());
document.querySelectorAll(".cake-card").forEach((card) =>
  card.addEventListener("click", () => {
    document.querySelector(".cake img").src = `assets/${card.dataset.image}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }),
);
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(35px)" },
            { opacity: 1, transform: "none" },
          ],
          {
            duration: 800,
            fill: "forwards",
            easing: "cubic-bezier(.2,.7,.2,1)",
          },
        );
        observer.unobserve(entry.target);
      }
    }),
  { threshold: 0.15 },
);
document
  .querySelectorAll(".copy, .cake, .collection h2, .grid > *")
  .forEach((element) => {
    element.style.opacity = 0;
    observer.observe(element);
  });
