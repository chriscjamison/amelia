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
