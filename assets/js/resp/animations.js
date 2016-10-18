<<<<<<< HEAD
//animations.js
function parseWindowDimensions()  {
  var windowWidth = new Number();
  var windowHeight = new Number();
  
  var pageDimensions_Array = new Array();
  
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
/*  window.alert("windowWidth = " + windowWidth);
  window.alert("windowHeight = " + windowHeight);*/
  l
  if (windowWidth < 360) {
    pageDimensions_Array[0] = 360;
    pageDimensions_Array[1] = 540;
  } else {
      if (windowWidth <= 640) {
        pageDimensions_Array[0] = 640;
        
        if (windowHeight > 1000)  {
          pageDimensions_Array[1] = 1136;
        } 
      } else  {
        if (windowWidth <= 980) {
          pageDimensions_Array[0] = 980;
          
          if (windowHeight > 1308)  {
            pageDimensions_Array[1] = 1740;
          } else  {
            pageDimensions_Array[1] = 1308;  
          }
        } else {
          if (windowWidth <= 1024) {
            pageDimensions_Array[0] = 1024;
            pageDimensions_Array[1] = 1500;
          } else {
            if (windowWidth <= 1280) {
              pageDimensions_Array[0] = 1280;
              
              if (windowHeight <= 800) {
                pageDimensions_Array[1] = 800;
              } else {
                pageDimensions_Array[1] = 1024;
              }
            } else {
              if (windowWidth <= 1366) {
                pageDimensions_Array[0] = 1366;
                pageDimensions_Array[1] = 768;
              } else {
                if (windowWidth <= 1600) {
                  pageDimensions_Array[0] = 1600;
                  pageDimensions_Array[1] = 900;
                } else {
                  pageDimensions_Array[0] = 1920;
                  pageDimensions_Array[1] = 1020;
                }
              }
            }
          }
        }
    }
  } 
  
  return pageDimensions_Array;
}

function URLInfo() {
  var URLHashString = new String();
  
  var sectionNumIndexValue = new String();
  var positionNumIndexValue = new String();
  
  var wndowElementString = new String();
  var copyElementVisibleString = new String();
  
  var inc_copyVisible = new Number();
  
  var URLHashInfo_Array = new Array();
 
  URLHashString = window.location.hash; 
  
  sectionNumIndexValue = URLHashString.indexOf("sctn_");
  // window.alert("sectionNumIndexValue = " + sectionNumIndexValue);
  // window.alert("sectionNumIndexValue = " + sectionNumIndexValue);
  if (sectionNumIndexValue !== -1)  {
    sectionNumIndexValue = sectionNumIndexValue + 5;
  // window.alert("sectionNumIndexValue = " + sectionNumIndexValue);
    URLHashInfo_Array[0] = URLHashString.charAt(sectionNumIndexValue);
    
    if (URLHashInfo_Array[0] === "m" || sectionNumIndexValue === 4) {
      URLHashInfo_Array[0] = "main";
    }
    
    if (URLHashString.indexOf("pos=") !== -1) {
      positionNumIndexValue = URLHashString.indexOf("pos=");
      positionNumIndexValue = positionNumIndexValue + 4;
      URLHashInfo_Array[1] = URLHashString.charAt(positionNumIndexValue);
    } else  {
      if (URLHashInfo_Array[0] !== "main")  {
        inc_copyVisible = 3;
        
        wndowElementString = "#wndow-sctn_" + URLHashInfo_Array[0];
        copyElementVisibleString = ".copy:nth-child(" + inc_copyVisible + ")";
        
        $(wndowElementString).children(".copy").each(
          function () {
            if ($(this).css("display") === "none")  {
              inc_copyVisible++;
            }
          }
        );
        
        URLHashInfo_Array[1] = inc_copyVisible - 3;
      }  
    }
    
    // window.alert("URLHashInfoArray[1] = " + URLHashInfo_Array[1]);
  }
  
  // window.alert("URLHashInfoArray.length = " + URLHashInfo_Array.length);
  
  return URLHashInfo_Array;
}

    
function cssAdjustment()  {
  // window.alert("$(window).width() = " + $(window).width() + " $(window).height() = " + $(window).height());
  if (($(window).width() >= 1260) && ($(window).height() <= 800))  {
    
    var optionsElementCSS = new Object;
    var optionsSpanElementsCSS = new Object;
    var menuElementCSS = new Object;
    var menuBkgrndElementCSS = new Object;
    var menuBrdrElementCSS = new Object;
    var infoElementCSS = new Object;
    var nextSctnElementCSS = new Object;
    var prevSctnElementCSS = new Object;
    var nextSctnSpanElementsCSS = new Object;
    
    $(".copy").each(
      function () {
        switch ($(this).parent("div").attr("id").charAt(11)) {
          case "3":
            copyDifferenceValue = pageDimensions_Array[0] * 0.314;
          break;
          
          case "4":
            copyDifferenceValue = pageDimensions_Array[0] * 0.314;
          break;
          
          default:
            copyDifferenceValue = pageDimensions_Array[0] * 0.26;
          break;
        }
        
        /*window.alert("pageDimensions_Array[0] = " + pageDimensions_Array[0]);
        window.alert("copyDifferenceValue = " + copyDifferenceValue);
        window.alert("pageDimensions_Array[0] - copyDifferenceValue = " + (pageDimensions_Array[0] - copyDifferenceValue));
        */
        
        copyCSS.width = pageDimensions_Array[0] - copyDifferenceValue;
        
        // window.alert("copyCSS.width = " + copyCSS.width);
        $(this).css(copyCSS);
      }
    );
    
    optionsElementCSS = {
      "width": "32em"
    };
      
    optionsSpanElementsCSS = {
      "width": "8.61em",
      "display": "inline-table",
      "fontSize": "1.25em"
    };
    
    menuElementCSS = {
      "width": "32em",
      "left": "-32em"
    };
    
    menuBkgrndElementCSS = {
      "width": "32em",
      "left": "-32em"
    };
    
    menuBrdrElementCSS = {
      "width": "32em",
      "left": "-35em"
    };
    
    infoElementCSS = {
      "height": "28.1em",
      "bottom": "12.5em"
    };
      
    
    $("#options").css(optionsElementCSS);
    $("#options > span").css(optionsSpanElementsCSS);
    $("#menu").css(menuElementCSS);
    $("#menu-bkgrnd").css(menuBkgrndElementCSS);
    $("#menu-brdr").css(menuBrdrElementCSS);
    $("#info").css(infoElementCSS);
    
   if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
      nextSctnElementCSS = {
        "width": "5em",
        "height": "5.3em",
        "paddingTop": "0",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/menu/next/next-sctn.png')",
        "backgroundPosition": "0px -130px"
      };
      
      prevSctnElementCSS = {
        "width": "5em",
        "height": "4em",
        "paddingTop": "1.3em",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/menu/next/next-sctn.png')",
        "backgroundPosition": "0px 0px"
      };
      
      nextSctnSpanElementsCSS = {
        "width": "5em",
        "height": "3.12em"
      }  
      
      $("#next-sctn").css(nextSctnElementCSS);
      $("#prev-sctn").css(prevSctnElementCSS);
      $("#prev-sctn > span, #next-sctn > span").css(nextSctnSpanElementsCSS);    
    }
    
  }
  
  if ($(window).width() === 980)  {
    var copyCSS = new Object();
    
    copyCSS = {
      "marginLeft": "14.5em",
     }
     
     
    $(".copy").each(
      function () {
        switch ($(this).parent().attr("id").charAt(11))  {
          case "1":
            copyCSS.width = "770px";
          break;
        }
        
        $(this).css(copyCSS);
      }
    );
  }
}

