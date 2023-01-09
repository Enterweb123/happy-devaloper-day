
    var timeleft = 10;

    const downloadtime = setInterval( function(){
     if(timeleft <= 0){
        clearInterval(downloadtime);
        document.getElementById("countDown").innerHTML = "Happy Devaloper's Day";
     } else {
        document.getElementById("countDown").innerHTML = timeleft;
     } timeleft -=1;
    },1000);


