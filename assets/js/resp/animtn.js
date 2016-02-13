function fadeSectionBlocks(sectionBlockElements, transitionTimeValue) {
	$(sectionBlockElements).each(
		function () {
      $(this).attr("id");
      $(this).fadeTo(transitionTimeValue, 1);
		}
	);
}

function setWindowParams(windowWidth, paramNameString)  {
  var elementWidth = new Number();
  var elementHeight = new Number();
  
  if (windowWidth < 360) {
    elementWidth = 360;
    elementHeight = 540;
  } else {
    if (windowWidth <= 980) {
      elementWidth = 980;
      elementHeight = 1308;
    } else {
      if (windowWidth <= 1024) {
        elementWidth = 1125;
        elementHeight = 1500;
      } else {
        if (windowWidth <= 1280) {
          elementWidth = 1280;
          
          if ($(window).height() <= 800) {
            elementHeight = 800;
          } else {
            elementHeight = 1024;
          }
        } else {
          if (windowWidth <= 1366) {
            elementWidth = 1366;
            elementHeight = 768;
          } else {
            if (windowWidth <= 1600) {
              elementWidth = 1600;
              elementHeight = 900;
            } else {
              elementWidth = 1920;
              elementHeight = 1020;
            }
          }
        }
      }
    }
  } 
  
  if (paramNameString === "width")  {
    return elementWidth;  
  } else {
    return elementHeight;
  }
     
}

function animateElements(sectionNum) {
  var transitionValue = new Number();
  
  transitionValue = 500;
  
  if (sectionNum !== "main")	{
		var headerClassString = "div.headr.sctn_" + sectionNum;
		var sectionDescElementsString = "div.sctn_" + sectionNum + "-blok";
		
		fadeSectionBlocks(headerClassString, transitionValue);
	
    switch (sectionNum) {
			case "1":
        // $(window).scrollTop($("div.wndow").height());
				
        fadeSectionBlocks(sectionDescElementsString, transitionValue);
			break;
			
			case "2":
        // $(window).scrollTop($("div.wndow").height() * 2);
				
        var sectionDescElementsString_2 = sectionDescElementsString + ", div.sctn_2-blok-desc, div.sctn_2-blok_2";
				
        fadeSectionBlocks(sectionDescElementsString_2, transitionValue);
			break;
			
			case "3":
        // $(window).scrollTop($("div.wndow").height() * 3);
        
        var sectionDescElementsString_3 = sectionDescElementsString + ", #menu-sctn_3";
				
        fadeSectionBlocks(sectionDescElementsString_3, transitionValue);
			break;
			
			case "4":
				// $(window).scrollTop($("div.wndow").height() * 4);
				
        var sectionDescElementsString_4 = sectionDescElementsString + ", #menu-sctn_4";
				
        fadeSectionBlocks(sectionDescElementsString_4, transitionValue);
			break;
			
			case "5":
        // $(window).scrollTop($("div.wndow").height() * 5);
				        
				fadeSectionBlocks(sectionDescElementsString, transitionValue);
			break;
			
			case "6":
				// $(window).scrollTop($("div.wndow").height() * 6);
				
        var sectionDescElementsString_5 = sectionDescElementsString + ", div.sctn_6-blok-2";
        
        fadeSectionBlocks(sectionDescElementsString_5, transitionValue);
				
				var sectionDescElementsString_6 = "#menu-sctn_6";
				
        fadeSectionBlocks(sectionDescElementsString_6, transitionValue);
			break;
		}
	}	else	{
		var logoCSS_1 = {
			display: "block"
		};
		
		var logoCSS_2 = {
			display: "inherit"
		};
		
		var logoCSS_3 = {
			display: "block",
      opacity: 1
		};
		
		$("#wndow-sctn_main").show("drop", (transitionValue * 2));
		$("#info").css(logoCSS_1).css("opacity", 1);
    $("#info > img").css(logoCSS_1);
    
    // window.alert(transitionValue * 1.5);
    $("#info > img").delay(transitionValue).fadeTo((transitionValue * 1.5), 1, 
      function () {
        // window.alert("#info visible")
          
        $("#info ul li").css(logoCSS_2);
        $("#info ul").css(logoCSS_3);
        
        $("#info ul li").each(
          function () {
            $(this).delay(transitionValue * 0.75).fadeTo((transitionValue * 1.5), 1);
          }
        );		
			}
		);		
	}
}

