const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');


const targetDate = new Date("March 15 2026 00:00:00").getTime();


function timer(){
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60 ) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;
    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;
}

setInterval(timer,1000);


  const music = document.getElementById('music');
  const btn = document.getElementById('playBtn');

  btn.addEventListener('click', () => {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  });


 


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