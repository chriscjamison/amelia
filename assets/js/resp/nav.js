// nav.js
var nav_transition_time = 500;

function cycleNavLink(hover_state)  {
  nav_class = "nav-" + hover_state;
  
  if (hover_state === "base" || 
      hover_state === "hover")  {
        $("#nav-link").fadeTo((nav_transition_time / 2), 0, 
          function () {
            $("#nav-link").removeClass();
            $("#nav-link").addClass(nav_class);
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
          }
        );
  } else {
        // animateSideNav();

        $("#nav-link").fadeTo((nav_transition_time / 2), 0, 
          function () {
            $("#nav-link").removeClass();
            $("#nav-link").addClass("click_1");
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
            $("#nav-link").removeClass();
            $("#nav-link").addClass("click_2");
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
          }
        );
  }
} // END OF cycleNavLink

function navLinkHoverState() {  
  var current_class = new String();

  var nav_link_selector = new String();
  var options_selector = new String();

  options_selector = "#options";
  nav_link_selector = "#nav-link";

  current_class = $(nav_link_selector).attr("class");
  
  switch (current_class)  {
    case "nav-base":
      cycleNavLink("hover");        
    break;

    case "nav-hover":
      if ($(options_selector).css("opacity") === "0")  {
        cycleNavLink("base");
      } else {
        cycleNavLink("click_1")
      }      
    break;

    case "nav-click_2":
      if ($(options_selector).css("opacity") === "1")  {
        cycleNavLink("base");
      }      
    break;
  }
} // END OF FUNCTION navLinkHoverState

function displayVerticalNav() {
  var current_position = new Number();
  var wndow_height = new Number();
  var page_scroll_margin = new Number();

  var sctn_on_css = new Object();
  var sctn_off_css = new Object();

  sctn_on_css = {
    display: "block",
    opacity: 1
  };

  sctn_off_css = {
    display: "none", 
    opacity: 0
  }
  
  page_scroll_margin = 5;
  wndow_height = $(".wndow").height();
  current_position = $(window).scrollTop();
  
  if (current_position === 0)  {
    $("#prev-sctn").css(sctn_off_css);
  } else {
    if ($("#prev-sctn").css("display") === "none")  {
      $("#prev-sctn").css(sctn_on_css);
    }
    
    if (current_position >= ((wndow_height * $(".wndow").length) - wndow_height))  {
      $("#next-sctn").css(sctn_off_css);
    } else {
      if ($("#next-sctn").css("display") === "none") {
        $("#next-sctn").css(sctn_on_css);
      }
    }
  }
}

function determineCopyElements()  {
  var url_hash = new String();
  // Holds the value of the String returned by the JavaScript METHOD, 
  // "window.location.hash"

  var 


}