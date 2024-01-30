const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are ZERO index based;
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// const futureDate = new Date(tempYear, tempMonth, tempDay, tempDate.getHours(), tempDate.getMinutes(), tempDate.getSeconds() + 3);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;
// calculate d-day
const futureTime = futureDate.getTime();
const oneDay = 24 * 60 * 60 * 1000;
const oneHour = 60 * 60 * 1000;
const oneMinute = 60 * 1000;
function getRemainingTime() {
    const today = new Date().getTime();
    const time = futureTime - today;
    if (time < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
        return;
    }
    const days = Math.floor(time / oneDay);
    const hours = Math.floor((time % oneDay) / oneHour);
    const minute = Math.floor((time % oneHour) / oneMinute);
    const second = Math.floor((time % oneMinute) / 1000);
    const values = [days, hours, minute, second];
    items.forEach((item, idx) => {
        item.innerHTML = format(values[idx]);
    });
}
function format(item) {
    return item < 10 ? `0${item}` : `${item}`;
}
// countdown;
const countdown = setInterval(getRemainingTime, 1000);
//set initial values
getRemainingTime();
export {};
