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
