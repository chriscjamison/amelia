// nav.js
var navTransitionTime = 500;

function navLinkHoverState() {
  var pageDimensions_Array = parseWindowDimensions();
  
  var navScaleValue = new Number();
  var backgroundPositionNum = new Number();
  
  var navClassString = new String();
  var hoverState = new String();
  var backgroundPositionValue = new String();
  var backgroundClickStateValue = new String();
  
  backgroundPositionValue = $("#nav-link").css("backgroundPositionY");
  
  if (backgroundPositionValue.indexOf("-") === 0) {
    backgroundPositionNum = (backgroundPositionValue.slice(1, backgroundPositionValue.indexOf("px")) * 1);  
  } else {
    backgroundPositionNum = 0;
  }
  
  if (pageDimensions_Array[0] === 980)  {
    backgroundPositionNum = backgroundPositionNum / 2;
  } 
  
  backgroundClickStateValue = backgroundPositionNum + "px";
  
  switch (backgroundClickStateValue) {
    case "0px":
     if ($("#options").css("display") === "block")  {
        hoverState = "click_2";
      } else {
        hoverState = "hover";
      }
    break;
    
    case "-50px":
     if ($("#options").css("display") === "block")  {
        hoverState = "click_1";
      } else {
        hoverState = "base";
      }
    break;
    
    case "-100px":
      hoverState = "click_2";
    break;
    
    case "-150px":
      hoverState = "base";
    break;
  }
  
  navClassString = "nav-link-" + hoverState;
  
  $("#nav-link").fadeTo((navTransitionTime / 2), 0, 
    function () {
      $("#nav-link").removeClass();
      $("#nav-link").addClass(navClassString);
      $("#nav-link").fadeTo((navTransitionTime / 2), 1);
    }
  );
} // END OF FUNCTION navLinkHoverState

function slideNav()  {
  var inc_copyVisible = new Number();
  var inc_copy = new Number();
  var inc_copyURLValues = new Number();
  var inc_headrVisible = new Number();
  
  var copyVisibleURLString = new String();
  var copyElementVisibleString = new String();
  var wndowElementValueString = new String();
  var copyVisibleElements_Array = new Array();
  var copyElementsURLString_Array = new Array();
  var copyElementValues_Array = new Array();
  
  $("nav").css("height", $(window).height());
  $("#nav-bkgrnd").css("height", $(window).height());
  if ($("nav").css("left") === "0px") {
    $("#options").animate({"opacity": 0, "left": -($("nav").width())}, (navTransitionTime / 1.5), 
      function () {
        $("#options, #options > span").css("display", "none");
        $("nav, #nav-brdr, #nav-bkgrnd").animate({"left": -($("nav").width())}, (navTransitionTime / 1.5));
      });
    
    inc_copyVisible = 0;
    
    copyElementsURLString_Array = window.location.hash.split("=");
    
    copyElementValues_Array = copyElementsURLString_Array[copyElementsURLString_Array.length - 1].split(",");
    
    for (var inc_copyURLValues = 0; inc_copyURLValues < copyElementValues_Array.length; inc_copyURLValues++)  {
      wndowElementValueString = "#wndow-sctn_" + (inc_copyURLValues + 1);
     
      if (isNaN(copyElementValues_Array[inc_copyURLValues] * 1) === false)  {
        copyElementVisibleString = ".copy:nth-child(" + ((copyElementValues_Array[inc_copyURLValues] * 1) + 3) + ")";
        
        $(wndowElementValueString).children(copyElementVisibleString).css("display", "block");  
      }
      
      
    }
    
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
    $("nav, #nav-brdr, #nav-bkgrnd").animate({"left": "0px"}, (navTransitionTime / 1.25), 
      function () {
        $("#options, #options > span").css("display", "block");
        $("#options").animate({"opacity": 1, "left": "0px"}, (navTransitionTime / 1.5));
      }
    );
    
    inc_copyVisible = 0;
    
    copyVisibleURLString = "copyValues=";
    var copyElementVisibleString = new String();
    copyVisibleElements_Array = $(".copy");
    $(".wndow").each(
      function () { 
        inc_copyVisible = 0;
        copyElementVisibleString = ".copy:nth-child(3)";
        
        if ($(this).children(".copy").length > 0) {
          if ($(this).children(copyElementVisibleString).css("display") === "none") {
            while (inc_copyVisible < $(this).children(".copy").length && $(this).children(copyElementVisibleString).css("display") === "none") { 
              inc_copyVisible++;
              copyElementVisibleString = ".copy:nth-child(" + (inc_copyVisible + 3) + ")";
            }   
          } else {
            if ($(this).attr("id") === "wndow-sctn_1") {
              if (inc_copyVisible === 0)  {
                copyVisibleURLString = copyVisibleURLString + "0";
              } else {
                copyVisibleURLString = copyVisibleURLString + (inc_copyVisible--);
              }
            } else {
              if (inc_copyVisible === 0)  {
                copyVisibleURLString = copyVisibleURLString + ",0";
              } else {
                copyVisibleURLString = copyVisibleURLString + ", " + (inc_copyVisible--);
              }
              
            }
          }
          
          if (inc_copyVisible === $(this).children(".copy").length) {
            if ($(this).attr("id") === "wndow-sctn_1") {
              copyVisibleURLString = copyVisibleURLString + "-";
            } else {
              copyVisibleURLString = copyVisibleURLString + "," + "-";  
            }
          } else {
            if (inc_copyVisible > 0)  {
              if ($(this).attr("id") === "wndow-sctn_1") {
                copyVisibleURLString = copyVisibleURLString + (inc_copyVisible);
              } else {
                copyVisibleURLString = copyVisibleURLString + "," + (inc_copyVisible);
              }
            }
          }
        }
      }
    );
    
    $("#cntainr, #bkgrnd, #bkgrnd > div").css({"width": ($(window).width() - $("nav").width()), "left": $("nav").width()});
    $(".wndow").css("width", ($(window).width() - $("nav").width()));
    $("#info").css("display", "none");
    $(".copy, .headr, .sctn_nav, #prev-sctn, #next-sctn").css("display", "none");
    
    if (window.location.hash.indexOf("sctn") === -1)  {
      copyVisibleURLString = window.location.hash + copyVisibleURLString;
    } else {
      copyVisibleURLString = window.location.hash + "?" + copyVisibleURLString;
    }
    
    setTimeout(function () {window.location.hash = copyVisibleURLString;}, navTransitionTime);
  }
}


