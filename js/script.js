const $ = (selector) => document.querySelector(selector);

const clock = $(".clock");
const hourContainer = $("hour-container");
const minuteContainer = $("minute-container");
const hourElement = $(".h");
const minutesElement = $(".m");
const secondElement = $(".s");
const timeElement = $(".time");

for (let i = 1; i <= 12; i++) {
  const hour = i * 30;

  const hourDiv = document.createElement("div");
  hourDiv.className = `hour`;
  hourDiv.style.rotate = `${hour}deg`;
  hourDiv.innerHTML = `<span></span>`;
  hourContainer.append(hourDiv);
}
for (let i = 1; i <= 60; i++) {
  if (i % 5) {
    const min = i * 6;
    const minDiv = document.createElement("div");
    minDiv.className = `min`;
    minDiv.style.rotate = `${min}deg`;
    minDiv.innerHTML = `<span></span>`;
    minuteContainer.append(minDiv);
  }
}

let h, m, s, pmam;

setInterval(() => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const secondDegree = (seconds + milliseconds / 1000) * 6;
  const minuteDegree = (minutes + seconds / 60) * 6;
  const hourDegree = (hours + minutes / 60 + seconds / 3600) * 30;

  hourElement.style.transform = `translateX(-50%) rotate(${hourDegree}deg)`;
  secondElement.style.transform = `translateX(-50%) rotate(${secondDegree}deg)`;
  minutesElement.style.transform = `translateX(-50%) rotate(${minuteDegree}deg)`;
});
setInterval(() => {
  const options = { hour: "2-digit", minute: "2-digit", second: "2-digit" };
  const date = new Date().toLocaleString("en", options);
  timeElement.innerHTML = date;
}, 100);
