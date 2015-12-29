/*通用头部[用户中心]hover*/
$(document).ready(function(){
    
    //用户中心弹出层事件
    $('#mypop,#my_pop').hover(function(){											  
    	
    	$('#my_pop').show();	
    											  
    	}, function(){											  
    	$('#my_pop').hide(); 
    	});
    
    $('#mypop1').hover(function(){											  
    	
    	$('#my_pop1').show();	
    											  
    	}, function(){											  
    	$('#my_pop1').hide(); 
    	});
    	
    //购物车弹出层事件
    $('.nav_cart,.nav_showcat,.cart_pop').hover(function(){											  
    	
	
    	$('.cart_pop').show();	
    											  
    	}, function(){											  
    	$('.cart_pop').hide(); 
    	});
    
    //导航栏弹出层事件

$('.sobox,#logo,#main,#head,#global_body,#nav_cartbox,.index_a,.nav_b,.nav_li2').hover(function(){											  
	$('.nav_pop').hide();
	$('.nav_a').removeClass('on');	
	}, function(){
	});
	
	// 导航选中效果
$('.nav_pop').find('p').hover(function(){											  
	$(this).addClass('dd_on').siblings().removeClass('dd_on');									  
	}, function(){		
	$(this).removeClass('dd_on').siblings().removeClass('dd_on');
	});
    
    
});

/* 导航搜索框 */
function checkSearchFormAction() {
	var val=$("#so_txt").val();
    if ($.trim(val) == '') {
        return false
    } else {
        return true
    }
}
function search_kwords(str)
{
   $("#so_txt").val(str);
   $("#sfm").val('hotwords');
   $('#searchForm').submit()
}

/* 导航查看购物车 */
function setHeadFlowNum() {
    $.ajax({
        type: "POST",
        url: "/flow.php?step=ajaxcartnum",
        data: "step=ajaxcartnum",
        success: function(A) {
            var re = eval("(" + A + ")");
            $("#ECS_CARTINFO").html(re.num);
            $(".cart_pop").html(re.content);
        }
    })
}

/* 导航删除购物车中的商品 */
function dropHeadFlowNum(A) {

    $.ajax({
        type: "POST",
        url: "/flow.php?step=delete_goods",
        data: "rec_key=" + A,
        success: function(result) {
            setHeadFlowNum();
        }
    });

}

/* 收藏本站 */
function myAddBookmark(B, A) {
    if ((typeof window.sidebar == "object") && (typeof window.sidebar.addPanel == "function")) {
        window.sidebar.addPanel(B, A, "")
    } else {
        window.external.AddFavorite(A, B)
    }
}

/* ajax检测用户登录状态 */
function setHeadUserStatus() {

    $.ajax({
        type: "POST",
        url: "/user.php?act=check_login",
        data: "act=check_login",
        success: function(A) {
            var re = eval("(" + A + ")");
            if(re.error == 1){ //已登录
            	if(re.is_taobao == 1){//一淘已登录
            		$("#login_message").html(re.message);
            	}else if(re.is_qqcb == 1){//qq 彩贝登陆
					$("#login_head_show").show();
					$("#login_head_show_title").html(re.content.login_head_show);
					$("#login_message").html(re.message);
				}else{//正常用户登录
            		$("#login_message").html(re.message);
            	}	
            }else{
            	$("#login_message").html(re.message); 
            }
        }
    })
}



/* 回到页面顶部按钮显示 */
function reshow(marign_l,show_d) {
$(".scroll_div").css("left",marign_l);
if((document.documentElement.scrollTop+document.body.scrollTop)!=0)	
	{
	$(".scroll_div").css("display","block");
	} 	
	else
	{
	$(".scroll_div").css("display","none");  }
	if(show_d) window.clearTimeout(show_d) ;
	show_d=setTimeout("reshow()",500);
}