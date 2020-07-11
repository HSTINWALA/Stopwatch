var myVar = setInterval(dateandtime, 1000);

function dateandtime() {
    var date = new Date();
    document.getElementById("date").innerHTML = date
}


var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    lap = document.getElementById('lap'),
    miliseconds = 0, seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    miliseconds++;
    if (miliseconds > 1000) {
        miliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    h1.textContent = "Time " + (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds) + ":" + (miliseconds > 9 ? miliseconds : "00" + miliseconds);

    timer();
}
function timer() {
    t = setTimeout(add, 10);
    document.getElementById("start").disabled = true;
    document.getElementById("lap").disabled = false;
}

start.onclick = timer;

stop.onclick = function () {
    clearTimeout(t);
    document.getElementById("start").disabled = false;
    document.getElementById("lap").disabled = true;
}


clear.onclick = function () {
    h1.textContent = "Time 00:00:00:00";
    clearTimeout(t);
    document.getElementById("start").disabled = false;
    document.getElementById("lap").disabled = true;
    seconds = 0; minutes = 0; hours = 0;
}

count = 0;
lap.onclick = function () {
    count += 1;
    if (count <= 10) {
        var laps = document.getElementById("laps")
        laps.innerHTML += "<td><li>" + (hours ? (hours > 9 ? hours : "0" + hours) : "00h") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00m") + ":" + (seconds > 9 ? seconds : "0" + seconds) + "s " + ":" + (miliseconds > 9 ? miliseconds : "00" + miliseconds) + "ms </li></br>"
    }
}
