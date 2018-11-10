var CREATE_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/songs';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtName = document.forms['register-form']['name'];
        var msgName = txtName.nextElementSibling;
        if (txtName == null || txtName.value.length == 0) {
            msgName.innerHTML = "* Vui lòng nhập tên bài hát.";
            msgName.classList.remove("hidden-text");
        }else {
            msgName.innerHTML = "* Tên bài hát hợp lệ.";
            msgName.classList.remove("hidden-text");
            msgName.classList.remove("danger-text");
            msgName.classList.add("success-text");
        }
        var txtSinger = document.forms['register-form']['singer'];
        var msgSinger = txtSinger.nextElementSibling;
        if (txtSinger == null || txtSinger.value.length == 0) {
            msgSinger.innerHTML = "* Vui lòng nhập tên ca sĩ.";
            msgSinger.classList.remove("hidden-text");
        }else {
            msgSinger.innerHTML = "* Tên ca sĩ hợp lệ.";
            msgSinger.classList.remove("hidden-text");
            msgSinger.classList.remove("danger-text");
            msgSinger.classList.add("success-text");
        }
        var txtDescription = document.forms['register-form']['description'];
        var txtAuthor = document.forms['register-form']['author'];
        var msgAuthor = txtAuthor.nextElementSibling;
        if (txtAuthor == null || txtAuthor.value.length == 0) {
            msgAuthor.innerHTML = "* Vui lòng nhập tên tác giả.";
            msgAuthor.classList.remove("hidden-text");
        }else {
            msgAuthor.innerHTML = "* Tên tác giả hợp lệ.";
            msgAuthor.classList.remove("hidden-text");
            msgAuthor.classList.remove("danger-text");
            msgAuthor.classList.add("success-text");
        }
        var txtThumbnail = document.forms['register-form']['thumbnail'];
        var msgThumbnail = txtThumbnail.nextElementSibling;
        if (txtThumbnail == null || txtThumbnail.value.length == 0) {
            msgThumbnail.innerHTML = "* Vui lòng nhập ảnh bài hát.";
            msgThumbnail.classList.remove("hidden-text");
        }else {
            msgThumbnail.innerHTML = "* Ảnh hợp lệ.";
            msgThumbnail.classList.remove("hidden-text");
            msgThumbnail.classList.remove("danger-text");
            msgThumbnail.classList.add("success-text");
        }
        var txtLink = document.forms['register-form']['link'];
        var msgLink = txtLink.nextElementSibling;
        if (txtLink == null || txtLink.value.length == 0) {
            msgLink.innerHTML = "* Vui lòng nhập link bài hát.";
            msgLink.classList.remove("hidden-text");
        }else {
            msgLink.innerHTML = "* Link hợp lệ.";
            msgLink.classList.remove("hidden-text");
            msgLink.classList.remove("danger-text");
            msgLink.classList.add("success-text");
        }
        if (txtName != null) {
            var name = txtName.value;
            var singer = txtSinger.value;
            var description = txtDescription.value;
            var author = txtAuthor.value;
            var thumbnail = txtThumbnail.value;
            var link = txtLink.value;
            var jsMember = {
                name: name,
                singer: singer,
                description: description,
                author: author,
                thumbnail: thumbnail,
                link: link,
            }
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}

function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert(members.name + ' has been added to your list');
            localStorage.getItem('token-key');
        }
    }
    xmlhttp.open('POST', CREATE_API, true);
    xmlhttp.setRequestHeader('Content-type','application/json');
    xmlhttp.setRequestHeader('Authorization', 'Basic ' +  localStorage.getItem('token-key'));
    xmlhttp.send(jsonData);
}
