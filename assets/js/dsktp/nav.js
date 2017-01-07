// nav.js

function navLinkHoverState(new_class) {  
  var nav_link_selector = new String();
  var headr_selector = new String();
  var nav_selector = new String();
  
  var nav_link_element = new Object();
  var headr_element = new Array();
  var nav_element = new Object();

  var current_class = new String();

  var headr_css_display_val = new String();
  var nav_css_left_val = new String();

  nav_link_selector = "#nav-link";
  headr_selector = ".headr";
  nav_selector = "nav";

  nav_link_element = $(nav_link_selector);
  headr_element = $(headr_selector);
  nav_element = $(nav_selector);

  headr_css_display_val = $(headr_element).css("display");
  nav_css_left_val = $(nav_element).css("left");

  current_class = $(nav_link_element).attr("class");

  new_class = "nav-" + new_class;

  if (new_class === "nav-base" && 
      nav_css_left_val !== "0px") {
    $(nav_link_element).fadeTo((time_value / 4), 0, 
      function () {
        $(nav_link_element).removeClass();
        $(nav_link_element).addClass("nav-base");
        $(nav_link_element).fadeTo((time_value / 8), 1);
      }
    );
  }
   
  if (new_class === "nav-hover" && 
			(($(".headr") || headr_css_display_val === "table"))) {
    $(nav_link_element).fadeTo((time_value / 4), 0, 
      function () {
        $(nav_link_element).removeClass();
        $(nav_link_element).addClass("nav-hover");
        $(nav_link_element).fadeTo((time_value / 8), 1);
      }
    );
  }
  
  if (new_class === "nav-click")  {
    $(nav_link_element).fadeTo((time_value / 3), 0, 
      function () {
        $(nav_link_element).removeClass();
        $(nav_link_element).addClass("nav-click_1");
        $(nav_link_element).fadeTo((time_value / 3), 1);
        $(nav_link_element).removeClass();
        $(nav_link_element).addClass("nav-click_2");
        $(nav_link_element).fadeTo((time_value / 3), 1);
      }
    );
  }
} // END OF FUNCTION navLinkHoverState

function interSectionNav(inter_nav_element)  {
  var url_hash = new String();

  var current_position = new Number();

  var section_search_string = new String();
  var current_section_string = new String();
  var replace_section_string = new String();

  var section_value = new Number();


  var sub_nav_selector = new String();

  var wndow_selector = new String();
  
  var scroll_to_num = new Number();

  var complete_called = false;

  url_hash = window.location.hash;

  current_position = $(window).scrollTop();

  section_value = determineCurrentSection(current_position);
  
  section_search_string = "sctn_";

  current_section_string = "sctn_" + section_value;

  sub_nav_selector = $(inter_nav_element).attr("id");
  
  wndow_selector = ".wndow";
  wndow_elements = $(wndow_selector);
  num_of_wndow_elements = wndow_elements.length;

  if (sub_nav_selector === "prev-sctn") {
    if (section_value === 1)  {
      section_value = "main";
    } else  {
      section_value = section_value - 1;
    }
    
  } else  {
    if (section_value === "" || section_value === "main" || section_value === "m") {
      section_value = 1;
    } else  {
      if (section_value < num_of_wndow_elements - 1)  {
        section_value = section_value + 1;
      } else {
        section_value = "none";
      }
    }
  }

  if (section_value !== "none") {
    if (url_hash.indexOf(section_search_string) === -1) {
      url_hash = "sctn_1?pos=0";
    } else {
      if (section_value === "" || section_value === "main") {
        url_hash = "sctn_main";
      }
    }
  }
  

  if (section_value === "main") {
    scroll_to_num = 0;
  } else  {
    scroll_to_num = section_value * $(wndow_selector).height();
  }
  
  $("html, body").animate(
      { scrollTop: scroll_to_num },
      {
        complete : function(){
          if (!complete_called) {
              complete_called = true;
          }
        }
      }
  );
  
  setTimeout(function() {displayVerticalNav();}, time_value);
}

function activateSideNav(option_element)  {
  var section_value = new String();
	var new_url_value = new String();
	var url_base_value = new String();
    
  section_value = $(option_element).attr("id");

	url_base_value = "http://localhost/amelia/sc/sctn/";

  if (section_value === "sctn_main") {
    new_url_value = url_base_value.substr(0, (url_base_value.length - 5));
  } else	{
		 new_url_value = url_base_value + (section_value.charAt(section_value.length - 1)).toString() + "/";  
	}

  window.location.href = new_url_value;
}
