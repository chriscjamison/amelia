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
  
  if (pageDimensions_Array[0] >= 1260)  {
    if (pageDimensions_Array[1] <= 800) {
      var infoElementCSS = new Object;
      var logoElementCSS = new Object;
      var nextSctnElementCSS = new Object;
      var prevSctnElementCSS = new Object;
      var nextSctnSpanElementsCSS = new Object;
    } 

    if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
      nextSctnElementCSS = {
        "width": "5em",
        "height": "5.3em",
        "paddingTop": "0",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px -145px"
      };
      
      prevSctnElementCSS = {
        "width": "5em",
        "height": "4em",
        "paddingTop": "1.3em",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px 0px"
      };
      
      nextSctnSpanElementsCSS = {
        "width": "5em",
        "height": "3.12em"
      };
      
      infoCSS = {
        "width": "19.5em",
        "height": "27.2em",
        "bottom": "14.5em",
        "right": "7em"
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
      backgroundImage: "url('/amelia/assets/img/nav/next/resp/next-sctn.png')", 
      backgroundPositionY: "-234px"
    };
    
    $("#info").css(infoCSS);
    $("#info > img").attr(infoImgCSS);
    
    $("#next-sctn").css(nextSctnCSS);
    $("#prev-sctn > span, #next-sctn > span").css(navSctnSpanCSS);
   
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

        bkgrndCSS.backgroundImage = bkgrndImageString;
      } else  {
        
        bkgrndCSS.backgroundImage = "url('/amelia/assets/img/sctn/main/" + pageDimensions_Array[0] +
                                    "x" + pageDimensions_Array[1] + ".jpg')";
      }
      
      $(this).css(bkgrndCSS);
      
      inc_bkgrnd++;
    }
  );
  
  setTimeout(displayVerticalNav, timeValue * 2);
}


function animateInfoElement() {
  var pageDimensions_Array = new Array();
  
  pageDimensions_Array = parseWindowDimensions();
  
  if (pageDimensions_Array[0] === 980) {
    var infoCSS = new Object();
    var sctnBottomCSS = new Object();
    var sctnHeight1CSS = new Object();
    var sctnHeight2CSS = new Object();
    var navSctnSpanCSS = new Object();
    var navElementsCSS = new Object();
    var navLinkCSS = new Object();
    
    infoCSS = {
      top: -($("#info").height())
    };
    
    sctnBottomCSS = {
      bottom: "1.56em"
    };
    
    sctnHeight1CSS = {
      height: "25px"
    };

    sctnHeight2CSS = {
      height: "35px"
    };
    
    navSctnSpanCSS = {
      display: "block"
    };
    
    navElementsCSS = {
      display: "block"
    }
    
    navLinkCSS = {
      opacity: 1
    }
    
    $("#info").animate(infoCSS);
  
    $("#next-sctn > span").html("");
    $("#next-sctn").css(sctnBottomCSS);
    $("#next-sctn").css(sctnHeight2CSS);
    

    $("#prev-sctn").css(sctnHeight1CSS);
    $("#prev-sctn > span, #next-sctn > span").animate(navSctnSpanCSS);
    
    $("nav, #nav-bkgrnd, #nav-brdr").css(navElementsCSS);
    $("#nav-link").animate(navLinkCSS, 800);		
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
  
  setTimeout(function() {displayVerticalNav();}, timeValue);
}

function animateFormPanes(section_value) {
  form_id = "#form-" + section_value;

  page_1_selector = form_id + " .form-page_1";
  page_2_selector = form_id + " .form-page_2";

  // window.alert("$(page_1_selector).css(\"display\) = " + $(page_1_selector).css("display"));
  if ($(page_1_selector).css("display") === "block")  {
    $(page_1_selector).fadeTo(timeValue, 0);
    $(page_1_selector).css("display", "none");

    $(page_2_selector).css("display", "block");
    $(page_2_selector).fadeTo(timeValue, 1);
  } else  {
    $(page_2_selector).fadeTo(timeValue, 0);
    $(page_2_selector).css("display", "none");

    $(page_1_selector).css("display", "block");
    $(page_1_selector).fadeTo(timeValue, 1);
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
  var navElementsString = new String();
  
  
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
        $(this).fadeTo(timeValue, 1);
      }
    );
    
    if (sectionValue === 3 || sectionValue === 4) {
      sctnNavElementString = "#nav-sctn_" + sectionValue;
      
      $(sctnNavElementString).fadeTo(timeValue, 1);
    }
    
    bkgrndElementString = "#bkgrnd-sctn_" + sectionValue;
    
    $(bkgrndElementString).css("opacity", 0);
    
    pageDimensions_Array = parseWindowDimensions();
    
    bkgrndPositionString = -(pageDimensions_Array[0] * positionValue) + "px";
    
    $(bkgrndElementString).css("backgroundPositionX", bkgrndPositionString);
    
    $(bkgrndElementString).css("opacity", 1);
    
    if (window.location.hash !== "" && window.location.hash !== "#sctn_main") {
      /*navElementsString = "nav, #nav-bkgrnd, #nav-brdr, #options";
    
      $(navElementsString).css("display", "block");*/
      
      $("#nav-link").animate({"opacity": 1}, timeValue);
    }
  } else {
    sectionValue = 0;
    
    if ($("#info").css("opacity") === "0" && pageDimensions_Array[0] !== 980) {
      animateInfoElement();
    }
  }
  
  scrollValue = sectionValue * $(".wndow").height();

  $(window).scrollTop(sectionValue * $(".wndow").height());
  setTimeout(displayVerticalNav, timeValue * 1.5);
}

var timeValue = new Number(400);
var windowViewMargin = new Number(150);

$(document).ready(
  function () {
    if (window.location.href.indexOf("rateValue") != -1) {
      urlValue = window.location.href;
      
      $("#sctn_5-desc-6 > span > span > sup + span").text(urlValue.slice((urlValue.indexOf("rateValue") + 10), urlValue.length));
    }

    if (window.location.hash === "#sctn_6?pos=1" && 
        window.location.hash.indexOf("copyValues") === -1)  {
      $("#form-sctn_6 .form-page_1").css("display", "block");
      $("#form-sctn_6 .form-page_1").fadeTo(timeValue, 1);
    }
    
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
    
    $("#sctn_1-prev, #sctn_1-next").click(
      function () {
        animateFormPanes("sctn_1");
      }
    );

    $("input#sctn_1-start").on("click", 
      function () {
        window.location.hash = "#sctn_1?pos=1";

        $("#form-sctn_1 .form-page_1").css("display", "block");
        $("#form-sctn_1 .form-page_1").fadeTo(timeValue, 1);
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1";
      }
    );
    
    $("input#sctn_5-cntct").click(
      function () {
        window.location.hash = "#sctn_6?pos=1";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.hash = "#sctn_6?pos=1";

        $("#form-sctn_6 .form-page_1").css("display", "block");
        $("#form-sctn_6 .form-page_1").fadeTo(timeValue, 1);
      }
    )
    $("input#sctn_6-map").click(
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        animateFormPanes("sctn_6");
      }
    );
    
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
        
        if (window.location.hash === "#sctn_6?pos=1" && 
            window.location.hash.indexOf("copyValues") === -1)  {
          $("#form-sctn_6 .form-page_1").css("display", "block");
          $("#form-sctn_6 .form-page_1").fadeTo(timeValue, 1);
        }
      }
    );

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
