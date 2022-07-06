const invitationCard = document.querySelector('.invitation-card')
const invitationBtn = document.querySelector('.invitation-btn')
const nav = document.querySelector('.nav')
const musicBtn = document.querySelector('.music-off')
const musicBtn1 = document.querySelector('.music-btn')
nav.classList.add('load')
document.querySelector('body').style.overflowY = 'hidden'

var params = new window.URLSearchParams(window.location.search);
var u = params.get('u');
if (u==null || u=="") {
    document.getElementById('guest').innerHTML = "Kepada Bpk/Ibu/Saudara/i";
} else {
    document.getElementById('guest').innerHTML = `Kepada ${u}`;
}


invitationBtn.addEventListener('click', () => {
    invitationCard.classList.add('active')
    nav.classList.remove('load')
    document.querySelector('body').style.overflowY = 'auto'
    document.getElementById('musik').play();
    document.querySelector('.music-btn').setAttribute('src', './images/pause.png')
})

musicBtn.addEventListener('click', () => {
    if (document.getElementById('musik').paused) {
        document.getElementById('musik').play();
        document.querySelector('.music-btn').setAttribute('src', './images/pause.png')
    } else {
        document.getElementById('musik').pause();
        document.querySelector('.music-btn').setAttribute('src', './images/play.png')
    }
})


function copyEvent(id)
    {
        var str = document.getElementById(id);
        window.getSelection().selectAllChildren(str);
        document.execCommand("Copy")
    }

var countDownDate = new Date("Jul 16, 2022 11:00:00").getTime();

var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    // Display the result in the element with id="demo"
    document.querySelector('.day').innerHTML = days + "d"
    document.querySelector('.hour').innerHTML = hours  + "h"
    document.querySelector('.min').innerHTML = minutes + "m"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  
    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);
