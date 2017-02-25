// nav.js
var time_value = 500;

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
      headr_css_display_val === "table") {
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


function determineVisibleCopyElement(wndow_selector)  {
  var wndow_element = new Object();
  var copy_elements = new Array();
  
  var wndow_element_copy_length = new Number();
  var visible_copy_element_val = new Number();

  var copy_selector = new String();

  var copy_element_visible_flag = new Boolean();
      
  wndow_element = $(wndow_selector);   

  wndow_element_copy_length = $(wndow_element).children(".copy").length;
  
  visible_copy_element_val = 3;
  copy_element_visible_flag = true;
  // window.alert("wndow_selector = " + wndow_selector);
  if (wndow_selector !== "#wndow-sctn_main")  {
    // window.alert("wndow_selector = " + wndow_selector);
    while (visible_copy_element_val < (wndow_element_copy_length + 3) && 
           copy_element_visible_flag === true) {
      copy_selector = ".copy:nth-child(" + visible_copy_element_val.toString() + ")";
      // window.alert("$(" + wndow_element.attr("id") + ").children(" + copy_selector + ").css(\"display\") = " + $(wndow_element).children(copy_selector).css("display"));
      if ($(wndow_element).children(copy_selector).css("display") === "none") {
        visible_copy_element_val++;
      } else  {
        copy_element_visible_flag = false;
      }
    }
// window.alert("visible_copy_element_val = " + visible_copy_element_val);
    if (visible_copy_element_val === (wndow_element_copy_length + 3) && 
        copy_element_visible_flag === true)  {
      visible_copy_element_val = -1;
    } else {
      visible_copy_element_val = visible_copy_element_val - 3;
    }
  }

  return visible_copy_element_val;
}

function determineCopyElements()  {
  var url_hash = new String();
  // Holds the value of the String returned by the JavaScript METHOD, 
  // "window.location.hash"
  
  var wndow_elements = new Object();
  // Holds the HTML elements identified by the selector, ".wndow".
  var copy_elements = new Object();
  // Holds the HTML elements identified by the selector, ".copy".
  var visible_elements_var = new String();
  // Holds the value for each HTML element using the selector, ".copy", 
  // within a parent HTML element using the selector, "#wndow_sctn-X", 
  // within a String which becomes the URL Hash for this webpage once 
  // this function is complete.
  var visible_element_value = new String();

  var inc = new Number();

  wndow_elements = $(".wndow");
  
  visible_elements_var = "copyValues=";
  
  url_hash = window.location.hash;
  
  if (url_hash.indexOf(visible_elements_var) === -1)  {
    $(wndow_elements).each(
      function () {
        wndow_element = this;

        current_window_id = "#" + $(wndow_element).attr("id");
        
        if (current_window_id !== "#wndow-sctn_main")  {
          visible_copy_element_num = determineVisibleCopyElement(current_window_id);

          if (visible_elements_var.charAt(visible_elements_var.length - 1) === "=") {
            if (visible_copy_element_num === -1)  {
              visible_element_value = "-";
            } else  {
              visible_element_value = visible_copy_element_num.toString();
            }
          } else  {
            if (visible_copy_element_num === -1)  {
              visible_element_value = ",-";
            } else  {
              visible_element_value = "," + visible_copy_element_num.toString();
            }
          }
          
          visible_elements_var = visible_elements_var + visible_element_value;
        }
        
      }
    );

    if (url_hash.indexOf("#") === -1) {
      visible_elements_var = "#";
    } else  {
      if (url_hash.indexOf("?") === -1) {
        visible_elements_var = "?" + visible_elements_var;
      } else {
        visible_elements_var = "&" + visible_elements_var;
      }
    }
    
    visible_elements_var = window.location.hash + visible_elements_var;
    // window.alert("visible_elements_var = " + visible_elements_var);

    window.location.hash = visible_elements_var;
 
  } else  {
    var url_hash_data_Array = new Array();
    var url_hash_values_Array = new Array();

    var copy_selector = new String();
    var wndow_selector = new String();

    var wndow_elements = new Array();
    var copy_elements = new Array();
    var wndow_element = new Object();
    var copy_element = new Object();

    var css_1 = new Object();

    var inc = new Number();
    var url_hash_data_array_value = new Number();

    inc = 0;

    wndow_selector = ".wndow";

    wndow_elements = $(wndow_selector);

    css_1 = {
      display: "block"
    };
    
    url_hash_data_Array = url_hash.split("=");

    if (url_hash_data_Array[0].indexOf("copyValues") === -1)  {
      url_hash_data_array_value = 2;
    } else {
      url_hash_data_array_value = 1;
    }

    url_hash_values_Array = url_hash_data_Array[url_hash_data_array_value].split(",");

    $(wndow_elements).each(
      function () {
        wndow_element = this;
    
        if ($(wndow_element).attr("id") !== "wndow-sctn_main") {
          if (url_hash_values_Array[inc] !== "-") {
            copy_selector = "#" + $(wndow_element).attr("id") + " > .copy:nth-child(" + (parseInt(url_hash_values_Array[inc]) + 3) + ")";
            
            setTimeout(
              function () {
                $(copy_selector).css(css_1);
              }, (time_value * 2)
            );

            if (($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1) === "3" ||
                ($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1) === "4")  {
              var sub_nav_selector = "#nav-sctn_" + ($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1);

              setTimeout(
                function () {
                  $(sub_nav_selector).css(css_1);
                }, (time_value * 2)
              );
            }
          }
          
          inc++;
        }
      }
    );

    url_hash_data_Array = url_hash.split("copyValues");
    
    window.location.hash = url_hash_data_Array[0].substring(0, (url_hash_data_Array[0].length - 1));
  }
}

function interSectionNav(inter_nav_element)  {
  var url_hash = new String();

  var current_position = new Number();

  var section_search_string = new String();
  var current_section_string = new String();
  var replace_section_string = new String();

  var section_value = new Number();
  
  var sctn_nav_selector = new String();
  
  var wndow_selector = new String();
  var wndow_elements = new Object();

  var wndow_height = new Number();
  
  var scroll_to_num = new Number();

  var complete_called = false;

  
  url_hash = window.location.hash;

  current_position = $(window).scrollTop();

  section_value = determineCurrentSection(current_position);
  
  section_search_string = "sctn_";

  current_section_string = "sctn_" + section_value;

  sctn_nav_selector = $(inter_nav_element).attr("id");
  
  wndow_selector = ".wndow";
  wndow_elements = $(wndow_selector);

  wndow_height = $(wndow_elements).height();
  num_of_wndow_elements = wndow_elements.length;

  if (sctn_nav_selector === "prev-sctn") {
    if (section_value === 1)  {
      section_value = "main";
      scroll_to_num = 0;
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

   if (section_value === "" || section_value === "main") {
      url_hash = "sctn_main";
    } else if (section_value !== "none")  {
      if (url_hash.indexOf(section_search_string) === -1) {
        url_hash = "sctn_1?pos=0";

        scroll_to_num = wndow_height;
      }
    }
  
  if (section_value === "main" || section_value === 1) {
    var page_dimensions_Array = new Array();
    var window_width = new Number();

    page_dimensions_Array = parseWindowDimensions();
    window_width = page_dimensions_Array[0];
// window.alert("window_width = " + window_width);
    if (window_width <= 980)  {
      var info_selector = new String();
      var info_element = new Object();
      var info_top_val = new String();

      info_selector = "#info";
      info_element = $(info_selector);
      info_top_val = $(info_element).css("top");

      if (info_top_val === "0px") {
        animateInfoElement();
      } 
    }

    if ((sctn_nav_selector === "prev-sctn" && section_value === "main") || 
        (sctn_nav_selector === "next-sctn" && info_top_val === "0px")) {
      scroll_to_num = 0;
    } else {
      scroll_to_num = section_value * wndow_height;
    } 
  } else  {
    scroll_to_num = section_value * wndow_height;
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
  var scroll_to_value = new Number();
    
  section_value = $(option_element).attr("id");
  
  if (section_value === "sctn_main") {
    scroll_to_value = 0;  
  } else {
    var wndow_selector = new String();
    var wndow_elements = new Object();
    var wndow_height = new Number();

    wndow_selector = ".wndow";
    wndow_elements = $(wndow_selector);

    wndow_height = $(wndow_elements).height();
    
    scroll_to_value = parseInt(section_value.charAt(section_value.length - 1)) * wndow_height;  
  }
  
  $(window).scrollTop(scroll_to_value);
}
