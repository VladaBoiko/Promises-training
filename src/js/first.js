function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const firstForm = document.querySelector('.first-form');
const firstRefs = {
  firstBox: document.querySelector('.first'),
  // startBtn: firstForm.querySelector('[data-start]'),
  stopBtn: firstForm.querySelector('[data-stop]'),
};
firstRefs.stopBtn.disabled = true;
// const secondForm = document.querySelector('.second-form');
// const secondRefs = {
//   secondtBox: document.querySelector('.second'),
//   startBtn: secondForm.querySelector('[data-start]'),
//   stopBtn: secondForm.querySelector('[data-stop]'),
// };

// const thirdForm = document.querySelector(".third-form");
// const thirdRefs = {
//   thirdBox: document.querySelector(".third"),
//   startBtn: thirdForm.querySelector("[data-start]"),
//   stopBtn: thirdForm.querySelector("[data-stop]"),
// };

// const uniteForm = document.querySelector('.unite-form');
// const uniteRefs = {
//   startBtn: uniteForm.querySelector('[data-start]'),
//   stopBtn: uniteForm.querySelector('[data-stop]'),
// };

firstForm.addEventListener('submit', evt => {
  evt.preventDefault();
  const {
    elements: { delay, amount },
  } = evt.currentTarget;
  const currentAmount = Number(amount.value);
  let currentDelay = Number(delay.value);

  for (let i = 1; i <= currentAmount; i += 1) {
    const color = getRandomHexColor();
    firstRefs.firstBox.style.backgroundColor = `${color}`;
    createPromise(currentDelay, color).then(color => {
      firstRefs.firstBox.style.backgroundColor = `${color}`;
    });
    currentDelay += 1000;
  }

  console.log('SUBMIT');
  console.log('SUBMIT');
});

const createPromise = (delay, color) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(color);
    }, delay);
  });
};
