document.getElementById("btnSearch").onclick = function () {
    var keyword = document.getElementById("key-word").value;
    searchTubes(keyword);
};

document.getElementById('key-word').onkeypress = function (e) {
    if (e.which === 13 || e.keyCode === 13) {
        keyword = document.getElementById('key-word').value;
        searchTubes(keyword);
    }

};
function searchTubes(keyword) {
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q= " + keyword + " &type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(xhttp.responseText);
            var jsObject = JSON.parse(xhttp.responseText);
            var content = '';
            for (var i = 0; i < jsObject.items.length; i++) {
                var videoItem = '<div class="tube-item">';
                videoItem += '<iframe width="660" height="355" ' +
                    'src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '"' +
                    'frameborder="0" allow="autoplay; encrypted-media" ' +
                    'allowfullscreen></iframe>';
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
