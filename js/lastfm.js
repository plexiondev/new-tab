// last.fm


let api_key;
let use_api = false;
console.log('lastfm');

// api keys
function get_api_key() {
    api_key = localStorage.getItem('lastfm_api_key') || '';
    if (api_key != '') use_api = true;

    console.log('using api?',use_api);
}

function set_api_key(key) {
    localStorage.setItem('lastfm_api_key',key);
    api_key = key;
}


// get tracks
function get_tracks() {
    let api_expire = localStorage.getItem('lastfm_api_expire') || '';
    if (new Date() > new Date(api_expire) || api_expire == '')
        get_tracks_new();
    else
        get_tracks_cache();
}

function get_tracks_new() {
    let xhr = new XMLHttpRequest();
    let url = 'https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=plexion4k&format=json&limit=1&api_key=' + api_key;
    xhr.open('GET',url,true);

    xhr.onload = function() {
        load_tracks(JSON.parse(this.response));

        let api_expire = new Date();
        api_expire.getSeconds(api_expire.getSeconds() + 10);
        localStorage.setItem('lastfm_api_expire',api_expire);
        localStorage.setItem('lastfm_api_data',this.response);
    }

    xhr.send();
}

function get_tracks_cache() {
    let api_data = localStorage.getItem('lastfm_api_cache') || '';
    if (api_data != '')
        load_tracks(JSON.parse(api_data));
    else
        get_tracks_new();
}

function load_tracks(data) {
    let tracks = data.recenttracks.track;
    console.log('loaded tracks!');

    // now playing
    try {
        if (tracks[0]['@attr'].nowplaying == 'true') document.getElementById('music').setAttribute('nowplaying','true');
    }
    catch(e) {
        document.getElementById('music').setAttribute('nowplaying','false');
    }

    // info
    document.getElementById('music').setAttribute('track',tracks[0].name);
    document.getElementById('music').setAttribute('artist',tracks[0].artist['#text']);
    document.getElementById('music').setAttribute('album',tracks[0].album['#text']);

    // track
    document.getElementById('track').textContent = tracks[0].name;
    document.getElementById('track').setAttribute('value',tracks[0].name);

    // artist
    document.getElementById('artist').textContent = tracks[0].artist['#text'];
    document.getElementById('artist').setAttribute('value',tracks[0].artist['#text']);
}


// loop
setTimeout(function() {
    //console.log('loaded');
    get_api_key();

    if (use_api) {
        get_tracks();
        setInterval(get_tracks,3000);
    }
},100);