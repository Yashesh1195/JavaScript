// let date = new Date(2024, 5, 22);
// let a = date.getDay() + ", " + date.getMonth() + " " + date.getDate() + ", " + date.getFullYear();
// document.getElementById("date").innerHTML = date;
// document.getElementById("date").innerHTML = "Wed, May 22, 2024";

let a = [];

setInterval(live);
function live(){
    let time = new Date();
b = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " PM";
document.getElementById("time").innerHTML = b;
}