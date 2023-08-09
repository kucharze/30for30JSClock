const secHand = document.querySelector(".sec-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  const secondsDeg = (seconds / 60) * 360 + 90;
  const minsDeg = (mins / 60) * 360 + 90;
  const hoursDeg = (hours / 12) * 360 + 90;

  secHand.style.transform = `rotate(${secondsDeg}deg)`;
  minHand.style.transform = `rotate(${minsDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  console.log(seconds);
}

setInterval(setDate, 1000);
