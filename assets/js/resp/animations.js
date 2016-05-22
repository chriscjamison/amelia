//animations.js
function parseWindowDimensions()  {
  var windowWidth = new Number();
  var windowHeight = new Number();
  
  var pageDimensions_Array = new Array();
  
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
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
        
        inc_copyVisible = sortCopyElements();
        
        URLHashInfo_Array[1] = inc_copyVisible - 3;
      }  
    }
  }
  
  return URLHashInfo_Array;
}

    
function cssAdjustment()  {
  var pageDimensions_Array = new Array();
  
  pageDimensions_Array = parseWindowDimensions();
  
  if (($(window).width() >= 1260) && ($(window).height() <= 800))  {
    
    var copyCSS = new Object();
    var optionsElementCSS = new Object;
    var optionsSpanElementsCSS = new Object;
    var menuElementCSS = new Object;
    var menuBkgrndElementCSS = new Object;
    var menuBrdrElementCSS = new Object;
    var infoElementCSS = new Object;
    var logoElementCSS = new Object;
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
        
        copyCSS.width = pageDimensions_Array[0] - copyDifferenceValue;
        
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
      
    infoImgCSS = {
      "src": "/amelia/assets/img/logo/lg.png",
      "width": "200",
      "height": "190"
    }
    
    $("#options").css(optionsElementCSS);
    $("#options > span").css(optionsSpanElementsCSS);
    $("#menu").css(menuElementCSS);
    $("#menu-bkgrnd").css(menuBkgrndElementCSS);
    $("#menu-brdr").css(menuBrdrElementCSS);
    $("#info").css(infoElementCSS);
    
    window.alert("window.navigator.userAgent.indexOf(\"Mobile\") = " + window.navigator.userAgent.indexOf("Mobile"));
    window.alert("window.navigator.userAgent.indexOf(\"Tablet\") = " + window.navigator.userAgent.indexOf("Tablet"));
    if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
      nextSctnElementCSS = {
        "width": "5em",
        "height": "5.3em",
        "paddingTop": "0",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/menu/next/next-sctn.png')",
        "backgroundPosition": "0px -145px"
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
      };
      
      infoCSS = {
        width: "19.5em",
        height: "27.2em",
        bottom: "14.5em",
        right: "7em"
      };
     
      infoImgCSS = {
        "src": "/amelia/assets/img/logo/lg.png", 
        "width": "200", 
        "height": "190"
      };
      
      $("#next-sctn").css(nextSctnElementCSS);
      $("#prev-sctn").css(prevSctnElementCSS);
      $("#prev-sctn > span, #next-sctn > span").css(nextSctnSpanElementsCSS);  
     
      $("#info").css(infoCSS); 
      $("#info > img").attr(infoImgCSS);
    
      $("#prev-sctn > span").html("Click to view the previous section");
      $("#next-sctn > span").html("Click to view the next section");
    } 
    
    
   
  //  window.alert("pageDimensions_Array[0] = " + pageDimensions_Array[0]);
    /*if (pageDimensions_Array[0] >= 1330 && pageDimensions_Array[0] < 1600) {
      infoCSS = {
        width: "19.5em",
        height: "27.2em",
        bottom: "14.5em",
        right: "7em"
      };
    } else {
      infoCSS = {
        width: "19.2em",
        height: "27.2em",
        bottom: "5.5em",
        right: "5.5em"
      };
    }*/
    
    // $("#info").css(infoCSS);
    
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
    
    var infoCSS = new Object();
    var infoImgCSS = new Object();
   
    infoCSS = {
      width: pageDimensions_Array[0],
      height: (pageDimensions_Array[1] * 0.7)
    };
    
    infoImgCSS = {
      "src": "/amelia/assets/img/logo/logo_phone.png", 
      "width": "480", 
      "height": "455"
    }
    
    navSctnSpanCSS =  {
      width: "6.8em",
      height: "6.56em",
      margin: "0 auto"
    }
   
    nextSctnCSS = {
      right: "24.1em",
      bottom: "37em",
      backgroundImage: "url('/amelia/assets/img/menu/next/resp/next-sctn.png')"
    };
    
    $("#info").css(infoCSS);
    $("#info > img").attr(infoImgCSS);
    
    // $("#next-sctn").css(nextSctnCSS);
    // $("#prev-sctn, #next-sctn").css("right");
  //  $("#prev-sctn > span, #next-sctn > span").css(navSctnSpanCSS);
   
    $("#prev-sctn > span").html("");
    $("#next-sctn > span").html("Press to view the next section");
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
  
  cssAdjustment();
  
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
 
  $("#cntainr").css(cntainrCSS);
   
  inc_bkgrnd = 0;
  
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
  
  setTimeout(displayVerticalNav, timeValue * 2);
  
  // animateWindowPanes();
}


