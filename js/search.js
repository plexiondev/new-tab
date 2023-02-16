// search web


// take search
function go() {
    let request = document.getElementById('search').value;
    if (request == '') return;

    if      (request.charAt(0) == '!') window.location.href = 'https://' + request.replace('!','');
    else if (request.charAt(0) == '#') window.location.href = 'https://youtube.com/results/?search_query=' + request.replace('#','');
    else if (request.charAt(0) == '@') window.location.href = request.replace('@','');
    else                               window.location.href = 'https://www.google.com/search?q=' + request;
}

// clear search
function clear_search() {
    document.getElementById('search').value = '';
}

// detect key input
$("#search").keyup(function(event) {
    // enter
    if (event.keyCode === 13) {
        $("#go").click();
    }
    // escape
    if (event.keyCode === 27) {
        clear_search();
    }
});

// add to input
function add_to_search(value) {
    document.getElementById('search').value += value;
    document.getElementById('search').focus();
}