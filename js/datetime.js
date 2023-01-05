// date & time


function update_date_time() {
    let date_now = new Date(Date.now());
    let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    document.getElementById('time').innerHTML = date_now.toLocaleTimeString();
    document.getElementById('date').textContent = `${months[date_now.getMonth()]} ${pad_num(date_now.getDate())} ${date_now.getFullYear()}`;
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