// menu.js

$(document).ready(
	function () {
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

		var cntainrClickOnCSS = {
					position: "absolute",
					left: "260px"
				};

		var cntainrClickOffCSS = {
					position: "absolute",
					left: "0px"
				};

		var menuPositionClickOnCSS = {
					position: "absolute"
				};

		var menuPositionClickOffCSS = {
					position: "absolute",
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
					color: "#000",
					cursor: "default"
				};
				
		var nextSctnTextOverCSS = {
					color: "#808080"
				};

		var nextSctnTextOutCSS = {
					color: "#fff"
				};

		var nextSctnDivOverCSS = {
					backgroundPosition: "0px -75px",
					cursor: "pointer"
				};

		var nextSctnDivOutCSS = {
					backgroundPosition: "0px 0px",
					cursor: "default"
				};

		var sctnNavBaseCSS = {
					cursor: "default",
					opacity: 1
				};

		var sctnNavHoverCSS = {
					cursor: "pointer",
					opacity: 0
				};

		var sctnNavClickCSS = {
					opacity: 0
				};

		var sctnNavActiveCSS = {
					opacity: 0
				};

		var sctnNavOptionsBaseCSS = {
					display: "none"
				};

		var sctnNavOptionsOnCSS = {
					display: "block"
				};

		var sctnNavOptionsTopOnCSS = {
					top: "55px",
					opacity: 1
				};

		var sctnNavOptionsTopOffCSS = {
					top: "0px",
					opacity: 0
				};

		function fadeMenuButton(menuClassName) {
			$("#menu-link").fadeTo(75, 0,
				function () {
					$("#menu-link").attr("class", menuClassName);
					$("#menu-link").fadeTo(75, 1);
				}
				);
		} // END OF function 'fadeMenuButton'
		
		function fadeMenu(stateValue) {
			var scrollPosition = $(window).scrollTop() + "px";
			
			if (stateValue === "click_on") {
				$("#menu").css(menuPositionClickOnCSS);
				
				$("#menu-bkgrnd").animate(bkgrndClickOnCSS, 200);
				$("#menu-bkgrnd").css("top", scrollPosition);
				$("#cntainr").animate(cntainrClickOnCSS, 200);
				$("#bkgrnd").animate(bkgrndClickOnCSS, 200,
					function () {
						$("#options").css(optionsClickOnCSS);
						$("#options").fadeTo(200, 1).delay(200);
					}
				);
			} else {
				$("#options").fadeTo(200, 0,
					function () {
						$("#options").css(optionsClickOffCSS);
						$("#menu").css(menuPositionClickOffCSS);
						$("#menu-bkgrnd").css("top", "0px");
						$("#menu-bkgrnd").animate(bkgrndClickOffCSS, 200);
						$("#cntainr").animate(cntainrClickOffCSS, 200);
						$("#bkgrnd").animate(bkgrndClickOffCSS, 200);
						
					}
				);
			}
		}  // END OF function fadeMenu
		
		function animateMenuOptions(menuOption, animationState) {
			switch (animationState) {
				case "hover":
					$(menuOption).css(optionHoverCSS);
					break;

				case "click":
					$(menuOption).css(optionClickCSS);
					break;

				default:
					$(menuOption).css(optionBaseCSS);
					break;
			}
		}

		function nextSctnBehavior(mouseState) {
			switch (mouseState) {
				case "over":
					$("#next-sctn span").css(nextSctnTextOverCSS);
					$("#next-sctn").css(nextSctnDivOverCSS);
					break;

				case "out":
					$("#next-sctn span").css(nextSctnTextOutCSS);
					$("#next-sctn").css(nextSctnDivOutCSS);
					break;

				case "click":
					var yLocation = $(window).scrollTop();
					
					if ((yLocation >= 0) && (yLocation < 800)) {
						window.scrollTo(0, 800);
					}	else {
							if ((yLocation >= 800) && (yLocation < 1600)) {
								window.scrollTo(0, 1600);
							} else {
									if ((yLocation >= 1600) && (yLocation < 2400)) {
										window.scrollTo(0, 2400);
									} else {
											if ((yLocation >= 2400) && (yLocation < 3200)) {
												window.scrollTo(0, 3200);
											}	else {
													if ((yLocation >= 3200) && (yLocation < 4000)) {
														window.scrollTo(0, 4000);
													}	else {
															if (yLocation >= 4000) {
																window.scrollTo(0, 4704);						
															} 
														}
												}
										}
								}
						}			
	
			}
		}

		function fadeSctnNav(mouseState, subNavID) {
			var menuOptionClass = mouseState + "-sctn_nav";
			
			$(subNavID).fadeTo(75, 0,
				function () {
					$(subNavID).attr("class", menuOptionClass);
					$(subNavID).fadeTo(75, 1);
				}
				);
		}

		function fadeSctnNavOptions(subNavValue) {
			if ($(subNavValue).css("display") === "none") {
				$(subNavValue).css(sctnNavOptionsTopOffCSS);

				$(subNavValue).css(sctnNavOptionsOnCSS);

				$(subNavValue).animate(sctnNavOptionsTopOnCSS, 200);
			} else {
				$(subNavValue).animate(sctnNavOptionsTopOffCSS, 200);

				$(subNavValue).css(sctnNavOptionsBaseCSS).delay(200);
			}
		}
		
		function animateWindowPanes() {
			var pageURLString = window.location.hash;
			
			if (pageURLString !== "") {
				var variableIndexNum;
				
				var sectionNum;
				var positionNum;
				
				var sectionNumString = "sctn_";
				var positionNumString = "pos=";
				
				variableIndexNum = pageURLString.indexOf(sectionNumString);
				
				sectionNum = pageURLString.charAt(variableIndexNum + sectionNumString.length);
				
				var bkgrndValueString = "#bkgrnd-" + sectionNum;
				var windowPaneValueString = "#wndow-sctn_" + sectionNum;
				var headerValueString = "div.headr.sctn_" + sectionNum;
				
				variableIndexNum = pageURLString.indexOf(positionNumString);
				
				positionNum = pageURLString.charAt(variableIndexNum + positionNumString.length);
				
				var bkgrndValueNum = positionNum * -1280;
				var windowPaneValueNum = positionNum * -1280;
				var headerValueNum = positionNum * 1280;
				
				var bkgrndValueNumString = bkgrndValueNum + "px";
				var windowPaneValueNumString = windowPaneValueNum + "px";
				var headerValueNumString = headerValueNum + "px";
					
				$(bkgrndValueString).css("left", bkgrndValueNumString);
				$(windowPaneValueString).css("left", windowPaneValueNumString);
				$(headerValueString).css("left", headerValueNumString);
				
				var subNavValueString = "#menu-sctn_" + sectionNum;
				
				var windowScrollNum = sectionNum * 800;
				
				$(window).scrollTop(windowScrollNum);
				
				if ($(subNavValueString)) {
					var subNavValueNum = positionNum * 1280;
					var subNavValueNumString = subNavValueNum + "px";
							
					$(subNavValueString).css("left", subNavValueNumString);
				}
			}
		}
		

		$("#next-sctn").on("mouseenter",
			function () {
				nextSctnBehavior("over");
			}
			);

		$("#next-sctn").on("mouseleave",
			function () {
				nextSctnBehavior("out");
			}
			);

		$("#next-sctn").on("click",
			function () {
				nextSctnBehavior("click");
			}
			);

		$("#menu-link").on("mouseleave",
			function () {
				if ($("#menu-link").hasClass("menu-click_1") === true) {
					fadeMenuButton("menu-click_2");
				} else {
					if (!$("#menu-link").hasClass("menu-click_2")) {
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
			function () {
				if ($("#options").css("display") === "block") {
					fadeMenu("click_off");

					fadeMenuButton("menu-base");
				} else {
						fadeMenu("click_on");
	
						fadeMenuButton("menu-click_1");}
				}
		);
		
		$("#menu").on("mouseleave",
			function () {
				fadeMenu("click_off");

				fadeMenuButton("menu-base");
			}
		);

		$("#options > span").on("mouseenter",
			function () {
				animateMenuOptions(this, "hover");
			}
			);

		$("#options > span").on("mouseleave",
			function () {
				animateMenuOptions(this, "base");
			}
			);

		$(".sctn_nav > div > span").on("mouseenter",
			function () {
				var currentSctnNavID = $(this).parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
							
				if ($(currentSctnNavElement).css("display") === "none") {
					fadeSctnNav("hover", currentSctnNavIDString);
				}	
			} 
			);

		$(".sctn_nav > div > span").on("mouseleave",
			function () {
				var currentSctnNavID = $(this).parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
					
				if ($(currentSctnNavElement).css("display") === "none") {
					fadeSctnNav("base", currentSctnNavIDString);
				}
			}
			);


		$(".sctn_nav > div > span").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				
				if ($(currentSctnNavElement).css("display") === "none") {
					fadeSctnNav("click", currentSctnNavIDString);

					fadeSctnNavOptions(currentSctnNavElement);
				} else {
					fadeSctnNav("active", currentSctnNavIDString);
					
					fadeSctnNavOptions(currentSctnNavElement);
				}
			}
			);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				
				fadeSctnNav("base", currentSctnNavIDString);
				
				fadeSctnNavOptions(currentSctnNavElement);
				}
		);

		$("#options > span").on("click",
			function () {
				animateMenuOptions(this, "click");

				fadeMenu("click_off");

				fadeMenuButton("menu-base");

				switch (this.id) {
					case "home":
						window.scrollTo(0, 0);
						break;

					case "sctn-1":
						window.scrollTo(0, 800);
						window.location.href = "#sctn_1?pos=0";
						break;

					case "sctn-2":
						window.scrollTo(0, 1600);
						break;

					case "sctn-3":
						window.scrollTo(0, 2400);
						window.location.href = "#sctn_3?pos=0";
						break;

					case "sctn-4":
						window.scrollTo(0, 3200);
						window.location.href = "#sctn_4?pos=0";
						break;

					case "sctn-5":
						window.scrollTo(0, 4000);
						break;

					case "sctn-6":
						window.scrollTo(0, 4704);
						window.location.href = "#sctn_6?pos=0";
						break;
				}
			}
			);

		$("#quiz-start").on("click",
			function () {
				window.location.hash = "#sctn_1?pos=1"
			}
			);

		$("#quiz-prev").on("click",
			function () {
				loadQuiz("initial");
			});
		
		$("#quiz-sbmt").on("click",
			function () {
				window.location.hash = "#sctn_1?pos=2";
			}
		);

		$("input#sctn_5-bttn").on("click",
			function () {
				window.location.hash = "#sctn_5?pos=1"
			}
			);

		$("input#sctn_5-sbmt").on("click",
			function () {
				window.location.hash = "#sctn_5?pos=2"
			}
			);
			
			$(window).on('hashchange', 
				function () {
					animateWindowPanes();
				}
			);
	}
	);