function animateInfoElement() {
  var pageDimensions_Array = new Array();
  
  pageDimensions_Array = parseWindowDimensions();
  // window.alert("pageDimensions_Array[0] = " + pageDimensions_Array[0]);
  if (pageDimensions_Array[0] === 980) {
    var infoCSS = new Object();
    var nextSctnCSS = new Object();
    var prevSctnCSS = new Object();
    var navSctnSpanCSS = new Object();
    var menuElementsCSS = new Object();
    var menuLinkCSS = new Object();
    
    infoCSS = {
      top: -($("#info").height())
    };
    
    nextSctnCSS = {
      bottom: "1.56em"
    };
    
    prevSctnCSS = {
      height: "25px"
    };
    
    navSctnSpanCSS = {
      display: "block"
    };
    
    menuElementsCSS = {
      display: "block"
    }
    
    menuLinkCSS = {
      opacity: 1
    }
    
    $("#info").animate(infoCSS);
  
    $("#next-sctn > span").html("");
    $("#next-sctn").css(nextSctnCSS);
    
    $("#prev-sctn").css(prevSctnCSS);
    $("#prev-sctn > span, #next-sctn > span").animate(navSctnSpanCSS);
    
    $("#menu, #menu-bkgrnd, #menu-brdr").css(menuElementsCSS);
    $("#menu-link").animate(menuLinkCSS, 800);		
  } else {
    var logoCSS_1 = {
			display: "block"
		};
		
    var logoCSS_2 = {
      opacity: 1
    }
    
		var logoCSS_3 = {
			display: "inherit"
		};
		
		var logoCSS_4 = {
			display: "block",
      opacity: 1
		};
    
    $("#wndow-sctn_main").show("drop", (timeValue * 2));
		$("#info").css(logoCSS_1).css(logoCSS_2);
    $("#info > img").css(logoCSS_1);
    
    $("#info > img").delay(timeValue).fadeTo((timeValue * 1.5), 1, 
      function () {
        $("#info ul li").css(logoCSS_3);
        $("#info ul").css(logoCSS_4);
        
        $("#info ul li").each(
          function () {
            $(this).delay(timeValue * 0.75).fadeTo((timeValue * 1.5), 1);
          }
        );		
			}
		);
  }
}

function sortCopyElements(sectionValue) {
  var wndowElementString = new String();
  var positionValue = new Number();
  
  var inc_copyVisible = new Number();
  
  if (sectionValue === null)  {
    $(".copy").each(
      function () {
        if ($(this).css("display") === "block") {
          positionValue = inc_copyVisible;
        }
        
        inc_copyVisible++;
      }
    );
    
    return positionValue;  
  } else {
    wndowElementString = "#wndow-" + sectionValue + " > .copy";
    
    $(wndowElementString).each(
      function () {
        if ($(this).css("display") === "block") {
          positionValue = inc_copyVisible;
        }
        
        inc_copyVisible++;
      }
    );
    
    URLHashString = "#" + sectionValue + "?pos=" + positionValue;
    
    window.location.hash = URLHashString;
  }
  
  
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
  var scrollValue = new Number();
  
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
      
      $(sctnNavElementString).fadeTo(timeValue, 1);
    }
    
    bkgrndElementString = "#bkgrnd-sctn_" + sectionValue;
    
    $(bkgrndElementString).css("opacity", 0);
    
    pageDimensions_Array = parseWindowDimensions();
    
    bkgrndPositionString = -(pageDimensions_Array[0] * positionValue) + "px";
    
    $(bkgrndElementString).css("backgroundPositionX", bkgrndPositionString);
    
    $(bkgrndElementString).css("opacity", 1);
    
    if (window.location.hash !== "" && window.location.hash !== "#sctn_main") {
      menuElementsString = "#menu, #menu-bkgrnd, #menu-brdr, #options";
    
      $(menuElementsString).css("display", "block");
      
      $("#menu-link").animate({"opacity": 1}, timeValue);
    }
  } else {
    sectionValue = 0;
    
    if ($("#info").css("opacity") === "0" && pageDimensions_Array[0] !== 980) {
      animateInfoElement();
    }
  }
  
  scrollValue = sectionValue * $(".wndow").height();
  
  // $("body").animate({scrollTop: scrollValue}, 400);
  
  $(window).scrollTop(sectionValue * $(".wndow").height());
  setTimeout(displayVerticalNav, timeValue * 1.5);
 
 
}


var timeValue = new Number(400);
var windowViewMargin = new Number(150);

$(document).ready(
  function () {
    setupPage();
    animateWindowPanes();
    
    $(window).on("resize", 
      function () {
        setupPage();
        animateWindowPanes();
      }
    );
  }
);

