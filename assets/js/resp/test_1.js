
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