function setupPage()  {
  var pageDimensions_Array = new Array();
  var URLHashInfo_Array = new Array();
  
  var pageHeight = new Number();
  var copyDifferenceValue = new Number();
  
  var cntainrCSS = new Object();
  var wndowCSS = new Object();
  var bkgrndCSS = new Object();
  var copyCSS = new Object();
  
  var inc_bkgrnd = new Number();
  
  var bkgrndWindowString = new String();
  var bkgrndImageString = new String();
  
  pageDimensions_Array = parseWindowDimensions();
  URLHashInfo_Array = URLInfo();
  pageHeight = $(window).height() * $(".wndow").length;
  
  cntainrCSS = {
    "width": pageDimensions_Array[0],
    "height": pageHeight
  };
  
  wndowCSS = {
    "width": pageDimensions_Array[0],
    "height": pageDimensions_Array[1]
  };
  
  copyCSS = {
    "height": pageDimensions_Array[1]
  };
  
  bkgrndCSS = {
    "width": pageDimensions_Array[0],
    "height": pageDimensions_Array[1]
  };
  
  $(".wndow").css(wndowCSS);
  $("#bkgrnd").css(bkgrndCSS);
 
  if ((pageDimensions_Array[0] > 640 && pageDimensions_Array[0] <= 980) && 
      ((pageDimensions_Array[1] > 1308 && pageDimensions_Array[1] <= 1740)))  {
        
        /*window.alert("pageDimensions_Array[0] = " + pageDimensions_Array[0]);
  window.alert("pageDimensions_Array[1] = " + pageDimensions_Array[1]);*/
  
    // window.alert("$(\"#wndow-sctn_main\").children(\"#info\")css(\"opacity\") = " + $("#wndow-sctn_main").children("#info").css("opacity"));
    $("#wndow-sctn_main").children("#info").css({"width": pageDimensions_Array[0], "height": (pageDimensions_Array[1] * 0.7)});
   
    $("#wndow-sctn_main").children("#info").children("img").attr({"src": "/amelia/assets/img/logo/logo_phone.png", "width": "480", "height": "455"});
    
    // $("#bkgrnd").css("height", $("#wndow-sctn_main").height()));
    // $("#cntainr").css("height", ($("#cntainr").height() + (pageDimensions_Array[1] * 1.5)));  
    // $("#wndow-sctn_main, #bkgrnd-sctn_main").css("height", (pageDimensions_Array[1] * 1.5));
    
    // $("#bkgrnd-sctn_main").css("backgroundPositionY", (pageDimensions_Array[1] * 0.7));
    
    $("#prev-sctn > span").html("");
    $("#next-sctn > span").html("Press to view the next section");
  } 
  
  if ($("#wndow-sctn_main").children("#info").css("opacity") === "0") {
    $("#wndow-sctn_main").children("#info").css("opacity", 1); 
     
    $("#wndow-sctn_main").children("#info").children("img").css({"display": "block", "opacity": 1});
    $("#wndow-sctn_main").children("#info").children("ul").css({"display": "block", "opacity": 1});
    $("#wndow-sctn_main").children("#info").children("ul").children("li").css({"display": "block", "opacity": 1});
  }
  
  // copyCSS.width = copyCSS.width - copyDifferenceValue;
  
  $("#cntainr").css(cntainrCSS);
  
  /*$(".wndow").each(
    function () {
      wndowCSS.width = $(this).children(".copy").length * pageDimensions_Array[0];
      
      $(this) 
    }
  );*/
  
  inc_bkgrnd = 0;
  
  // window.alert("$(\"#bkgrnd > div\").length = " + $("#bkgrnd > div").length);
  $("#bkgrnd > div").each(
    function () {
      if (inc_bkgrnd > 0) {
        bkgrndWindowString = "#wndow-sctn_" + inc_bkgrnd;
        
        bkgrndWidth =  pageDimensions_Array[0] * $(bkgrndWindowString).children(".copy").length;
        bkgrndImageString = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrndWidth + "x" + pageDimensions_Array[1] + 
                            ".jpg')";        
        
        // bkgrndCSS.width = bkgrndWidth;
        bkgrndCSS.backgroundImage = bkgrndImageString;
      } else  {
        // bkgrndCSS.width = pageDimensions_Array[0];
        bkgrndCSS.backgroundImage = "url('/amelia/assets/img/sctn/main/" + pageDimensions_Array[0] +
                                    "x" + pageDimensions_Array[1] + ".jpg')";
      }
      
      $(this).css(bkgrndCSS);
      
      inc_bkgrnd++;
      
      // window.alert("inc_bkgrnd = " + inc_bkgrnd);
    }
  );
  
  displayVerticalNav();
  
  // animateWindowPanes();
}

