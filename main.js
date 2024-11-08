var getDaysClass = document.querySelector('.days');
var getHoursClass = document.querySelector('.hours');
var getMinsClass = document.querySelector('.mins');
var getSecsClass = document.querySelector('.secs');
var countDownDate = new Date("Apr 2, 2036 11:30:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    getDaysClass.innerHTML = days;
    getHoursClass.innerHTML = hours;
    getMinsClass.innerHTML = minutes;
    getSecsClass.innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        getDaysClass.innerHTML = "expired!";
        getHoursClass.innerHTML = "expired!";
        getMinsClass.innerHTML = "expired!";
        getSecsClass.innerHTML = "expired!";
    }
}, 1000);