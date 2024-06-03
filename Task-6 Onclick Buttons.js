function main1(){
    let d = new Date().toDateString();
    document.getElementById("demo").innerHTML = d;
}
function main2(){
    // let d = new Date().toTimeString();
    // document.getElementById("demo").innerHTML = d;
    setInterval(time);
    function time(){
        let d = new Date();
        let a = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        document.getElementById("demo").innerHTML = a;
    }
}
function main3(){
    
    let d = new Date().getHours();

    // document.getElementById("demo").innerHTML = d;

    if(d<12){
        document.getElementById("demo").innerHTML = "Good Morning";
    }
    else if(d>=12 && d<16){
        document.getElementById("demo").innerHTML = "Good Afternoon";
    }
    else if(d>=16 && d<=20){
        document.getElementById("demo").innerHTML = "Good Evening";
    }
    else{
        document.getElementById("demo").innerHTML = "Good Night";
    }
}
function main4(){
    // let  a = ["Yashesh", "Pratik", "Ravi", "Nishil"]
    // let b = ["Sat June 1 2024", "Sun June 2 2024", "Mon June 3 2024", "Tues June 4 2024"];
    let d = new Date();
    // let day2 = b[d.toDateString()];
    // let day = a[d.getDate()];
    // document.getElementById("demo").innerHTML = day;

            // for(i=0;i<4;i++)
            //     {
                    document.getElementById("demo").innerHTML += "Happy Birthday";
                    document.getElementById("demo").innerHTML += "<br>";
                // }
            }