function setupWindow(windowViewMargin) {
  var wndowElementString = new String();
  var copyElementsString = new String();
  var copyVisibleElementString = new String();
  var copyDIVElementsString = new String();
  var headrElementString = new String();
  
  var URLHashInfo_Array = new Array();
  
  var inc_copyVisible = new Number();
  var inc_copyElements = new Number();
  var windowPaneValue = new Number();
  var positionValue = new Number();
  var currentPosition = new Number();
  
  var URLHash = new String();
  
  URLHashInfo_Array = URLInfo();
  
  positionValue = URLHashInfo_Array[1] * 1;
  
  
  /*currentPosition = $(window).scrollTop();
  // window.alert("URLHashInfo_Array[0] = " + URLHashInfo_Array[0]);
  if (URLHashInfo_Array[0] !== "main")  {
    sectionValue = Math.floor((currentPosition + windowViewMargin) / $(".wndow").height());  
  } 
  
  if (URLHashInfo_Array[0] !== undefined) {
    sectionValue = 0;
  }
  
  // window.alert("URLHashInfo_Array[0] = " + URLHashInfo_Array[0]);
  if ((URLHashInfo_Array[0] !== sectionValue) && 
      ((currentPosition >= ($(".wndow").height() * sectionValue)) && 
      (currentPosition <= ($(".wndow").height() * (sectionValue + 1))))) {
    // window.alert("URLHashInfo_Array[0] = " + URLHashInfo_Array[0]);
    if (URLHashInfo_Array[0] === "main" || URLHashInfo_Array === "") {
      sectionValue = URLHashInfo_Array[0];
    } else  {
      sectionValue = (URLHashInfo_Array[0] * 1);
      
      positionValue = (URLHashInfo_Array[1] * 1);
    } 
  } 
  
    
  
  
  if (sectionValue !== 0 && sectionValue !== "main")  {
    wndowElementString = "#wndow-sctn_" + sectionValue;
    copyVisibleElementString = ".copy:nth-child(" + (positionValue + 3) + ")";
    // window.alert("wndowElementString = " + wndowElementString);
    if (positionValue > 0)  {
      while ($(wndowElementString).chldren(copyVisibleElementString).css("display") === "none")  {
        positionValue++;
            
        copyVisibleElementString = ".copy:nth-child(" + (positionValue + 3) + ")";
        
      }
    }
  
          
    $(wndowElementString).children(".copy").css("display", "none");
    $(wndowElementString).children(copyVisibleElementString).css("display", "block");
    
    URLHash = "sctn_" + sectionValue + "?pos=" + positionValue;
  } else {
    URLHash = "sctn_main";
  }
  // window.alert("URLHash = " + URLHash);
  window.location.hash = URLHash; 
  
  animateWindowPanes();
  
  displayVerticalNav();*/
}

function animateInfoElement() {
  $("#info").css("top", (-($("#info").height())));
  $("#next-sctn > span").html("");
  $("#next-sctn").css("bottom", "1.56em");
  
  $("#prev-sctn").css("height", "25px");
  $("#prev-sctn > span, #next-sctn > span").css("height", "15px");
}

function animateWindowPanes() {
  var URLHashInfo_Array = new Array();
  var pageDimensions_Array = new Array();
  
  var copyHideCSS = new Object();
  var copyVisibleCSS = new Object();
  var headrVisibleCSS = new Object();
  var bkgrndVisibleCSS = new Object();
  
  var blokElements = new Object();
  
  var sectionValue = new Number();
  var positionValue = new Number();
  
  var wndowElementString = new String();
  var copyElementVisibleString = new String();
  var headrElementString = new String();
  var blokElementsString = new String();
  var sctnNavElementString = new String();
  
  var inc_copyVisible = new Number();
  var inc_blokElements = new Number();
  
  copyHideCSS = {
    "display": "none", 
    "opacity": 0
  };
  
  copyVisibleCSS = {
    "display": "block",
    "opacity": 1
  };
  
  headrVisibleCSS = {
    "opacity": 1
  };
  
  bkgrndVisibleCSS = {
    "display": "block"
  };
  
  URLHashInfo_Array = URLInfo();
  
  if (URLHashInfo_Array.length === 2) {
    sectionValue = URLHashInfo_Array[0] * 1;
    positionValue = URLHashInfo_Array[1] * 1;
    
    wndowElementString = "#wndow-sctn_" + sectionValue;
    copyElementVisibleString = ".copy:nth-child(" + (positionValue + 3) + ")";
    
    $(wndowElementString).children(".copy").css("display", "none");
    
    $(wndowElementString).children(copyElementVisibleString).css("display", "block");
    
    headrElementString = ".headr.sctn_" + sectionValue;
    
    $(wndowElementString).children(headrElementString).css("opacity", 1);
    
    inc_blokElements = 1;
    
    blokElements = $(wndowElementString).children(copyElementVisibleString).children("div");
    
    blokElements.each(
      function () {
        // window.alert("$(this).attr(\"id\") = " + $(this).attr("id"));
        
        $(this).css("opacity", 1);
      }
    );
    
    if (sectionValue === 3 || sectionValue === 4) {
      sctnNavElementString = "#menu-sctn_" + sectionValue;
      
      $(sctnNavElementString).css("opacity", 1);
    }
    
    bkgrndElementString = "#bkgrnd-sctn_" + sectionValue;
    
    $(bkgrndElementString).css("opacity", 0);
    
    pageDimensions_Array = parseWindowDimensions();
    
    bkgrndPositionString = -(pageDimensions_Array[0] * positionValue) + "px";
    
    $(bkgrndElementString).css("backgroundPositionX", bkgrndPositionString);
    
    $(bkgrndElementString).css("opacity", 1);
    
    /*if (positionValue < $(wndowElementString).children(".copy").length) {
      while (($(wndowElementString).children(copyElementVisibleString).css("display") === "none" && 
             (inc_copyVisible < $(wndowElementString).children(".copy").length))) {
        copyElementVisibleString = ".copy:nth-child(" + (inc_copyVisible + 3) + ")";
        
        inc_copyVisible++;
      }   
    }*/
    
    $(window).scrollTop(sectionValue * $(".wndow").height());
      
  }
 
}

