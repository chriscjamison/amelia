<<<<<<< HEAD
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
=======
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
>>>>>>> 7943f836c39a968128a07383b96bc481737469d2
}