// 国双科技
(function(){
	var s = document.createElement('script');
	s.type = 'text/javascript';
	s.async = true;
	s.src = (location.protocol == 'https:' ? 'https://ssl.' : 'http://static.') + 'gridsumdissector.com/js/Clients/GWD-002729-BF17FB/gs.js';
	var firstScript = document.getElementsByTagName('script')[0];
	firstScript.parentNode.insertBefore(s, firstScript);
})();

//letv_analytics统计 start
try {includeJS('http://www.wangjiu.com/htmlResource/js/letv_analytics.js')}catch(e){};

//letv_analytics统计 end-->
// 亿玛DSP Start
var _adwq = _adwq || [];
_adwq.push(['_setAccount', 'ts8pf']);
_adwq.push(['_setDomainName', '.wangjiu.com']);
_adwq.push(['_trackPageview']);
(function(){
  var adw = document.createElement('script');
  adw.type = 'text/javascript';
  adw.async = true;
  adw.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://d') + '.emarbox.com/js/adw.js?adwa=ts8pf';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(adw, s);
})(); 
// 亿玛DSP End
// 晶赞
var _mvq = window._mvq || []; 
window._mvq = _mvq;
_mvq.push(['$setAccount', 'm-22592-1']);
_mvq.push(['$setGeneral', '', '',getCookie("COOKIE_USER_NAME"),getCookie("COOKIE_USER_ID")]);
_mvq.push(['$logConversion']);
(function() {
	var mvl = document.createElement('script');
	mvl.type = 'text/javascript'; mvl.async = true;
	mvl.src = ('https:' == document.location.protocol ? 'https://static-ssl.mediav.com/mvl.js' : 'http://static.mediav.com/mvl.js');
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(mvl, s);
})();
// 99click 推广 注：订单成功页在页面添加
if(window.location.pathname.indexOf("cart/orderSucc.html")==-1){
	includeJS('http://www.wangjiu.com/htmlResource/js/o_code.js');
	var _ozuid=getCookie("COOKIE_USER_ID")||'匿名';
}
