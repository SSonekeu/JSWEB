var now = new Date();
var SooneungDay = new Date("2020-11-19");
var toNow = now.getTime();
var toSD = SooneungDay.getTime();
var Time = toSD - toNow;
var Future = Math.round(Time/(1000 * 60 * 60 * 24));
document.querySelector('#accent').innerText = Future + "일";

calcDay(100);
calcDay(200);
calcDay(365);

function calcDay(ChooseDay) 
{
    if(Future - ChooseDay <= 0)
    {
        document.querySelector("#date" + ChooseDay).innerText = "이미 지남 ㅅㄱ";
        return;
    }
    var i=1;
    while(Future - i != ChooseDay)
    {
        i++;
    }
    calcDate(i, ChooseDay);
}

function calcDate(day, ChooseDay) {
   var future = toSD - day * (1000 * 60 * 60 * 24);
   document.write(toSD + " - " + day * (1000 * 60 * 60 * 24) + " = " + future + "<br>");
   var Fday = new Date(future);
   document.write(Fday + "<br>");
   var year = Fday.getFullYear();
   var month = Fday.getMonth();
   var day = Fday.getDate();
   document.querySelector("#date" + ChooseDay).innerText = year + "-" + (month+1) + "-" + day;
}