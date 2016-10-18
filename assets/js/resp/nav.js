// nav.js
var nav_transition_time = 500;

function navLinkHoverState() {  
  var page_dimensions_Array = new Array();
  
  var nav_link_background_position_num = new Number();
  
  var nav_class = new String();
  var hover_state = new String();
  var nav_link_background_position_css = new String();
  var nav_link_background_click_state = new String();
  
  page_dimensions_Array = parseWindowDimensions();

  nav_link_background_position_css = $("#nav-link").css("backgroundPositionY");
  
  if (nav_link_background_position_css.indexOf("-") === 0) {
    nav_link_background_position_num = (nav_link_background_position_css.slice(1, nav_link_background_position_css.indexOf("px")) * 1);  
  } else {
    nav_link_background_position_num = 0;
  }
  
  if (page_dimensions_Array[0] === 980)  {
    nav_link_background_position_num = nav_link_background_position_num / 2;
  } 
  
  nav_link_background_click_state = nav_link_background_position_num + "px";
  
  switch (nav_link_background_click_state) {
    case "0px":
     if ($("#options").css("display") === "block")  {
        hover_state = "click_2";
      } else {
        hover_state = "hover";
      }
    break;
    
    case "-50px":
     if ($("#options").css("display") === "block")  {
        hover_state = "click_1";
      } else {
        hover_state = "base";
      }
    break;
    
    case "-100px":
      hover_state = "click_2";
    break;
    
    case "-150px":
      hover_state = "base";
    break;
  }
  
  nav_class = "nav-link-" + hover_state;
  
  $("#nav-link").fadeTo((nav_transition_time / 2), 0, 
    function () {
      $("#nav-link").removeClass();
      $("#nav-link").addClass(nav_class);
      $("#nav-link").fadeTo((nav_transition_time / 2), 1);
    }
  );
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

function animateSctnNav(sctn_nav_element) {
  var sctn_nav_link = new String();
  
  var sctn_nav_background_position_y = new String();

  var sctn_nav_base_css = new Object();
  var sctn_nav_hover_css = new Object();
  var sctn_nav_click1_css = new Object();
  var sctn_nav_click2_css = new Object();

  var resp_sctn_nav_base_css = new Object();
  var resp_sctn_nav_click_css = new Object();
        
  sctn_nav_base_css = {
    backgroundPositionY: "0px"
  };

  sctn_nav_hover_css = {
    backgroundPositionY: "-35px"
  };

  sctn_nav_click1_css = {
    backgroundPositionY: "-70px"
  };

  sctn_nav_click2_css = {
    backgroundPositionY: "-105px"
  };

  resp_sctn_nav_base_css = {
    backgroundPositionY: "0px", 
    backgroundColor: "#000"
  };

  resp_sctn_nav_click_css = {
    backgroundPositionY: "-210px", 
    backgroundColor: "#666"
  };

  sctn_nav_link = sctn_nav_element.slice(0, 12) + " > div > div";
  
  sctn_nav_background_position_y = $(sctn_nav_element).css("backgroundPositionY");
  $(sctn_nav_element).css("opacity", 0);

  if (window.navigator.userAgent.indexOf("Mobile") === -1 && 
      window.navigator.userAgent.indexOf("Tablet") === -1)  {
    if (sctn_nav_background_position_y === "-35px" && 
        $(sctn_nav_link).css("display") === "block") {
      $(sctn_nav_element).css(sctn_nav_click1_css);
      setTimeout(function () {$(sctn_nav_element).css("opacity", 0)}, (nav_transition_time / 4));
      $(sctn_nav_element).css(sctn_nav_click2_css);
    } else {
      if (sctn_nav_background_position_y === "0px" || 
          sctn_nav_background_position_y === "0%") {
        $(sctn_nav_element).css(sctn_nav_hover_css);
      } else {
        if ($(sctn_nav_link).css("display") === "none") {
          $(sctn_nav_element).css(sctn_nav_base_css);
        }
        
      }
    }
  } else {
    if (sctn_nav_background_position_y === "0px" && 
        $(sctn_nav_link).css("display") === "block") {
      $(sctn_nav_element).css(resp_sctn_nav_click_css);
    } else {
      $(sctn_nav_element).css(resp_sctn_nav_base_css);
    }
  }
  
  $(sctn_nav_element).fadeTo((nav_transition_time / 2), 1);
}

function animateSctnNavLinks(sctn_nav_link_element) {
  if ($(sctn_nav_link_element).css("display") === "none")  {
    $(sctn_nav_link_element).css("opacity", 0);
    $(sctn_nav_link_element).css("display", "block");
    $(sctn_nav_link_element).fadeTo((nav_transition_time / 2), 1);
  } else {
    $(sctn_nav_link_element).fadeTo((nav_transition_time / 2), 1);
    $(sctn_nav_link_element).css("display", "none");    
  }
} 