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

