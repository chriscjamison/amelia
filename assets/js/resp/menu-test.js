// menu-test.js
var menuTransitionTime = 500;

function menuLinkHoverState(hoverState) {
  var menuClassString = new String();
  
  menuClassString = "menu-link-" + hoverState;
  
  if (hoverState === "click") {
    menuTransitionTime = menuTransitionTime / 2;
  }
  
  $("#menu-link").fadeTo((menuTransitionTime / 2), 0, 
    function () {
      $("#menu-link").removeClass();
      $("#menu-link").addClass(menuClassString);
      $("#menu-link").fadeTo((menuTransitionTime / 2), 1);
    }
  );
} // END OF FUNCTION menuLinkHoverState

function slideMenu()  {
  var inc_copyVisible = new Number();
  var inc_copy = new Number();
  var inc_copyURLValues = new Number();
  var inc_headrVisible = new Number();
  
  var copyVisibleURLString = new String();
  
  var copyVisibleElements_Array = new Array();
  var copyElementsURLString_Array = new Array();
  var copyElementValues_Array = new Array();
  
  // window.alert("$(\"#menu\").css(\"left\") = " + $("#menu").css("left"));
  $("#menu").css("height", $(window).height());
  $("#menu-bkgrnd").css("height", $(window).height());
  if ($("#menu").css("left") === "0px") {
    $("#menu, #menu-brdr, #menu-bkgrnd").css("left", -($("#menu").width()));
    $("#options").css({"display": "none", "opacity": 0, "left": -($("#menu").width())})
    
    inc_copyVisible = 0;
    
    copyElementsURLString_Array = window.location.hash.split("=");
    
    copyElementValues_Array = copyElementsURLString_Array[copyElementsURLString_Array.length - 1].split(",");

    $(".copy").each(
      function () {
        for (inc_copy = 0; inc_copy < copyElementValues_Array.length; inc_copy++) {
          if (inc_copyVisible.toString() === copyElementValues_Array[inc_copy])  {
            $(this).css("display", "block");
            
            $(".headr").each(
              function()  {
                if (inc_headrVisible.toString() === copyElementValues_Array[inc_copy])  {
                  $(this).css("display", "table");
                }
                
                inc_headrVisible++;
              }
            );
          }
        }
        
        inc_copyVisible++;
      }
    );
    
    $("#cntainr").css({"width": $(window).width(), "left": "0px"});
    $(".wndow").css("width", $(window).width());
    $("#bkgrnd, #bkgrnd > div").css({"width": $(window).width(), "left": "0px"});
    $(".sctn_nav").css("display", "block");
    $(".headr").css("display", "table");
    $("#prev-sctn, #next-sctn").css("display", "block");
    
    if (window.location.hash.indexOf("?") === -1 ) {
      window.location.hash = "";  
    } else {
      
      window.location.hash = window.location.hash.substring(1, window.location.hash.indexOf("?")); 
    }
    
    // window.alert("window.location.hash.substring(1, (window.location.hash.indexOf(\"?\") - 1)) = " + window.location.hash.substring(1, (window.location.hash.indexOf("?"))));
    
    
    
  } else  {
    $("#menu, #menu-brdr, #menu-bkgrnd").css("left", "0px");
    $("#options").css({"display": "block", "opacity": 1, "left": "0px"})
    
    inc_copyVisible = 0;
        
    $(".copy").each(
      function () {
        // window.alert("$(this).css(\"display\") = " + $(this).css("display"));
        
        if ($(this).css("display") === "block") {
          copyVisibleElements_Array.push(inc_copyVisible);
        }
        
        inc_copyVisible++;
      }
    );
    
    copyVisibleURLString = "copyValues=";
    
    for (inc_copyVisible = 0; inc_copyVisible < copyVisibleElements_Array.length; inc_copyVisible++)  {
      copyVisibleURLString = copyVisibleURLString + copyVisibleElements_Array[inc_copyVisible];
      
      if (inc_copyVisible < copyVisibleElements_Array.length - 1) {
        copyVisibleURLString = copyVisibleURLString + ",";
      }
    }
    
    $("#cntainr, #bkgrnd, #bkgrnd > div").css({"width": ($(window).width() - $("#menu").width()), "left": $("#menu").width()});
    $(".wndow").css("width", ($(window).width() - $("#menu").width()));
    $("#info").css("display", "none");
    $(".copy, .headr, .sctn_nav, #prev-sctn, #next-sctn").css("display", "none");
    
    if (window.location.hash !== "")  {
      copyVisibleURLString = window.location.hash + "?" + copyVisibleURLString;
    }
    
    window.location.hash = copyVisibleURLString;
  }
}