function resizeBackgrounds() {
	var windowElements_Array = new Array();
	var backgroundElement_Array = new Array();
  var backgroundCSSValues_Array = new Array();
	
	var windowWidth = new Number();
  var windowHeight = new Number();
  var windowResizeValue = new Number();
      
  var urlString = new String();
  var copyElementsString = new String();
  
  windowElements_Array = $("div.wndow");
  backgroundElement_Array = $("#bkgrnd");
 
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  windowResizeValue = 133;
  
	windowElements_Array.each(
		function ()	{
      var sectionNumValue = new String();
      var sectionIdSelector = new String();
      
      sectionIdSelector = $(this).attr("id");
      sectionNumValue = sectionIdSelector.slice(6);
      
      backgroundCSSValues_Array[0] = "#bkgrnd-" + sectionNumValue;
    
      backgroundCSSValues_Array[1] = $(this).children("div.copy").length;
      
      if (backgroundCSSValues_Array[1] === 0) {
        backgroundCSSValues_Array[1]++;
      }  
      
      backgroundCSSValues_Array[2] = setWindowParams(windowWidth, "width");
      
      backgroundCSSValues_Array[3] = setWindowParams(windowWidth, "height");
              
      backgroundCSSValues_Array[4] = backgroundCSSValues_Array[2] * backgroundCSSValues_Array[1];
      
      backgroundCSSValues_Array[5] = "url('/amelia/assets/img/sctn/" + 
                                     sectionNumValue.slice(sectionNumValue.indexOf("_") + 1) + 
                                     "/" + backgroundCSSValues_Array[4] + 
                                     "x" + backgroundCSSValues_Array[3] +	".jpg')";
       
      
      $(backgroundCSSValues_Array[0]).css("backgroundImage", backgroundCSSValues_Array[5]);		
      // $(backgroundCSSValues_Array[0]).css("width", backgroundCSSValues_Array[4]);
      $(backgroundCSSValues_Array[0]).css("height", backgroundCSSValues_Array[3]);
      
      // $(this).css("width", backgroundCSSValues_Array[1] * backgroundCSSValues_Array[2]);
      $(this).css("height", backgroundCSSValues_Array[3]);
      
      // $(this).children(".copy").css("width", (windowWidth - windowResizeValue));
      $(this).children(".copy").css("height", (windowHeight - 50));
      
      copyElementsString = "#" + $(this).attr("id");
       
      if ($(copyElementsString).children(".copy:first").css("display") !== undefined) {
        $(copyElementsString).children(".copy:first").css("display", "block")
      }
      
      // window.alert("$(" + copyElementsString + ").children(\".copy\").length = " + $(copyElementsString).children(".copy").length);
      
      // $(copyElementsString).children(".copy:first-child").css("display", "block");
      
      if ($(this).children(".copy").length > 0) {
        copyElementsString = ".copy:nth-child(" + ($(this).children(".copy").length + 2) + ")";
       
        $(this).children(copyElementsString).css("width", windowWidth - windowResizeValue - 1);
        
        
      }
      
    }
  );
  
  urlString = window.location.hash;
      
  if (urlString !== "") {
    var urlStringIndexNum = new Number();
    var windowSection = new String()
    var windowPosition = new String();
    var backgroundPositionValue = new Number();
    
    urlStringIndexNum = urlString.indexOf("_");
    
    windowSection = urlString.charAt(urlStringIndexNum + 1);
    windowPosition = urlString.charAt(urlString.length - 1);
    
    switch (windowPosition) {
      case "2":
        backgroundPositionValue = backgroundCSSValues_Array[2] * -2;
      break;
      
      case "3":
        backgroundPositionValue = backgroundCSSValues_Array[2] * -3;
      break;
      
      case "4":
        backgroundPositionValue = backgroundCSSValues_Array[2] * -4;
      break;
    }
    
    var backgroundSectionElement = "#bkgrnd-" + urlString.slice(1, urlString.indexOf("?"));
    
    $(backgroundSectionElement).css("backgroundPositionX", backgroundPositionValue);
    
    if (urlString === "#sctn_6?pos=2") {
      window.setTimeout(function() {window.location.hash = "";}, 3000);
    }
    
  }
}