/*function animateWindowPanes() {
  var URLHashInfo_Array = new Array();
  
  var wndowElementString = new String();
  var headrElementString = new String();
  var copyElementVisibleString = new String();
  var copyDIVElementsString = new String();
  var bkgrndIDString = new String();
  
  var positionString = new String();
  var positionFlag = new Boolean();
  
  var copyHideCSS = new Object();
  var copyVisibleCSS = new Object();
  var bkgrndCSS = new Object();
  var wndowCSS = new Object();
  
  var inc_copyElements = new Number();
  var inc_divElements = new Number();
  
  var sectionValue = new Number();
  var currentPosition = new Number();
  
  URLHashInfo_Array = URLInfo();
  
  copyHideCSS = {
    "display": "none", 
    "opacity": 0
  };
  
  copyVisibleCSS = {
    "display": "block",
    "opacity": 1
  };
  
  headrVisibleCSS = {
    "opacity": 1
  };
  
  bkgrndVisibleCSS = {
    "display": "block"
  };
  
 window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
    
  if (URLHashInfo_Array.length != 2)  {
    currentPosition = $(window).scrollTop();
    
    // window.alert("currentPosition = " + currentPosition);
    sectionValue = Math.floor($(".wndow").height() / currentPosition);
    // window.alert("$(\".wndow\").height() = " + $(".wndow").height() + " / currentPosition = " + currentPosition + " = " + ($(".wndow").height() / currentPosition));
    
  } else {
    if (URLHashInfo_Array.length === 1) {
      sectionValue = 0;
    }
    
  }
  
  if (URLHashInfo_Array.length !== 1) {
    wndowElementString = "#wndow-sctn_" + sectionValue;
    headrElementString = ".headr.sctn_" + sectionValue;  
  } else  {
    wndowElementString = "#wndow-sctn_main";
  }
  
  
  if (sect) {
    copyVisibleElementString = ".copy:nth-child(3)";
    inc_copyElements = 3;
    
    while ($(wndowElementString).children(copyVisibleElementString).css("display") === "none")  {
      inc_copyElements++;
      
      copyVisibleElementString = ".copy:nth-child(" + inc_copyElements + ")";
    }
    
    window.alert("inc_copyElements = " + inc_copyElements);
    window.alert("$(" + wndowElementString + ").children(\".copy\").length = " + $(wndowElementString).children(".copy").length);
    
    if (inc_copyElements === ($(wndowElementString).children(".copy").length + 3))  {
      positionValue = 0;
    } else  {
      positionValue = inc_copyElements - 3;
    }
  }
    
  
  window.alert("wndowElementString = " + wndowElementString);
  window.alert("headrElementString = " + headrElementString);
  window.alert("sectionValue = " + sectionValue);
  window.alert("positionValue = " + positionValue);
    
    
  // window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
  // window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
  if (sectionValue !== 0) {
    bkgrndIDString = "#bkgrnd-sctn_" + sectionValue;
    
    // window.alert("bkgrndIDString = " + bkgrndIDString);
    newPositionValue = $(".wndow").width() * positionValue;
    
    positionString = "-" + newPositionValue + "px";
    
    
    
    // window.alert("backgroundPositionString = " + backgroundPositionString);
    
    if (($(bkgrndIDString).css("backgroundPositionX") === "0%") && (URLHashInfo_Array[1] === "0")) {
      positionFlag = false;
    } else {
      positionFlag = true;
    }
    
    if (positionFlag === true)  {
      copyVisibleCSS.backgroundPositionX = positionString;
      
      bkgrndHideCSS = {
        "display": "none",
        "backgroundPositionX": positionString
      };
      
      $(bkgrndIDString).css(bkgrndHideCSS);
      
      $(bkgrndIDString).css(bkgrndVisibleCSS);
    } 
    
    // window.alert("$(" + wndowElementString + ").children(" + copyVisibleElementString + ").children(\"div\").length = " + $(wndowElementString).children(copyVisibleElementString).children(copyDIVElementsString).length);
    for (inc_divElements = 0; inc_divElements < $(wndowElementString).children(copyVisibleElementString).children("div").length; inc_copyElements++)  {
      copyDIVElementsString = "div:nth-child(" + (inc_divElements + 1) + ")";
      // window.alert("copyVisibleElementString = " + copyVisibleElementString);
      // window.alert("copyDIVElementsString = " + copyDIVElementsString);
      $(wndowElementString).children(copyVisibleElementString).children(copyDIVElementsString).css("opacity", 1);
    }
    
    $(wndowElementString).children(headrElementString).css(headrVisibleCSS);
    $(wndowElementString).children(copyVisibleElementString).css(copyVisibleCSS);
    
    window.scrollTo(0, (sectionValue * $(".wndow").height()));
  } else {
    window.scrollTo(0, 0);
  }
  
  displayVerticalNav();
}*/

$(document).ready(
  function () {
    setupPage();
    cssAdjustment();
    
    animateWindowPanes();
  }
);

