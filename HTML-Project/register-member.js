var validator = $('#register-form').validate({
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
                    validator.showErrors({
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