function displayVerticalNav() {
  var currentPosition = new Number();
  var wndowHeight = new Number();
  var pageScrollMargin = new Number();

  var sctnOnCSS = new Object();
  var sctnOffCSS = new Object();

  sctnOnCSS = {
    display: "block",
    opacity: 1
  };

  sctnOffCSS = {
    display: "none", 
    opacity: 0
  }
  
  pageScrollMargin = 5;
  wndowHeight = $(".wndow").height();
  currentPosition = $(window).scrollTop();
  
  if (currentPosition === 0)  {
    $("#prev-sctn").css(sctnOffCSS);
  } else {
    if ($("#prev-sctn").css("display") === "none")  {
      $("#prev-sctn").css(sctnOnCSS);
    }
    
    if (currentPosition >= ((wndowHeight * $(".wndow").length) - wndowHeight))  {
      $("#next-sctn").css(sctnOffCSS);
    } else {
      if ($("#next-sctn").css("display") === "none") {
        $("#next-sctn").css(sctnOnCSS);
      }
    }
  }
}

function animateSctnNav(sctnNavElementString) {
  var sctnNavLinkElementString = new String();
  
  var sctnNavBackgroundPositionYValue = new String();

  var sctnNavBaseCSS = new Object();
  var sctnNavHoverCSS = new Object();
  var sctnNavClick1CSS = new Object();
  var sctnNavClick2CSS = new Object();

  var respSctnNavBaseCSS = new Object();
  var respSctnNavClickCSS = new Object();
        
  sctnNavBaseCSS = {
    backgroundPositionY: "0px"
  };

  sctnNavHoverCSS = {
    backgroundPositionY: "-35px"
  };

  sctnNavCLick1CSS = {
    backgroundPositionY: "-70px"
  };

  sctnNavClick2CSS = {
    backgroundPositionY: "-105px"
  };

  respSctnNavBaseCSS = {
    backgroundPositionY: "0px", 
    backgroundColor: "#000"
  };

  respSctnNavClickCSS = {
    backgroundPositionY: "-210px", 
    backgroundColor: "#666"
  };



  // window.alert("sctnNavElementString = " + sctnNavElementString);
  sctnNavLinkElementString = sctnNavElementString.slice(0, 12) + " > div > div";
  
  sctnNavBackgroundPositionYValue = $(sctnNavElementString).css("backgroundPositionY");
// window.alert("sctnNavLinkElementString = " + sctnNavLinkElementString);
  // if ($(sctnNavElementString).css("backgroundPositionY") !== "-105px" && 
      // $(sctnNavLinkElementString).css("display") === "none")  {
    $(sctnNavElementString).css("opacity", 0);
  // }
  
  // window.alert("sctnNavBackgroundPositionYValue = " + sctnNavBackgroundPositionYValue);
  // window.alert("$(\"" + sctnNavLinkElementString + "\").css(\"display\") = " + $(sctnNavLinkElementString).css("display"));
  if (window.navigator.userAgent.indexOf("Mobile") === -1 && 
      window.navigator.userAgent.indexOf("Tablet") === -1)  {
    if (sctnNavBackgroundPositionYValue === "-35px" && 
        $(sctnNavLinkElementString).css("display") === "block") {
      $(sctnNavElementString).css(sctnNavClick1CSS);
      setTimeout(function () {$(sctnNavElementString).css("opacity", 0)}, (navTransitionTime / 4));
      $(sctnNavElementString).css(sctnNavClick2CSS);
    } else {
      if (sctnNavBackgroundPositionYValue === "0px" || 
          sctnNavBackgroundPositionYValue === "0%") {
        $(sctnNavElementString).css(sctnNavHoverCSS);
      } else {
        if ($(sctnNavLinkElementString).css("display") === "none") {
          $(sctnNavElementString).css(sctnNavBaseCSS);
        }
        
      }
    }
  } else {
    if (sctnNavBackgroundPositionYValue === "0px" && 
        $(sctnNavLinkElementString).css("display") === "block") {
      $(sctnNavElementString).css(respSctnNavClickCSS);
    } else {
      $(sctnNavElementString).css(respSctnNavBaseCSS);
    }
  }
  
  $(sctnNavElementString).fadeTo((navTransitionTime / 2), 1);
}