function animateWindowPanes() {
  var pageURLString = window.location.hash;
  
  if (pageURLString !== "") {
    var variableIndexNum;
    
    var sectionNum;
    var positionNum;
    
    var sectionNumString = "sctn_";
    var positionNumString = "pos=";
    
    variableIndexNum = pageURLString.indexOf(sectionNumString);
    
    sectionNum = pageURLString.charAt(variableIndexNum + sectionNumString.length);
    
    var bkgrndValueString = "#bkgrnd-sctn_" + sectionNum;
    var windowPaneValueString = "#wndow-sctn_" + sectionNum;
    var headerValueString = "div.headr.sctn_" + sectionNum;
    
    variableIndexNum = pageURLString.indexOf(positionNumString);
    
    positionNum = pageURLString.charAt(variableIndexNum + positionNumString.length);
    
    var windowWidth = $(window).width();
    var windowWidthValue = new Number();
    
    windowWidthValue = setWindowWidth(windowWidth);
    
    var bkgrndValueNum = positionNum * -windowWidthValue;
    var windowPaneValueNum = positionNum * -windowWidthValue;
    var headerValueNum = positionNum * windowWidthValue;
    
    var bkgrndValueNumString =  bkgrndValueNum + "px" + " 0px"
    var windowPaneValueNumString = windowPaneValueNum + "px";
    var headerValueNumString = headerValueNum + "px";
    
    if ($(headerValueString).css("opacity") !== "0")  {
      $(bkgrndValueString).fadeTo(125, 0, 
        function () {
          $(bkgrndValueString).css("backgroundPosition", bkgrndValueNumString);
          $(bkgrndValueString).fadeTo(125, 1);
        });
    } else {
      $(bkgrndValueString).css("backgroundPosition", bkgrndValueNumString);
      animateElements(sectionNum);
    }
    
    $(windowPaneValueString).css("left", windowPaneValueNumString);
    $(headerValueString).css("left", headerValueNumString);
    
    var subNavValueString = "#menu-sctn_" + sectionNum;
    
    var windowScrollNum = sectionNum * $("div.wndow").height();
    
    $("body").animate({scrollTop: windowScrollNum}, 750, "easeInOutQuad");
      
    if ($(subNavValueString)) {
      var subNavValueNum = positionNum * windowWidthValue;
      var subNavValueNumString = subNavValueNum + "px";
          
      $(subNavValueString).css("left", subNavValueNumString);
    }
  } else {
    $(window).scrollTop(0);
  }
}

$(document).ready(
	function () {
    resizeBackgrounds();
    
		$(window).on('hashchange', 
      function () {
        animateWindowPanes();
      }
    );
    
    $(window).on('load', 
      function () {
        animateWindowPanes();
      }
    );
    
    
    $("#cntainr").on("scrollstart", 
      function (event) {
        window.alert($(window).scrollTop());
      }
    );
    
    $(window).on("scroll",
			function () {
        //  $("#menu").css("top", $(window).scrollTop());
        
        
				var browserPositionNum = $(window).scrollTop();
        var windowHeight = $("div.wndow").height();
				
				if (browserPositionNum > (windowHeight - 500) && browserPositionNum < (windowHeight + 250)) {
					animateElements("1");
				} 
				
				if (browserPositionNum > (windowHeight * 2 - 500) && browserPositionNum < (windowHeight * 2) + 250) {
					animateElements("2");
				}	
				
				if (browserPositionNum > (windowHeight * 3 - 500) && browserPositionNum < (windowHeight * 3) + 250)	{
					animateElements("3");
				}	
				
				if (browserPositionNum > (windowHeight * 4 - 500) && browserPositionNum < (windowHeight * 4) + 250)	{
					animateElements("4");
				}
				
				if (browserPositionNum > (windowHeight * 5 - 500) && browserPositionNum < (windowHeight * 5) + 250)	{
					animateElements("5");
				}	
				
				if (browserPositionNum > (windowHeight * 6 - 500) && browserPositionNum < windowHeight * 6)	{
					animateElements("6");
				}
        
        if ((browserPositionNum === 0) && ($("#prev-sctn").css("opacity") === "1"))  {
          $("#prev-sctn").css("display", "none");
          $("#prev-sctn").animate({"opacity": 0}, 500); 
        }
        
        if (browserPositionNum > 1)  {
          $("#prev-sctn").css("display", "block");
          $("#prev-sctn").animate({"opacity": 1}, 500); 
        }
        
        if (browserPositionNum > (($("div.wndow").length - 1) * $("div.wndow").height())) {
          $("#next-sctn").css("display", "none");
          $("#next-sctn").fadeTo(500, 0);
        }
        
        if (browserPositionNum < (($("div.wndow").length - 1) * $("div.wndow").height())) {
          $("#next-sctn").css("display", "block");
          $("#next-sctn").fadeTo(500, 1);
        }
		});
	}
);

