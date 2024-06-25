let d = new Date().getHours();
        if(d<12){
            document.getElementById("img").style.backgroundImage = "url('GM.jpeg')";
            // document.getElementById("img").style.height = "300px";
            // document.getElementById("img").style.width = "300px";
            document.getElementById("img").style.backgroundRepeat = "no-repeat";
        }
        else if(d>=12 && d<=15){
            document.getElementById("img").style.backgroundImage = "url('GA.jpeg')";
            // document.getElementById("img").style.height = "300px";
            // document.getElementById("img").style.width = "300px";
            document.getElementById("img").style.backgroundRepeat = "no-repeat";
        }
        else if(d>15 && d<=20){
            
            document.getElementById("img").style.backgroundImage = "url('GE.jpg')";
            // document.getElementById("img").style.height = "300px";
            // document.getElementById("img").style.width = "300px";
            document.getElementById("img").style.backgroundRepeat = "no-repeat";
        }
        else{
            document.getElementById("img").style.backgroundImage = "url('GN.jpg')";
            // document.getElementById("img").style.height = "300px";
            // document.getElementById("img").style.width = "300px";
            document.getElementById("img").style.backgroundRepeat = "no-repeat";
        }