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

		var bodyClickOnCSS = {
					overflow: "hidden"
				};

		var bodyClickOffCSS = {
					overflow: "visible"
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
				
				// $("body").css(bodyClickOnCSS);
				$("#menu").css(menuPositionClickOnCSS);
				
				window.alert("scrollPosition = " + scrollPosition);
				$("#menu-bkgrnd").css("top", scrollPosition);
				window.alert("$(\"#menu-bkgrnd\").css(\"top\", scrollPosition) = " + $("#menu-bkgrnd").css("top"));
				$("#cntainr").animate(cntainrClickOnCSS, 200);
				$("#bkgrnd").animate(bkgrndClickOnCSS, 200,
					function () {
						// $("#options").css("top", $(window).scrollTop());
						$("#options").css(optionsClickOnCSS);
						$("#options").fadeTo(200, 1).delay(200);
					}
				);
			} else {
				$("#options").fadeTo(200, 0,
					function () {
						$("#options").css(optionsClickOffCSS);
						// $("#options").css("top", "0px");
						$("#menu").css(menuPositionClickOffCSS);
						$("#menu-bkgrnd").css("top", "0px");
						$("#cntainr").animate(cntainrClickOffCSS, 200);
						$("#bkgrnd").animate(bkgrndClickOffCSS, 200);
							/*function () {
								// $("body").css(bodyClickOffCSS);
							}*/
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

		function fadeSctnNav(mouseState) {
			var menuOptionClass = mouseState + "-sctn_nav";

			$(".sctn_nav > div > span").fadeTo(75, 0,
				function () {
					$(".sctn_nav > div > span").attr("class", menuOptionClass);
					$(".sctn_nav > div > span").fadeTo(75, 1);
				}
				);
		}

		function fadeSctnNavOptions() {
			if ($("div.sctn_nav > div > div").css("display") === "none") {
				$("div.sctn_nav > div > div").css(sctnNavOptionsTopOffCSS);

				$("div.sctn_nav > div > div").css(sctnNavOptionsOnCSS);

				$("div.sctn_nav > div > div").animate(sctnNavOptionsTopOnCSS, 200);
			} else {
				$("div.sctn_nav > div > div").animate(sctnNavOptionsTopOffCSS, 175);

				$("div.sctn_nav > div > div").css(sctnNavOptionsBaseCSS).delay(200);
			}
		}

		/*function animateWindows(windowPane) {
		    switch (windowPane) {
		        case "completeQuiz":
		             $("#bkgrnd-1").css("left", "-2560px");
			         $("#wndow-sctn_1").css("left", "-2560px");
		        break;
		    }
		}*/



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
	
						fadeMenuButton("menu-click_1");
						
						$("#cntainr").on("mouseover",
							function () {
								if ($("#menu-bkgrnd").css("display") === "block")	{
									fadeMenu("click_off");
	
									fadeMenuButton("menu-base");
								}
							}
						);
					}
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
				if ($(".sctn_nav > div > div").css("display") == "none") {
					fadeSctnNav("hover");
				}
			}
			);

		$(".sctn_nav > div > span").on("mouseleave",
			function () {
				if ($(".sctn_nav > div > div").css("display") == "none") {
					fadeSctnNav("base");
				}
			}
			);


		$(".sctn_nav > div > span").on("click",
			function () {
				if ($("div.sctn_nav > div > div").css("display") == "none") {
					fadeSctnNav("click");

					fadeSctnNavOptions();
				} else {
					fadeSctnNav("active");

					fadeSctnNav("base");

					fadeSctnNavOptions();
				}
			}
			);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				$("div.sctn_nav > div > span").css(specltesBaseCSS);
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
						break;

					case "sctn-2":
						window.scrollTo(0, 1600);
						break;

					case "sctn-3":
						window.scrollTo(0, 2400);
						break;

					case "sctn-4":
						window.scrollTo(0, 3200);
						break;

					case "sctn-5":
						window.scrollTo(0, 4000);
						break;

					case "sctn-6":
						window.scrollTo(0, 4704);
						break;
				}
			}
			);

		$("input#quiz-start").on("click",
			function () {
			    $("#bkgrnd-1").css("left", "-1280px");
			    $("#wndow-sctn_1").css("left", "-1280px");
			}
			);

		$("input#quiz-sbmt").on("click",
			function () {
			    //location.href = "http://localhost/amelia/sc/sctn/1/sctn_1-b.htm";
			    $("#bkgrnd-1").css("left", "-2560px");
			    $("#wndow-sctn_1").css("left", "-2560px");
			}
		);

		$("input#sctn_5-bttn").on("click",
			function () {
				location.href = "http://localhost/amelia/sc/sctn/5/sctn_5-a.htm";
			}
			);

		$("input#submit-rate").on("click",
			function () {
				location.href = "http://localhost/amelia/sc/sctn_5-b.htm";
			}
			);
	}
	);