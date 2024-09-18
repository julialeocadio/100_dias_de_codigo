setInterval(updateclock,1000);

function updateclock()
{
    var data = new Date();
    var hours = data.getHours();
    var minutes = data.getMinutes();
    var secs = data.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    if(secs < 10){
        secs = "0" + secs
    }

    var digitalClock = hours + ":" + minutes + ":" + secs;

    document.getElementById("clock").innerHTML = digitalClock;
}
