// menu.js

$(document).ready(
	function () {
		var optionsClickOnCSS = {
					display: "block"
				};

		var optionsClickOffCSS = {
					display: "none"
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
          $("#menu-link").fadeTo((menuTransitionValue * 1.25), 1);
        }
      );
      
      if (menuClassName === "click_2")  {
        fadeMenu();
      }
		} // END OF function 'fadeMenuButton'
		
		function fadeMenu() {
      var menuWidth = new Number();
      var windowWidth = new Number();
      var cssElementsBaseWidth = new Number();
      var cssElementsClickWidth = new Number();
      var windowElementBaseWidth = new Number();
      var cssElementLeftValue = new Number();
      var copyElementWidth = new Number();
      
      var menuBaseCSS = new Object;
      var otherElementsBaseCSS = new Object;
      var windowElementBaseCSS = new Object;
      var optionsElementBaseCSS = new Object;
      var copyElementBaseCSS = new Object;
      var sctnNavElementBaseCSS = new Object;
      
      var menuClickCSS = new Object;
      var otherElementsClickCSS = new Object;
      var windowElementClickCSS = new Object;
      var optionsElementClickCSS = new Object;
      var copyElementClickCSS = new Object;
      var sctnNavElementClickCSS = new Object;
      
      var inc = new Number();
      var inc_2 = new Number();
      var copyElementsIncrementer = new Number();
      var copyElementsURLValueString = new String();
      var copyElementsURLIndexValueNum = new Number();
      var copyElementIndexValuesString = new String();
      var copyElementSelectorString = new String();
      
      var copyElementPlace_Array = new Array();
      var copyElementsURLValues_Array = new Array();
      
      windowWidth = $(window).width();
      
      if (windowWidth <= 1366) {
        menuWidth = Math.round(windowWidth * 0.515);
      } else {
        menuWidth = Math.round(windowWidth * 0.20); 
      }

      cssElementsBaseWidth = $(window).width();
      cssElementsClickWidth = windowWidth - menuWidth;
      // windowElementClickWidth = windowWidth - menuWidth;
      cssElementLeftValue = menuWidth;
      copyElementWidth = windowWidth;
      
      // window.alert("copyElementWidth = " + copyElementWidth);
      
      $("#menu").css("width", menuWidth);
      $("#menu-bkgrnd").css("width", menuWidth);
      $("#menu-brdr").css("width", menuWidth);
      
      menuBaseCSS = {
        "left": -menuWidth 
      }
      
      otherElementsBaseCSS = {
        "width": windowWidth,
        "left": 0
      }
      
      windowElementBaseCSS = {
        "width": windowWidth
      }
      
      optionsElementBaseCSS = {
        "width": menuWidth,
        "left": -cssElementLeftValue, 
        "display": "none",
        "opacity": 0
      }
      
      copyElementBaseCSS = {
        "width": copyElementWidth,
        "left": 0,
        "opacity": 1,
        "display": "block"
      }
      
      sctnNavElementBaseCSS = {
        "opacity": 1
      }
      
      menuClickCSS = {
        "left": 0 
      }
      
      otherElementsClickCSS = {
        "width": cssElementsClickWidth,
        "left": cssElementLeftValue
      }
      
      windowElementClickCSS = {
        "width": cssElementsClickWidth
      }
      
      optionsElementClickCSS = {
        "width": menuWidth,
        "left": 0,
        "display": "block",
        "opacity": 1
      }
      
      copyElementClickCSS = {
        "width": copyElementWidth - menuWidth,
        "left": -(Math.round(menuWidth / 2)) + "px",
        "opacity": 0,
        "display": "none"
      }
      
      sctnNavElementClickCSS = {
        "opacity": 0
      }
      
      if ($("#menu").css("left") === "0px") {
        $("#options").hide("fade", "linear", menuTransitionValue);
         $("#options").animate(optionsElementBaseCSS, menuTransitionValue); 
         $("#bkgrnd").animate(otherElementsBaseCSS, menuTransitionValue);
         $("#bkgrnd > div").animate(otherElementsBaseCSS, menuTransitionValue); 
         $("#menu").animate(menuBaseCSS, menuTransitionValue);
         $(".headr").animate(windowElementBaseCSS, menuTransitionValue);
         
        //  window.alert("$(\".copy\").length = " + $(".copy").length);
        
         copyElementsURLValues_Array = window.location.hash.split("?");
         
         if (copyElementsURLValues_Array.length === 1)  {
           copyElementsURLValueString = window.location.hash.slice(1);
         } else {
           if (copyElementsURLValues_Array.length === 3)  {
             copyElementsURLValueString = copyElementsURLValues_Array[2];
           } else {
             copyElementsURLValueString = copyElementsURLValues_Array[1];
           }
         }
        
        // window.alert("copyElementsURLValues_Array.length = " + copyElementsURLValues_Array.length);
        // window.alert("copyElementsURLValueString = " + copyElementsURLValueString);
        
        copyElementsURLIndexValueNum = copyElementsURLValueString.indexOf("=") + 1;
              
        copyElementIndexValuesString = copyElementsURLValueString.slice(copyElementsURLIndexValueNum);
        
        copyElementsURLValues_Array = copyElementIndexValuesString.split(",");
        
         window.alert("$(\".copy\").length = " + $(".copy").length);
         
         inc = 0;
          inc_2 = 0;
                 
        for (inc = 0; inc < $(".copy").length; inc++) {
            // window.alert("$(this).children(\".copy\").length = " + $(this).children(".copy").length);
         
           
          copyElementSelectorString = "div.copy:nth-child(" + (inc + 3) + ")";
                     
            switch ($(".wndow").parent(copyElementSelectorString).attr("id")) {
              case "wndow-sctn_3":
                copyElementBaseCSS.width = copyElementWidth - 392;
              break;
              
              case "wndow-sctn_4":
                copyElementBaseCSS.width = copyElementWidth - 392;
              break;
              
              default:
                copyElementBaseCSS.width = copyElementWidth - 166;
              break;  
            }
            
            if (inc.toString() === copyElementsURLValues_Array[inc_2]) {
              window.alert("inc = " + inc + " inc_2 = " + inc_2);
                
              $(".wndow").children(copyElementSelectorString).css("display", "block");
                // window.alert("$(this).attr(\"id\") = " + $(this).attr("id"));
                
                // window.alert("copyElementsURLValues_Array[" + copyElementsIncrementer + "] = " + copyElementsURLValues_Array[copyElementsIncrementer]);
                // window.alert("copyElementSelectorString = " + copyElementSelectorString);
                // window.alert("copyElementsIncrementer = " + copyElementsIncrementer);
               inc_2++;
             }
              
              $(".wndow").children(copyElementSelectorString).animate(copyElementBaseCSS, menuTransitionValue);;
              // $(this).animate(copyElementBaseCSS, menuTransitionValue);
              
              window.alert("inc = " + inc);
            
          }
        /*
        
         $(".copy").each(
            function () {
             
              // window.alert("copyElementBase")
              
              
              // window.alert("copyElementsURLValueString = " + copyElementsURLValueString);
              
              
                       
              
              $(this).css(copyElementBaseCSS);
              
              
              
              
              
              
              window.alert("$(this).css(\"width\") = " + $(this).css("width"));
              
              
              
              inc++;
              
            
            }
         );*/
         
         copyElementsURLIndexValueNum = window.location.hash.indexOf("copy");
         
        //  window.alert("window.location.hash.slice(0, " + (copyElementsURLIndexValueNum - 1) + ") = " + window.location.hash.slice(0, copyElementsURLIndexValueNum - 1));
        // window.alert("window.location.hash = " + window.location.hash);
         
        if (window.location.hash !== "")  {
          window.location.hash = window.location.hash.slice(0, (copyElementsURLIndexValueNum - 1));
        } 
              /*switch ($(this).parent(".wndow").attr("id")) {
            
       
                animate(copyElementBaseCSS, menuTransitionValue);*/
        //  $(".copy").show("fade", "linear", menuTransitionValue);
         $(".sctn_nav").animate(sctnNavElementBaseCSS, menuTransitionValue);
         $(".sctn_nav").show("fade", "linear", menuTransitionValue);
         $(".wndow").animate(windowElementBaseCSS, menuTransitionValue);
         $("#cntainr").animate(otherElementsBaseCSS, menuTransitionValue);
      } else {
        $("#menu").animate(menuClickCSS, menuTransitionValue);
        $("#options").animate(optionsElementClickCSS, menuTransitionValue);
        $("#options").show("fade", "linear", menuTransitionValue);
        $("#bkgrnd").animate(otherElementsClickCSS, menuTransitionValue); 
        $("#bkgrnd > div").animate(otherElementsClickCSS, menuTransitionValue); 
        $(".headr").animate(windowElementClickCSS, menuTransitionValue);
        // window.alert("copyElementClickCSS.left = " + copyElementClickCSS.left);
        // $(".copy").hide("fade", "linear", menuTransitionValue);
        $(".sctn_nav").hide("fade", "linear", menuTransitionValue);
        // $(".sctn_nav").animate(sctnNavElementClickCSS, menuTransitionValue);
        
        $(".copy").each(
          function () {
            if ($(this).css("display") === "block") {
             
              // window.alert("copyElementPlace_Array = " + copyElementPlace_Array);
              
              copyElementPlace_Array.push(inc);
            }
            
            
            
            inc++;
            
            $(this).animate(copyElementClickCSS, menuTransitionValue);
          }
        );  
        
        $(".copy").css("display", "none");
        
        if (window.location.hash === "")  {
          copyElementsURLValueString = window.location.hash + "copyVals=";
        } else {
          copyElementsURLValueString = window.location.hash + "?copyVals=";
        }
        
        for (inc = 0; inc < copyElementPlace_Array.length; inc++)  {
          copyElementsURLValueString = copyElementsURLValueString + copyElementPlace_Array[inc];
          
          if (inc < copyElementPlace_Array.length - 1) {
            copyElementsURLValueString = copyElementsURLValueString + ",";
          }  
        }
        
        $(".wndow").animate(windowElementClickCSS, menuTransitionValue); 
        $("#cntainr").animate(otherElementsClickCSS, menuTransitionValue);
        
        
        // window.alert("copyElementsURLValueString = " + copyElementsURLValueString);
        
        window.location.hash = copyElementsURLValueString;
      }
        
      resetWindowPanes();
      
      return false;
		}  // END OF function fadeMenu
		
		function animateMenuOptions(menuOption, mouseState) {
      var optionStateString = new String();
      
      optionStateString = "option-" + mouseState;
    
      $(menuOption).addClass(optionStateString, (menuTransitionValue / 1.25), 
        function () {
          $(menuOption).toggleClass(optionStateString, (menuTransitionValue / 2));
          
          if (mouseState === "click") {
            navigateSections(menuOption);
          }
        });
		}
    
    function animateNextSctnElements(sectionElement, mouseState)  {
      var sectionElementID = $(sectionElement).attr("id");
     
      var spanElement = $(sectionElement).children("span");
      
      var sectionElementState = mouseState + "-" + sectionElementID;
      var spanElementState = mouseState + "-sctn_span";
      
      $(spanElement).removeClass();
      $(spanElement).addClass(spanElementState);
      
      // window.alert("$(\"" + spanElement + "\").attr(\"class\") = " + $(spanElement).attr("class"));
      $(sectionElement).removeClass();
      $(sectionElement).addClass(sectionElementState);
      
      // window.alert("$(\"" + sectionElement + "\").attr(\"class\") = " + $(sectionElement).attr("class"));
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

    function navigateSections(optionElement)  {
      fadeMenuButton("click_2");
      
      switch (optionElement.id) {
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
          window.location.hash = "#sctn_2";
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
          window.location.hash = "#sctn_5";
        break;

        case "sctn-6":
          window.scrollTo(0, ($("div.wndow").height() * 6));
          window.location.hash = "#sctn_6?pos=0";
          animateElements(6);
        break;
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
      }
		);
		
		$("#menu").on("mouseleave",
			function () {
        if ($("#options").css("display") === "block") {
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
      }
    );

	}
	);


