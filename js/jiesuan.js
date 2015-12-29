jQuery(function(){	
	$(".num_plus").each(function(){
		$(this).click(function () {
			var input = $(this).next('div').find('.num_card');
			input.val(parseInt(input.val())+1);
			setTotal($(this),input.val());
		});
		setTotal();
	});
	$(".num_minus").each(function(){
		$(this).click(function () {
			var input = $(this).prev('div').find('.num_card');
			if (input.val() <= 0){
				input.val(parseInt(input.val()));
			}else{
			   input.val(parseInt(input.val())-1);
			   setTotal($(this),input.val());
			}
		});
		setTotal();
    });
	
	
	function setTotal(){
	var s=0;
	$("#card_list1 li").each(function(){
		s+=parseInt($(this).find('.num_card').val())*parseFloat($(this).find('span[class*=true_price]').text());
	});

	$(".total").html(s.toFixed(0));
	}
	// function setTotal(){
	// 	debugger
	// 	var list = $("#card_list1 li");
	// 	var total=0;
	// 	for(var i=0;i<list.length;i++)
	// 	{
	// 		var num_card = parseInt($(list[i]).find('.num_card').val()),
	// 			true_price = parseFloat($(list[i]).find('.true_price').text());
	// 			total =total+num_card*true_price;
	// 	}
	// 	$(".total").html(total.toFixed(2));
	// }


	
});
function text(){
	var dan=document.getElementById('danjia');
	sum.innerHTML="0";
	}

