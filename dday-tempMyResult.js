var now = new Date();
var SooneungDay = new Date("2020-11-19");
var toNow = now.getTime();
var toSD = SooneungDay.getTime();
var Time = toSD - toNow;
var Future = Math.round(Time/(1000 * 60 * 60 * 24));
document.querySelector('#accent').innerText = Future + "일";

calcDate(100);
calcDate(200);
calcDate(365);

function calcDate(ChooseDay) {
    if(Future - ChooseDay <= 0) {
        document.querySelector("#date" + ChooseDay).innerText = "이미 지남 ㅅㄱ";
        return;
    }
    var future = toSD - ChooseDay * (1000 * 60 * 60 * 24);
    var Fday = new Date(future);
    var year = Fday.getFullYear();
    var month = Fday.getMonth();
    var day = Fday.getDate();
    document.querySelector("#date" + ChooseDay).innerText = year + "-" + (month+1) + "-" + day;
}

function SDay() {
    var day = document.querySelector("#sooneung");
    /*document.write(day.value)*/
}