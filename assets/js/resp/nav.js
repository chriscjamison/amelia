/* Filename: nav.js
 *  Contains all JavaScript functions and behavior that controls the 
 *  inter-section navigation of the webpage using the 'One Page' template.
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
 *      the inter-section navigation located on the right side of the browser window. 
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
 *      to be completely visible once the inter-section navigation which appears 
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
  } // END of "if" STATEMENT that is triggered if the new click state is 
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
    );  // END of "fadeTo()" Method
  } // END of "if" STATEMENT which is triggered if the new click state 
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
            );  // END of "fadeTo()" Method
          }
        ); // END of "fadeTo()" Method
      }
    ); // END of "fadeTo()" Method
  } // END of "if" STATEMENT which is triggered if the new click state is "click".
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
      } // END of "if" STATEMENT which is triggered if a ".copy" element is not visible.
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
      visible_copy_element_val = visible_copy_element_val - 3;
      // A value which matches the index of the child element in the DOM is 
      // passed to "visible_copy_element_val".
    } // END of "if" STATEMENT which is triggered if there not a visible 
      // ".copy" element.
  } // END of "if" STATEMENT which is triggered if the visible Section is not 
    // the 'MAIN LANDING SECTION'.

  return visible_copy_element_val;
  // A value noting the element using the selector, ".copy", which is visible 
  // is passed on.
} /* **************** END OF FUNCTION "determineVisibleCopyElement" **************** */

