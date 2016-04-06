// menu.js

$(document).ready(
	function () {
    
    /*************************************************************************
      Global Variables to set the CSS Properties the function fadeMenu applies.
    **************************************************************************/
    
		var optionsClickOnCSS = {
					display: "block"
				};
    // Sets the CSS properties of the DIV with the ID, options, to display
    
		var optionsClickOffCSS = {
					display: "none"
				};
    // Sets the CSS properties of the DIV with the ID, options, to hide
    
		var optionBaseCSS = {
					backgroundColor: "#000",
					color: "#fff",
					cursor: "pointer"
				};
    // Sets the CSS properties of the SPAN contained within the DIV with the ID, options,  
    // to its inital state
    
		var optionHoverCSS = {
					backgroundColor: "#808080",
					color: "#fff",
					cursor: "pointer"
				};
    // Sets the CSS properties of the SPAN contained within the DIV with the ID, options,  
    // to its 'highlighted' state
    
   var optionClickCSS = {
					backgroundColor: "#A6A6A6",
					color: "#000",
					cursor: "default"
				};
		// Sets the CSS properties of the SPAN contained within the DIV with the ID, options,  
    // to its 'click' state
    		
		var sctnTextOverCSS = {
					color: "#808080"
				};
   // Sets the CSS properties of the text of a DIV, of class, sctn_nav, to a 'highlighted' state
   
		var sctnTextOutCSS = {
					color: "#fff"
				};
   // Sets the CSS properties of the text of a DIV, of class, sctn_nav, to its initial state
   
		var sctnNavOptionsBaseCSS = {
					display: "none"
				};
    // Sets the CSS properties of a DIV, of class, sctn_nav, to its initial state - 
    // to not be displayed
    
		var sctnNavOptionsOnCSS = {
					display: "block"
				};
    // Sets the CSS properties of a DIV, of class, sctn_nav, to its 'highlighted' state - 
    // to be displayed
    
		var sctnNavOptionsTopOnCSS = {
					top: "55px",
					opacity: 1
				};
    // Sets the CSS properties of a DIV within a DIV, of class, sctn_nav, to its 'highlighted' state - 
    // to be displayed
   
		var sctnNavOptionsTopOffCSS = {
					top: "0px",
					opacity: 0
				};
    // Sets the CSS properties of a DIV within a DIV, of class, sctn_nav, to its inital state - 
    // to not be displayed   
   
    var menuTransitionValue = 500;
    // the Number value of the amount of time the transitions of HTML elements last.
    // NOTE: menuTransitionValue is an interval of time, where the value of 1 is equal to 1 millisecond
     
		/*******************************************************************************************
      FUNCTION ORDER LIST
       -----------------
       
      fadeMenuButton
        _______________________________________________________________________________________
        
          INITAL PARAMETER: menuClassName
                              > Variable Type - String 
                              > A variable which holds the display state of the menu button
                                a user wishes to initiate.
                                  * The menu button is located in the upper-left of the page.
                              > Possible values:
                                  o "click_2", "hover" - used by a CLICK and MOUSEOVER event handler by 
                                    a DIV with the ID name, menu-link
                                  o "base" - used by a CLICK event handler by 
                                    a DIV with the ID name, menu
                                  
          VARIABLE DECLARATIONS:
            menuLinkClassString
              > Variable Type - String
              > Holds the cocatenation of two Strings. The first is the prefix of a class name, 
                'menu-link-'. The second half is a string representing the click state
                a user desires to initiate. 
                * Potential values:
                  o 'base'
                  o 'hover'
                  o 'click_2'
                  
          PROGRAM LOGIC
            I. 
              > Cocatenate two strings.
                * The prefix of a class statement, 'menu-link-'
                * A string representing the click state a user desires to initiate
            II.
              > Trigger the transtion from the exisiting click state to the state a user desires
                * A 'fadeTo' transition is intiated for the HTML element within the webpage, 
                  with the ID, menu-link.
                    o The transition fades the HTML element, 'menu-link', to an opacity of 0.
                    o The transition is initialized to last the dividend of 
                      'menuTransitionValue / 2'
                * The class of 'menu-link', represented by the value contained by the variable, 
                  'menuLinkClassString', is togged by the method '.toggleClass'.
                    o The transition is initialized to last the dividend of 
                      'menuTransitionValue / 2'
                * The HTML element, 'menu-link', fades in.
                    o The transition will take the product of 1.25 * menuTransitionValue
                    o The HTML element, 'menu-link' will be set to an opacity of 1
            III.
              > If the menu is desired to be open, initialize the function, 'fadeMenu'
                  * A value of 'click_2', held by the variable, 'menuClassName', means 
                    a user is requesting the menu panel be displayed.
                      o Menu panel - menu background and menu options
                  * The function 'fadeMenu' is initialzed
            END OF FUNCTION  
                  
                
                    
        _______________________________________________________________________________________
      
      fadeMenu
        _________________________________________________________________________________
        
        
      
      animateMenuOptions
      animateNextSctnElements
      nextSctnBehavior
        _______________________________________________________________________________________
        
          CALLED BY:
            Event Handlers
              > DIV elements with ID names, prev_sctn, next_sctn
              
          INTIAL PARAMETERS:
            sectionElement
              > Variable Type: String
              > Holds the associated data of a jQuery HTML Object for the HTML element a user is 
                requesting to change its click state
                
            mouseState
              > Variable Type: String
              > Holds a string which describes the user-desired click state for DIV elements 
                with the ID names, prev_sctn, or, next_sctn
          
          VARIABLE DECLARATIONS:
            sectionElementID 
              > Variable Type: String
              > Holds the ID name of the DIV element which has called this function.
                  * This variable can hold one of the following two values:
                    o prev_sctn
                    o next_sctn
            
            yLocation
              > Variable Type: Number
              > Holds the numerical value of the current vertical location the browser rests along 
                the length of the webpage
                  * The position is determined by the jQuery method, .scrollTop
              > Is only initialized if the value of mouseState is, click
              
            yScroll
              > Variable Type: Number
              > Holds the numerical value of the vertical height of the DIV with 
                the CLASS name, wndow.
                  * All DIV's with the CLASS name, wndow are set to the 
                    same CSS property value, height
              > Is only initalized if the value of mouseState is, click
              
            yDifferenceValue
              > Variable Type: Number
              > Holds the numerical value equaling the distance the browser will scroll 
                to reach the location a user desires
              > Is only initalized if the value of mouseState is, click
              
            inc
              > Variable Type: Number
              > Loop counter
              
          PROGRAM LOGIC:
            I.
              > Determine the CLICK state a user wishes to initialize
                  * A, switch, statement routes the function to take approprate action 
                    depending on the user-desired click state
                      o The, switch, statement can interpret the following
                        values for CLICK states
                          - 'over'
                          - 'out'
                          - 'click'
            I.i
              > Change the CLICK state of the DIV which called, nextSctnBehavior
                * Initialize the function, animateNextSctnElements, using the 
                  the following parameters:
                    o sectionElement - jQuery HTML Object holding the 
                      associated data for the DIV a user desires to shift its
                      CLICK state
                    o The string, 'click'. The string will animate the DIV which 
                      called this function to the, click, CLICK state
            I.ii
              > Change the click state of the DIV which called, nextSctnBehavior
                * Initialize the function, animateNextSctnElements, using the 
                  the following parameters:
                    o sectionElement - jQuery HTML Object holding the 
                      associated data for the DIV a user desires to shift its
                      CLICK state
                    o The string, 'base'. The string will animate the DIV which 
                      called this function to the, base, CLICK state
            I.iii
              > Change the CLICK state of the DIV which called, nextSctnBehavior and 
                move the browser window to the user-desired location of the webpage 
              
              > I.iii.a 
                * Initialize variables for case
                  o Variables initalized are:
                    - yLocation
                    - yScroll
                    - yDifferenceValue
                    - inc
              > I.iii.b
                * Change the CLICK state of the DIV which called the function, nextSctnBehavior
                  o Initialize the function, animateNextSctnElements, using the 
                    the following parameters:
                      - sectionElement - jQuery HTML Object holding the 
                        associated data for the DIV a user desires to shift its
                        CLICK state
                      - The string, 'click'. The string will animate the DIV which 
                        called this function to the, click, CLICK state
              > I.iii.c
                * Calculate the difference in position between the current position of the browser 
                  window and the location a user wishes to navigate to
                    o Conditional statement to apply a different forumla to calculate the 
                      numerical difference
                        - If, sectionElementID, equals, prev-sctn
                          + yDifferenceValue is set to the negative value of the current browser 
                            window position
                              ~ Since, yDifferenceValue, will 
               
                
                     
              
              
              
                  
            
    
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
      fadeSctnNav
        _______________________________________________________________________________________
        
          INTIAL PARAMETERS:
            mouseState
              > Variable Type: String
              > Holds the click state for the DIV with the CLASS name, sctn_nav, (sctn_nav) 
                which the user desires to initiate
                  * sctn_nav is located near the middle-center of 
                    sections containing multiple DIV with the CLASS name, copy.
            
            sctnNavID
              > Variable Type: String
              > Holds the value of the ID name of sctn_nav. The ID 
                isolates the scope of fadeSctnNav() to one DIV element
                
          VARIABLE DECLARATIONS:
            menuOptionClass
              > Variable Type: String
              > Holds the cocatenation of the string variable, mouseState, and the suffix of the 
                CLASS name which sets the desired click state of sctn_nav
                
          PROGRAM LOGIC:
            I.
              > Trigger the transition to fade sctn_nav
                * The method, .fadeTo, sets the opacity of the sctn_nav, with the ID 
                  contained by the variable, sctnNavID, to 0 over a period of 75 ms
                * The CLASS name which is contained by the variable, menuOptionClass, 
                  is added to the element identified by the ID held by 
                  the variable, sctn_navID
                * The sctn_nav, with the ID held by the variable, sctnNavID, is set to 1 
                  over an interval of 75 ms using the method, .fadeTo
            END OF FUNCTION
          
      fadeSctnNavOptions
      navigateSections
      
      
    ***************************/
    
    function fadeMenuButton(menuClassName) {
      
      // Variable declaration
      var menuLinkClassString = new String();
      
      // I. - Cocatenate two strings
      menuLinkClassString = "menu-link-" + menuClassName;
      
      // II. - Trigger the transtion from the exisiting click state to the state a user desires
      $("#menu-link").fadeTo((menuTransitionValue / 2), 0, 
        function () {
          $("#menu-link").toggleClass(menuLinkClassString, (menuTransitionValue / 2));
          $("#menu-link").fadeTo((menuTransitionValue * 1.25), 1);
        }
      );
      
      // III. If the menu is desired to be open, initialize the function, 'fadeMenu'
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
        "opacity": 0
      }
      
      copyElementBaseCSS = {
        "width": copyElementWidth,
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
        "display": "none",
        "opacity": 0
      }
      
      sctnNavElementClickCSS = {
        "opacity": 0
      }
      
      if ($("#menu").css("left") === "0px") {
        // $("#options").hide("fade", "linear", menuTransitionValue);
        $("#options").animate(optionsElementBaseCSS, menuTransitionValue); 
        $("#bkgrnd").animate(otherElementsBaseCSS, menuTransitionValue);
        $("#bkgrnd > div").animate(otherElementsBaseCSS, menuTransitionValue); 
        $("#menu").animate(menuBaseCSS, menuTransitionValue);
        $(".headr").animate(windowElementBaseCSS, (menuTransitionValue / 2));
          
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
        
        copyElementsURLIndexValueNum = copyElementsURLValueString.indexOf("=") + 1;
              
        copyElementIndexValuesString = copyElementsURLValueString.slice(copyElementsURLIndexValueNum);
        
        copyElementsURLValues_Array = copyElementIndexValuesString.split(",");
        
        inc = 0;
        inc_2 = 0;
                 
        /*for (inc = 0; inc < $(".wndow").length; inc++) {
          var copyElementSelectorString_1 = "div.wndow:nth-child(" + (inc + 1) + ")"; 
          // window.alert("$(\"body\").children(\"div.wndow:nth-child(" + inc + ")\").children(\"div.copy\").length = " + $("body").children("copyElementSelectorString_1").children("div.copy").length);
          // for (inc_2 = 0; inc_2 < $(".wndow").children("div.copy").length; inc_2++) {}
          /*if (inc.toString() === copyElementsURLValues_Array[inc_2]) {
            copyElementSelectorString = "div.copy:nth-child(" + (inc + 3) + ")";
            
            switch ($(".wndow").children(copyElementSelectorString).parent()) {
              case "wndow-sctn_3":
                copyElementBaseCSS.width = copyElementBaseCSS.width - 292;
              break;
              
              case "wndow-sctn_4":
                copyElementBaseCSS.width = copyElementBaseCSS.width - 292;
              break;
            }
              
            $(".wndow").children(copyElementSelectorString).css("display", "block");
              inc_2++;
            }
            
            $(".wndow").children(copyElementSelectorString).animate(copyElementBaseCSS, menuTransitionValue);;
          
          }*/
        
        $("#info").toggle("fade");
        // $(".copy").css("display", "block");
        
        copyElementsURLIndexValueNum = window.location.hash.indexOf("copy");
        
        if (window.location.hash !== "")  {
          window.location.hash = window.location.hash.slice(0, (copyElementsURLIndexValueNum - 1));
        } 
         $(".sctn_nav").toggle("fade");
         $(".wndow").animate(windowElementBaseCSS, menuTransitionValue);
         $("#cntainr").animate(otherElementsBaseCSS, menuTransitionValue);
      } else {
        $("#menu").animate(menuClickCSS, menuTransitionValue);
        $("#options").animate(optionsElementClickCSS, menuTransitionValue);
        $("#options").show("fade", "linear", menuTransitionValue);
        $("#bkgrnd").animate(otherElementsClickCSS, menuTransitionValue); 
        $("#bkgrnd > div").animate(otherElementsClickCSS, menuTransitionValue);
        $("#info").toggle("fade");
        $(".headr").animate(windowElementClickCSS, menuTransitionValue);
        
        $(".sctn_nav").toggle("fade");
        
        
        $(".copy").each(
          function () {
            if ($(this).css("display") === "block") {
              copyElementPlace_Array.push(inc);
            }
            
            inc++;
            
            switch ($(this).parent("div").attr("id")) {
              case "wndow-sctn_3":
                copyElementClickCSS.width = copyElementClickCSS.width - 292;
              break;
              
              case "wndow-sctn_4":
                copyElementClickCSS.width = copyElementClickCSS.width - 292;
              break;
            }
        
            $(this).css(copyElementClickCSS);
          }
        );  
        
        
        
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
        
        $(".copy").css("display", "none");
        $(".wndow").animate(windowElementClickCSS, menuTransitionValue); 
        $("#cntainr").animate(otherElementsClickCSS, menuTransitionValue);
        
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
					var currentLocation = $(window).scrollTop();
				  var wndowHeight = $("div.wndow").height();
          var locationDifferenceValue = new Number();
          
          animateNextSctnElements(sectionElement, "click");
          
          if (sectionElementID === "prev-sctn")  {
            if (Math.floor(currentLocation / wndowHeight) === 0)  {
              locationDifferenceValue = -wndowHeight;
            } else  {
              locationDifferenceValue = -((wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight);
            }
          } else {
            if (Math.floor(currentLocation / wndowHeight) === 0)  {
              locationDifferenceValue = wndowHeight;
            } else  {
              locationDifferenceValue = (wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight;
             }
          }
          
          var newLocation = currentLocation + locationDifferenceValue;
          
          $("body").animate({scrollTop: newLocation}, 750, "easeOutQuad", 
            function() {
              animateNextSctnElements(sectionElement, "base");
            }
          );
         
        break;
			}
		}

		function fadeSctnNav(mouseState, sctnNavID) {
			var menuOptionClass = new String();
      
      menuOptionClass = mouseState + "-sctn_nav";
			
      //I.
			$(sctnNavID).fadeTo(75, 0,
				function () {
					$(sctnNavID).attr("class", menuOptionClass);
					$(sctnNavID).fadeTo(75, 1);
				}
				);
		} // END OF FUNCTION fadeSctnNav

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


