function circleBigger(){
	$('.exp_circ1').stop().animate({
		'height': '350px',
		'width': '350px'
		}
	});

	$('.exp_circ2').stop().animate({
		'height': '400px',
		'width': '400px'
		
	});

	$('.exp_circ3').stop().animate({
		'height': '430px',
		'width': '430px'
		
	});
	
}

function circleSmaller(){
  $('.exp_circ1').stop().animate({
    'height': '300px',
	'width': '300px'
  });

  $('.exp_circ2').stop().animate({
    'height': '350px',
	'width': '350px'
  });

  $('.exp_circ3').stop().animate({
    'height': '380px',
	'width': '380px'
  });
}
	
	
$('.exp_circ1').hover(circleBigger, circleSmaller);
$('.exp_circ2').hover(circleBigger, circleSmaller);
$('.exp_circ3').hover(circleBigger, circleSmaller);




$(".disc-ic").click(function(){
    $(".p-disc").fadeToggle(1000);
      
});



$(".disc_circ1 i").hover(function(){
    $(this).stop().animate({
        'padding-top': '20px'
    });
}); 

$(".disc_circ2 i").hover(function(){
    $(this).stop().animate({
        'padding-top': '20px'
    });
}); 

$(".disc_circ3 i").hover(function(){
    $(this).stop().animate({
        'padding-top': '20px'
    });
}); 





/*$(".disc_circ1 i").click(function(){
    $("circ1-tour").addClass("circ1-tourVis");
    
}); */

$(".exp_circ1").click(function(){
    $("p").addClass("circ-resize");
});

$(".exp_circ2").click(function(){
    $("p").addClass("circ-resize");
});


$(".exp_circ3").click(function(){
    $(".circ_wrap3 p").addClass("circ-resize");
});