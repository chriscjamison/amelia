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
  
  var URLHashInfo_Array = new Array();
 
  URLHashString = window.location.hash; 
  
  sectionNumIndexValue = URLHashString.indexOf("sctn_");
  
  sectionNumIndexValue = sectionNumIndexValue + 5;
  URLHashInfo_Array[0] = URLHashString.charAt(sectionNumIndexValue);
  
  if (URLHashInfo_Array[0] === "m" || sectionNumIndexValue === 4) {
    URLHashInfo_Array[0] = "main";
  }
  
  if (URLHashString.indexOf("pos=") !== -1) {
    positionNumIndexValue = URLHashString.indexOf("pos=");
    positionNumIndexValue = positionNumIndexValue + 4;
    URLHashInfo_Array[1] = URLHashString.charAt(positionNumIndexValue);
  }
  
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
  
  displayVerticalNav();
}

function setupWindow(sectionValue) {
  var wndowElementString = new String();
  var copyElementsString = new String();
  
  var inc_copyVisible = new Number();
  var windowPaneValue = new Number();
  var positionValue = new Number();
  var currentPosition = new Number();
  
  var URLHash = new String();
  
  copyElementsString = ".copy:nth-child(" + inc_copyVisible + ")";
  wndowElementString = "#wndow-sctn_" + sectionValue;
  
  inc_copyVisible = 3;
  
  while ($(wndowElementString).children(copyElementsString).css("display") === "none")  {
    inc_copyVisible++;
    
    copyElementsString = ".copy:nth-child(" + inc_copyVisible + ")";
  }
  
  positionValue = inc_copyVisible - 3;  
    
    
  if (sectionValue === "main")  {
    URLHash = "#sctn_main";
  } else  {
    URLHash = "#sctn_" + sectionValue + "?pos=" + positionValue;
  }
      
  window.location.hash = URLHash;
  
  displayVerticalNav();
}


function animateWindowPanes() {
  var URLHashInfo_Array = new Array();
  
  var wndowIDString = new String();
  var headrElementString = new String();
  var copyElementVisibleString = new String();
  var bkgrndIDString = new String();
  
  var positionString = new String();
  var positionFlag = new Boolean();
  
  var copyHideCSS = new Object();
  var copyVisibleCSS = new Object();
  var bkgrndCSS = new Object();
  var wndowCSS = new Object();
  
  var copyPositionNumValue = new Number();
  var posNumValue = new Number();
  var bkgrndPositionValue = new Number();
  
  URLHashInfo_Array = URLInfo();
  
  copyHideCSS = {
    "display": "none"
  };
  
  copyVisibleCSS = {
    "display": "block"
  };
  
  bkgrndVisibleCSS = {
    "display": "block"
  };
  
  wndowIDString = "#wndow-sctn_" + URLHashInfo_Array[0];
    // window.alert("URLHashInfo_Array[0] = " + URLHashInfo_Array[0]);
    
  if (wndowIDString !== "#wndow-sctn_main") {    
    $(wndowIDString).children(".copy").css(copyHideCSS);
  }
  
  // window.alert("URLHashInfo_Array.length = " + URLHashInfo_Array.length);
  
  if (URLHashInfo_Array.length === 2) {
    posNumValue = URLHashInfo_Array[1] * 1;
    
    copyPositionNumValue = posNumValue + 3;
  
    copyElementVisibleString = ".copy:nth-child(" + copyPositionNumValue + ")";
    
    bkgrndIDString = "#bkgrnd-sctn_" + URLHashInfo_Array[0];
    
    // window.alert("bkgrndIDString = " + bkgrndIDString);
    newPositionValue = $(".wndow").width() * posNumValue;
    
    positionString = newPositionValue + "px";
    
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
    
    headrElementString = "div.headr.sctn_" + URLHashInfo_Array[0];
       
    $(wndowIDString).children(headrElementString).css(copyVisibleCSS);
    $(wndowIDString).children(copyElementVisibleString).css(copyVisibleCSS);
  } else {
    if ($(wndowIDString).children("#info").css("opacity") === "0") {
      $(wndowIDString).children("#info").css("opacity", 1);  
      $(wndowIDString).children("#info").children("img").css({"display": "block", "opacity": 1});
      $(wndowIDString).children("#info").children("ul").css({"display": "block", "opacity": 1});
      $(wndowIDString).children("#info").children("ul").children("li").css({"display": "block", "opacity": 1});
    }
  }
}

$(document).ready(
  function () {
    var wndowHeight = $(".wndow").height();
    var currentPosition = new Number();
    
    setupPage();
    animateWindowPanes();
    
    
    // window.alert("$(\".wndow\").height() = " + $(".wndow").height());
    
    windowViewMargin = 300;
    
    $(window).on("hashchange",
      function () {
        animateWindowPanes();
        
        /*var sectionValue = new String();
        
        sectionValue = window.location.hash.charAt(window.location.hash.indexOf("_") + 1);
        
        if (sectionValue === "m") {
          setupWindow("main");
        } else  {
          setupWindow(sectionValue);
        }*/
        
      }
    );
    
    $(window).on("scroll", 
      function () {
        
        // window.alert("wndowHeight = " + wndowHeight);
        currentPosition = $(window).scrollTop();  
        
        // window.alert("wndowHeight - windowViewMargin = " + (wndowHeight - windowViewMargin));
        if (currentPosition < wndowHeight - windowViewMargin) {
          setupWindow("main");
        }
        
        if ((currentPosition > wndowHeight - windowViewMargin) && 
            (currentPosition < (wndowHeight * 2 - windowViewMargin)))  {
          setupWindow("1");
        } 
        
        if ((currentPosition > (wndowHeight * 2 - windowViewMargin)) && 
            (currentPosition < (wndowHeight * 3 - windowViewMargin)))  {
          setupWindow("2");
        }   
        
        if ((currentPosition > wndowHeight * 3 - windowViewMargin) && 
            (currentPosition < (wndowHeight * 4 - windowViewMargin)))  {
         setupWindow("3");
        } 
        
        if ((currentPosition > wndowHeight * 4 - windowViewMargin) && 
            (currentPosition < (wndowHeight * 5 - windowViewMargin)))  {
           setupWindow("4");
        }
        
        if ((currentPosition > wndowHeight * 5 - windowViewMargin) && 
            (currentPosition < (wndowHeight * 6 - windowViewMargin)))  {
          setupWindow("5"); 
        }
      
        if ((currentPosition > wndowHeight * 6 - windowViewMargin) && 
            (currentPosition < (wndowHeight * 7 - windowViewMargin)))  {
          setupWindow("6");
          
        }
          
      }
    );
  }
);