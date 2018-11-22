$.ajax({
    url: LIST_SONG_API,
    type: 'GET',
    contentType: "application/json; charset = utf-8",
    success: function (data, textStatus, jqXHR) {
        console.log('Success');
        console.log(data);
        console.log('-----');
        console.log(data.responseText);
        console.log('-----');
        console.log(textStatus);
        console.log('-----');
        console.log(jqXHR);
        var content = '';
        for (var i = 0; i < data.length; i++) {
            content += '<div class="song-item">';
            content += '<div class="song-index">' + (i + 1) + '</div>';
            content += '<div class="song-thumbnail">';
            content += '<img src="' + data[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">' + data[i].name + '</div>';
            content += '<div class="song-singer">' + data[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control" onclick="playSong(\'' + data[i].link + '\', \'' + data[i].name + '\', \'' + data[i].singer + '\')">Play</div>';
            content += '</div>';
            $('#list-song').html(content);
        }
    },
    error: function (jqXHR, textStatus, errorThrown) {
        console.log('error');
        console.log(jqXHR);
        console.log('-----');
        console.log(jqXHR.responseText);
        console.log('-----');
        console.log(jqXHR.responseJSON.error);
        console.log('-----');
        console.log(textStatus);
        console.log('-----');
        console.log(errorThrown);
    },
});

function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}