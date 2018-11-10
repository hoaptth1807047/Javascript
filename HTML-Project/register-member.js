var REGISTER_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members';
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null) {
    btnSubmit.onclick = function () {
        var txtFirstName = document.forms['register-form']['firstName'];
        var txtLastName = document.forms['register-form']['lastName'];
        var pwdPassword = document.forms['register-form']['password'];
        var txtAddress = document.forms['register-form']['address'];
        var txtPhone = document.forms['register-form']['phone'];
        var txtAvatar = document.forms['register-form']['avatar'];
        var selectGender = document.forms['register-form']['gender'];
        var txtEmail = document.forms['register-form']['email'];
        var dateBirthday = document.forms['register-form']['birthday'];
        var d = new Date(dateBirthday.value);
        var myDate = d.getFullYear() + '-' + (d.getMonth() + 1) + '-'
            + (d.getDate() < 10 ? '0' + d.getDate() : d.getDate());
        if (txtFirstName != null && txtLastName != null) {
            var firstName = txtFirstName.value;
            var lastName = txtLastName.value;
            var password = pwdPassword.value;
            var address = txtAddress.value;
            var phone = txtPhone.value;
            var avatar = txtAvatar.value;
            var gender = selectGender.value;
            var email = txtEmail.value;
            var birthday = dateBirthday.value;
            var jsMember = {
                firstName: firstName,
                lastName: lastName,
                password: password,
                address: address,
                phone: phone,
                avatar: avatar,
                gender: gender,
                email: email,
                birthday: birthday,
            };
            var jsonData = JSON.stringify(jsMember);
            postRegisterData(jsonData);
        }
    }
}
btnSubmit.onclick= function () {
    var txtFirstName = document.forms["register-form"]["firstName"];
    var msgFirstName = txtFirstName.nextElementSibling;
    if (txtFirstName == null || txtFirstName.value.length == 0) {
        msgFirstName.innerHTML = "* Vui lòng nhập tên.";
        msgFirstName.classList.remove("hidden-text");
    } else if (txtFirstName.value.length < 1) {
        msgFirstName.innerHTML = "* Tên của bạn quá ngắn.";
        msgFirstName.classList.remove("hidden-text");
    } else if (txtFirstName.value.length > 20) {
        msgFirstName.innerHTML = "* Tên của bạn quá dài.";
        msgFirstName.classList.remove("hidden-text");
    } else {
        msgFirstName.innerHTML = "Tên hợp lệ.";
        msgFirstName.classList.remove("hidden-text");
        msgFirstName.classList.remove("danger-text");
        msgFirstName.classList.add("success-text");
    }

    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0) {
        msgPassword.innerHTML = "* Vui lòng nhập password.";
        msgPassword.classList.remove("hidden-text");
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
function postRegisterData(jsonData) {
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var member = JSON.parse(this.responseText);
            alert(member.id + '-' + member.firstName);
        }
    };
    xmlHttpRequest.open('POST', REGISTER_API, true);
    xmlHttpRequest.setRequestHeader("Content-type", "application/json");
    xmlHttpRequest.send(jsonData);
}
