// menu-test.js
var menuTransitionTime = 500;

function menuLinkHoverState() {
  var pageDimensions_Array = parseWindowDimensions();
  
  var menuScaleValue = new Number();
  var backgroundPositionNum = new Number();
  
  var menuClassString = new String();
  var hoverState = new String();
  var backgroundPositionValue = new String();
  var backgroundClickStateValue = new String();
  
  backgroundPositionValue = $("#menu-link").css("backgroundPositionY");
  
  if (backgroundPositionValue.indexOf("-") === 0) {
    backgroundPositionNum = (backgroundPositionValue.slice(1, backgroundPositionValue.indexOf("px")) * 1);  
  } else {
    backgroundPositionNum = 0;
  }
  
  if (pageDimensions_Array[0] === 980)  {
    backgroundPositionNum = backgroundPositionNum / 2;
  } 
  
  backgroundClickStateValue = backgroundPositionNum + "px";
  
  // window.alert("backgroundClickStateValue = " + backgroundClickStateValue);
  switch (backgroundClickStateValue) {
    case "0px":
      // window.alert("$(\"#menu\").css(\"left\") = " + $("#menu").css("left"));
      if ($("#menu").css("left") !== "0px")  {
        hoverState = "click_2";
      } else {
        hoverState = "hover";
      }
    break;
    
    case "-50px":
      // window.alert("$(\"#menu\").css(\"left\") = " + $("#menu").css("left"));
      if ($("#menu").css("left") !== "0px")  {
        hoverState = "base";
      } else {
        hoverState = "click_1";
      }
    break;
    
    case "-100px":
      hoverState = "click_2";
    break;
    
    case "-150px":
      hoverState = "base";
    break;
  }
  
  menuClassString = "menu-link-" + hoverState;
  
  /*if (hoverState === "click") {
    menuTransitionTime = menuTransitionTime / 2;
  }*/
  
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
    $("#options").animate({"opacity": 0, "left": -($("#menu").width())}, (menuTransitionTime / 1.5), 
      function () {
        $("#options, #options > span").css("display", "none");
        $("#menu, #menu-brdr, #menu-bkgrnd").animate({"left": -($("#menu").width())}, (menuTransitionTime / 1.5));
      });
    
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
      window.location.hash = window.location.hash.substring(1, window.location.hash.indexOf("?copyValues")); 
    }
  } else  {
    $("#menu, #menu-brdr, #menu-bkgrnd").animate({"left": "0px"}, (menuTransitionTime / 1.25), 
      function () {
        $("#options, #options > span").css("display", "block");
        $("#options").animate({"opacity": 1, "left": "0px"}, (menuTransitionTime / 1.5));
      }
    );
    
    inc_copyVisible = 0;
    
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
    
    if (copyVisibleURLString !== "copyValues=")  {
      copyVisibleURLString = window.location.hash + "?" + copyVisibleURLString;
    }
    
    setTimeout(function () {window.location.hash = copyVisibleURLString;}, menuTransitionTime);
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
        menuLinkHoverState();
      }
    );

    $("#menu-link").on("mouseout", 
      function () {
        if (($("#menu-link").hasClass("menu-link-click_2")) === false) {
          menuLinkHoverState(); 
        }
      }
    );
    
    $("#menu-link").on("click", 
      function () {
        slideMenu();
        
        menuLinkHoverState();
      }
    );
    
    $("#options > span").on("click",
      function () {
        
        var sectionValue = new String();
        
        sectionValue = $(this).attr("id");
        $(this).animate({backgroundColor: "#ccc", color: "#000"}, (menuTransitionTime / 4), 
          function () {
            $(this).animate({backgroundColor: "#000", color: "#fff"}, (menuTransitionTime / 2), 
              function () {
                slideMenu();
                
                setTimeout(
                  function () {
                    if (sectionValue !== "sctn_main") {
                      window.location.hash = sectionValue + "?pos=0";  
                    } else  {
                      window.location.hash = sectionValue;  
                    }
                  }, (menuTransitionTime * 1.5)
                );
              }
            );
          }
        );
        
        
        
        
        // setTimeout(slideMenu, (menuTransitionTime / 2));
        
        /*if ($(this).attr("id") !== "sctn_main") {
          window.location.hash = $(this).attr("id") + "?pos=0";  
        } else  {
          window.location.hash = $(this).attr("id");  
        }*/
        
        menuLinkHoverState();
        
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
        
        if ($(this).attr("id") === "prev-sctn")  {
          locationDifferenceValue = ((Math.floor(currentLocation / wndowHeight) - 1) * wndowHeight) - currentLocation;
        } else {
          if ((Math.floor(currentLocation / wndowHeight) === 0) && (window.location.hash == ""))  {
            locationDifferenceValue = 0;
          } else  {
            locationDifferenceValue = ((Math.floor(currentLocation / wndowHeight) + 1) * wndowHeight) - currentLocation;
          }
        }
        
        newLocation = currentLocation + locationDifferenceValue;
        
        if (currentLocation === 0 && window.location.hash === "#sctn_main") {
          sctnValue = 1;
        } else {
          sctnValue = Math.floor(newLocation / wndowHeight);  
        }
        
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
            }
          }
          
          URLHashString = "sctn_main";
          
        }
        
        window.location.hash = URLHashString;
      }
    );
    
    $(".sctn_nav > div > span").on("click",
			function () {
        var sctnNavVisibleCSS = new Object();
        var sctnNavElement = new String();
        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
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
			}
		);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				
        $(currentSctnNavElement).css("display", "none");
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
    var windowViewMargin = new Number(100);
    
    $(window).on("scroll", 
      function () {
        
        wndowHeight = $(".wndow").height(); 
        
        currentPosition = $(window).scrollTop();  
        
        if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
            (window.location.hash.indexOf("sctn_main") === -1) && 
            (currentPosition > 1)) {
          animateInfoElement();
        }
        
        if ((currentPosition === 0) && 
            (window.location.hash.indexOf("sctn_main") === -1)) {
          window.location.hash = "#sctn_main";
          
        }
        // window.alert("currentPosition = " + currentPosition);
        // window.alert("((" + wndowHeight + " - " + windowViewMargin + ") = " + (wndowHeight - windowViewMargin));
        // window.alert("((" + wndowHeight + " * 2) + " + windowViewMargin + ") = " + ((wndowHeight * 2) + windowViewMargin));
        if ((currentPosition >= wndowHeight) && 
            (currentPosition < wndowHeight + windowViewMargin) && 
            (window.location.hash.indexOf("sctn_1") === -1))  {
              
          sortCopyElements("sctn_1");
        } 
        
        if ((currentPosition >= wndowHeight * 2) && 
            (currentPosition < (wndowHeight * 2) + windowViewMargin) && 
            (window.location.hash.indexOf("sctn_2") === -1))  {
           sortCopyElements("sctn_2");
        }   
        
        if ((currentPosition >= wndowHeight * 3) && 
            (currentPosition < (wndowHeight * 3) + windowViewMargin) && 
            (window.location.hash.indexOf("sctn_3") === -1))  {
          sortCopyElements("sctn_3");
        } 
        
        if ((currentPosition >= wndowHeight * 4) && 
            (currentPosition < (wndowHeight * 4) + windowViewMargin) && 
            (window.location.hash.indexOf("sctn_4") === -1))  {
           sortCopyElements("sctn_4");
        }
        
        if ((currentPosition >= wndowHeight * 5) && 
            (currentPosition < (wndowHeight * 5) + windowViewMargin) && 
            (window.location.hash.indexOf("sctn_5") === -1))  {
          sortCopyElements("sctn_5");
        }
      
        if ((currentPosition >= wndowHeight * 6) && 
            (window.location.hash.indexOf("sctn_6") === -1))  {
          sortCopyElements("sctn_6");
        }  
      }
    );
    
    $(window).on("hashchange",
      function () {
        if (window.location.hash.indexOf("copyValues=") === -1) {
          animateWindowPanes();
        }
      }
    );
  }
);