$(window).on("resize", 
  function () {
    setupPage();
    cssAdjustment();
  }
);
=======
//animations.js
function parseWindowDimensions()  {
  /* **************** **************** **************** **************** **************** 
   *  parseWindowDimensions collects the width and height of the 'window' DOM element 
   *  by using the jQuery methods "$(window).width()" and "$(window).height()". 
   * 
   *  Once the dimensions are gathered from the browser a numerical value is set 
   *  which corresponds with the background images for the indiviual ".wndow" elements.
   * 
   *  The numberical values of the height and width are passed through to the place 
   *  of the function call by way of the Array - page_dimensions_Array.
   * **************** **************** **************** **************** **************** */

  var window_width = new Number(); 
  // Holds the numerical value of the width of the visible area of the browser. Captured by the Method "$(window).width()"
  
  var window_height = new Number();
  // Holds the numerical value of the height of the visible area of the browser. Captured by the Method "$(window).height()"
  
  var page_dimensions_Array = new Array();
  // Holds the calculated values of the width and height of the visible area of the browser. 
  // The value is calculated by the Variables "window_width" and "window_height".
  
  window_width = $(window).width();
  // Width of the visible area of the browser is captured.
  window_height = $(window).height();
  // Height of the visible area of the browser is captured.

  
 /* **************** **************** **************** **************** **************** 
  * The following IF statement sets a calculated numerical constant based upon the 
  * width and height values of "window_width" and "window_height" 
  * **************** **************** **************** **************** **************** */

  if (window_width < 360) {
  // If the window width is roughly 360px, the browser is likely a mobile device.
  // The height of the display of a mobile device, with the width of 360px is 540px.
  // The dimensions of the background image for a browser with a width of 360px are "360px x 540px" 
    page_dimensions_Array[0] = 360;
    page_dimensions_Array[1] = 540;
  } else {
      if (window_width <= 640) {
      // The width value of a background image of a modern mobile device with a width of roughly 640px is "640"
        
        page_dimensions_Array[0] = 640;
        
        if (window_height > 1000)  {
        // The height value of a modern mobile device with a typical width of "640px" is "1136"
          page_dimensions_Array[1] = 1136;
        } 
      } else  {
        if (window_width <= 980) {
        // The width value of a typical mobile device with a browser width of roughly "980px", also the typical width of an iPad, is "980"  
          
          page_dimensions_Array[0] = 980;
          
          if (window_height > 1308)  {
          // The width value of a mobile device with a height of roughly "1300px", also the typical height of an iPad, is "1740"
            page_dimensions_Array[1] = 1740;
          } else  {
          // The width value of a mobile device with a height of roughly "1300px" is "1308"
            page_dimensions_Array[1] = 1308;  
          }
        } else {
          if (window_width <= 1024) {
          // The width value of a mobile device with a width of roughly "1024px", also a common width of a smartphone, is "1024"
          // The height value of a mobile device with a width of roughly "1024px", also a common width of a smartphone, is "1500"
            page_dimensions_Array[0] = 1024;
            page_dimensions_Array[1] = 1500;
          } else {
            if (window_width <= 1280) {
            // The width value of a device with a width of roughly "1280px", also a common width of a laptop display, is "1280"
              page_dimensions_Array[0] = 1280;
              
              if (window_height <= 800) {
              // The height value of a device with a width of roughly "1280px" which also has a browser height of less than "800px" is "800"
                page_dimensions_Array[1] = 800;
              } else {
                // The height value of a device with a width of roughly "1280px", which also has a browser height of greater than "800px" is "1024"
                page_dimensions_Array[1] = 1024;
              }
            } else {
              if (window_width <= 1366) {
              // The width value of a device with a browser width of roughly "1366px", 
              // which also is a common browser width of a laptop display, is "1366"
              //
              // The height value of a device with a browser width of roughly "1366px", 
              // which also is a common browser width of a laptop display, is "768"
                page_dimensions_Array[0] = 1366;
                page_dimensions_Array[1] = 768;
              } else {
                if (window_width <= 1600) {
                // The width value of a device with a browser width of roughly "1600px", 
                // which also is a common browser width of a desktop or laptop display, is "1600"
                // 
                // The height value of a device with a browser width of roughly "1600px", 
                // which also is a common browser width of a desktop or laptop display, is "900"
                  page_dimensions_Array[0] = 1600;
                  page_dimensions_Array[1] = 900;
                } else {
                  // If the browser width of a display is greater than "1600px", the width value is "1900"
                  // If the browser width of a display is greater than "1600px", the height value is "1020"
                  page_dimensions_Array[0] = 1920;
                  page_dimensions_Array[1] = 1020;
                }
              }
            }
          }
        }
    }
  } 
  
  return page_dimensions_Array;
  // Once the width and height values have been calculated, this function returns those values in the above Array.

} // END OF FUNCTION parseWindowDimensions

function urlInfo() {
  var url_hash = new String();
  
  var section_index_num = new Number();
  var position_index_num = new Number();

  var section_value = new String();
  var position_value = new String();
  
  var url_info_Array = new Array();
 
  url_hash = window.location.hash; 
  
  section_index_num = url_hash.indexOf("sctn_");

  position_index_num = url_hash.indexOf("pos=");

  section_value = url_hash.charAt(section_index_num + 5);
  position_value = url_hash.charAt(position_index_num);

  if (position_index_num === -1)  {
    url_info_Array[0] = "main";
  } else  {
    url_info_Array[0] = section_value;
    url_info_Array[1] = position_value;
  }

  return url_info_Array;
}
    
