var myModal = document.getElementById('myModal');
var youtubeFrame = document.getElementById('youtubeFrame');
var span = document.getElementsByClassName("close")[0];
searchTubes();
document.getElementById("btnSearch").onclick = function () {
    var keyword = document.getElementById('key-word').value;
    searchTubes(keyword);
};
document.getElementById('key-word').onkeypress = function (e) {
    var keyword = document.getElementById('key-word').value;
    if (e.which === 13 || e.keyCode === 13) {
        searchTubes(keyword);
    }
};
function doSomething(videoId) {
    youtubeFrame.src = 'https://www.youtube.com/embed/' + videoId;
    myModal.style.display = 'block';
}
span.onclick = function () {
    myModal.style.display = 'none';
    youtubeFrame.src = '';
};
function searchTubes() {
    var keyword = document.getElementById('key-word').value;
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyword + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(xhttp.responseText);
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<img onclick="doSomething(\''
                    + jsObject.items[i].id.videoId + '\')" class="video-thumb" src="'
                    + jsObject.items[i].snippet.thumbnails.medium.url + '">';
                videoItem += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
                videoItem += '</div>';
                content += videoItem;
            }
            document.getElementById("demo").innerHTML = content;
        }
    };
    xhttp.open("GET", YOUTUBE_API, true);
    xhttp.send();
}
