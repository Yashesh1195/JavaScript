// Supposing the intitial value of countdown

let countdown = 5;

// funtion to print the countdown statement

function start_countdown(){
    setInterval(function() {

        // Printing Countdown

        if(countdown >= 0){
            document.getElementById("countdown").innerHTML = "Enter OTP in " + countdown + " seconds....";
            countdown--;
            document.getElementById("otp_submit").disabled = false;
        }

        // Printing Statement after countdown is over
        
        else{
            document.getElementById("countdown").innerHTML = "Try Again....";
            document.getElementById("otp_submit").disabled = true;
        }
        
    }, 1000);
}

// Calling the function

start_countdown();