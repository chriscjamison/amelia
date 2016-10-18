<<<<<<< HEAD
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
=======
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
>>>>>>> 7943f836c39a968128a07383b96bc481737469d2
);