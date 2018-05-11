$(document).ready(function(e) {
	
	
});
$("#phone").attr("disabled",true)
$(".zll_addPlan2").attr("disabled",true)
if(typeof(webExtensionWallet) === "undefined"){
    //alert ("Extension wallet is not installed, please install it first.")
    $("#noExtension").removeClass("hide")
}else{
    $(".zll_addPlan2").attr("disabled",false)
    $("#phone").attr("disabled",false)
}

var join = _.throttle(function () {
	var phone = $("#phone").val();
	$("#phone").blur();
	if (phone != '') {
		if (phone.length != 11) {
			openMsg("对不起，请输入正确的手机号码");
		} else {
			var myreg =/^1(3|5|7|8)\d{9}$/;
			if(!myreg.test($("#phone").val())) {
				openMsg("手机号码格式错误");
			} else {
                $.session.set('phone', phone)
                location.href='./index.html'
			}
		}

	} else {
		openMsg("对不起，请输入手机号码");
	}
}, 6000); // 6秒内重复点击无效（简单避免重复点击）

function openMsg(ms) {
	$("#msgInfo").show();
	$("#errorInfo").html(ms);
}

function colseMsg() {
	$("#msgInfo").hide();
	$("#phone").focus();
}