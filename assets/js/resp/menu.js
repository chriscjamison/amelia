// menu.js

$(document).ready(
	function () {
		var optionsClickOnCSS = {
					display: "block"
				};

		var optionsClickOffCSS = {
					display: "none"
				};

    var menuPositionClickOnCSS = {
          left: "0px"
        };
        
    var menuPositionClickOffCSS = {
          left: "-20.45em"
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
        
    var menuTransitionValue = 500;

		function fadeMenuButton(menuClassName) {
      var menuLinkClassString = new String();
      
      menuLinkClassString = "menu-link-" + menuClassName;
      
      $("#menu-link").fadeTo((menuTransitionValue / 2), 0, 
        function () {
          $("#menu-link").toggleClass(menuLinkClassString, (menuTransitionValue / 2));
          $("#menu-link").fadeTo((menuTransitionValue * 1.34), 1);
        }
      );
		} // END OF function 'fadeMenuButton'
		
		function fadeMenu(stateValue) {
      var scrollPosition = $(window).scrollTop() + "px";
			
      if ($("#menu").css("left") !== "0px") {
        $("#menu").toggleClass("menu-click", menuTransitionValue);
        $("#options").toggleClass("options-click", menuTransitionValue);
        $(".wndow").toggleClass("wndow-click", menuTransitionValue);
        $("#cntainr").toggleClass("cntainr-click", menuTransitionValue);
        $("#bkgrnd").toggleClass("bkgrnd-click", menuTransitionValue);
        $("#bkgrnd > div").toggleClass("bkgrnd-click", menuTransitionValue);
			} else {
          $("#options").toggleClass("options-click", menuTransitionValue, 
            function () {
              $("#cntainr").toggleClass("cntainr-click", menuTransitionValue); 
              $(".wndow").toggleClass("wndow-click", menuTransitionValue);
              $("#bkgrnd").toggleClass("bkgrnd-click", menuTransitionValue);
              $("#bkgrnd > div").toggleClass("bkgrnd-click", menuTransitionValue); 
              $("#menu").toggleClass("menu-click", menuTransitionValue);
            }
          );
        }
        
      resetWindowPanes();
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
    
    function animateNextSctnElements(sectionElement, mouseState)  {
      var sectionElementID = $(sectionElement).attr("id");
     
      var spanElement = $(sectionElement).children("span");
      
      var sectionElementState = mouseState + "-" + sectionElementID;
      var spanElementState = mouseState + "-sctn_span";
      
      $(spanElement).removeClass();
      $(spanElement).addClass(spanElementState);
      
      $(sectionElement).removeClass();
      $(sectionElement).addClass(sectionElementState);
    }

		function nextSctnBehavior(sectionElement, mouseState) {
      var sectionElementID = $(sectionElement).attr("id");
      switch (mouseState) {
				case "over":
				  animateNextSctnElements(sectionElement, "click");  
				break;

				case "out":
				  animateNextSctnElements(sectionElement, "base");
				break;

				case "click":
					var yLocation = $(window).scrollTop();
				  var yScroll = $("div.wndow").height();
          var yDifferenceValue = new Number();
          var inc = 0;
          
          animateNextSctnElements(sectionElement, "click");
          
          if (sectionElementID === "prev-sctn")  {
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
          
          $("body").animate({scrollTop: yScrollTo}, 750, "easeOutQuad", 
            function() {
              animateNextSctnElements(sectionElement, "base");
            }
          );
         
        break;
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
					fadeMenuButton("click_2");
				} else {
					if ($("#menu-link").hasClass("menu-click_2") === false) {
						fadeMenuButton("base");
					}
				}
			}
			);

		$("#menu-link").on("mouseenter",
			function () {
				if ($("#menu-link").hasClass("menu-click_2") === false) {
					if ($("#menu-link").hasClass("menu-base") === true) {
						fadeMenuButton("hover");
					}
				}
			}
			);

		$("#menu-link").on("click",
			function () {
        fadeMenuButton("click_2");
        fadeMenu();
      }
		);
		
		$("#menu").on("mouseleave",
			function () {
        if ($("#options").css("display") === "block") {
          fadeMenu();
				  fadeMenuButton("base");
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

	}
	);


