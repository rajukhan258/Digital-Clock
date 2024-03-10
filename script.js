function addLeadingZero(value) {
    if (value < 10) {
        return `0${value}`;
    } else {
        return `${value}`;
    }
}

function updateTime() {
    const today = new Date();
    const date = today.toDateString();
    let hour = today.getHours();
        let Period = 'AM';
    if (hour >= 12) {
        Period = 'PM';
    }

    hour = hour % 12 || 12;
    const FormatHr = addLeadingZero(hour);


    const minute = addLeadingZero(today.getMinutes());
    const second = addLeadingZero(today.getSeconds());

    document.getElementById("clock").innerHTML = `${date}<br>${FormatHr} : ${minute} : ${second} ${Period}`;
}

updateTime();
setInterval(updateTime, 1000);