function assembleURLString(time_value)  {
  /* **************** **************** **************** **************** **************** 
   *  Passes a URL hash which contains data which defines the currently visible 
   *  "window pane" within each individual Section. That URL hash is then added 
   *  to the URL string currently in the browser window.
   * **************** **************** **************** **************** **************** */

  var url_hash = new String();
   
  var wndow_elements = new Object();
  var copy_elements = new Object();
  
  var copy_values_string = new String();
  // Holds the value for each HTML element using the selector, ".copy", 
  // within a parent HTML element using the selector, "#wndow_sctn-X", 
  // within a String which becomes the URL Hash for this webpage once 
  // this function is complete.
  var visible_element_val = new String();
  // Holds a character or String which represents the HTML element 
  // using the selector, ".copy", within an individual Section 
  // which is visible.

  var inc = new Number();

  wndow_elements = $(".wndow");
  
  copy_values_string = "copyValues=";
  
  url_hash = window.location.hash;
  
  if (url_hash.indexOf(copy_values_string) === -1)  {
  // If the inter-section navigation on the left side of the browser is not 
  // visible, this condition is triggered.
    $(wndow_elements).each(
    // For each HTML element using the selector, ".wndow", this 
    // loop runs.
      function () {
        wndow_element = this;

        current_window_id = "#" + $(wndow_element).attr("id");
        // A selector is formed using the "id" of an individual 
        // ".wndow", element.

        if (current_window_id !== "#wndow-sctn_main")  {
        // If the ".wndow" element is not, 'MAIN LANDING SECTION',
        // this condition is triggered.
          visible_copy_element_num = determineVisibleCopyElement(current_window_id);
          // The index within the DOM, of the visible element using the selector, 
          // ".copy", of this Section, is passed to "visible_copy_element_num".

          if (copy_values_string.charAt(copy_values_string.length - 1) === "=") {
          // If the value this loop attaches to the URL hash is the first value within 
          // the string, this condition is triggered.

            if (visible_copy_element_num === -1)  {
            // If there is not a visible ".copy" element, this condition 
            // is triggered.
              visible_element_val = "-";
            } else  {
            // Otherwise, if a ".copy" element is visible, this condition 
            // is triggered.
              visible_element_val = visible_copy_element_num.toString();
            } // END of "if" STATEMENT which is triggered if there is not a 
              // visible ".copy" element for this Section.
          } else  {
          // Otherwise, if the value this loop attaches to the URL hash is not the first 
          // value within the string, this condition is triggered.
            if (visible_copy_element_num === -1)  {
            // If there is not a visible ".copy" element, this condition 
            // is triggered.
              visible_element_val = ",-";
            } else  {
            // Otherwise, if there is a visible ".copy" element, this condition 
            // is triggered.
              visible_element_val = "," + visible_copy_element_num.toString();
            } // END of "if" STATEMENT that is triggered if there is not a 
              // visible ".copy" element.
          } // END of "if" STATEMENT that is triggered if the value this loop attaches 
            // to the string is the first value.
          
          copy_values_string = copy_values_string + visible_element_val;
          // The value representing the ".copy" element which is visible, 
          // or not visible, is added to the string.
        } // END of "if" STATEMENT which is triggered if the Section the loop 
          // processes is not, 'MAIN LANDING SECTION'.
      }
    );  // END of ".each()" LOOP

    if (url_hash.indexOf("#") === -1) {
    // If the hash of the URL is blank, this condition is triggered.
      copy_values_string = "#" + copy_values_string;
    } else  {
    // Otherwise, if the hash of the URL contains a value, 
    // this condition is triggered.
      if (url_hash.indexOf("?") === -1) {
      // If the URL does not contain a GET variable, this condition is triggered.
        copy_values_string = "?" + copy_values_string;
      } else {
      // Otherwise, if the URL does contain a GET variable, 
      // this condition is triggered.
        copy_values_string = "&" + copy_values_string;
      } // END of "if" STATEMENT which is triggered if the URL does not 
        // contain a GET variable.
    } // END of "if" STATEMENT which is triggered if the hash of the URL is blank.
    
    copy_values_string = window.location.hash + copy_values_string;
    // The value representing the ".copy" element which is visible, 
    // or not visible, is added to the string.

    window.location.hash = copy_values_string;
 
  } else  {
  // Otherwise, if the inter-section navigation on the left side of the 
  // browser window is visible, this condition is triggered.
    var url_hash_data_Array = new Array();
    // Holds the raw values contained with the GET variable, "copyValues".
    var url_hash_values_Array = new Array();
    // Holds the remains, aside from the commas, of the GET variable, "copyValues".
    
    var copy_selector = new String();
    var wndow_selector = new String();

    var wndow_elements = new Array();
    var copy_elements = new Array();
    var wndow_element = new Object();
    var copy_element = new Object();

    var element_visible_css = new Object();

    var url_hash_data_array_value = new Number();

    var inc = new Number();

    wndow_selector = ".wndow";

    wndow_elements = $(wndow_selector);

    element_visible_css = {
      display: "block"
    };
    
    url_hash_data_Array = url_hash.split("=");
    // The raw GET variables contained within "url_hash_data_Array" are seperated 
    // from the names of their variables.
    if (url_hash_data_Array[0].indexOf("copyValues") === -1)  {
    // If the first index of "url_hash_data_Array" does not contain, "copyValues", 
    // there are other GET variables. If there are other GET variables, this 
    // condition is triggered.
      url_hash_data_array_value = 2;
      // If there are other GET variables, the index that contains the raw data 
      // for "copyValues", is contained in index 2.
    } else {
    // Otherwise if the first index of "url_hash_data_Array" does contain "copyValues", 
    // there are not other GET variables. If there are not other GET variables, 
    // this condition is triggered.
      url_hash_data_array_value = 1;
      // If there are not other GET variables, the index that contains the raw data 
      // for "copyValues", is contained in index 1.
    } // END of "if" STATEMENT that is triggered if the first index 
      // of "url_hash_data_Array" does contain other GET variables.

    url_hash_values_Array = url_hash_data_Array[url_hash_data_array_value].split(",");
    // The numerical and character values describing the visible, or not visible, ".copy" 
    // elements are passed into "url_hash_values_Array".

    inc = 0;
    // An incrementer is initialized to 0.

    $(wndow_elements).each(
    // For each HTML element using the selector, ".wndow", this 
    // loop runs.
      function () {
        wndow_element = this;
    
        if ($(wndow_element).attr("id") !== "wndow-sctn_main") {
        // If the ".wndow" element is not, 'MAIN LANDING SECTION',
        // this condition is triggered.
          if (url_hash_values_Array[inc] !== "-") {
          // If the value contained within the index represented by, "inc", is visible, 
          // this condition is triggered.
            copy_selector = "#" + $(wndow_element).attr("id") + " > .copy:nth-child(" + (parseInt(url_hash_values_Array[inc]) + 3) + ")";
            // A selector is formed using the "id" of an individual ".wndow" element 
            // this loop processes and the value held within "url_hash_values_Array" 
            // that is represented by, "inc".

            setTimeout(
              function () {
                $(copy_selector).css(element_visible_css);
                // The "window pane" of the Section this loop processes is now visible.
              }, (time_value * 2)
            );


            if (($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1) === "3" ||
                ($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1) === "4")  {
            // If the ".wndow" element this loop processes contains intrasection navigation, 
            // this condition is triggered.
              var sub_nav_selector = "#nav-sctn_" + ($(wndow_element).attr("id")).charAt($(wndow_element).attr("id").length - 1);
              // A selector is made using the "id" of the ".wndow" element 
              // this loop processes.
              
              setTimeout(
                function () {
                  $(sub_nav_selector).css(element_visible_css);
                  // The intrasection navigation in this Section is now visible.
                }, (time_value * 2)
              );
            }
          }
          
          inc++;
          // "inc" is incremented.
        } // END of "if" STATEMENT which is triggered if the ".wndow" element this loop 
          // processes is not 'MAIN LANDING SECTION'.
      }
    );  // END of ".each()" LOOP

    url_hash_data_Array = url_hash.split("copyValues");
    // The value of GET variable, "copyValues", are seperated from other GET variables.
    
    window.location.hash = url_hash_data_Array[0].substring(0, (url_hash_data_Array[0].length - 1));
    // The remaining GET variables are removed from the hash of the URL.
  } // END of "if" STATEMENT which is triggered if the inter-section navigation 
    // that appears on the left of the browser window is not visible.
} /* **************** END OF FUNCTION "assembleURLString" **************** */

