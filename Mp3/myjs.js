
function myPlaylist() {
    var playlist = document.getElementById('demo').value;
    var MUSIC_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs"
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
            console.log(xhttp.responseText);
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var musicItem = '<div class="">';
                musicItem += '<img onclick="doSomething(\''
                    + jsObject.items[i].id.musicId + '\')" class="music-thumb" src="'
                    + jsObject.items[i].snippet.thumbnails.medium.url + '">';
                musicItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                musicItem += '</div>';
                content += musicItem;
            }
            document.getElementById("mp3").innerHTML = content;
    };
    xhttp.open("GET", MUSIC_API, true);
    xhttp.send();
}

