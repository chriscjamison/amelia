/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// 

// menu.js

$(document).ready(
	function()	{
		var containerValues = {
					"position": "absolute",
					"left": "260px"
				};
		
		var baseCSSvalue = {
					backgroundPosition: "0 0"
				};
				
		var hoverCSSvalue = {
					backgroundPosition: "0 -50px"
				};
				
		var clickCSSvalue = {
					backgroundPosition: "0 -100px"
				};
				
		var afterClickCSSvalue = {
					backgroundPosition: "0 -150px"
				};
		
		var optionBaseCSSvalues = {
					backgroundColor: "#000",
					color: "#fff",
					cursor: "pointer"
				};
				
		var optionHoverCSSvalues = {
					backgroundColor: "#808080",
					color: "#fff",
					cursor: "pointer"
				};
		
		var optionClickCSSvalues = {
					backgroundColor: "#A6A6A6",
					color: "#000"
				};
						
		var specltesBaseCSSvalues = {
				backgroundPosition: "0 0"
			};
			
		var specltesActiveCSSvalues = {
				backgroundPosition: "0 -105px"
			};
				
		$("#menu > a").on("mouseleave", 
			function ()	{
				if ($("#options").css("visibility") == "hidden")	{
					$("#menu > a").css(baseCSSvalue);
				} else {
					$(this).css(afterClickCSSvalue);
				}
			}
		);
		
		$("#menu > a").on("mouseenter", 
			function ()	{
				if ($(this).css("backgroundPosition") !== "0px -150px") {
					$("#menu > a").css(hoverCSSvalue);	
				}
			}
		);

		$("#menu > a").on("click", 
			function ()	{
				if ($("#options").css("visibility") === "hidden") {
					$(this).css(clickCSSvalue);					
				}	else {
					$(this).css(baseCSSvalue).delay(250);
				} 
				//window.alert("backgroundPosition = " + $(this).css("backgroundPosition"));
				//$("#menu > a").css(clickCSSvalue);
				//window.alert("1");
				
				
				if ($("#options").css("visibility") == "hidden")	{
					$("#menu-bkgrnd").css("visibility", "visible");
					
					$("#menu").css("position", "fixed");
											
					$("#container").css(containerValues);
					
					$("#options").css("visibility",  "visible");
				} else {
					$("#menu-bkgrnd").css("visibility", "hidden");
					
					$("#menu").css("position", "absolute");
											
					$("#container").css(containerValues);
					$("#options").css("visibility",  "hidden");
				}	
			}
		);
		
		$("#options > span").on("mouseenter", 
			function () {
				$(this).css(optionHoverCSSvalues);
			}
		);
		
		$("#options > span").on("mouseleave", 
			function ()	{
				$(this).css(optionBaseCSSvalues);
			}
		);
		
		$("#options > span").on("click", 
			function ()	{
				$(this).css(optionClickCSSvalues);
				
				$("#options").css("visibility", "hidden");
				$("#menu > a").css(baseCSSvalue);
				
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
						
					case "section-4":
						location.href = "http://localhost/test/amelia/sc/section_4.htm";
						break;
				}
			}
		);
		
		$("#menu").on("mouseleave",  
			function ()	{
				$("#options").css("visibility", "hidden");
				
				$("#menu > a").css(baseCSSvalue);
				
				$("#menu-bkgrnd").css("visibility", "hidden");	
				
				$("#menu").css("position", "absolute");
						
				containerValues = {
					position: "relative",
					left: "0px"
				};
					
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
					
					$("div#section-nav > span").css(specltesActiveCSSvalues);
				} else {
					$("div#specltes").css("visibility", "hidden");
					
					$("div#section-nav > span").css(specltesBaseCSSvalues);
				}
			}
		);
		
		$("div#specltes > a").on("click",
			function() {
				$("div#section-nav > span").css(specltesBaseCSSvalues);
			}
		);
		
	}
);