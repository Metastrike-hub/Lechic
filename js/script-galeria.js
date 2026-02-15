const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");
const viewportMeta = document.querySelector('meta[name="viewport"]');
const originalViewport = viewportMeta ? viewportMeta.getAttribute("content") : null;

function forceViewportResetOnOpen() {
  // Si no hay meta viewport, no podemos hacer nada
  if (!viewportMeta) return;

  // Fuerza scale=1 y desactiva zoom mientras el modal está abierto
  viewportMeta.setAttribute(
    "content",
    "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
  );

  // algunos navegadores lo aplican mejor con un “reflow”
  setTimeout(() => window.scrollTo(0, 0), 0);
}

function restoreViewportOnClose() {
  if (!viewportMeta || !originalViewport) return;

  // Restaurar lo que tenías antes
  viewportMeta.setAttribute("content", originalViewport);
}


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
    forceViewportResetOnOpen(); 
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
    restoreViewportOnClose();  
}

close.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});