$(function () {
    var btnNext = $('#button');

    function GetQueryString(name)
    {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null)return  unescape(r[2]); return null;
    }


    
    var index  = GetQueryString('index');
    var username = GetQueryString('username');
    var c      = GetQueryString('c');
    btnNext.on('click', function () {
        	doNext();
    });

    var doNext = function () {
    	var n = Number(index)+1;
    	var date = new Date();
    	var str = "http://news.library.citasgoo.top/xsjy/index" + String(n) +".html?index="+ String(n) + "&username="+ username + "&t=" + date.getTime() +"&c="+c;
        window.location.href=str;
    };
});
