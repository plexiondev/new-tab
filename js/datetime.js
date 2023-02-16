// date & time


let time_of_day = 'morning';

function update_date_time() {
    let date_now = new Date();
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('time').innerHTML = date_now.toLocaleTimeString();
    document.getElementById('date').textContent = `${months[date_now.getMonth()]} ${pad_num(date_now.getDate())} ${date_now.getFullYear()}`;

    // time of day
    let date_hours = date_now.getHours();
    if      (date_hours < 6)  time_of_day = 'night';
    else if (date_hours < 12) time_of_day = 'morning';
    else if (date_hours < 18) time_of_day = 'afternoon';
    else                      time_of_day = 'evening';

    document.body.setAttribute('time-of-day',time_of_day);
    document.getElementById('time-of-day').textContent = time_of_day;
}

// pad number
function pad_num(text) {
    if (parseInt(text) < 10)
        return `0${text}`;
    else
        return text;
}

// interval
window.setInterval(update_date_time, 50);