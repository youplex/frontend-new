let progressBar = document.querySelector(".circular-progress");
let valueContainer = document.querySelector(".value-container");

let progressValue = 0;
let progressEndValue = 50;
let speed = 50;

let progress = setInterval(() => {
  progressValue++;
  valueContainer.textContent = `${progressValue}%`;
  progressBar.style.background = `conic-gradient(
      #A15965 ${progressValue * 3.6}deg,
      #edc9cf ${progressValue * 3.6}deg
  )`;
  if (progressValue === progressEndValue) {
    clearInterval(progress);
  }
}, speed);