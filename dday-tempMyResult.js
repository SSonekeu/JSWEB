var now = new Date();
var SooneungDay = new Date("2020-11-19");
var toNow = now.getTime();
var toSD = SooneungDay.getTime();
var Time = toSD - toNow;
var Future = Math.round(Time/(1000 * 60 * 60 * 24));
document.querySelector('#accent').innerText = Future + "일"
