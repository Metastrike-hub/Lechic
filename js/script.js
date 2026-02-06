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


  const music2 = document.getElementById('music2');
  const btn2 = document.getElementById('playBtn2');

  btn2.addEventListener('click', () => {
    if (music2.paused) {
      music2.play();
    } else {
      music2.pause();
    }
  });



const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const close = document.querySelector(".close");

images.forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    document.body.classList.add("no-scroll");
  });
});

function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("no-scroll");
}

close.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});