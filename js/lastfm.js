// last.fm


let api_key;
let use_api = false;

// api keys
function get_api_key() {
    api_key = localStorage.getItem('lastfm_api_key') || '';
    if (api_key != '') use_api = true;
}

function set_api_key(key) {
    localStorage.setItem('lastfm_api_key',key);
    api_key = key;
}


// get tracks
function get_tracks() {
    let xhr = new XMLHttpRequest();
    let url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=plexion4k&format=json&limit=10&period=7day&api_key=' + api_key;
}