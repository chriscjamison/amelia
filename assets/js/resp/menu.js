// menu.js

$(document).ready(
	function () {
		var optionsClickOnCSS = {
					display: "block"
				};

		var optionsClickOffCSS = {
					display: "none"
				};

		var bkgrndClickOnCSS = {
          left: "260px"
				};

		var bkgrndClickOffCSS = {
          left: "0px"
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
					position: "absolute",
          left: "0px"
				};

		var menuPositionClickOffCSS = {
					position: "absolute",
					left: "-260px"
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
				
		var sctnTextOverCSS = {
					color: "#808080"
				};

		var sctnTextOutCSS = {
					color: "#fff"
				};

		var prevSctnDivOverCSS = {
					backgroundPosition: "0px -96px",
					cursor: "pointer"
				};

		var prevSctnDivOutCSS = {
					backgroundPosition: "0px 0px",
					cursor: "default"
				};
    
    var nextSctnDivOverCSS = {
					backgroundPosition: "0px -220px",
					cursor: "pointer"
				};

		var nextSctnDivOutCSS = {
					backgroundPosition: "0px -145px",
					cursor: "default"
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
				
				$("#menu-bkgrnd").animate(menuPositionClickOnCSS, 200);
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
						$("#cntainr").animate(cntainrClickOffCSS, 200);
						$("#bkgrnd").animate(bkgrndClickOffCSS, 200);
            $("#menu-bkgrnd").css("top", "0px");
						$("#menu-bkgrnd").animate(menuPositionClickOffCSS, 200, 
              function () {
                $("#menu").css(menuPositionClickOffCSS);
              }
            );
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

		function nextSctnBehavior(sectionElement, mouseState) {
      var spanElement = $(sectionElement).children("span");
      var sectionIdValue = $(sectionElement).attr("id");
      
      switch (mouseState) {
				case "over":
					$(spanElement).css(sctnTextOverCSS);
          
          if (sectionIdValue === "prev-sctn") {
            $(sectionElement).css(prevSctnDivOverCSS);
          } else {
            $(sectionElement).css(nextSctnDivOverCSS);
          }
					break;

				case "out":
					$(spanElement).css(sctnTextOutCSS);
          
					if (sectionIdValue === "prev-sctn") {
            $(sectionElement).css(prevSctnDivOutCSS);
          } else {
            $(sectionElement).css(nextSctnDivOutCSS);
          }
					break;

				case "click":
					var yLocation = $(window).scrollTop();
				  var yScroll = $("div.wndow").height();
          var yDifferenceValue = new Number();
          var inc = 0;
          
          if (sectionIdValue === "prev-sctn")  {
            yDifferenceValue = -yLocation;
          
            while (yDifferenceValue < -yScroll) {
              yDifferenceValue = (inc * yScroll) - yLocation;
              
              inc++;
            }
          } else {
            yDifferenceValue = yScroll - yLocation;
            
            while (yDifferenceValue < 1) {
              yDifferenceValue = (inc * yScroll) - yLocation;
              
              inc++;
            }
          }
          
          var yScrollTo = yLocation + yDifferenceValue;
          
         $("body").animate({scrollTop: yScrollTo}, 750, "easeOutQuad");
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

		$("#prev-sctn, #next-sctn").on("mouseenter",
			function () {
				nextSctnBehavior(this, "over");
			}
			);

		$("#prev-sctn, #next-sctn").on("mouseleave",
			function () {
				nextSctnBehavior(this, "out");
			}
			);

		$("#prev-sctn, #next-sctn").on("click",
			function () {
				nextSctnBehavior(this, "click");
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
        if ($("#options").css("display") === "block") {
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
						window.scrollTo(0, $("div.wndow").height());
						window.location.hash = "#sctn_1?pos=0";
            
            if ($("div.headr.sctn_1").css("opacity") === "0") {
              setTimeout(
                function() {
                  animateElements(1) 
                }, 1000);
            }
					break;

					case "sctn-2":
						window.scrollTo(0, ($("div.wndow").height() * 2));
            animateElements(2);
					break;

					case "sctn-3":
						window.scrollTo(0, ($("div.wndow").height() * 3));
						window.location.hash = "#sctn_3?pos=0";
            animateElements(3);
					break;

					case "sctn-4":
						window.scrollTo(0, ($("div.wndow").height() * 4));
						window.location.hash = "#sctn_4?pos=0";
            animateElements(4);
					break;

					case "sctn-5":
						window.scrollTo(0, ($("div.wndow").height() * 5));
            animateElements(5);
					break;

					case "sctn-6":
						window.scrollTo(0, ($("div.wndow").height() * 6));
						window.location.hash = "#sctn_6?pos=0";
            animateElements(6);
					break;
				}
			}
			);

		$("#quiz-start").on("click",
			function () {
				window.location.hash = "#sctn_1?pos=1";
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
      
    $("input#cntct-map").on("click",
			function () {
        // window.alert("input#cntct-map");
				window.open("https://bit.ly/1Pq1HkT");

			}
			);

	}
	);


