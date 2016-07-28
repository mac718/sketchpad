$(document).ready(function(){
	for(var i = 0; i < 32; i++){
		for(var j = 0; j < 32; j++){
		$("#container").append("<div class='grid'></div>");
  	};
  };

 	$(".grid").hover(function(){
 		$(this).css("background-color", "green");
	 });
 	var container = $("#container");


	modeShift("#single_color");
   	$("#single_color").click(function(){	
   		var color = prompt("Enter color (red, green, blue, yellow, orange, pink, brown, black)");
		$(".grid").mouseenter(function(){
			$(this).css("background-color", color);
 		});
	});
 	

 	modeShift("#clear_random");
   	$("#clear_random").click(function(){	
		$(".grid").mouseenter(function(){
 			$(this).css("background-color", "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")");
 		});
 	});

 	
			
	modeShift("#gradient");
   	$("#gradient").click(function(){
   		var color = prompt("Enter color (red, green, blue, yellow, orange, pink, brown, black)");
   		$(".grid").css("opacity", 0);
		$(".grid").mouseenter(function(){
 			$(this).css("background-color", color);
 			var value = parseFloat($(this).css("opacity"));
    		value += 0.1;           
    		$(this).css("opacity", value);
    	});
 	});

 	modeShift("#trail");
   	$("#trail").click(function(){	
   		var color = prompt("Enter color (red, green, blue, yellow, orange, pink, brown, black)");
		$(".grid").mouseenter(function(){
			$(this).css("background-color", color);
 		});
		$(".grid").mouseleave(function(){
					$(this).fadeTo(400, 0);
		});
	});
	$("#clear").click(function(){
 		$(".grid").css("background-color", "white");
 	});

 	function modeShift(x){
 		$(x).click(function(){
			
			$(".grid").css("background-color", "white");
			var numGrid = prompt("Enter grid size (1-60)");
			$(".grid").remove();
		
			for(var i = 0; i < numGrid; i++){
				for(var j = 0; j < numGrid; j++){
					$("#container").append("<div class='grid''></div>");
				};
 			};
 			$(".grid").width(800/numGrid);
   			$(".grid").height(800/numGrid);
 		});
 	};
		

});

