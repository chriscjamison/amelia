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
    if (windowWidth <= 980) {
       pageDimensions_Array[0] = 980;
      pageDimensions_Array[1] = 1308;
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
  if (sectionNumIndexValue !== -1)  {
    sectionNumIndexValue = sectionNumIndexValue + 5;
  
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
  
  if ($("#wndow-sctn_main").children("#info").css("opacity") === "0") {
    $("#wndow-sctn_main").children("#info").css("opacity", 1);  
    $("#wndow-sctn_main").children("#info").children("img").css({"display": "block", "opacity": 1});
    $("#wndow-sctn_main").children("#info").children("ul").css({"display": "block", "opacity": 1});
    $("#wndow-sctn_main").children("#info").children("ul").children("li").css({"display": "block", "opacity": 1});
  }
  
  copyCSS.width = copyCSS.width - copyDifferenceValue;
  
  $("#cntainr").css(cntainrCSS);
  
  /*$(".wndow").each(
    function () {
      wndowCSS.width = $(this).children(".copy").length * pageDimensions_Array[0];
      
      $(this) 
    }
  );*/
  $(".wndow").css(wndowCSS);
  $("#bkgrnd").css(bkgrndCSS);
  
  $(".copy").each(
    function () {
      switch ($(this).parent("div").attr("id").charAt(11)) {
        case "3":
          copyDifferenceValue = 402;
        break;
        
        case "4":
          copyDifferenceValue = 402;
        break;
        
        default:
          copyDifferenceValue = 166;
        break;
      }
      
      copyCSS.width = pageDimensions_Array[0] - copyDifferenceValue;
      
      $(this).css(copyCSS);
    }
  );
  
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
  
  // displayVerticalNav();
  
  animateWindowPanes();
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
  
  currentPosition = $(window).scrollTop();
  
  if (URLHashInfo_Array[0] !== "sctn_main" || URLHashInfo_Array[0] !== "")  {
    sectionValue = Math.floor((currentPosition + windowViewMargin) / $(".wndow").height());  
  }
  
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
  // window.alert("sectionValue = " + sectionValue);
  if ((sectionValue !== 0) && (sectionValue !== "main"))  {
    wndowElementString = "#wndow-sctn_" + sectionValue;
    copyVisibleElementString = ".copy:nth-child(" + (positionValue + 3) + ")";
    
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
  
  window.location.hash = URLHash; 
  
  animateWindowPanes();
  
  displayVerticalNav();
}


function animateWindowPanes() {
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
  
  // window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
  // window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
  if (URLHashInfo_Array.length === 2) {
    bkgrndIDString = "#bkgrnd-sctn_" + URLHashInfo_Array[0];
    
    // window.alert("bkgrndIDString = " + bkgrndIDString);
    newPositionValue = $(".wndow").width() * (URLHashInfo_Array[1] * 1);
    
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
    
    wndowElementString = "#wndow-sctn_" + URLHashInfo_Array[0];
    headrElementString = ".headr.sctn_" + URLHashInfo_Array[0];
    copyVisibleElementString = ".copy:nth-child(" + ((URLHashInfo_Array[1] * 1) + 3) + ")";
       
    copyDIVElementsString = "div:nth-child(1)";
  
    // window.alert("$(" + wndowElementString + ").children(" + copyVisibleElementString + ").children(\"div\").length = " + $(wndowElementString).children(copyVisibleElementString).children(copyDIVElementsString).length);
    for (inc_copyElements = 0; inc_copyElements < $(wndowElementString).children(copyVisibleElementString).children("div").length; inc_copyElements++)  {
      copyDIVElementsString = "div:nth-child(" + (inc_copyElements + 1) + ")";
      // window.alert("copyVisibleElementString = " + copyVisibleElementString);
      // window.alert("copyDIVElementsString = " + copyDIVElementsString);
      $(wndowElementString).children(copyVisibleElementString).children(copyDIVElementsString).css("opacity", 1);
    }
  
    
    $(wndowElementString).children(headrElementString).css(headrVisibleCSS);
    $(wndowElementString).children(copyVisibleElementString).css(copyVisibleCSS);
    
    window.scrollTo(0, ((URLHashInfo_Array[0] * 1) * $(".wndow").height()));
  } else {
    window.scrollTo(0, 0);
  }
}

$(document).ready(
  function () {
    setupPage();
    cssAdjustment();
  }
);