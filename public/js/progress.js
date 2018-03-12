//获取标签
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
}
var index = GetQueryString('index');
var username = GetQueryString('username');
var c = GetQueryString('c');
if(c == "0") {
	// 计时器
	var n = 0;
	var inter = setInterval(
		function() {
			$("#progress-bar").css("width", n + "%");
			n = n + 1;
			if(n == 101) {
				clearInterval(inter);
				$("#progress").css("display", "none");
				$("#NextBtn").css("display", "block");
				$('#label').css("display", "block");
				if(index == "14"){
					$("#NextBtn").css("display", "none");
					updateProgress();
					alert("您已完成新生教育!现在可以自由浏览。");
					window.location.href="http://news.library.citasgoo.top/xsjy/index1.html?c=1";
				}else{
					updateProgress();
				}
				
			}
		}, 600    //修改进度条快慢，此处设计为每 100 毫秒，进度条加 1% ，可以把100 换成更大的数来使进度条慢一点。
	);
	$('#hamburger').css("display", "none");
	
} else {
	$("#progress").css("display", "none");
	$("#NextBtn").css("display", "none");
	$('#label').css("display", "block");
	
}

//更新阅读进度
var updateProgress = function() {
	if(index == 14) {
		index = -1;
	}
	$.ajax({
		type: "post",
		url: "updateProgress.php",
		dataType: "text",
		data: {
			index,
			username
		},
		success: function(data) {
		}

	});
}