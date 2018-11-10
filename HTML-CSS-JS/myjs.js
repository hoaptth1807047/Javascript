var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick= function () {
    var txtFullName = document.forms["register-form"]["fullName"];
    var msgFullName = txtFullName.nextElementSibling;
    if (txtFullName == null || txtFullName.value.length == 0) {
        msgFullName.innerHTML = "* Vui lòng nhập tên.";
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length < 5) {
        msgFullName.innerHTML = "* Tên của bạn quá ngắn.";
        msgFullName.classList.remove("hidden-text");
    } else if (txtFullName.value.length > 50) {
        msgFullName.innerHTML = "* Tên của bạn quá dài.";
        msgFullName.classList.remove("hidden-text");
    } else {
        msgFullName.innerHTML = "Tên hợp lệ.";
        msgFullName.classList.remove("hidden-text");
        msgFullName.classList.remove("danger-text");
        msgFullName.classList.add("success-text");
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

    var txtPhone = document.forms["register-form"]["phone"];
    var msgPhone = txtPhone.nextElementSibling;
    if (txtPhone == null || txtPhone.value.length == 0) {
        msgPhone.innerHTML = "* Vui lòng nhập số điện thoại.";
        msgPhone.classList.remove("hidden-text");
    }
};