function cssAdjustment()  {
  var page_dimensions_Array = new Array();

  var next_sctn_1_css = new Object();
  var next_sctn_2_css = new Object();
  var prev_sctn_css = new Object();
  var info_1_css = new Object();
  var info_2_css = new Object();
  var copy_css = new Object();
  
  page_dimensions_Array = parseWindowDimensions();
  
  if (page_dimensions_Array[0] >= 1260)  {
    if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
      next_sctn_1_css = {
        "width": "5em",
        "height": "5.3em",
        "paddingTop": "0",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px -145px"
      };
      
      prev_sctn_css = {
        "width": "5em",
        "height": "4em",
        "paddingTop": "1.3em",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px 0px"
      };
      
      next_sctn_2_css = {
        "width": "5em",
        "height": "3.12em"
      };
      
      info_1_css = {
        "width": "19.5em",
        "height": "27.2em",
        "bottom": "14.5em",
        "right": "7em"
      };
    
      info_2_css = {
        "src": "/amelia/assets/img/logo/lg.png", 
        "width": "200", 
        "height": "190"
      };
   
      $("#next-sctn").css(next_sctn_1_css);
      $("#prev-sctn").css(prev_sctn_css);
      $("#prev-sctn > span, #next-sctn > span").css(next_sctn_2_css);  
      
      $("#info").css(info_1_css); 
      $("#info > img").attr(info_2_css);
    
      $("#prev-sctn > span").html("Click to view the previous section");
      $("#next-sctn > span").html("Click to view the next section");
    }  
  }
    
  if ($(window).width() === 980)  {
    var copy_css = new Object();
    var info_4_css = new Object();
    var info_5_css = new Object();
    var nav_sctn_css = new Object();
    var next_sctn_css = new Object();

    copy_css = {
      "marginLeft": "14.5em",
     }
     
    $(".copy").each(
      function () {
        switch ($(this).parent().attr("id").charAt(11))  {
          case "1":
            copy_css.width = "770px";
          break;
        }
        
        $(this).css(copy_css);
      }
    );
    
    info_4_css = {
      "width": page_dimensions_Array[0],
      "height": (page_dimensions_Array[1] * 0.7)
    };
    
    info_5_css = {
      "src": "/amelia/assets/img/logo/logo_phone.png", 
      "width": "480", 
      "height": "455"
    };
    
    nav_sctn_css =  {
      width: "6.8em",
      height: "6.56em",
      margin: "0 auto"
    };
   
    next_sctn_css = {
      right: "24.1em",
      backgroundImage: "url('/amelia/assets/img/nav/next/resp/next-sctn.png')", 
      backgroundPositionY: "-234px"
    };
    
    $("#info").css(info_4_css);
    $("#info > img").attr(info_5_css);
    
    $("#next-sctn").css(next_sctn_css);
    $("#prev-sctn > span, #next-sctn > span").css(nav_sctn_css);
   
    $("#prev-sctn > span").html("");
    $("#next-sctn > span").html("Press to view the next section");
  } 
}

function setupPage()  {
  var page_dimensions_Array = new Array();
  var url_info_Array = new Array();
  
  var page_height = new Number();
  
  var cntainr_css = new Object();
  var wndow_css = new Object();
  var bkgrnd_css = new Object();
  var copy_css = new Object();
  
  var inc_bkgrnd = new Number();
  
  var bkgrnd_1_selector = new String();
  var bkgrnd_img_value = new String();
  
  cssAdjustment();
  
  page_dimensions_Array = parseWindowDimensions();
  url_info_Array = urlInfo();
  page_height = $(window).height() * $(".wndow").length;
  
  cntainr_css = {
    "width": page_dimensions_Array[0],
    "height": page_height
  };
  
  wndow_css = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  copy_css = {
    "height": page_dimensions_Array[1]
  };
  
  bkgrnd_css = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  $(".wndow").css(wndow_css);
  $("#bkgrnd").css(bkgrnd_css);
 
  $("#cntainr").css(cntainr_css);
   
  inc_bkgrnd = 0;
  
  $("#bkgrnd > div").each(
    function () {
      if (inc_bkgrnd > 0) {
        bkgrnd_1_selector = "#wndow-sctn_" + inc_bkgrnd;
        
        bkgrndWidth =  page_dimensions_Array[0] * $(bkgrnd_1_selector).children(".copy").length;
        bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrndWidth + "x" + page_dimensions_Array[1] + 
                            ".jpg')";      

        bkgrnd_css.backgroundImage = bkgrnd_img_value;
      } else  {
        
        bkgrnd_css.backgroundImage = "url('/amelia/assets/img/sctn/main/" + page_dimensions_Array[0] +
                                    "x" + page_dimensions_Array[1] + ".jpg')";
      }
      
      $(this).css(bkgrnd_css);
      
      inc_bkgrnd++;
    }
  );
  
  setTimeout(displayVerticalNav, time_value * 2);
}


function animateInfoElement() {
  var page_dimensions_Array = new Array();
  
  page_dimensions_Array = parseWindowDimensions();
  
  if (page_dimensions_Array[0] === 980) {
    var info_css = new Object();
    var sctn_bttm_css = new Object();
    var sctn_height_1_css = new Object();
    var sctn_height_2_css = new Object();
    var nav_sctn_css = new Object();
    var nav_css = new Object();
    var nav_link_css = new Object();
    
    info_css = {
      "top": -($("#info").height())
    };
    
    sctn_bttm_css = {
      "bottom": "1.56em"
    };
    
    sctn_height_1_css = {
      "height": "25px"
    };

    sctn_height_2_css = {
      "height": "35px"
    };
    
    nav_sctn_css = {
      "display": "block"
    };
    
    nav_css = {
      "display": "block"
    };
    
    nav_link_css = {
      "opacity": 1
    };
    
    $("#info").animate(info_css);
  
    $("#next-sctn > span").html("");
    $("#next-sctn").css(sctn_bttm_css);
    $("#next-sctn").css(sctn_height_2_css);
    

    $("#prev-sctn").css(sctn_height_1_css);
    $("#prev-sctn > span, #next-sctn > span").animate(nav_sctn_css);
    
    $("nav, #nav-bkgrnd, #nav-brdr").css(nav_css);
    $("#nav-link").animate(nav_link_css, 800);		
  } else {
    var logo_1_css = {
			display: "block"
		};
		
    var logo_2_css = {
      opacity: 1
    }
    
		var logo_3_css = {
			display: "inherit"
		};
		
		var logo_4_css = {
			display: "block",
      opacity: 1
		};
    
    time_value_1 = time_value * 2;
    time_value_2 = time_value * 1.5;

    $("#wndow-sctn_main").show("drop", time_value_1);
		$("#info").css(logo_1_css).css(logo_2_css);
    $("#info > img").css(logo_1_css);
    
    $("#info > img").delay(time_value).fadeTo(time_value_2, 1, 
      function () {
        $("#info ul li").css(logo_3_css);
        $("#info ul").css(logo_4_css);
        
        $("#info ul li").each(
          function () {
            $(this).delay(time_value * 0.75).fadeTo(time_value_2, 1);
          }
        );		
			}
		);
  }
}