function displayVerticalNav() {
  var currentPosition = new Number();
  var wndowHeight = new Number();
  var pageScrollMargin = new Number();
  // window.alert("displayVerticalNav");
  pageScrollMargin = 5;
  wndowHeight = $(".wndow").height();
  currentPosition = $(window).scrollTop();
  
  if (currentPosition === 0)  {
    $("#prev-sctn").css({"opacity": 0, "display": "none"});
  } else {
    if ($("#prev-sctn").css("display") === "none")  {
      $("#prev-sctn").css({"opacity": 1, "display": "block"});
    }
    
    if (currentPosition >= ($("#cntainr").height() - wndowHeight) - pageScrollMargin)  {
      $("#next-sctn").css({"opacity": 0, "display": "none"});
    } else {
      if ($("#next-sctn").css("display") === "none") {
        $("#next-sctn").css({"opacity": 1, "display": "block"});
      }
    }
  }
}

$(document).ready(
  function () {
    $("#menu-link").on("mouseover", 
      function () {
        menuLinkHoverState("hover");
      }
    );

    $("#menu-link").on("mouseout", 
      function () {
        if (($("#menu-link").hasClass("menu-link-click_2")) === false) {
          menuLinkHoverState("base"); 
        }
      }
    );
    
    $("#menu-link").on("click", 
      function () {
        if (($("#menu-link").hasClass("menu-link-hover")) === true)  {
          menuLinkHoverState("click");
          menuLinkHoverState("click_2");
          
          slideMenu();
        } else  {
          menuLinkHoverState("base");
          
          slideMenu();
        }
      }
    );
    
    $("#options > span").on("click",
      function () {
        slideMenu();
        
        if ($(this).attr("id") !== "sctn_main") {
          window.location.hash = $(this).attr("id") + "?pos=0";  
        } else  {
          window.location.hash = $(this).attr("id");  
        }
        
      }
    );
    
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        var currentLocation = new Number();
        var wndowHeight = new Number();
        var locationDifferenceValue = new Number();
        var newLocation = new Number();
        var sctnValue = new Number();
        
        var URLHashString = new String();
        
        var pageDimensions_Array = new Array();
        
        
        
        currentLocation = $(window).scrollTop();
        
        
        if (window.navigator.userAgent.indexOf("Mobile") === -1 && window.navigator.userAgent.indexOf("Tablet") === -1) {
          wndowHeight = $(".wndow").height();
        } else  {
          wndowHeight = $("#wndow-sctn_1").height();
        }
        
        // window.alert("Math.floor(currentLocation / wndowHeight) = " + (Math.floor(currentLocation / wndowHeight)));
        
        if ($(this).attr("id") === "prev-sctn")  {
          if (Math.floor(currentLocation / wndowHeight) === 0)  {
            locationDifferenceValue = 0;
          } else  {
            locationDifferenceValue = -((wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight);
          }
        } else {
          if (Math.floor(currentLocation / wndowHeight) === 0)  {
            locationDifferenceValue = 0;
          } else  {
            locationDifferenceValue = (wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight;
          }
        }
        
        newLocation = currentLocation + locationDifferenceValue;
        
        if (currentLocation === 0 && window.location.hash === "#sctn_main") {
          sctnValue = 1;
          // window.alert("true");
        } else {
          // window.alert("false");
          sctnValue = Math.floor(newLocation / wndowHeight);  
        }
        
        
        // window.alert("Math.floor(" + newLocation + " / " + wndowHeight + ") = " + Math.floor(newLocation/wndowHeight));
        // window.alert("currentLocation = " + currentLocation);
        window.alert("sctnValue = " + sctnValue);
        // window.alert("$(\"#info\").css(\"t op\") = " + $("#info").css("top"));
        // window.alert("window.location.hash.indexOf(\"sctn_main\") = " + window.location.hash.indexOf("sctn_main"));
        if (sctnValue > 0) {
          if (window.location.hash.indexOf("pos=") >= 0)  {
            URLHashString = "sctn_" + sctnValue + "?pos=" + window.location.hash.charAt(window.location.hash.indexOf("pos=") + 4);
          } else {
            URLHashString = "sctn_" + sctnValue + "?pos=0";
          }
        } else {
          if (window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) {
            if ((sctnValue === 0) && 
                (currentLocation === 0) && 
                ($(window).width() === 980) && 
                ($("#info").css("top") === "0px")) {
                  animateInfoElement();
                  $("#menu, #menu-bkgrnd, #menu-brdr, #options").css("display", "block");
                  $("#menu-link").animate({"opacity": 1}, 800);
             }
          }
          
          URLHashString = "sctn_main";
          
        }
        
        // window.alert("URLHashString = " + URLHashString);
        // window.alert("sctnValue * wndowHeight = " + (sctnValue * wndowHeight));
        
        /*
        
        if (URLHashString !== "sctn_main" && window.location.hash !== "") {
          $("body").animate({scrollTop: (sctnValue * wndowHeight)}, (timeValue * 2), 
            function () {
               window.location.hash = URLHashString;
            }
          );  
        } else {
          $("body").animate({scrollTop: 0}, (timeValue * 2), 
            function () {
               window.location.hash = URLHashString;
            }
          );
        }*/
        
        window.location.hash = URLHashString;
      }
    );
    
    $(".sctn_nav > div > span").on("click",
			function () {
        var sctnNavVisibleCSS = new Object();
        var sctnNavElement = new String();
        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > div"
        
        // window.alert("$(this).parent().parent().attr(\"id\") = " + $(this).parent().parent().attr("id"));
        // window.alert("$(" + sctnNavElement + ").css(\"display\") = " + $(sctnNavElement).css("display"));
        
        if ($(sctnNavElement).css("display") === "none")  {
          sctnNavVisibleCSS = {
            "display": "block"
          };  
        } else {
          sctnNavVisibleCSS = {
            "display": "none"
          };
        }
        
        $(sctnNavElement).css(sctnNavVisibleCSS);  
        
        
				/*var currentSctnNavID = $(this).parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				
				if ($(currentSctnNavElement).css("display") === "none") {
					fadeSctnNav("click", currentSctnNavIDString);

					fadeSctnNavOptions(currentSctnNavElement);
				} else {
					fadeSctnNav("active", currentSctnNavIDString);
					
					fadeSctnNavOptions(currentSctnNavElement);
				}*/
			}
			);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				
        $(currentSctnNavElement).css("display", "none");
        
				// fadeSctnNav("base", currentSctnNavIDString);
				
				// fadeSctnNavOptions(currentSctnNavElement);
      }
		);
    
    
    $("input#sctn_1-start").on("click", 
      function () {
        formData("sctn_1", "start");
      }
    );
    
    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1";
      }
    );
    /*
    $("input#sctn_5-start").on("click", 
      function () {
        // window.location.hash = "#sctn_5?pos=1";
        
        formData("sctn_5", "start");
      }
    );
    
    $("input#sctn_5-submit").on("click", 
      function () {
        formData("sctn_5", "submit");
        
        // window.location.hash = "#sctn_5?pos=2";
      }
    );
    
    $("input#sctn_6-start").on("click", 
      function () {
        // window.location.hash = "#sctn_5?pos=1";
        
        formData("sctn_6", "start");
      }
    );
  
    $("input#sctn_1-start").on("click", 
      function () {
        window.location.hash = "#sctn_1?pos=1";
      }
    );*/
    
    var wndowHeight = new Number();
    var currentPosition = new Number();
    var windowViewMargin = new Number();
        
   
   
    windowViewMargin = 150;
    // window.alert("wndowHeight = " + wndowHeight);
    $(window).on("scroll", 
      function () {
        
        wndowHeight = $(".wndow").height(); 
        
        currentPosition = $(window).scrollTop();  
        
        if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
            (window.location.hash.indexOf("sctn_main") === -1) && 
            (currentPosition > 1)) {
          animateInfoElement();
        }
        
        if ((currentPosition < wndowHeight) && 
            (window.location.hash.indexOf("sctn_main") === -1)) {
          // setupWindow(windowViewMargin);
          // animateWindowPanes();
          
        }
        
        
        if (((currentPosition >= (wndowHeight - windowViewMargin)) && 
            (currentPosition <= (wndowHeight * 2))) && 
            (window.location.hash.indexOf("sctn_1") === -1))  {
              animateWindowPanes();
              // window.alert("animateWindowPanes");
              if (currentPosition === wndowHeight) {
                animateWindowPanes();
                // window.alert("setupWindow()");
                // setupWindow(windowViewMargin);
              }
        } 
        
        if (((currentPosition > (wndowHeight * 2)) && 
            (currentPosition < (wndowHeight * 3))) && 
            (window.location.hash.indexOf("sctn_2") === -1))  {
           animateWindowPanes();
        }   
        
        if (((currentPosition > wndowHeight * 3) && 
            (currentPosition < (wndowHeight * 4))) && 
            (window.location.hash.indexOf("sctn_3") === -1))  {
          // setupWindow(windowViewMargin);
        } 
        
        if ((currentPosition > wndowHeight * 4) && 
            ((currentPosition < (wndowHeight * 5))) && 
            (window.location.hash.indexOf("sctn_4") === -1))  {
           setupWindow(windowViewMargin);
        }
        
        if (((currentPosition > wndowHeight * 5) && 
            (currentPosition < (wndowHeight * 6))) && 
            (window.location.hash.indexOf("sctn_5") === -1))  {
         setupWindow(windowViewMargin);
        }
      
        if ((currentPosition > wndowHeight * 6) && 
            (window.location.hash.indexOf("sctn_6") === -1))  {
          setupWindow(windowViewMargin);
          
        }  
      }
    );
    
    $(window).on("hashchange",
      function () {
        if (window.location.hash.indexOf("copyValues=") === -1) {
          // setupWindow(windowViewMargin);
          
          animateWindowPanes();
        }
      }
    );
  }
);

