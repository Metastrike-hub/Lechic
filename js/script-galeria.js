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

/* PREVENIR PINCH-ZOOM / GESTOS (iOS Safari) */
function preventGesture(e) {
  e.preventDefault();
}

function lockGestures() {
  window.addEventListener("gesturestart", preventGesture, { passive: false });
  window.addEventListener("gesturechange", preventGesture, { passive: false });
  window.addEventListener("gestureend", preventGesture, { passive: false });

  modal.addEventListener("touchmove", preventGesture, { passive: false });
  modalImg.addEventListener("touchmove", preventGesture, { passive: false });
}

function unlockGestures() {
  window.removeEventListener("gesturestart", preventGesture, { passive: false });
  window.removeEventListener("gesturechange", preventGesture, { passive: false });
  window.removeEventListener("gestureend", preventGesture, { passive: false });

  modal.removeEventListener("touchmove", preventGesture, { passive: false });
  modalImg.removeEventListener("touchmove", preventGesture, { passive: false });
}

/* ABRIR MODAL */
images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    const full = img.dataset.full || img.src;
    modalImg.src = full;
    lockScroll();
    lockGestures();
  });
});

/* CERRAR MODAL */
function closeModal() {
  modal.style.display = "none";
  unlockScroll();
    unlockGestures();
}

close.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});