// JavaScript Document
var selectZhi = function(){
	/*$(".zhifu_con .line_block label:eq(0),.zhifu_con .line_block label:eq(1)").click(function(){
		var num = $(this).index();	
		alert(num);
		if($(this).find("input").eq(0).attr("checked")){
			return false;
		}
		$(".zhifu_con .line_block").each(function(index, element) {
            if(num == index){
				$(this).find("input").eq(0).attr("checked","true");
				$(this).addClass("ul_on");
				$(this).find("ul").css("display","block");
			}else{
				$(this).find("input").eq(0).removeAttr("checked");
				$(this).removeClass("ul_on");
				$(this).find("ul").css("display","none");
			}
        });
	});*/
	
	for(var i = 0 ; i < $(".zhifu_con .zhifu_raio").length ; i++){
		(function(i){
			$(".zhifu_con .zhifu_raio").eq(i).click(function(){
				$(".zhifu_con .line_block").each(function(index, element) {
					if(i == index){
						$(this).find("input").eq(0).attr("checked","true");
						$(this).addClass("ul_on");
						$(this).find("ul").css("display","block");
					}else{
						$(this).find("input").eq(0).removeAttr("checked");
						$(this).removeClass("ul_on");
						$(this).find("ul").css("display","none");
					}
				});
			});
		})(i);
	}
	
	$(".zhifu_con li").click(function(){
		var num = $(this).index();
		$(".zhifu_con li").removeClass("selected");
		$(this).find("input").eq(0).removeAttr("checked");
		
		$(this).parent().find("li").each(function(index, element) {
			
            if(num == index){
				$(this).addClass("selected");
				$(this).find("input").eq(0).attr("checked","true");
			}else{
				$(this).removeClass("selected");
			}
        });
	});
}
function yzForm(){
	alert('eee');
	return false;
}