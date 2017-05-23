/* Filename: nav.js
 *  Contains all JavaScript functions and behavior that controls the 
 *  intersection navigation of the webpage using the 'One Page' template.
 * 
 *  --- NOTE! ---
 *  + JavaScript statements and functions which are triggered by interacting 
 *    with HTML DOM elements of the webpage are contained within, 'control_panel.js'.
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 * 
 *  --- FUNCTIONS CONTAINED WITHIN 'nav.js' ---
 *    navLinkHoverState
 *      Animates the click states of the menu icon located in the upper left 
 *      of the browser window.
 *      
 *      Called by: 
 *        + $("#nav-link").on("mouseover") (control_panel.js)
 *        + $("#nav-link").on("mouseout") (control_panel.js)
 *        + $("#nav-link").on("click") (control_panel.js)
 *        + $("#options > a").on("click") (control_panel.js)
 *    
 *    determineVisibleCopyElement
 *      Determines the HTML element using the selector, ".copy", which is visible within 
 *      an individual "window pane". It passes a Number back to, "setURL", the 
 *      function which makes a call to this function.
 *      
 *      Called by:
 *        + assembleURLString
 *        + setURL (animations.js)
 * 
 *    assembleURLString
 *      Passes a URL hash which contains data which defines the currently visible 
 *      "window pane" within each individual Section. That URL hash is then added 
 *      to the URL string currently in the browser window.
 * 
 *      Called by:
 *        + $("#options > a").on("click") (control_panel.js)
 *        + $("#nav-link").on("click") (control_panel.js)
 * 
 *    interSectionNav 
 *      Animates the vertical location of the browser window within the webpage based upon 
 *      the intersection navigation located on the right side of the browser window. 
 *      
 *      The browser window moves up, when the arrow with the prompt, 
 *      "Click here to view the previous section" is clicked and down 
 *      along the webpage when the button with the prompt, 
 *      "Click here to view the next section" is clicked.
 *      
 *      Called by:
 *        + $("#prev-sctn, #next-sctn").on("click") (control_panel.js)
 * 
 *    activateSideNav
 *      Places the browser window at a vertical position which allows for a Section 
 *      to be completely visible once the intersection navigation which appears 
 *      on the left side of the browser window appears.
 * 
 *      Called by:
 *        + $("#options > a").on("click") (control_panel.js)
 * 
 * ******************************************************************************************** */

