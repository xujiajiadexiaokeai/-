$(function () {
    var btnLogin = $('#loginBtn');
    var form = $('#loginFormId');

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }
    var openid = GetQueryString('openid');
    $('body').keydown(function (e) {
        if (e.keyCode == 13) {
            dologin();
        }
    });
    btnLogin.on('click', function () {
        dologin();

    });

    var dologin = function () {
        var userNameElement = $("#inputUsername");
        var passwordElement = $("#inputPassword");
        var username = userNameElement.val();
        var password = passwordElement.val();
        $.ajax({
            url: "",
            type: "POST",
            data: {
                "username":username,
                "password":password,
            },
            
            // success: function (data) {
            //     if (data=="success") {
            //         $.ajax({
			// 			type: "post",
			// 			url: "server1.php",
			// 			dataType: "text",
			// 			data: {
			// 				username
			// 			},
			// 			success: function(data) {
			// 				window.location.href=data;
			// 			}
			// 		});
            //     } else {
            //         btnLogin.removeAttr('disabled').html('登录');
            //         alert("用户名或密码不正确");
            //     }
            // }
        });
    };
});
