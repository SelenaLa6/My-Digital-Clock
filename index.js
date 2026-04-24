// all of the elements we're updating
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

// updates the clock to the actual live time
function updateClock() {

    // actual live time for hrs, mins, secs
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    // check if after noon
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    // ternary -> condition ? true : false
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // run updateClock again after 1 sec delay
    setTimeout(() => {
        updateClock();
    }, 1000);

}

updateClock();