function navLinkHoverState(new_class, time_value) {
  /* **************** **************** **************** **************** **************** 
   *  Animates the click states of the menu icon located in the upper left 
   *  of the browser window.
   * 
   *  The click state of the menu icon shifts based upon the value of, "new_class".
   * **************** **************** **************** **************** **************** */

  var nav_link_selector = new String();
  var headr_selector = new String();
  var nav_selector = new String();
  
  var nav_link_element = new Object();
  var headr_element = new Array();
  var nav_element = new Object();

  var current_class = new String();

  var headr_css_display_val = new String();
  // Holds the value of the CSS property, "display", for the HTML element 
  // using the selector, ".headr". 
  // 
  // The value is used to determine the visibility of the header for an 
  // individual Section. If the header is visible, the click state of 
  // the menu icon is changed to "hover", otherwise it is left alone.
  
  nav_link_selector = "#nav-link";
  headr_selector = ".headr";
  nav_selector = "nav";

  nav_link_element = $(nav_link_selector);
  headr_element = $(headr_selector);
  nav_element = $(nav_selector);

  headr_css_display_val = $(headr_element).css("display");

  current_class = $(nav_link_element).attr("class");

  new_class = "nav-" + new_class;

  if (new_class === "nav-base") {
  // If the new click state is, "base", this condition is triggered.
    $(nav_link_element).fadeTo((time_value / 4), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.
      function () {
        $(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $(nav_link_element).addClass("nav-base");
        // The new class defining the "base" click state is added.
        $(nav_link_element).fadeTo((time_value / 8), 1);
        // The menu icon is faded in from an opacity of 0 to 1.
      }
    );
  } // END OF if STATEMENT that is triggered if the new click state is 
    // the "base" state.
   
  if (new_class === "nav-hover" && 
      headr_css_display_val === "table") {
  // If the new click state is, "hover", and the header is visible, 
  // then this condition is triggered.
    $(nav_link_element).fadeTo((time_value / 4), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.
      function () {
        $(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $(nav_link_element).addClass("nav-hover");
        // The new class defining the "hover" click state is added.
        $(nav_link_element).fadeTo((time_value / 8), 1);
        // The menu icon is faded in from an opacity of 0 to 1.
      }
    );
  } // END OF if STATEMENT which is triggered if the new click state 
    // is "hover" and the header is visible.
  
  if (new_class === "nav-click")  {
  // If the new click state is, "click", then this condition is triggered.
    $(nav_link_element).fadeTo((time_value / 3), 0, 
    // The menu icon is faded out from an opacity of 1 to 0.
      function () {
        $(nav_link_element).removeClass();
        // The current class defining the click state is removed.
        $(nav_link_element).addClass("nav-click_1");
        // The initial "click" click state is added.
        $(nav_link_element).fadeTo((time_value / 3), 1, 
        // The menu icon is faded in from an opacity of 0 to 1.
          function () {
            $(nav_link_element).fadeTo((time_value / 4), 0, 
            // The menu icon is faded out from an opacity of 0 to 1.
              function () {
                $(nav_link_element).removeClass();
                // The class defining the intitial "click" click state is removed.
                $(nav_link_element).addClass("nav-click_2");
                // The final "click" click state is added.
                $(nav_link_element).fadeTo((time_value / 3), 1);
                // The menu icon is faded in from an opacity of 0 to 1.
              }
            );
          }
        );
      }
    );
  } // END OF if STATEMENT which is triggered if the new click state is "click".
} /* **************** END OF FUNCTION "navLinkHoverState" **************** */

function determineVisibleCopyElement(wndow_selector)  {
  /* **************** **************** **************** **************** **************** 
   *   Determines the HTML element using the selector, ".copy", which is visible within 
   *   an individual "window pane". It passes a Number back to, "setURL", the 
   *   function which makes a call to this function.
   * **************** **************** **************** **************** **************** */

  var wndow_element = new Object();
  var copy_elements = new Array();
  
  var wndow_element_copy_length = new Number();
  // Holds the number of HTML elements using the selector, ".copy", that are contained 
  // within an element using the selector, "#wndow_sctn-X".
  // 
  // The selector of the element that contains the ".copy" elements 
  // would be, "#wndow-sctn_1", if the visible Section was 'SECTION #1'.
  var visible_copy_element_val = new Number();
  // Holds a Number which allows for the function to cycle through the HTML elements 
  // using the selector, ".copy", that lie within a given visible Section.
  // 
  // This number matches the "child" index that ".copy" elements are given that lie 
  // within elements using selectors similary to "#wndow-sctn_X".

  var copy_selector = new String();

  var copy_element_visible_flag = new Boolean();
  // This Boolean is made true once the "while" loop finds a visible element using the 
  // selector, ".copy", that lies within an visible Section.
      
  wndow_element = $(wndow_selector);   

  wndow_element_copy_length = $(wndow_element).children(".copy").length;
  
  visible_copy_element_val = 2;
  copy_element_visible_flag = false;
  
  if (wndow_selector !== "#wndow-sctn_main")  {
  // If the visible Section is not the 'MAIN LANDING SECTION', this condition is triggered.
    while (visible_copy_element_val < (wndow_element_copy_length + 3) && 
           copy_element_visible_flag === false) {
    // This loop runs while there are elements using the selector, ".copy", within a 
    // visible Section that remain to process and the visible ".copy" element has 
    // not been located.

      copy_selector = ".copy:nth-child(" + visible_copy_element_val.toString() + ")";
      // "copy_selector" is made to refer to a ".copy" element which matches the "child" 
      // index within the DOM of the webpage.
      
      if ($(wndow_element).children(copy_selector).css("display") === "none" || 
          $(wndow_element).children(copy_selector).css("display") === undefined) {
      // If the element using the selector, ".copy" is not visible, this condition 
      // is triggered.
        visible_copy_element_val++;
        // The value of the "index" is incremented.
      } else  {
      // Otherwise, if the visible element using the selector, ".copy" is located 
      // this condition is triggered.
        copy_element_visible_flag = true;
        // The current element using the selector, ".copy", is flagged to be 
        // visible.
      } // END OF if STATEMENT which is triggered if a ".copy" element is not visible.
    } // END OF while LOOP which continues to run if ".copy" elements remain to 
      // process and the visible ".copy" element has not been located.

    if (visible_copy_element_val === (wndow_element_copy_length + 3) && 
        copy_element_visible_flag === false)  {
    // If all of the ".copy" elements have been processed and a visible element 
    // has not been found, this condition is triggered.
      visible_copy_element_val = -1;
      // Since all of the ".copy" elements have been cycled through, this Section 
      // is passed a value to note that this Section has never been visible.
    } else {
    // Otherwise, if a visible ".copy" element has been found, this condition 
    // is triggered.
      visible_copy_element_val = visible_copy_element_val - 2;
      // A value which matches the index of the child element in the DOM is 
      // passed to "visible_copy_element_val".
    } // END OF if STATEMENT which is triggered if there not a visible 
      // ".copy" element.
  } // END of if STATEMENT which is triggered if the visible Section is not 
    // the 'MAIN LANDING SECTION'.

  return visible_copy_element_val;
  // A value noting the element using the selector, ".copy", which is visible 
  // is passed on.
} /* **************** END OF FUNCTION "determineVisibleCopyElement" **************** */

function assembleURLString()  {
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
// window.alert("wndow_elements.length = " + wndow_elements.length);
  
  visible_elements_var = "copyValues=";
  
  url_hash = window.location.hash;
  
  if (url_hash.indexOf(visible_elements_var) === -1)  {
    $(wndow_elements).each(
      function () {
        wndow_element = this;

        current_window_id = "#" + $(wndow_element).attr("id");
// window.alert("current_window_id = " + current_window_id);       
        if (current_window_id !== "#wndow-sctn_main")  {
          visible_copy_element_num = determineVisibleCopyElement(current_window_id);
// window.alert("url_hash.charAt(" + (visible_elements_var.length - 1).toString() + ") = " + url_hash.charAt(visible_elements_var.length - 1));
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
// window.alert("visible_element_var = " + visible_elements_var);
        }
        
      }
    );

    if (url_hash.indexOf("#") === -1) {
      visible_elements_var = "#" + visible_elements_var;
    } else  {
      if (url_hash.indexOf("?") === -1) {
        visible_elements_var = "?" + visible_elements_var;
      } else {
        visible_elements_var = "&" + visible_elements_var;
      }
    }
    
    visible_elements_var = window.location.hash + visible_elements_var;
    // window.alert("visible_elements_var = " + visible_elements_var);
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
  
  setTimeout(
    function() {
      displayVerticalNav();
    }, time_value
  );
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
