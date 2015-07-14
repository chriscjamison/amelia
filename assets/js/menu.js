// menu.js

$(document).ready(
	function()	{
		$("#menu > a").on("mouseleave", 
			function ()	{
				$("#menu > a").removeClass();
				
				if ($("#options").css("visibility") == "visible")	{
					$("#menu > a").addClass("menu-hover");
				} else {
					$("#menu > a").addClass("menu-base");	
				}
			}
		);
		
		$("#menu > a").on("mouseenter", 
			function ()	{
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-hover");
			}
		);

		$("#menu > a").on("click", 
			function ()	{
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-click");
				
				$("#options").css("visibility",  "visible");	
			}
		);
		
		$("#options > span").on("mouseenter", 
			function () {
				$(this).removeClass();
				$(this).addClass("option-hover");
			}
		);
		
		$("#options > span").on("mouseleave", 
			function ()	{
				$(this).removeClass();
				$(this).addClass("option-base");
			}
		);
		
		$("#options > span").on("click", 
			function ()	{
				$(this).removeClass();
				$(this).addClass("option-click");
				
				$("#options").css("visibility", "hidden");
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-base");
			}
		);
		
		$("#menu").on("mouseleave",  
			function ()	{
				$("#options").css("visibility", "hidden");
				
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-base");
			}
		);
	}
);