function sortCopyElements(section_value) {
  var wndow_selector = new String();
  
  var position_value = new Number();
  
  var inc = new Number();
  
  if (section_value === null)  {
    $(".copy").each(
      function () {
        if ($(this).css("display") === "block") {
          position_value = inc;
        }
        
        inc++;
      }
    );
    
    return position_value;  
  } else {
    wndow_selector = "#wndow-" + section_value + " > .copy";
    
    $(wndowElementString).each(
      function () {
        if ($(this).css("display") === "block") {
          position_value = inc;
        }
        
        inc++;
      }
    );
    
    url_hash = "#" + sectionValue + "?pos=" + positionValue;
    
    window.location.hash = url_hash;
  }
  
  setTimeout(function() {displayVerticalNav();}, time_value);
}

function animateFormPanes(section_value) {
  form_id = "#form-" + section_value;

  page_1_selector = form_id + " .form-page_1";
  page_2_selector = form_id + " .form-page_2";

 if ($(page_1_selector).css("display") === "block")  {
    $(page_1_selector).fadeTo(time_value, 0);
    $(page_1_selector).css("display", "none");

    $(page_2_selector).css("display", "block");
    $(page_2_selector).fadeTo(time_value, 1);
  } else  {
    $(page_2_selector).fadeTo(time_value, 0);
    $(page_2_selector).css("display", "none");

    $(page_1_selector).css("display", "block");
    $(page_1_selector).fadeTo(time_value, 1);
  }
}