function interSectionNav(inter_nav_element)  {
  /* **************** **************** **************** **************** **************** 
   *  Animates the vertical location of the browser window within the webpage based upon 
   *  the inter-section navigation located on the right side of the browser window. 
   *      
   *  The browser window moves up, when the arrow with the prompt, 
   *  "Click here to view the previous section" is clicked and down 
   *  along the webpage when the button with the prompt, 
   *  "Click here to view the next section" is clicked.
   * **************** **************** **************** **************** **************** */
  var url_hash = new String();

  var current_position = new Number();
  // Holds a number which matches the vertical position within the webpage that is viewable.

  var section_search_string = new String();
  // Holds a String that is used to parse the Section Value for a Section the browser will 
  // be navigated to.
  var current_section_string = new String();
  // Holds a selector that represents the Section Value for an individual Section.
  
  var section_value = new Number();
  // Holds a Number which represents the Section Value for an individual Section.
  
  var sctn_nav_selector = new String();
  
  var wndow_selector = new String();
  var wndow_elements = new Object();

  var wndow_height = new Number();
  
  var scroll_to_value = new Number();
  // Holds a value which matches the vertical location, in pixels.

  var complete_called = false;
  // Boolean used as the vertical position animation runs.
  
  url_hash = window.location.hash;

  current_position = $(window).scrollTop();

  section_value = determineCurrentSection(current_position);
  // Based upon the vertical position of the viewable portion of the webpage 
  // within the browser window, a number representing the current Section 
  // is passed along to "section_value".

  section_search_string = "sctn_";
  // The prefix of a Section Value is set.

  current_section_string = section_search_string + section_value;
  // A selector is made using the prefix of a Section Value and a Section Value.
  
  sctn_nav_selector = $(inter_nav_element).attr("id");
  wndow_selector = ".wndow";
  wndow_elements = $(wndow_selector);

  wndow_height = $(wndow_elements).height();

  num_of_wndow_elements = wndow_elements.length;
  // "num_of_wndow_elements" holds the number of HTML elements identified by the selector, ".wndow".
  
  if (sctn_nav_selector === "prev-sctn") {
  // If the up arrow of the inter-section navigation on the right of the browser 
  // is clicked, this condition is triggered.
    if (section_value === 1)  {
    // If the Section Value is 1, the condition is triggered.
      section_value = "main";
      // The Section to be navigated to is 'MAIN LANDING SECTION'.
      scroll_to_value = 0;
      // The vertical location to be navigated to is 0.
    } else  {
    // Otherwise, if the Section Value is not 1, this condition is triggered.
      section_value = section_value - 1;
      // The Section Value of the Section to be navigated to is 1 less than 
      // the current Section Value.
    } // END of "if" STATEMENT that is triggered if the Section Value is 1.
  } else  {
  // Otherwise, if the down arrow of the inter-section navigation on the right 
  // is clicked, this condition is triggered.
    if (section_value === "" || section_value === "main" || section_value === "m") {
    // If the Section Value is identified to represent, 'MAIN LANDING SECTION', 
    // this condition is triggered.
      section_value = 1;
    } else  {
    // Otherwise, if the Section Value of the Section to be navigated to is 
    // not 'MAIN LANDING SECTION', this condition is triggered.
      if (section_value < num_of_wndow_elements - 1)  {
      // If the current Section Value is less than the number of Sections, 7, 
      // then there is another Section to navigate to. If there is another 
      // Section to navigate to, this condition is triggered.
        section_value = section_value + 1;
        // The Section Value of the Section to be navigated to is 1 more than 
        // the current Section Value.
      } else {
      // Otherwise, the Section Value of the current Section is 6 and there 
      // is not another Section to navigate to.
        section_value = "none";
        // The Section Value is set to show there is not another Section 
        // to navigate to.
      } // END of "if" STATEMENT which is triggered if the the current Section Value 
        // is less than 7.
    } // END of "if" STATEMENT which is triggered if the Section Value 
      // of the viewable Section is 'MAIN LANDING SECTION'.
  } // END of "if" STATEMENT which is triggered if the up arrow of the inter-section 
    // navigation is clicked.

  if (section_value === "" || section_value === "main") {
  // If the Section to be navigated to is 'MAIN LANDING SECTION', this condition 
  // is triggered.
    url_hash = "sctn_main";
  } else if (section_value !== "none")  {
  // Otherwise, if the Section Value is not "none", this condition
  // is triggered.
    if (url_hash.indexOf(section_search_string) === -1) {
    // If there is not a GET variable which refers to the Section Value, 
    // the Section to be navigated to is 'SECTION #1'. If there is not a 
    // GET variable refering to the Section Value, this condition 
    // is triggered.
      url_hash = "sctn_1?pos=0";

      scroll_to_value = wndow_height;
      // The vertical location of the browser window will be set to allow the 
      // "window pane" of 'SECTION #1' to be fully visible.
    } // END of "if" STATEMENT which is triggered if there is not a GET variable 
      // which refered to the Section Value.
  } // END of "if" STATEMENT which is triggered if the Section to be 
    // navigated to is 'MAIN LANDING SECTION'.
  
  if (section_value === "main" || section_value === 1) {
  // If the Section Value refers to 'MAIN LANDING SECTION', 
  // this condition is triggered.
    var page_dimensions_Array = new Array();
    // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".

    var window_width = new Number();
    // Holds the numerical value of the width of the browser window.
    
    page_dimensions_Array = parseWindowDimensions();
    // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".

    window_width = page_dimensions_Array[0];

    if (window_width <= 980)  {
    // If the width of the browser is 980px, or mobile device that's not an iPad Pro, 
    // this condition is triggered.
      var info_selector = new String();
      var info_element = new Object();

      var info_top_val = new String();
      // Holds the value of the CSS property, "top", for the HTML element using 
      // the selector, "#info".

      info_selector = "#info";
      info_element = $(info_selector);
      
      info_top_val = $(info_element).css("top");

      if (info_top_val === "0px") {
      // If the content of 'MAIN LANDING SECTION' is not visible, this condition 
      // is triggered.
        animateInfoElement();
        // The content of 'MAIN LANDING SECTION' is animated out of view.
      } // END of "if" STATEMENT which is triggered if the content 
        // of 'MAIN LANDING SECTION' is not visible.
    }

    if ((sctn_nav_selector === "prev-sctn" && section_value === "main") || 
        (sctn_nav_selector === "next-sctn" && info_top_val === "0px")) {
    // If the next Section to be navigated to is 'MAIN LANDING SECTION', 
    // this condition is triggered.
      scroll_to_value = 0;
    } else {
    // Otherwise, if the next Section is not 'MAIN LANDING SECTION', 
    // this condition is triggered.
      scroll_to_value = section_value * wndow_height;
    } 
  } else  {
  // Otherwise, if the width of the browser is greater than 980px, 
  // this condition is triggered.
    scroll_to_value = section_value * wndow_height;
  } // END of "if" STATEMENT that is triggered if the width of the browser 
    // is 980px.
  
  $("html, body").animate(
  // This Method animates the browser window to the vertical location 
  // of the Section to be navigated to.
    { scrollTop: scroll_to_value },
    {
      complete : function(){
        if (!complete_called) {
            complete_called = true;
        }
      }
    }
  );  // END of "animate()" Method
  
  setTimeout(
    function() {
      displayVerticalNav();
    }, time_value
  );
  // The intrapage navigation, which appears on the far-right side of the browser 
  // within a desktop or laptop display, or in the middle of the page 
  // within a mobile display is activate.
  // 
  // The function runs after a period of time after the other HTML elements of the web page 
  // are rendered. The time period is twice the value held by the variable, "time_value".
} /* **************** END OF FUNCTION "interSectionNav" **************** */

