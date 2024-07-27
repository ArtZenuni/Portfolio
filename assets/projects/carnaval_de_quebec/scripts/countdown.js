const days = document.getElementById("days");
const hours = document.getElementById("hours")
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const countDownDate = new Date("Jan 29, 2025 12:00:00").getTime();

function updateCountdown(){
    const curentDate = new Date().getTime();  

    const diff = countDownDate - curentDate;
    
    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60 ) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d < 10? "0" + d : d;
    hours.innerHTML = h < 10? "0" + h : h;
    minutes.innerHTML = m < 10? "0" + m : m;
    seconds.innerHTML = s < 10? "0" + s : s;
    // hours.innerHTML = h < 10? "0" + h : h;
    
}
setInterval(updateCountdown, 1000)