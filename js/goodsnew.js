// JavaScript Document
$(document).ready(function(){
//商品４个大图点击轮回
	$('.pic_index').find('li').hover(function(){
		$(this).addClass('pic_on').siblings().removeClass('pic_on');									  
/*		$('#pic_box').find('div').eq($('.pic_index').find('li').index(this)).show().siblings().hide();	
*/	}, function(){			
	});
	
/*	$(".jqzoom").jqueryzoom({xzoom:286,yzoom:286,offset:15,position:"right",preload:0,lens:1});
*/	
	//商品详情、买家评论、购买咨询、服务承诺、商品图片板块切换(需要添加具体显示隐藏的板块操作)
	$('.scrip_1').click(function(){
		//$(this).addClass('scrip_on');
		$(this).css('backgroundPosition','0 -205px')
		$('.scrip_2,.scrip_3,.scrip_4,.scrip_5').removeAttr('style');
		$('.details1,.details2,.details3,.details4,.details5,.desigBox').show();
		$('.details6').hide()
	});	
	$('.scrip_2').click(function(){
		//$(this).addClass('scrip_on');
		$(this).css('backgroundPosition','-132px -205px')
		$('.scrip_1,.scrip_3,.scrip_4,.scrip_5').removeAttr('style');	
		$('.details1,.details3,.details4,.details5,.details6,.desigBox').hide();
		$('.details2').show();
	});	
	$('.scrip_3').click(function(){
		//$(this).addClass('scrip_on');
		$(this).css('backgroundPosition','-264px -205px')
		$(this).css('backgroundPosition','-264px -205px')
		$('.scrip_1,.scrip_2,.scrip_4,.scrip_5').removeAttr('style');	
		$('.details1,.details2,.details4,.details5,.details6,.desigBox').hide();
		$('.details3').show();
	});
	$('.scrip_4').click(function(){
		//$(this).addClass('scrip_on');
		$(this).css('backgroundPosition','-396px -205px')
		$('.scrip_1,.scrip_2,.scrip_3,.scrip_5').removeAttr('style');	
		$('.details1,.details2,.details3,.details5,.details6,.desigBox').hide();
		$('.details4').show();
	});
	$('.scrip_5').click(function(){
		//$(this).addClass('scrip_on');
		$(this).css('backgroundPosition','-528px -205px')
		$('.scrip_1,.scrip_2,.scrip_3,.scrip_4').removeAttr('style');	
		$('.details1,.details2,.details3,.details4,.details5,.desigBox').hide();
		$('.details6').show();
		// 获取用户传图
		getgoodspic($('#goods_id').text(),'1',$(this).attr('total'));
	});
	
	
	
	
	//购买数量 对应库存数量
	function stockFun(){
		if(parseInt($('#buynum').val()) > parseInt($('#buynum').attr("stockNum"))){
			$('#buynum').val($('#buynum').attr("stockNum"));
		}
		//$("#StockSpan b").html(parseInt($('#buynum').attr("stockNum")) - parseInt($('#buynum').val()));
	}
	//初始化计算库存
	stockFun();
	//购买数量 文本框鼠标离开
	$('#buynum').blur(function(){
		if($(this).val() == '' || $(this).val() == '0'){
			$(this).val(1);
		}
		stockFun();
	}); 
	// 购物数量 加一件
	$('#buynum_up').click(function(){
		if($.trim($('#buynum').val()) == ''){
			$('#buynum').val(1);
		}else{
			if(parseInt($('#buynum').val()) < parseInt($('#buynum').attr("stockNum"))){
				$('#buynum').val(parseInt($('#buynum').val()) + 1);
                                
			}else{
				var t;
				$("#surplusSpan").stop().fadeIn(500,function(){
					clearTimeout(t);
					t = setTimeout(function(){
						$("#surplusSpan").stop().fadeOut();
					},5000);
				});
			}
		}
		stockFun();
		
	});
	// 购物数量 减一件
	$('#buynum_down').click(function(){
		if(parseInt($('#buynum').val()) >= 2){
			$('#buynum').val( parseInt($('#buynum').val()) - 1);
		}else if($.trim($('#buynum').val()) == ''){
			$('#buynum').val(1);
		}
		stockFun();
	});

});	