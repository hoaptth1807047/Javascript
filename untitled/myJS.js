var btnSubmit = document.forms["register-form"]["btnSubmit"];
btnSubmit.onclick = function () {
    // var txtUsername = document.getElementById("txtUsername");
    // var msgError = document.getElementById("mrg-error");
    // if (txtUsername.value.lenght < 5) {
    //     msgError.innerHTML = "* Tên của bạn quá ngắn.";
    //     mgsError.classList.remove("hidden-text");
    // } else if (txtUsername.value.lenght > 20) {
    //     msgError.innerHTML = "* Tên của bạn quá dài.";
    //     mgsError.classList.remove("hidden-text");
    // } else {
    //     msgError.innerHTML = "Tên hợp lệ.";
    //     msgError.classList.remove("hidden-text");
    //     msgError.classList.remove("danger-text");
    //     msgError.classList.add("success-text");
    // }

    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "* Vui lòng nhập tên.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length < 5) {
        msgUsername.innerHTML = "* Tên của bạn quá ngắn.";
        msgUsername.classList.remove("hidden-text");
    } else if (txtUsername.value.length > 20) {
        msgUsername.innerHTML = "* Tên của bạn quá dài.";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML = "Tên hợp lệ.";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }

    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui lòng nhập password.";
        msgPassword.classList.remove("hidden-text");
    }

    var txtFullname = document.forms["register-form"]["fullname"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname == null || txtFullname.value.length == 0) {
        msgFullname.innerHTML = "* Vui lòng nhập đầy đủ tên của bạn.";
        msgFullname.classList.remove("hidden-text");
    } else if (txtFullname.value.length < 5) {
        msgFullname.innerHTML = "* Tên đầy đủ của bạn quá ngắn.";
        msgFullname.classList.remove("hidden-text");
    } else if (txtFullname.value.length > 30) {
        msgFullname.innerHTML = "* Tên đầy đủ của bạn quá dài.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.add("danger-text");
    } else {
        msgFullname.innerHTML = "Tên hợp lệ.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }

    var txtEmail = document.forms["register-form"]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var aCong = txtEmail.value.indexOf("@");
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML = "* Vui lòng nhập email.";
        msgEmail.classList.remove("hidden-text");
    } else if (aCong < 0) {
        msgEmail.innerHTML = "* Email phải có '@'.";
        msgEmail.classList.remove("hidden-text");
    }
}