function activateSideNav(option_element)  {
  /* **************** **************** **************** **************** **************** 
   *  Fades in the HTML elements which are contained within a HTML element, '.copy',
   *  of a given Section which had been invisible. 
   * **************** *************** **************** **************** **************** */
  
  var section_value = new String();
  // This variable holds a number which represents the Section which is viewable and contains 
  // the form this function processes.
  var scroll_to_value = new Number();
    
  section_value = $(option_element).attr("id");
  // Holds a value which matches the vertical location, in pixels.

  if (section_value === "sctn_main") {
  // If the Section to be navigated to is 'MAIN LANDING SECTION', 
  // this condition is triggered.
    scroll_to_value = 0;
    // The vertical location to be navigated to is 0.
  } else {
  // Otherwise, if the Section to be navigated to is not 'MAIN LANDING SECTION', 
  // this condition is triggered.
    var wndow_selector = new String();
    var wndow_elements = new Object();

    var wndow_height = new Number();

    wndow_selector = ".wndow";
    wndow_elements = $(wndow_selector);

    wndow_height = $(wndow_elements).height();
    
    scroll_to_value = parseInt(section_value.charAt(section_value.length - 1)) * wndow_height;
    // The vertical location to be navigated to is equal to the product 
    // of multiplying the number representing the Section Value multiplied by
    // the height of a HTML element using the selector, ".wndow". 
  } // END of "if" STATEMENT which is triggered if the Section being navigated 
    // to is 'MAIN LANDING SECTION'.
  
  $(window).scrollTop(scroll_to_value);
  // The browser window is navigated to the vertical location of the Section 
  // being navigated to.
} /* **************** END OF FUNCTION "activateSideNav" **************** */
