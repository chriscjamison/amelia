// menu-test.js

function cssAdjustment()  {
  if ((window.clientInformation.userAgent.indexOf("Mobile") !== -1) || 
      (window.clientInformation.userAgent.indexOf("Tablet") !== -1))  {
    
    var optionsElementCSS = new Object;
    var optionsSpanElementsCSS = new Object;
    var menuElementCSS = new Object;
    var menuBkgrndElementCSS = new Object;
    var menuBrdrElementCSS = new Object;
    
    if ($(window).width() >= 1270) {
      optionsElementCSS = {
        "width": "39em"
      };
      
      optionsSpanElementsCSS = {
        "width": "8.61em",
        "display": "inline-table",
        "fontSize": "1.5em"
      };
      
      menuElementCSS = {
        "width": "39em",
        "left": "-39em"
      };
      
      menuBkgrndElementCSS = {
        "width": "39em",
        "left": "-39em"
      };
      
      menuBrdrElementCSS = {
        "width": "39em",
        "left": "-39em"
      }; 
    }
    
    $("#options").css(optionsElementCSS);
    $("#options > span").css(optionsSpanElementsCSS);
    $("#menu").css(menuElementCSS);
    $("#menu-bkgrnd").css(menuBkgrndElementCSS);
    $("#menu-brdr").css(menuBrdrElementCSS);
  } 
}

