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
		
		var containerClickOnCSS = {
					position: "absolute",
					left: "260px"
				};
		
		var containerClickOffCSS = {
					position: "absolute",
					left: "0px"
				};
		
		var menuPositionClickCSS = {
					position: "absolute",
					top: "0px",
					left: "0px"
				};
		
		var optionBaseCSS = {
					backgroundColor: "#000",
					color: "#fff",
					cursor: "pointer"
				};
				
		var optionHoverCSS = {
					backgroundColor: "#808080",
					color: "#fff",
					cursor: "pointer"
				};
		
		var optionClickCSS = {
					backgroundColor: "#A6A6A6",
					color: "#000"
				};
						
		var specltesBaseCSS = {
					backgroundPosition: "0 0"
				};
		
		var specltesHoverCSS = {
					backgroundPosition: "0 -35px"
				};
			
		var specltesClickCSS = {
					backgroundPosition: "0 -70px"
				};
			
		var specltesActiveCSS = {
					backgroundPosition: "0 -105px"
				};
		
		var tstmnalsBaseCSS = {
					backgroundPosition: "0 0"
				};
			
		var tstmnalsHoverCSS = {
					backgroundPosition: "0 -35px"
				};
			
		var tstmnalsClickCSS = {
					backgroundPosition: "0 -70px"
				};
		
		var tstmnalsActiveCSS = {
					backgroundPosition: "0 -105px"
				};
				
		$("#menu-link").on("mouseleave", 
			function () {
				if ($("#menu-link").hasClass("menu-click_1") === true) {
					$("#menu-link").attr( "class", "menu-click_2" );
				} else {
					$("#menu-link").attr( "class", "menu-base" );
				}
			}
		);
			
		$("#menu-link").on("mouseenter",
			function () {
				if (!$("#menu-link").hasClass("menu-click_2")) {
					if ($("#menu-link").hasClass("menu-base")) {
						$("#menu-link").attr( "class", "menu-hover");
					}
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
					$("#container").css(containerClickOffCSS);
					$("#menu-bkgrnd").css(bkgrndClickOffCSS);
					$("#options").css(optionsClickOffCSS);
					
					$("#menu-link").removeClass("menu-click_2 menu-click_1").addClass("menu-base");
				} else {
					$("#container").css(containerClickOnCSS);
					
					$("#menu-bkgrnd").css(bkgrndClickOnCSS);
					$("#options").css(optionsClickOnCSS);
					
					$("#menu-link").removeClass("menu-hover menu-base").addClass("menu-click_1");
				}
			}
		);
				
		$("#menu").on("mouseleave", 
			function () {
				$("#options").css(optionsClickOffCSS);
				
				$("#menu-link").attr( "class", "menu-base" );
				
				$("#menu-bkgrnd").css(bkgrndClickOffCSS);	
					
				$("#container").css(containerClickOffCSS);
			}
		);
	
		$("#options > span").on("mouseenter", 
			function () {
				$(this).css(optionHoverCSS);
			}
		);
		
		$("#options > span").on("mouseleave", 
			function ()	{
				$(this).css(optionBaseCSS);
			}
		);
		
		$("#options > span").on("click", 
			function ()	{
				$(this).css(optionClickCSS);
				
				$("#options").css(bkgrndClickOffCSS);
				$("#menu > a").removeClass().addClass("menu-base");
				
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
					$("div.nav-section span").css(specltesHoverCSS);
				} 
			}
		);
		
		$("div.nav-section span").on("mouseleave",
			function() {
				if ($("div.nav-section div").css("display") == "none") {
					$("div.nav-section span").css(specltesBaseCSS);
				}
			}
		);
		
		
		$("div.nav-section span").on("click",
			function() {
				if ($("div.nav-section div").css("display") == "none") {
					$("div.nav-section div").css("display", "block");
					
					$("div.nav-section span").css(specltesClickCSS);
					
					$("div.nav-section span").css(specltesActiveCSS).delay(500);
				} else {
					$("div.nav-section div").css("display", "none");
					
					$("div.nav-section span").css(specltesBaseCSS);
				}
			}
		);
		
		$("div.nav-section div a").on("click",
			function() {
				$("div.nav-section span").css(specltesBaseCSS);
			}
		);
		
		$("div#tstmnals-nav > span").on("click",
			function() {
				if ($("div#tstmnals").css("display") == "none") {
					$("div#tstmnals").css("display", "block");
					
					$("div#tstmnals-nav > span").css(tstmnalsActiveCSS);
				} else {
					$("div#tstmnals").css("display", "none");
					
					$("div#tstmnals-nav > span").css(tstmnalsBaseCSS);
				}
			}
		);
		
		$("div#tstmnals > a").on("click",
			function() {
				$("div#tstmnals-nav > span").css(tstmnalsBaseCSS);
			}
		);
	}
);