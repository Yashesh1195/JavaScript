let date = new Date();
let a = date.toDateString();
// let a = date.toLocaleDateString();
document.getElementById("left").innerHTML = a;

setInterval(live);
function live(){
    let a = [];
    let time = new Date();
b = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds() + " PM";
document.getElementById("right").innerHTML = b;
}