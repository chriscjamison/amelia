/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// 

// menu.js

$(document).ready(
	function()	{
		
		var containerValues = new Object;
		
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
					
					$("#menu").css("position", "fixed");
						
					containerValues = {
						"position": "absolute",
						"left": "260px"
					}
					
					$("#container").css(containerValues);
					
					$("#options").css("visibility",  "visible");
				} else {
					$("#menu-bkgrnd").css("visibility", "hidden");
					
					$("#menu").css("position", "absolute");
						
					containerValues = {
						"position": "relative",
						"left": "0"
					}
					
					$("#container").css(containerValues);
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
						
					case "section-2":
						location.href = "http://localhost/test/amelia/sc/section_2.htm";
						break;
						
					case "section-3":
						location.href = "http://localhost/test/amelia/sc/section_3.htm";
						break;
				}
			}
		);
		
		$("#menu").on("mouseleave",  
			function ()	{
				$("#options").css("visibility", "hidden");
				
				$("#menu > a").removeClass();
				$("#menu > a").addClass("menu-base");
				
				$("#menu-bkgrnd").css("visibility", "hidden");
				//$("#menu-bkgrnd").css("opacity", 0);	
				
				$("#menu").css("position", "absolute");
						
					containerValues = {
						"position": "relative",
						"left": "0"
					}
					
					$("#container").css(containerValues);
			}
		);
		
		$("input#start-quiz").on("click",
			function ()	{
				location.href = "http://localhost/test/amelia/sc/section_1-a.htm";
			}
		);
		
		$("div#section-nav > span").on("click",
			function() {
				if ($("div#specltes").css("visibility") == "hidden") {
					$("div#specltes").css("visibility", "visible");
					
					var cssValues = {
						backgroundPosition: "0 -105px"
					}
					
					$("div#section-nav > span").css(cssValues);
				} else {
					$("div#specltes").css("visibility", "hidden");
					
					var cssValues = {
						backgroundPosition: "0 0px"
					}
					
					$("div#section-nav > span").css(cssValues);
				}
			}
		);
		
		$("div#specltes > a").on("click",
			function() {
				var cssValues = {
					backgroundPosition: "0 0"
				}
				
				$("div#section-nav > span").css(cssValues);
			}
		);
		
	}
);