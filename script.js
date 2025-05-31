let hr = document.querySelector('#hr');
let mn = document.querySelector('#mn');
let sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  // Digital Clock
  let hours = document.getElementById('hours');
  let munites = document.getElementById('munites');
  let seconds = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  let am = h >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  h = h % 12;
  h = h ? h : 12; // if hour is 0, make it 12

  // Pad single digits with 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  munites.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
});
