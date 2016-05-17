//animations.js
function parseWindowDimensions()  {
  var windowWidth = new Number();
  var windowHeight = new Number();
  
  var pageDimensions_Array = new Array();
  
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
/*  window.alert("windowWidth = " + windowWidth);
  window.alert("windowHeight = " + windowHeight);*/
  
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
  $("#info").animate({"top": (-($("#info").height()))});
  
  // $("#info").css("top", (-($("#info").height())));
  $("#next-sctn > span").html("");
  $("#next-sctn").css("bottom", "1.56em");
  
  $("#prev-sctn").css("height", "25px");
  $("#prev-sctn > span, #next-sctn > span").animate({"height": "15px"});
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
  var menuElementsString = new String();
  
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
    
    $(wndowElementString).children(headrElementString).fadeTo((timeValue * 1.5), 1);
    
    inc_blokElements = 1;
    
    blokElements = $(wndowElementString).children(copyElementVisibleString).children("div");
    
    blokElements.each(
      function () {
        // window.alert("$(this).attr(\"id\") = " + $(this).attr("id"));
        
        $(this).fadeTo(timeValue, 1);
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
    
    menuElementsString = "#menu, #menu-bkgrnd, #menu-brdr, #options";
    
    $(menuElementsString).css("display", "block");
    /*if (positionValue < $(wndowElementString).children(".copy").length) {
      while (($(wndowElementString).children(copyElementVisibleString).css("display") === "none" && 
             (inc_copyVisible < $(wndowElementString).children(".copy").length))) {
        copyElementVisibleString = ".copy:nth-child(" + (inc_copyVisible + 3) + ")";
        
        inc_copyVisible++;
      }   
    }*/      
  } else {
    sectionValue = 0;
  }
  
  $("body").animate({scrollTop: sectionValue * $(".wndow").height()});
  
  setTimeout(displayVerticalNav, timeValue * 1.5);
 
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

var timeValue = new Number(400);

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