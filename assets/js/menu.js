/// 

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
				//window.alert("1");
				
				
				if ($("#options").css("visibility") == "hidden")	{
					$("#menu-bkgrnd").css("visibility", "visible");
					
					$("#options").css("visibility",  "visible");
				} else {
					$("#menu-bkgrnd").css("visibility", "hidden");
					
					$("#options").css("visibility",  "hidden");
				}	
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
				
				switch (this.id)	{
					case "home":
						location.href = "http://localhost/test/amelia/sc/";
						break;
						
					case "section-1":
						location.href = "http://localhost/test/amelia/sc/section_1.htm";
						break;
				}
			}
		);
		
		$("#menu").on("mouseleave",  
			function ()	{
				$("#options").css("visibility", "hidden");
				
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-base");
				
				//$("#menu-bkgrnd").css("opacity", 0);	
			}
		);
	}
);