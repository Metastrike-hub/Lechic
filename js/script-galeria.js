const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

/* PREVENIR SCROLL REAL (móvil + desktop) */
function preventScroll(e) {
  e.preventDefault();
}

function lockScroll() {
  document.documentElement.classList.add("no-scroll");
  document.body.classList.add("no-scroll");

  window.addEventListener("wheel", preventScroll, { passive: false });
  window.addEventListener("touchmove", preventScroll, { passive: false });
}

function unlockScroll() {
  document.documentElement.classList.remove("no-scroll");
  document.body.classList.remove("no-scroll");

  window.removeEventListener("wheel", preventScroll, { passive: false });
  window.removeEventListener("touchmove", preventScroll, { passive: false });
}

/* ABRIR MODAL */
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    const full = img.dataset.full || img.src;
    modalImg.src = full;
    lockScroll();
  });
});

/* CERRAR MODAL */
function closeModal() {
  modal.style.display = "none";
  unlockScroll();
}

close.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});