function animatePageElements()  {
  var url_hash = window.location.hash;

  if (url_hash.indexOf("base") > -1) {
    var url_hash_info_Array = new Array();

    url_hash_info_Array = urlInfo();

    if (url_hash_info_Array.length === 2) {      
      var section_value = new String();
      var position_value = new String();

      var wndow_selector = new String();
      var wndows_selector = new String();
      var copy_element_selector = new String();
      var sctn_nav_selector = new String();
      var bkgrnd_selector = new String();
      var nav_link_selector = new String();
      var info_selector = new String();

      var bkgrnd_position_x = new String();

      var blok_elements = new Object();
      var page_dimensions_Array = new Array();

      var scroll_value = new Number();

      section_value = url_hash_info_Array[0];
      position_value = url_hash_info_Array[1];   
      
      wndow_selector = "#wndow-sctn_" + section_value;
      copy_element_selector = ".copy:nth-child(" + (position_value + 3) + ")";
      headr_selector = ".headr.sctn_" + section_value;
      bkgrnd_selector = "#bkgrnd-sctn_" + section_value;
      nav_link_selector = "#nav-link";
      wndows_selctor = ".wndow";

      blok_elements = $(wndow_selector).children(copy_element_selector).children("div");

      scroll_value = section_value * $(wndows_selector).height();
      
      $(wndow_selector).css(".copy").css("display", "none");
      $(wndow_selector).children(copy_element_selector).css("display", "block");
      $(headr_selector).fadeTo((time_value * 1.5), 1);
      
      blok_elements.each(
        function () {
          $(this).fadeTo(time_value, 1);
        }
      );

      if (section_value === 3 || section_value === 4) {
        sctn_nav_selector = "#nav-sctn_" + section_value;

        $(sctn_nav_selector).fadeTo(time_value, 1);
      }      
      
      $(bkgrnd_selector).fadeTo(time_value, 0);      
      
      page_dimensions_Array = parseWindowDimensions();

      bkgrnd_position_x = "\"" + -(page_dimensions_Array[0] * position_value) + " 0px" + "\"";

      $(bkgrnd_selector).css("backgroundPosition", bkgrnd_position_x);

      $(bkgrnd_selector).css("opacity", 1);

      if (url_hash !== "" && url_hash != "#sctn_main")  {
        $(nav_link_selector).fadeTo(time_value, 1);
      }
    } else {
      if ($(info_selector).css("opacity") === "0" && page_dimensions_Array[0] !== 980) {
        animateInfoElement();
      }
    }
  } else  {
    var nav_1_selector = new String();
    var nav_2_selector = new String();
    var nav_3_selector = new String();
    var nav_4_selector = new String();
    var nav_5_selector = new String();

    var options_1_selector = new String();
    var options_2_selctor = new String();
    var options_3_selector = new String();

    var wndows_selector = new String();
    var wndow_selector = new String();
    var cntainr_selector = new String();
    var bkgrnd_selector = new String();
    var sctn_nav_selector = new String();
    var headr_selector = new String();
    var next_nav_selector = new String();

    var copy_values_string = new String();
    var bkgrnd_value_string = new String();

    var window_height = new Number();
    var window_width = new Number();
    var nav_width = new Number();
    var copy_elements_length = new Number();

    var inc_1 = new Number();

    var copy_elements_url_Array = new Array();
    var copy_elements_Array = new Array();

    var css_1 = new Object(); // "opacity": 0, "width": -($("#nav").width())
    var css_2 = new Object(); // "display": "none"
    var css_3 = new Object(); // "left": -($("#nav").width())
    var css_4 = new Object(); // "display": "block"
    var css_5 = new Object(); // "width": $(window).width()
    var css_6 = new Object(); // "display": "table"
    var css_7 = new Object(); // "width": $(window).width(), "left": "0px"
    var css_8 = new Object(); // "left": "0px"
    var css_9 = new Object(); // "left": "0px", "opacity", 1
    var css_10 = new Object(); // "width": $(window).width() - $("#nav").width(), "left": $("#nav").width()
    var css_11 = new Object(); // "width": $(window).width() - $("#nav").width()

    window_height = $(window).height();
    window_width = $(window).width();
    
    nav_width = -($(next_nav_selector).width());
    nav_position = window_width - nav_width;

    nav_1_selector = "#nav";
    nav_2_selector = "#nav-bkgrnd";
    nav_3_selector = "#nav-brdr";
    nav_4_selector = nav_1_selector + ", " + nav_2_selector;
    nav_5_selector = nav_1_selector + ", " + nav_2_selector + ", " + nav_3_selector;

    options_1_selector = "#options";
    options_2_selector = "#options > span";
    options_3_selector = options_1_selector + ", " + options_2_selector;
    
    cntainr_selector = "#cntainr";
    wndow_selector = ".wndow";
    bkgrnd_selector = "#bkgrnd, #bkgrnd > div";
    sctn_nav_selector = ".sctn_nav";
    headr_selector = ".headr";
    next_nav_selector = "#prev-sctn, #next-sctn";
    multiple_selector = "#info, .copy, .headr, .sctn_nav, #prev-sctn, #next-sctn";

    bkgrnd_value_string = "bkgrnd=nav";
    copy_values_string = "&copyValues";
    
    css_1 = {
      "opacity": 0,
      "width": nav_width
    };

    css_2 = {
      "display": "none"
    };

    css_3 = {
      "left": nav_width
    };

    css_4 = {
      "display": "block"
    };

    css_5 = {
      "width": window_width
    };

    css_6 = {
      "display": "table"
    };

    css_7 = {
      "width": window_width, 
      "left": "0px"
    };

    css_8 = {
      "left": "0px"
    };

    css_9 = {
      "left": "0px", 
      "opacity": 1
    };

    css_10 = {
      "width": nav_position, 
      "left": nav_width
    };
    
    css_11 = {
      "width": nav_position
    };

    if ($(nav_1_selector).css("left") === "0px")  {
    
      $(nav_4_selector).css("height", window_height);
      
      if ($(nav_selector).css("left") === "0px")  {
        $(options_1_selector).animate(css_1, 
          function () {          
            $(options_3_selector).css(css_2);
            $(nav_5_selector).animate(css_3);
          }
        );
      }

      copy_elements_url_Array = url_hash.split("=");
      
      copy_elements_length = copy_elements_url_Array.length;

      copy_elements_Array = copy_elements_url_Array[copy_elements_length - 1];

      for (inc_1 = 0; inc_1 < copy_elements_length; inc_1++)  {
        wndows_selector = "#wndow-sctn_" + (inc_1 + 1);

        if (!isNan(copy_elements_Array[inc_1 * 1])) {
          copy_selector = ".copy:nth-child(" + ((copy_elements_url_Array[inc_1 * 1]) + 3) + ")";
        
          $(wndows_selector).children(copy_selector).css(css_4);
        }
      }

      $(wndow_selector).css(css_5);
      $(cntainr_selector, bkgrnd_selector).css(css_7);
      $(sctn_nav_selector, next_nav_selector).css(css_4);
      $(headr_selector).css(css_6);

      if (url_hash.indexOf(copy_values_string) === -1) {
        window.location.hash = "#sctn_nav?bkgrnd=base";
      } else {
        url_nav_value = url_hash;

        if (url_hash.indexOf(bkgrnd_value_string) > -1)  {
          url_nav_value = url_nav_value.replace("nav", "base");
        }

        window.location.hash = url_nav_value.substring(1, url_hash.indexOf(copy_values_string));
      }
    } else  {
      var nav_transition = time_value / 1.25;

      var copy_1_selector = new String();
      var copy_2_selector = new String();

      copy_1_selector = ".copy";

      copy_elements_Array = $(".copy");

      $(nav_5_selector).animate(css_8, nav_transition, 
        function () {
          $(options_3_selector).css(css_4);
          $(options_1_selector).css(css_9);
        }
      );

      $(wndow_selector).each(
        function () {
          inc_1 = 0;
          copy_2_selector = ".copy:nth-child(3)";
          copy_elements_length = $(this).children(copy_1_selector).length;

          if ($(this).children(copy_2_selector).css("display") === "none") {
            while (inc_1 < copy_elements_length && 
                    $(this).children(copy_2_selector).css("display") === "none") {
              inc_1++;
              copy_2_selector = ".copy:nth-child(" + (inc_1 + 3) + ")";
            }
          } else  {
            if ($(this).attr("id") === "wndow-sctn_1") {
              if (inc_1 === 0)  {
                copy_values_string = copy_values_string + "0";
              } else  {
                copy_values_string = copy_values_string + (inc_1--);
              }
            } else  {
              if (inc_1 === 0)  {
                copy_values_string = copy_values_string + ", 0";
              } else  {
                copy_values_string = copy_values_string + (inc_1--);
              }
            }
          }

          if (inc_1 === copy_elements_length) {
            if ($(this).attr("id") === "wndow-sctn_1") {
              copy_values_string = copy_values_string + "-";
            } else  {
              copy_values_string = copy_values_string + ",-";
            }
          } else  {
            if (inc_1 > 0)  {
              copy_values_string = copy_values_string + inc_1;
            } else  {
              copy_values_string = copy_values_string + "," + inc_1;
            }
          }
        }
      );
    }

    $(cntainr_selector, bkgrnd_selector).css(css_10);
    $(wndows_selector).css(css_11);
    $(multiple_selector).css(css_2);

    if (url_hash.indexOf("?") === -1) {
      copy_values_string = copy_values_string.replace("&", "?");
    }

    setTimeout(function () {window.location.hash = copy_values_string;}, nav_transition);
  }
  
  $(window).scrollTop(scroll_value);
  
  setTimeout(displayVerticalNav, time_value * 1.5);
}
>>>>>>> 7943f836c39a968128a07383b96bc481737469d2
