//LOGIN
var validator= $('#login-member').validate({
    rules: {
        email: {
            required: true,
            email: true
        },
        password: {
            required: true,
            minlength: 2,
            maxlength: 15
        },

    },
    messages: {
        email: {
            required: 'Vui lòng email của bạn.',
            email: 'Vui lòng nhập email đúng định dạng'
        },
        password: {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderLoginObject = {
            password: $(form["password"]).val(),
            email: $(form["email"]).val(),
        };
        $.ajax(
            {
                url: LOGIN_API,
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                data: JSON.stringify(senderLoginObject),
                success: function (data, textStatus, jqXHR) {
                    console.log('success');
                    console.log(data);
                    console.log('-----');
                    console.log(data.responseText);
                    console.log('-----');
                    console.log(textStatus);
                    console.log('-----');
                    console.log(jqXHR);

                    localStorage.setItem('token-key', data.token);
                    alert(`Đăng nhập thành công. Token là ${data.token}`);
                    window.location.href = "index.html";
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if (Object.keys(jqXHR.responseJSON.error).length > 0) {
                        $('#summary')
                            .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                        validator.showErrors(jqXHR.responseJSON.error);
                    }
                }
            }
        );
        return false;
    }
});

//REGISTER
var validator1 = $('#register-member').validate({
    rules:{
        firstName:{
            required: true,
            minlength: 2,
            maxlength: 10
        },
        lastName:{
            required: true,
            minlength: 2,
            maxlength: 10
        },
        email:{
            required: true,
            email: true
        },
        password:{
            required: true,
            minlength: 2,
            maxlength: 10
        },
        'confirm-password': {
            equalTo: '[name="password"]'
        }
    },
    messages:{
        firstName:{
            required: 'Vui lòng nhập tên của bạn',
            minlength: 'Tên của bạn quá ngắn. Vui lòng nhập ít nhất {0} kí tự.',
            maxlength: 'Tên của bạn quá dài. Vui lòng nhập nhiều nhất {0} kí tự.'
        },
        lastName:{
            required: 'Vui lòng nhập họ của bạn',
            minlength: 'Họ của bạn quá ngắn. Vui lòng nhập ít nhất {0} kí tự.',
            maxlength: 'Họ của bạn quá dài. Vui lòng nhập nhiều nhất {0} kí tự.'
        },
        email:{
            required: 'Vui lòng nhập email của bạn.',
            email: 'Vui lòng nhập email đúng dịnh dạng.'
        },
        password: {
            required: 'Vui lòng nhập password.',
            minlength: 'Password quá ngắn, vui lòng nhập ít nhất {0} ký tự',
            maxlength: 'Password quá dài, vui lòng nhập nhiều nhất {0} ký tự',
        },
        'confirm-password': {
            equalTo: 'Password và confirm không giống nhau.'
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            firstName: $(form["firstName"]).val(),
            lastName: $(form["lastName"]).val(),
            email: $(form["email"]).val(),
            password: $(form["password"]).val(),
            address: $(form["address"]).val(),
            phone: $(form["phone"]).val(),
            gender: $(form["gender"]).val(),
            avatar: $(form["avatar"]).val(),
            birthday: $(form["birthday"]).val(),
        };
        $.ajax({
            url: REGISTER_API,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(senderObject),
            success: function (data, textStatus, jqXHR) {
                console.log('success');
                console.log(data);
                console.log('----');
                console.log(data.responseText);
                console.log('----');
                console.log(textStatus);
                console.log('----');
                console.log(jqXHR);
                alert('Success')
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
                if(jqXHR.responseJSON.error.size > 0){
                    validator.showErrors({
                        firstName: 'Message loi' + jqXHR.responseJSON.error.size
                    });
                }else{
                    validator1.showErrors({
                        email: 'Message loi'
                    });
                }

            }
        });
    }
});

function formDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length <2) month = '0' + month;
    if (day.length <2) day = '0' + day;
    return [year, month, day].join('-');
}



//CREATE
var validator = $('#create-form').validate({
    rules:{
        name:{
            required: true,
        },
        singer:{
            required: true,
        },
        author:{
            required: true,
        },
        thumbnail:{
            required: true,
        },
        link:{
            required: true,
        }

    },
    messages:{
        name:{
            required: 'Vui lòng nhập tên bài hát.',
        },
        singer:{
            required: 'Vui lòng nhập tên ca sĩ.',
        },
        author:{
            required: 'Vui lòng nhập tên tác giả.',
        },
        thumbnail:{
            required: 'Vui lòng chèn ảnh.',
        },
        link:{
            required: 'Vui lòng nhập link bài hát.',
        }
    },
    submitHandler: function (form, event) {
        event.preventDefault();
        var senderObject = {
            name: $(form["name"]).val(),
            singer: $(form["singer"]).val(),
            author: $(form["author"]).val(),
            thumbnail: $(form["thumbnail"]).val(),
            link: $(form["link"]).val(),
        };
        $.ajax({
                url: CREATE_SONG_API,
                type: 'POST',
                contentType: "application/json; charset=utf-8",
                Authorization: "Basic " + localStorage.getItem('token-key'),
                beforeSend: function (xhr) {
                    / Authorization header /
                    xhr.setRequestHeader("Authorization", "Basic " +localStorage.getItem('token-key'));
                },

                data: JSON.stringify(senderObject),
                success: function (data, textStatus, jqXHR) {
                    console.log('success');
                    console.log(data);
                    console.log('----');
                    console.log(data.responseText);
                    console.log('----');
                    console.log(textStatus);
                    console.log('----');
                    console.log(jqXHR);
                    alert(`Lưu thành công bài hát ${data.name}`);

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    if(Object.keys(jqXHR.responseJSON.error).length > 0)
                    {
                        $('#summary')
                            .text(`Please fix ${Object.keys(jqXHR.responseJSON.error).length} below!`);
                        validator.showErrors(jqXHR.responseJSON.error);
                    }
                }
            }
        );
        return false;
    }
});

//LASTEST SONG
var xmlHttpRequest = new XMLHttpRequest();
xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var listSong = JSON.parse(this.responseText);
        var content = '';
        for (var i = 0; i < listSong.length; i++) {
            content += '<div class="song-item">';
            content += '<div class="song-index">' + (i + 1) + '</div>';
            content += '<div class="song-thumbnail">';
            content += '<img src="' + listSong[i].thumbnail + '" alt="">';
            content += '</div>';
            content += '<div class="song-infor">';
            content += '<div class="song-name">' + listSong[i].name + '</div>';
            content += '<div class="song-singer">' + listSong[i].singer + '</div>';
            content += '</div>';
            content += '<div class="song-control" onclick="playSong(\'' + listSong[i].link + '\', \'' + listSong[i].name + '\', \'' + listSong[i].singer + '\')">Play</div>';
            content += '</div>';
        }
        document.getElementById('list-song').innerHTML = content;
    }
};
xmlHttpRequest.open('GET', LIST_SONG_API, true);
xmlHttpRequest.send();

function playSong(link, name, singer) {
    document.getElementById('my-mp3').src = link;
    document.getElementById('current-play-title').innerHTML = 'Current playing: ' + name + " - " + singer;
}
//SLIDE SHOW
