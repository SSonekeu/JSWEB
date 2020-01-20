var now = new Date();
var SooneungDay = new Date("2020-11-19");
var toNow = now.getTime();
var toSD = SooneungDay.getTime();
var Time = toSD - toNow;
var Future = Math.round(Time/(1000 * 60 * 60 * 24));
document.querySelector('#accent').innerText = Future + "일";

Ddata = ["2020-03-12", "2020-04-08", "2020-06-04", "2020-07-08", "2020-09-02", "2020-10-13"];
var toMarch = new Date(Ddata[0]).getTime();
var toApril = new Date(Ddata[1]).getTime();
var toJune = new Date(Ddata[2]).getTime();
var toJuly = new Date(Ddata[3]).getTime();
var toSeptember = new Date(Ddata[4]).getTime();
var toOctober = new Date(Ddata[5]).getTime();

TestArray = [toMarch, toApril, toJune, toJuly, toSeptember, toOctober];
DataAdrs = ["#march", "#april", "#june", "#july", "#september", "#october"];
for(var i=0; i<6; i++) {
    TestD(i);
}

calcDate(100);
calcDate(200);
calcDate(365);

function calcDate(ChooseDay) {
    if(Future - ChooseDay <= 0) {
        document.querySelector("#date" + ChooseDay).className = "item-Dplus";
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
    Ddata = [day.value]
    /*for(var i=0; i<4; i++) {
        document.querySelector("#superDate").innerText = Ddata[0][i];
    }*/
    document.querySelector("#superDate").innerText = Ddata[0][0] + Ddata[0][1] + Ddata[0][2] + Ddata[0][3] + "년도 모의고사 & 수능까지";
}

function TestD(i) {
    var TestDay = TestArray[i] - toNow;
    var toTD = Math.round(TestDay/(1000 * 60 * 60 * 24));
    document.querySelector(DataAdrs[i]).innerText = toTD + "일," + Ddata[i];
}