function animateSctnNavLinks(sctnNavLinkElement) {
  if ($(sctnNavLinkElement).css("display") === "none")  {
    $(sctnNavLinkElement).css("opacity", 0);
    $(sctnNavLinkElement).css("display", "block");
    $(sctnNavLinkElement).fadeTo((navTransitionTime / 2), 1);
  } else {
    $(sctnNavLinkElement).fadeTo((navTransitionTime / 2), 1);
    $(sctnNavLinkElement).css("display", "none");
    
  }
} 

$(document).ready(
  function () {
    $("#nav-link").on("mouseover", 
      function () {
        navLinkHoverState();
      }
    );

    $("#nav-link").on("mouseout", 
      function () {
        navLinkHoverState(); 
      }
    );
    
    $("#nav-link").on("click", 
      function () {
        slideNav();
        
        navLinkHoverState();
      }
    );
    
    $("#options > span").on("click",
      function () {
        var sectionValue = new String();
        
        sectionValue = $(this).attr("id");
        $(this).animate({backgroundColor: "#ccc", color: "#000"}, (navTransitionTime / 4), 
          function () {
            $(this).animate({backgroundColor: "#000", color: "#fff"}, (navTransitionTime / 2), 
              function () {
                slideNav();
                
                setTimeout(
                  function () {
                    if (sectionValue !== "sctn_main") {
                      window.location.hash = sectionValue + "?pos=0";  
                    } else  {
                      window.location.hash = sectionValue;  
                    }
                  }, (navTransitionTime * 1.5)
                );
              }
            );
          }
        );
        
        navLinkHoverState();
        
      }
    );
    
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        var currentLocation = new Number();
        var wndowHeight = new Number();
        var locationDifferenceValue = new Number();
        var newLocation = new Number();
        var sctnValue = new Number();
        var sctnBackgroundPositionString = new String();
        var inc_copyVisible = new Number();
        var copyElementVisibleString = new String();
        var wndowElementValueString = new String();
        var URLHashString = new String();
        
        var pageDimensions_Array = new Array();
        
        currentLocation = $(window).scrollTop();
        
        wndowHeight = $("#wndow-sctn_1").height();
        
        if ($(this).attr("id") === "prev-sctn")  {
          locationDifferenceValue = ((Math.floor(currentLocation / wndowHeight) - 1) * wndowHeight) - currentLocation;
          
          sctnBackgroundPositionString = "0px -111px";
        } else {
          if ((Math.floor(currentLocation / wndowHeight) === 0) && (window.location.hash == ""))  {
            locationDifferenceValue = 0;
          } else  {
            locationDifferenceValue = ((Math.floor(currentLocation / wndowHeight) + 1) * wndowHeight) - currentLocation;
          }
          
           sctnBackgroundPositionString = "0px -234px";
        }
        
        newLocation = currentLocation + locationDifferenceValue;
        
        if (currentLocation === 0 &&
            $("#info").css("top") !== "0px" && 
            $("#next-sctn").css("bottom") === "8.25em")  {
          sctnValue = 0;
        } else {
          if (currentLocation === 0 && 
              window.location.hash === "#sctn_main")  {
            sctnValue = 1;
          } else  {
            sctnValue = Math.floor(newLocation / wndowHeight);
          }
        }



        /*if (currentLocation === 0 && 
            window.location.hash === "#sctn_main" && 
            (window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) ) {
          sctnValue = 1;
        } else {
          if (currentLocation === 0 && 
              $("#info").css("top") !== "0px")  {
            sctnValue = 1;
          } else {
            sctnValue = Math.floor(newLocation / wndowHeight);  
          }
        }*/
        
        if (sctnValue > 0) {
          inc_copyVisible = 0;
          wndowElementValueString = "#wndow-sctn_" + sctnValue;
          copyElementVisibleString = ".copy:nth-child(3)";
          
          while (inc_copyVisible < $(wndowElementValueString).children(".copy").length && 
                 $(wndowElementValueString).children(copyElementVisibleString).css("display") === "none") { 
            inc_copyVisible++;
            copyElementVisibleString = ".copy:nth-child(" + (inc_copyVisible + 3) + ")";
          } 

          if (inc_copyVisible > 0 && inc_copyVisible < $(wndowElementValueString).children(".copy").length)  {
            URLHashString = "sctn_" + sctnValue + "?pos=" + (inc_copyVisible--);
          } else {
            URLHashString = "sctn_" + sctnValue + "?pos=0";
          }
          
          // $("body").scrollTop(sctnValue * wndowHeight + 50);
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
        
        
        $(this).css("backgroundPosition", sctnBackgroundPositionString);
        
        if ($(this).attr("id") === "prev-sctn") {
          sctnBackgroundPositionString = "0px 0px";
        } else {
          sctnBackgroundPositionString = "0px -145px";
        }
        
        setTimeout(function () {$(this).css("backgroundPosition", sctnBackgroundPositionString)}, navTransitionTime);
        
        setTimeout(function () {window.location.hash = URLHashString;}, (navTransitionTime * 1.5));
        
        
        
      }
    );
    
    $(".sctn_nav > div > span").on("mouseover",
			function () {
        var sctnNavElement = new String();

        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";

        if ($(sctnNavElement).css("backgroundPositionY") !== "-105px")  {
          animateSctnNav(sctnNavElement);
        }
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
			function () {
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();

        var sctnNavBaseCSS = new Object();

        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        sctnNavBaseCSS = {
          backgroundPositionY: "0px"
        };

        if ($(sctnNavLinkElement).css("display") === "none" && 
            $(sctnNavElement).css("backgroundPositionY") === "0px") {
          $(sctnNavElement).css(sctnNavBaseCSS);
        } else {
          if ($(sctnNavElement).css("backgroundPositionY") !== "-105px")  {
            animateSctnNav(sctnNavElement);
          }
        }
        
			}
		);

    $(".sctn_nav > div > span").on("click",
			function () {
        var sctnNavVisibleCSS = new Object();
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();
        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        animateSctnNavLinks(sctnNavLinkElement);
        
        
        /*if ($(sctnNavElement).css("display") === "none")  {
          sctnNavVisibleCSS = {
            "display": "block"
          };  
        } else {
          sctnNavVisibleCSS = {
            "display": "none"
          };
        }
        
        sctnNavBackgroundPositionCSS = {
          backgroundPositionY: "-70px"
        };

        sctnNavBackgroundPositionClickCSS = {
          backgroundPositionY: "-105px"
        }

        sctnNavElementString = "#" + $(this).parent().parent().attr("id") + " div > span";*/
        
        animateSctnNav(sctnNavElement);
			}
		);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				         
        animateSctnNavLinks(currentSctnNavElement);
        animateSctnNav(currentSctnNavIDString);
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

