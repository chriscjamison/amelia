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

  sctnNavLinkElementString = sctnNavElementString.slice(0, 12) + " > div > div";
  
  sctnNavBackgroundPositionYValue = $(sctnNavElementString).css("backgroundPositionY");
  $(sctnNavElementString).css("opacity", 0);

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

