// var LOGIN_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication';
// var btnLogin = document.forms['register-form']['btn-login'];
// if (btnLogin != null) {
//     btnLogin.onclick = function () {
//         var pwdPassword = document.forms['register-form']['password'];
//         var txtEmail = document.forms['register-form']['email'];
//         var jsLog = {
//             password: pwdPassword.value,
//             email: txtEmail.value,
//         }
//         var jsonDataLogin = JSON.stringify(jsLog);
//         postLoginData(jsonDataLogin);
//     }
// }
//
// function postLoginData(jsonDataLogin) {
//     var xmlHttpRequest = new XMLHttpRequest();
//     xmlHttpRequest.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 201) {
//             var member = JSON.parse(this.responseText);
//             alert(member.token);
//             // console.log(member.token);
//         }
//     }
//     xmlHttpRequest.open('POST', LOGIN_API, true);
//     xmlHttpRequest.setRequestHeader("Content-type", "application/json");
//     xmlHttpRequest.send(jsonDataLogin);
// }

var LOGIN_API = 'https://2-dot-backup-server-003.appspot.com/_api/v2/members/authentication';
var btnLogin = document.forms['register-form']['btn-login'];
if (btnLogin != null) {
    btnLogin.onclick = function () {
        var txtemail = document.forms['register-form']['email'];
        var msgEmail = txtemail.nextElementSibling;
        var aCong=txtemail.value.indexOf("@");
        if (txtemail == null || txtemail.value.length == 0) {
            msgEmail.innerHTML = "* Vui long nhap email.";
            msgEmail.classList.remove("hidden-text");
        }
        else if (aCong<1) {
            msgEmail.innerHTML = "* Email phai co @.";
            msgEmail.classList.remove("hidden-text");
        }else {
            msgEmail.innerHTML = "* Email hop le.";
            msgEmail.classList.remove("hidden-text");
            msgEmail.classList.remove("danger-text");
            msgEmail.classList.add("success-text");
        }

        var txtPassword = document.forms['register-form']['password'];
        var msgPassword = txtPassword.nextElementSibling;
        if (txtPassword == null || txtPassword.value.length == 0) {
            msgPassword.innerHTML = "* Vui long nhap password.";
            msgPassword.classList.remove("hidden-text");
        }else {
            msgPassword.innerHTML = "*Password hop le.";
            msgPassword.classList.remove("hidden-text");
            msgPassword.classList.remove("danger-text");
            msgPassword.classList.add("success-text");
        }
        var password = txtPassword.value;
        var email = txtemail.value;
        var jsMember = {
            email: email,
            password: password,
        }
        var jsonData = JSON.stringify(jsMember);
        postRegisterData(jsonData);
    }
}

function postRegisterData(jsonData) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            var members = JSON.parse(this.responseText);
            alert('Đăng nhập thành công !');
            localStorage.setItem('token-key',members.token);
        }
    }
    xmlhttp.open('POST', LOGIN_API , true);
    xmlhttp.setRequestHeader("content-type", "application/json");
    xmlhttp.send(jsonData);
}
