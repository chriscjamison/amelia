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
					left: "0px"
				};
		
		var bkgrndClickOffCSS = {
					left: "-260px"
				};
		
		var containerClickOnCSS = {
					position: "absolute",
					left: "245px"
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
				
		
		function fadeMenuButton(menuClassName) {
			$( "#menu-link" ).fadeTo( 75, 0, 
				function () {
					$( "#menu-link" ).attr( "class", menuClassName );
				 	$( "#menu-link" ).fadeTo( 75, 1 );
				} 
			);
		} // END OF function 'fadeMenuButton'
		
		function fadeMenu( stateValue ) {
			if (stateValue === "click_on") {
				$("body").css("overflow", "hidden");
				$("#container").animate(containerClickOnCSS, 200);
				$("#bkgrnd").animate(bkgrndClickOnCSS, 200,
					function () {
					
						$("#options").css(optionsClickOnCSS);
						$( "#options" ).fadeTo(200, 1).delay(200);	
					}
				);
			}	else {
				$( "#options" ).fadeTo(200, 0, 
					function () {
						$("#options").css(optionsClickOffCSS);
						$("#container").animate(containerClickOffCSS, 200);
						$("#bkgrnd").css("width", "1280px");
						$("#bkgrnd").animate(bkgrndClickOffCSS, 200, 
							function () {
								$("body").css("overflow", "visible");
							}
						);					
					}
				);
			}
		}  // END OF function fadeMenu
		
		function animateMenuOptions(menuOption, animationState) {
			var optionBgColor;
			var optionTextColor;
			var optionCursorState;
			
			switch (animationState) {
				case "hover":
					optionBgColor = optionHoverCSS.backgroundColor;
					optionTextColor = optionHoverCSS.color;
					optionCursorState = optionHoverCSS.cursor;
					
					$(menuOption).css("backgroundColor", optionBgColor);
					$(menuOption).css("color", optionTextColor);
					$(menuOption).css("cursor", optionCursorState);
				break;
					
				case "click":
					optionBgColor = optionClickCSS.backgroundColor;
					optionTextColor = optionClickCSS.color;
					optionCursorState = "default";
					
					$(menuOption).css("backgroundColor", optionBgColor);
					$(menuOption).css("color", optionTextColor);
					$(menuOption).css("cursor", optionCursorState);
				break;
					
				default:
					optionBgColor = optionBaseCSS.backgroundColor;
					optionTextColor = optionBaseCSS.color;
					optionCursorState = optionBaseCSS.cursor;
					
					$(menuOption).css("backgroundColor", optionBgColor);
					$(menuOption).css("color", optionTextColor);
					$(menuOption).css("cursor", optionCursorState);
				break;
					
			} 
		}
		
		$("#menu-link").on("mouseleave", 
			function () {
				if ($("#menu-link").hasClass("menu-click_1") === true) {
					fadeMenuButton("menu-click_2");
				} else {
					if (!$( "#menu-link").hasClass( "menu-click_2" )) {
						fadeMenuButton("menu-base"); 	
					}		
				}
			}
		);
			
		$("#menu-link").on("mouseenter",
			function () {
				if (!$("#menu-link").hasClass("menu-click_2")) {
					if ($("#menu-link").hasClass("menu-base")) {
						fadeMenuButton("menu-hover");
  			 	}
				}
			}
		);
		
		$("#menu-link").on("click", 
			function ()	{
				if ($("#options").css("display") === "block") {
					fadeMenu("click_off");
					
					
					fadeMenuButton("menu-base");
				} else {
					fadeMenu("click_on");
					
					fadeMenuButton("menu-click_1");
				}
			}
		);
				
		$("#menu").on("mouseleave", 
			function () {
				if ($( "#menu-bkgrnd" ).css("display") === "block") {
					fadeMenu("click_off");
					
					fadeMenuButton("menu-base");
				}
			}
		);
	
		$("#options > span").on("mouseenter", 
			function () {
				animateMenuOptions(this, "hover");
			}
		);
		
		$("#options > span").on("mouseleave", 
			function ()	{
				animateMenuOptions(this, "base");
			}
		);
		
		$("#options > span").on("click", 
			function ()	{
				animateMenuOptions(this, "click");
				
				fadeMenu("click_off");
			
				$("#menu > a").attr( "class", "menu-base" );
				
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
	}
);