// menu.js

$(document).ready(
	function()	{
		var menuBaseOverCSS = {
					opacity: 0
				};
		
		var menuBaseOutCSS = {
					opacity: 1
				};
		
		var menuBaseClickOffCSS = {
					visibility: "hidden",
					opacity: 0
				};
		
		var menuBaseClickOnCSS = {
					visibility: "visible"
				};
		
		var menuHoverOverCSS = {
					display: "block",
					"z-index": "1",
					opacity: 1					
				};
		
		var menuHoverOutCSS = {
					opacity: 0,
					"z-index": -1
				};
		
		var menuHoverClickOnCSS = {
					opacity: 1,
					"z-index": 1,
					visibility: "visible"
				};
		
		var menuHoverClickOffCSS = {
					visibility: "hidden",
					opacity: 0,
					"z-index": -1
				};
		
		var menuClickOnCSS = {
					visibility: "visible"
				};
		
		var menuClickOffCSS = {
					visibility: "hidden"
				};
		
		var optionsClickOnCSS = {
					display: "block"
				};
		
		var optionsClickOffCSS = {
					display: "none"
				};
		
		var bkgrndClickOnCSS = {
					display: "block"
				};
		
		var bkgrndClickOffCSS = {
					display: "none"
				};
		
		var baseContainerValues = {
					position: "absolute",
					left: "0"
				};
				
		var clickContainerValues = {
					position: "absolute",
					left: "260px"
				};
		
		
		
		var baseCSSvalue = {
					backgroundPosition: "0 0"
				};
				
		var hoverCSSvalue = {
					backgroundPositionX: "0px",
					backgroundPositionY: "-50px"
				};
				
		var clickCSSvalue = {
					backgroundPositionX: "0",
					backgroundPositionY: "-100px"
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
		
		var specltesHoverCSSvalues = {
					backgroundPosition: "0 -35px"
				};
			
		var specltesClickCSSvalues = {
					backgroundPosition: "0 -70px"
				};
			
		var specltesActiveCSSvalues = {
					backgroundPosition: "0 -105px"
				};
		
		var tstmnalsBaseCSSvalues = {
					backgroundPosition: "0 0"
				};
			
		var tstmnalsHoverCSSvalues = {
					backgroundPosition: "0 -35px"
				};
			
		var tstmnalsClickCSSvalues = {
					backgroundPosition: "0 -70px"
				};
		
		var tstmnalsActiveCSSvalues = {
					backgroundPosition: "0 -105px"
				};
				
		$("#links > a").on("mouseleave", 
			function () {
				if ($("#menu-link").hasClass("menu-click_1") === true) {
					$("#menu-link").removeClass("menu_hover menu-click_1").addClass("menu-click_2");
				} else {
					if ($("#options").css("display") === "block") {
						$("#menu-link").removeClass("menu-click_1 menu-hover");
					} else {
						$("#menu-link").removeClass("menu-click_1 menu-hover").addClass("menu-base");
					}
				}
			}
		);
			
		$("#links > a").on("mouseenter",
			function () {
				if (!$("#menu-link").hasClass("menu-base")) {
					$("#menu-link").removeClass("menu-hover");
				} else {
					$("#menu-link").removeClass("menu-base").addClass("menu-hover");	
				}
			}
		);		
		
		$("#menu-link").on("mouseover",
			function () {
				if ($("#menu-link").hasClass("menu-base")) {
					$("#menu-link").addClass("menu-hover").removeClass("menu-base");
				}
		});
		
		$("#menu-link").on("click", 
			function ()	{
				if ($("#options").css("display") === "block") {
					$("#menu-bkgrnd").css(bkgrndClickOffCSS);
					$("#options").css(optionsClickOffCSS);
					
					$("#menu-link").removeClass("menu-click_2 menu-click_1").addClass("menu-base");
				} else {
					$("#menu-bkgrnd").css(bkgrndClickOnCSS);
					$("#options").css(optionsClickOnCSS);
					
					$("#menu-link").removeClass("menu-hover menu-base").addClass("menu-click_1");
				}
			}
		);
		
		$("#menu-click").on("click",
			function () {
				$("#menu-click").css(menuClickOffCSS);
				$("#menu-base").css(menuBaseOutCSS);
			}
		);

		$("#menu > a").on("click", 
			function ()	{
				if ($("#options").css("display") === "none") {
					$(this).css(clickCSSvalue);					
				}	else {
					$(this).css(baseCSSvalue).delay(250);
				} 
				//window.alert("backgroundPosition = " + $(this).css("backgroundPosition"));
				//$("#menu > a").css(clickCSSvalue);
				//window.alert("1");
				
				
				if ($("#options").css("display") === "none")	{
					$("#menu-bkgrnd").css("display", "block");
					
					$("#menu").css("position", "fixed");
											
					$("#container").css(clickContainerValues);
					
					$("#options").css("display",  "block");
				} else {
					$("#menu-bkgrnd").css("display", "none");
					
					$("#menu").css("position", "absolute");
											
					$("#container").css(baseContainerValues);
					
					$("#options").css("display",  "none");
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
				
				$("#options").css("display", "none");
				$("#menu > a").css(baseCSSvalue);
				
				switch (this.id)	{
					case "home":
						location.href = "http://chriscjamison.com/amelia/sc/";
						break;
						
					case "section-1":
						location.href = "http://chriscjamison.com/amelia/sc/section_1.htm";
						break;
						
					case "section-2":
						location.href = "http://chriscjamison.com/amelia/sc/section_2.htm";
						break;
						
					case "section-3":
						location.href = "http://chriscjamison.com/amelia/sc/section_3.htm";
						break;
						
					case "section-4":
						location.href = "http://chriscjamison.com/amelia/sc/section_4.htm";
						break;
					
					case "section-5":
						location.href = "http://chriscjamison.com/amelia/sc/section_5.htm";
						break;
						
					case "section-6":
						location.href = "http://chriscjamison.com/amelia/sc/section_6.htm";
						break;
				}
			}
		);
		
		$("#menu").on("mouseleave",  
			function ()	{
				$("#options").css("display", "none");
				
				$("#menu > a").css(baseCSSvalue);
				
				$("#menu-bkgrnd").css("display", "none");	
				
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
				location.href = "http://chriscjamison.com/amelia/sc/section_1-a.htm";
			}
		);
		
		$("input#calculate-rate").on("click",
			function ()	{
				location.href = "http://chriscjamison.com/amelia/sc/section_5-a.htm";
			}
		);
		
		$("input#submit-rate").on("click",
			function ()	{
				location.href = "http://chriscjamison.com/amelia/sc/section_5-b.htm";
			}
		);
		
		$("div.nav-section span").on("mouseover",
			function() {
				if ($("div.nav-section div").css("display") == "none") {
					$("div.nav-section span").css(specltesHoverCSSvalues);
				} 
			}
		);
		
		$("div.nav-section span").on("mouseleave",
			function() {
				if ($("div.nav-section div").css("display") == "none") {
					$("div.nav-section span").css(specltesBaseCSSvalues);
				}
			}
		);
		
		
		$("div.nav-section span").on("click",
			function() {
				if ($("div.nav-section div").css("display") == "none") {
					$("div.nav-section div").css("display", "block");
					
					$("div.nav-section span").css(specltesClickCSSvalues);
					
					$("div.nav-section span").css(specltesActiveCSSvalues).delay(500);
				} else {
					$("div.nav-section div").css("display", "none");
					
					$("div.nav-section span").css(specltesBaseCSSvalues);
				}
			}
		);
		
		$("div.nav-section div a").on("click",
			function() {
				$("div.nav-section span").css(specltesBaseCSSvalues);
			}
		);
		
		$("div#tstmnals-nav > span").on("click",
			function() {
				if ($("div#tstmnals").css("display") == "none") {
					$("div#tstmnals").css("display", "block");
					
					$("div#tstmnals-nav > span").css(tstmnalsActiveCSSvalues);
				} else {
					$("div#tstmnals").css("display", "none");
					
					$("div#tstmnals-nav > span").css(tstmnalsBaseCSSvalues);
				}
			}
		);
		
		$("div#tstmnals > a").on("click",
			function() {
				$("div#tstmnals-nav > span").css(tstmnalsBaseCSSvalues);
			}
		);
	}
);