$(document).ready(
  function () {
    var menuTransitionTime = 500;

    function menuLinkHoverState(hoverState) {
      var menuClassString = new String();
      
      menuClassString = "menu-link-" + hoverState;
      
      if (hoverState === "click") {
        menuTransitionTime = menuTransitionTime / 2;
      }
      
      $("#menu-link").fadeTo((menuTransitionTime / 2), 0, 
        function () {
          $("#menu-link").removeClass();
          $("#menu-link").addClass(menuClassString);
          $("#menu-link").fadeTo((menuTransitionTime / 2), 1);
        }
      );
    } // END OF FUNCTION menuLinkHoverState
    
    function slideMenu()  {
      var inc_copyVisible = new Number();
      var inc_copy = new Number();
      var inc_copyURLValues = new Number();
      var inc_headrVisible = new Number();
      
      var copyVisibleURLString = new String();
      
      var copyVisibleElements_Array = new Array();
      var copyElementsURLString_Array = new Array();
      var copyElementValues_Array = new Array();
      
      // window.alert("$(\"#menu\").css(\"left\") = " + $("#menu").css("left"));
      $("#menu").css("height", $(window).height());
      $("#menu-bkgrnd").css("height", $(window).height());
      if ($("#menu").css("left") === "0px") {
        $("#menu, #menu-brdr, #menu-bkgrnd").css("left", -($("#menu").width()));
        $("#options").css({"display": "none", "opacity": 0, "left": -($("#menu").width())})
        
        inc_copyVisible = 0;
        
        copyElementsURLString_Array = window.location.hash.split("=");
        
        copyElementValues_Array = copyElementsURLString_Array[copyElementsURLString_Array.length - 1].split(",");
   
        $(".copy").each(
          function () {
            for (inc_copy = 0; inc_copy < copyElementValues_Array.length; inc_copy++) {
              if (inc_copyVisible.toString() === copyElementValues_Array[inc_copy])  {
                $(this).css("display", "block");
                
                $(".headr").each(
                  function()  {
                    if (inc_headrVisible.toString() === copyElementValues_Array[inc_copy])  {
                      $(this).css("display", "table");
                    }
                    
                    inc_headrVisible++;
                  }
                );
              }
            }
            
            inc_copyVisible++;
          }
        );
        
        $("#cntainr").css({"width": $(window).width(), "left": "0px"});
        $(".wndow").css("width", $(window).width());
        $("#bkgrnd, #bkgrnd > div").css({"width": $(window).width(), "left": "0px"});
        $(".sctn_nav").css("display", "block");
        $("#prev-sctn, #next-sctn").css("display", "block");
        
        window.location.hash = "";
      } else  {
        $("#menu, #menu_brdr, #menu-bkgrnd").css("left", "0px");
        $("#options").css({"display": "block", "opacity": 1, "left": "0px"})
        
        inc_copyVisible = 0;
           
        $(".copy").each(
          function () {
            // window.alert("$(this).css(\"display\") = " + $(this).css("display"));
            
            if ($(this).css("display") === "block") {
              copyVisibleElements_Array.push(inc_copyVisible);
            }
            
            inc_copyVisible++;
          }
        );
        
        copyVisibleURLString = "copyValues=";
        
        for (inc_copyVisible = 0; inc_copyVisible < copyVisibleElements_Array.length; inc_copyVisible++)  {
          copyVisibleURLString = copyVisibleURLString + copyVisibleElements_Array[inc_copyVisible];
          
          if (inc_copyVisible < copyVisibleElements_Array.length - 1) {
            copyVisibleURLString = copyVisibleURLString + ",";
          }
        }
        
        $("#cntainr, #bkgrnd, #bkgrnd > div").css({"width": ($(window).width() - $("#menu").width()), "left": $("#menu").width()});
        $(".wndow").css("width", ($(window).width() - $("#menu").width()));
        $(".copy, .headr, .sctn_nav, #prev-sctn, #next-sctn").css("display", "none");
        
        window.location.hash = copyVisibleURLString;
      }
    }

    $("#menu-link").on("mouseover", 
      function () {
        menuLinkHoverState("hover");
      }
    );

    $("#menu-link").on("mouseout", 
      function () {
        if (($("#menu-link").hasClass("menu-link-click_2")) === false) {
          menuLinkHoverState("base"); 
        }
      }
    );
    
    $("#menu-link").on("click", 
      function () {
        if (($("#menu-link").hasClass("menu-link-hover")) === true)  {
          menuLinkHoverState("click");
          menuLinkHoverState("click_2");
          
          slideMenu();
        } else  {
          menuLinkHoverState("base");
          
          slideMenu();
        }
      }
    );
    
    $("#options > span").on("click",
      function () {
        slideMenu();
        
        menuLinkHoverState("base");
        
        setTimeout(menuTransitionTime);
        
        switch ($(this).attr("id")) {
          case "home":
            window.scrollTo(0, 0);
            window.location.hash = "#sctn_main";
          break;

          case "sctn-1":
            window.scrollTo(0, $(".wndow").height());
            animateElements(1);
            window.location.hash = "#sctn_1?pos=0";
          break;

          case "sctn-2":
            window.scrollTo(0, ($(".wndow").height() * 2));
            animateElements(2);
            window.location.hash = "#sctn_2";
          break;

          case "sctn-3":
            window.scrollTo(0, ($(".wndow").height() * 3));
            window.location.hash = "#sctn_3?pos=0";
            animateElements(3);
          break;

          case "sctn-4":
            window.scrollTo(0, ($(".wndow").height() * 4));
            window.location.hash = "#sctn_4?pos=0";
            animateElements(4);
          break;

          case "sctn-5":
            window.scrollTo(0, ($(".wndow").height() * 5));
            animateElements(5);
            window.location.hash = "#sctn_5";
          break;

          case "sctn-6":
            window.scrollTo(0, ($(".wndow").height() * 6));
            window.location.hash = "#sctn_6?pos=0";
            animateElements(6);
          break;
        }
      }
    );
    
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        var currentLocation = new Number();
        var wndowHeight = new Number();
        var locationDifferenceValue = new Number();
        var newLocation = new Number();
        var sctnValue = new Number();
        
        var URLHashString = new String();
        
        currentLocation = $(window).scrollTop();
        wndowHeight = $(".wndow").height();
        
        if ($(this).attr("id") === "prev-sctn")  {
          if (Math.floor(currentLocation / wndowHeight) === 0)  {
            locationDifferenceValue = -wndowHeight;
          } else  {
            locationDifferenceValue = -((wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight);
          }
        } else {
          if (Math.floor(currentLocation / wndowHeight) === 0)  {
            locationDifferenceValue = wndowHeight;
          } else  {
            locationDifferenceValue = (wndowHeight * Math.floor(currentLocation / wndowHeight) - currentLocation) + wndowHeight;
          }
        }
        
        newLocation = currentLocation + locationDifferenceValue;
        /*
        window.alert("$(\".wndow\").height() = " + $(".wndow").height());
        window.alert("newLocation = " + newLocation);
        window.alert(newLocation / $(".wndow").height());
        */
        sctnValue = newLocation / $(".wndow").height();
        
        $(window).scrollTop(newLocation);
        
        URLHashString = "sctn_" + sctnValue;
        
        if (sctnValue !== 2)  {
          URLHashString = URLHashString + "?pos=0";     
        }
        
        window.location.hash = URLHashString;
      }
    );
  }
);

