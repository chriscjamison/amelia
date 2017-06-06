/* Filename: animations.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the 'One Page' template.
 * 
 *  --- NOTE! ---
 *  + JavaScript statements and functions which are triggered by interacting 
 *    with HTML DOM elements of the webpage are contained within, 'control_panel.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 * 
 *  --- FUNCTIONS CONTAINED WITHIN 'animations.js' ---
 *    parseWindowDimensions
 *      Reads the browser width and height and returns numerical values of width and height 
 *      which are used by various functions to layout HTML elements in appropriate places 
 *      within the webpage.
 *      
 *      Called by: 
 *        + cssAdjustment
 *        + setupPage
 *        + animateInfoElement
 *        + animatePageElements
 *        + animateSideNav
 *        + interSectionNav (nav.js)
 *    
 *    urlInfo
 *      Parses the URL for data which correlates with the Section being viewed and the content 
 *      visible within that given Section.
 *      
 *      Called by:
 *        +  animateFormPanes
 * 
 *    cssAdjustment
 *      Adjusts the CSS values of HTML elements based upon the width and height of the 
 *      browser window.
 * 
 *      Called by:
 *        + setupPage
 * 
 *    setupPage 
 *      Initializes the layout of various HTML elements once the page has loaded or resized.
 *      
 *      Called by:
 *        + $(window).on("resize") (control_panel.js)
 *        + $(window).on("load") (control_panel.js)
 * 
 *    animateInfoElement
 *      Animates the content of the HTML element using the selector, "#info", which appears 
 *      on the 'MAIN LANDING PAGE'.
 * 
 *      Called by:
 *        + setURL
 *        + interSectionNav (nav.js)
 *        + $(window).on("load") (control_panel.js)
 *        + $(window).on("scroll") (control_panel.js)
 * 
 *    animateFormPanes
 *      Animates HTML elements which are contained within the forms located 
 *      within the web page.
 * 
 *      Called by:
 *        + fadeCopyElements
 *      
 *    animatePageElements
 *      Animates HTML elements of a given Section which has not been 
 *      within the visible browser window. Elements such as the HTML elements 
 *      using the selector, ".headr", are made visible once a user has navigated 
 *      to an unseen Section.
 * 
 *      Called by:
 *        + setupPage
 *        + $(window).on("hashchange") (control_panel.js)
 * 
 *    displayVerticalNav
 *      Displays the inter-section which appears as two white arrows located 
 *      on the right hand side of the browser window, within a desktop browser 
 *      or along the top and bottom of the browser window within a mobile browser.
 *  
 *      Called by:
 *        + setupPage
 *        + setURL
 *        + interSectionNav (nav.js)
 *        + $(window).on("hashchange") (control_panel.js) *        
 * 
 *    animateSctnNav
 *        Animates the click-states of the menu-icon for the intra-sectional navigation 
 *        which appears within, 'SECTION #3' and 'SECTION #4'.
 * 
 *        Called by:
 *          + $(".sctn_nav > div > span").on("mouseover") (control_panel.js)
 *          + $(".sctn_nav > div > span").on("mouseout") (control_panel.js)
 *          + $(".sctn_nav > div > span").on("click") (control_panel.js)
 *          + $(".sctn_nav > div > div > a").on("click") (control_panel.js)
 * 
 * 
 *    animateSctnNavLinks
 *      Animates the click-states of the links contained within the intra-sectional navigation 
 *      which appears within, 'SECTION #3' and 'SECTION #4'.
 * 
 *      Called by:
 *        + $(".sctn_nav > div > span").on("click") (control_panel.js)
 *        + $(".sctn_nav > div > div > a").on("click") (control_panel.js)        
 * 
 *    animateSideNav
 *      Animates the movement of the main menu of the browser window.
 *    
 *      Called by:
 *        + $("#nav-link").on("click") (control_panel.js)
 *        + $("#options > a").on("click") (control_panel.js)
 * 
 *    determineCurrentSection
 *      Returns a numerical value which represents the Section which is visible 
 *      within the browser window. 
 *      
 *      Called by:
 *        + animatePageElements
 *        + setURL
 *        + interSectionNav (nav.js)        
 * 
 *    setURL
 *      Sets the hash of the URL to a value which matches the Section and the Position 
 *      within the Section which is viewable.
 * 
 *      Called by:
 *        + $(window).on("scroll") (control_panel.js)
 * 
 *    animateMenuOptions
 *      Animates the appearance of the click-states for the menu-options of the inter-sectional 
 *      navigation which appears on the left hand side of the browser window.
 * 
 *      Called by:
 *        + $("#options > a").on("mouseenter") (control_panel.js)
 *        + $("#options > a").on("mouseleave") (control_panel.js)
 * 
 *    setPageInitialLocation
 *      Once the webpage loads, the scroll-bar is moved to the position within the webpage 
 *      that the Section is viewable. Also, the HTML element, '.copy', that is viewable 
 *      within the Section is made viewable.
 * 
 *      Called by: 
 *        setupPage
 *        
 *    fadeCopyElements
 *      Fades in the HTML elements which are contained within a HTML element, '.copy',
 *      of a given Section which had been invisible. 
 * 
 *      Called by: 
 *        animatePageElements
 * 
 * ******************************************************************************************** */

function parseWindowDimensions() {
  /* **************** **************** **************** **************** **************** 
   *  Reads the browser width and height and returns numerical values of width and height 
   *  which are used by various functions to layout HTML elements in appropriate places 
   *  within the webpage. 
   * 
   *  Once the dimensions are gathered from the browser a numerical value is set 
   *  which corresponds with the background images for the indiviual ".wndow" elements.
   * 
   *  The numerical values of the height and width are passed through to the place 
   *  of the function call using the Array, 'page_dimensions_Array'.
   * **************** **************** **************** **************** **************** */

  var window_width = new Number(); 
  var window_height = new Number();
  
  var page_dimensions_Array = new Array();
  // Holds the calculated values of the width and height of the visible area of the browser. 
  // The value is calculated by the variables "window_width" and "window_height".

  window_width = $(window).width();
  // Equal to the width of the visible area of the browser.
  window_height = $(window).height();
  // Equal to the height of the visible area of the browser.
  
  if (window_width <= 980) {
  // The width of the browser of a iPhone or iPad.
    page_dimensions_Array[0] = 980;
    
    if (window_height <= 1308)  {
    // If the height of the browser is less than or equal to 1308, the browser 
    // has the dimensions of 980x1740px. These dimensions are the same as an iPad.
      page_dimensions_Array[1] = 1740;  
    } else  {
    // Otherwise the browser has the dimensions of 980x1308px.
    // These dimensions are the same as an iPhone.
      page_dimensions_Array[1] = 1308;
    } // END OF if STATEMENT -- height > 1308
  } else {
    if (window_width <= 1024) {
    // The browser has the dimensions of 1024x1500. These dimensions are 
    // the same as an iPad Pro.
      page_dimensions_Array[0] = 1024;
      page_dimensions_Array[1] = 1500;
    } else {
      if (window_width <= 1280) {
      // The width of a browser with a width of 1280px.
        page_dimensions_Array[0] = 1280;
        
        if (window_height <= 800) {
        // If the height of the browser is less than or equal to 800px, the browser has  
        // the dimensions of 1280x800px.
          page_dimensions_Array[1] = 800;
        } else {
        // Otherwise the browser has the dimensions of 1280x1024px.
          page_dimensions_Array[1] = 1024;
        } // END OF if STATEMENT -- height <= 800
      } else  {
        if (window_width <= 1366) {
        // The browser has the dimensions of 1366x768px.
          page_dimensions_Array[0] = 1366;
          page_dimensions_Array[1] = 768;
        } else {
        // The browser has the dimensions of 1600x900px.
          if (window_width <= 1600) {
            page_dimensions_Array[0] = 1600;
            page_dimensions_Array[1] = 900;
          } else {
          // The browser has the dimensions of 1920x1080px.
            page_dimensions_Array[0] = 1920;
            page_dimensions_Array[1] = 1080;
          } // END OF if STATEMENT -- <= 1600
        } // END OF if STATEMENT -- <= 1366
      } // END OF if STATEMENT -- <= 1280
    } // END OF if STATEMENT -- <= 1024 
  } // END OF if STATEMENT -- <= 980

  return page_dimensions_Array;
  // Once the width and height values have been calculated, 
  // this function returns those values in the above Array.

} /* **************** END OF FUNCTION "parseWindowDimensions" **************** */

function urlInfo() {
  /* **************** **************** **************** **************** **************** 
   *  urlInfo scans the hash, as referenced by, "window.location.hash",
   *  for the values for Section Value and Position Value.
   * 
   *  The values for Section Value and Position Value are used 
   *  by the functions, "setupPage" and "animatePageElements", to navigate 
   *  to the location within the webpage and display the corresponding background image 
   *  and content for the section of the page that the Section Value 
   *  and Position value reference.
   * **************** **************** **************** **************** **************** */
  
  var url_hash = new String();
  
  var section_string = new String();
  // Holds the string, "sctn_", which is searched for within, "url_hash".
  var position_string = new String();
  // Holds the string, "pos=", which is searched for within, "url_hash".
  
  var section_index_num = new Number();
  // Holds the value that the Method, "indexOf", returns 
  // when the string, "sctn_" is searched for within, "url_hash". 
  var position_index_num = new Number();
  // Holds the value that the Method, "indexOf", returns 
  // when the string, "pos=" is searched for within, "url_hash".
  
  var section_value = new String();
  // Holds the character at the location within, "url_hash", that lies 
  // at the value found by combining the value held by "section_index_num" and 
  // the length of the string held by, "section_string".
  // 
  // The length of the string held by, "section_string", 
  // is added to the value within, "section_index_num", to 
  // capture the character stored at the end of the search string, "section_string". 
  var position_value = new String();
  // Holds the character at the location within, "url_hash", that lies 
  // at the value found by combining the value held by "position_index_num" and 
  // the length of the string held by, "position_string".
  // 
  // The length of the string held by, "section_string", 
  // is added to the value within, "section_index_num", to 
  // capture the character stored at the end of the search string, "section_string".
  var url_info_Array = new Array();
  
  url_hash = window.location.hash; 
  // The value of, "window.location.hash", is stored within, "url_hash".

  section_string = "sctn_";
  // The string, "sctn_", is stored within, "section_string". 
  //
  // NOTE: If the hash name is changed within the HTML of index.htm, 
  // the value stored within, "section_string", must be changed.
  position_string = "pos=";
  // The string, "pos=", is stored within, "position_string". 
  
  section_index_num = url_hash.indexOf(section_string);
  // The Method, "indexOf", searches, "url_hash", for the string held by, "section_string".
  // 
  // The value produced by, "indexOf", is stored within, "section_index_num".
  position_index_num = url_hash.indexOf("pos=");
  // The Method, "indexOf", searches, "url_hash", for the string held by, "position_string".
  // 
  // The value produced by, "indexOf", is stored within, "position_index_num".

  section_value = url_hash.charAt(section_index_num + section_string.length);
  // "section_value" collects the character stored within, "url_hash" that lies 
  // at the end of the string stored within, "section_string".
  //
  // The value of "section_value" is also the Section Value contained within 
  // the hash value contained in the URL.
  
  position_value = url_hash.charAt(position_index_num + position_string.length);
  // "section_value" collects the character stored within, "url_hash" that lies 
  // at the end of the string stored within, "section_string".
  //
  // The value of "section_value" is also the Section Value contained within 
  // the hash value contained in the URL.

  if (position_index_num === -1)  {
  // If the search for, "pos_", equals 0, url_hash must either be blank 
  // or contain, "#sctn_main". Either way it means that the viewable section 
  // is the landing page, described by, "main".
    url_info_Array[0] = "main";
  } else  {
  // The Section value is passed onto the first value within "url_info_Array", 
  // and the Position value is passed onto the second value within the Array.
    url_info_Array[0] = section_value;
    url_info_Array[1] = position_value;
  } // END OF if STATEMENT


  return url_info_Array;
  // "url_info_Array" is passed on to the point within the function, 
  // either, "setupPage", or, "animatePageElements", that called "urlInfo".

} /* **************** END OF FUNCTION "urlInfo" **************** */
    
function cssAdjustment()  {
  /* **************** **************** **************** **************** **************** 
   *  cssAdjustment adjusts the placement within the browser window of various 
   *  HTML elements based upon the parameters of the browser a visitor is using.
   * 
   *  One set of values are used to modify HTML elements if the browser is a mobile one.
   *  Another set of values are used to adjust other HTML elements depending 
   *  on the width of a browser used by a visitor using a desktop or laptop.
   * 
   *  The HTML elements which "cssAdjustment" modifies are:
   *    "#prev-sctn", "#next_sctn", "#prev-sctn > span", "#next-sctn > span", "#info", 
   *    #info > img", and ".copy". 
   * **************** **************** **************** **************** **************** */
  
  var page_dimensions_Array = new Array();
  // Holds the width and height of the browser window.
  // 
  // The width and height values are calculated by "parseWindowDimensions" and passed on 
  // to "page_dimensions_Array".

  var window_width = new Number();
  // Holds the numerical width of the browser which is passed on by the first index of 
  // "page_dimensions_Array".
  
  page_dimensions_Array = parseWindowDimensions();
  // The width and height of the browser window is passed to "page_dimensions_Array" by 
  // the function, "parseWindowDimensions".

  window_width = page_dimensions_Array[0];
  // The width, held by, "page_dimensions_Array", is passed to "window_width".
  
  if ((window.navigator.userAgent.indexOf("Mobile") !== -1) && 
      (window.navigator.userAgent.indexOf("Tablet") !== -1))  {
  // The statement, "window.navigator.userAgent.indexOf("XXXX") returns a number greater 
  // than 0 if the search string is found in "window.navigator.userAgent". 
  // 
  // If the statement returns, -1, then the search strings, "Mobile" and "Tablet" are not 
  // listed in "window.navigator.userAgent" and the browser is a mobile browser.

    var prev_sctn_selector = new String();
    var next_sctn_selector = new String();
    var prev_sctn_element = new Object();
    var next_sctn_element = new Object();
    
    prev_sctn_selector = "#prev-sctn";
    next_sctn_selector = "#next-sctn";
   
    prev_sctn_element = $(prev_sctn_selector);
    next_sctn_element = $(next_sctn_selector);
    
    if (window_width >= 1260 && 
        window_width < 1920)  {
    // If the width of the browser is greater than 1260 yet less than 1920, 
    // this condition is triggered.

      var inter_nav_css = new Object();
      
      inter_nav_css = {
        right: "33.6em"
      };
      
      $(next_sctn_element).css(inter_nav_css);
      // The HTML element identified by the selector, "#next-sctn", is formatted by 
      // using the value held by the Object, "inter_nav_css".
      $(prev_sctn_element).css(inter_nav_css);
      // The HTML element identified by the selector, "#prev-sctn", is formatted by 
      // using the value held by the Object, "inter_nav_css".
    } // END OF if STATEMENT
  
    if (window_width === 1920)  {  
      var info_selector = new String();
      
      var info_element = new Object();
      
      var info_css = new Object();
      var inter_nav_2_css = new Object();
     
      info_selector = "#info";
      
      info_element = $(info_selector);
      
      info_css = {
        bottom: "8.25em",
        right: "9em"
      }

      inter_nav_2_css = {
        right: "54em", 
        bottom: "6em"
      };

      $(info_element).css(info_css);
      // The HTML element using the selector, "#info", is placed in a position 
      // within the browser window to make it more clearly visible.

      $(next_sctn_element).css(inter_nav_2_css);
      $(prev_sctn_element).css(inter_nav_2_css);
      // The inter-section which consists of white arrows 
      // appears in the middle top and middle bottom of the browser window.

    } // END OF if STATEMENT which is triggered if the window_width is 1920.
  } // END of if STATEMENT which is triggered if the browser is for a mobile device.

  if (window_width === 980)  {
    var info_img_selector = new String();
    var prev_sctn_span_selector = new String();
    var next_sctn_span_selector = new String();
   
    var info_img_element = new Object();
    var prev_sctn_span_element = new Object();
    var next_sctn_span_element = new Object();
    
    var info_img_css = new Object();
    
    info_img_selector = "#info > img";
    prev_sctn_span_selector = "#prev-sctn > span";
    next_sctn_span_selector = "#next-sctn > span";
    
    info_img_element = $(info_img_selector);
    next_sctn_span_element = $(next_sctn_span_selector);
    prev_sctn_span_element = $(prev_sctn_span_selector);
    
    info_img_css = {
      "src": "/amelia/assets/img/logo/logo_phone.png", 
      "width": "480", 
      "height": "455"
    };

    $(info_img_element).attr(info_img_css);
    // Sets the HTML attributes, "src", "width", and "height", of the HTML element 
    // using the selector, "#info > img", using the values held by, "info_img_css".
    // 
    // The HTML element, "#info > img", is passed these attributes to display a smaller 
    // image to fit a mobile browser.

    $(prev_sctn_span_element).html("");
    // Removes the HTML from the HTML element using the selector, "#prev-sctn > span".
    //
    // The above HTML element has text to describe the navigation function of this element.
    // The Method, ".html", strips that HTML.
    $(next_sctn_span_element).html("Press to view the next section");
    // Sets the HTML from the HTML element using the selector, "#next-sctn > span"
    // to "Press to view the next section".
    //
    // The above HTML element lacks text to describe the navigation function of this element.
    // The Method, ".html", adds the descriptive text, "Press to view the next section", 
    // to the HTML element. 
  } // END OF if STATEMENT which is triggered if the browser width is 980px.

} /* **************** END OF FUNCTION "cssAdjustment" **************** */

function setupPage(time_value)  {
  /* **************** **************** **************** **************** **************** 
   * setupPage initializes the rendering of the HTML elements 
   * using the selectors, "#cntainr", ".wndow", ".copy", and "#bkgrnd".
   *   
   * This function also initializes the placement of the inter-section 
   * which uses "arrows". These arrows appear on the far-right side of the browser window 
   * within a desktop or laptop display and in the top and bottom middle 
   * of a mobile display .
   * 
   * Based upon the width and height values calculated by, "parseWindowDimensions", 
   * the values of the CSS properties, "width" and "height" are applied 
   * to the HTML elements using the selectors, "#cntainr", ".wndow", ".copy", 
   * and "#bkgrnd". 
   * 
   * The HTML elements, using the selectors, "#bkgrnd > div", has its, "background image", 
   * property set by a jQuery segment of code which loads images based upon the 
   * "width" and "height" values passed on to the Array, "page_dimensions_Array".
   * **************** **************** **************** **************** **************** */

  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  var page_height = new Number();
  // Holds the total height of the webpage.
  var wndow_width = new Number();
  // Holds the width of the HTML elements using the selector, ".wndow", 
  // as passed on from the first index of "page_dimensions_Array".
  var wndow_height = new Number();
  // Holds the height of the HTML elements using the selector, ".wndow", 
  // as passed on from the second index of "page_dimensions_Array".
  var num_of_wndow_elements = new Number();
  // Holds the total number of HTML elements using the selector, ".wndow".
  
  var nav_width = new Number();
  var nav_left_val = new Number();
  
  var cntainr_selector = new String();
  var wndow_selector = new String();
  var bkgrnd_selector = new String();
  var nav_selector = new String();
  var bkgrnd_div_sub_selector = new String();
  var wndow_sctn_selector = new String();
  // Holds a selector for an individual Section which is worked on by 
  // a jQuery Loop which cycles through an background image.
  //
  // The value passed to this variable would be "#wndow-sctn_1" when the 
  // Loop works on the first HTML element which is refrerred to by,
  // "#bkgrnd > div".

  var cntainr_element = new Object();
  var wndow_elements = new Object();
  var copy_elements = new Object();
  var bkgrnd_element = new Object();
  var nav_elements = new Object();
  var bkgrnd_div_sub_elements = new Object();
  var wndow_sctn_element = new Object();
  // Holds the jQuery Object that refers to the HTML element 
  // referenced within the selector contained within 
  // the variable, "wndow_sctn_selector".
  //
  // The selector would be, "#wndow-sctn_1", when 
  // the jQuery Loop works on the first HTML element which is referred 
  // to by, "#bkgrnd > div"."

  var cntainr_css = new Object();
  var width_height_css = new Object();
  var nav_css = new Object();
  
  var inc_bkgrnd = new Number();
  
  var bkgrnd_img_value = new String();
  var bkgrnd_width = new String();
  var bkgrnd_height = new String();
  
  cssAdjustment();
  // "cssAdjusment" is called to render various HTML elements of the webpage 
  // within the browser window.

  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various 
  // HTML elements of the webpage within the browser window 
  // are passed on to "page_dimensions_Array".

  wndow_width = page_dimensions_Array[0];
  wndow_height = page_dimensions_Array[1];
  // "wndow_width" holds the width of the HTML elements using the selector, ".wndow" and uses the 
  // value held by the first index of the Array, "page_dimensions_Array".
  // "wndow_height" holds the height of the HTML elements using the selector, ".wndow" and 
  // uses the second index of the Array, "page_dimensions_Array".
  
  page_height = $(window).height() * $(".wndow").length;
  nav_width = $("nav").width();
  nav_left_val = -nav_width;
  
  cntainr_selctor = "#cntainr";
  wndow_selector = ".wndow";
  bkgrnd_selector = "#bkgrnd";
  nav_selector = "nav, #nav-bkgrnd, #nav-brdr";
  bkgrnd_div_sub_selector = "#bkgrnd > div";
  
  cntainr_element = $(cntainr_selector);
  wndow_elements = $(wndow_selector);
  bkgrnd_element = $(bkgrnd_selector);
  nav_elements = $(nav_selector);
  bkgrnd_div_sub_elements = $(bkgrnd_div_sub_selector);
  
  cntainr_css = {
    "width": page_dimensions_Array[0],
    "height": page_height
  };
  
  width_height_css = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  nav_css = {
    "left": nav_left_val
  }
  
  $(cntainr_element).css(cntainr_css);
  // The HTML element using the selector, "#cntainr", is formatted to 
  // fit the dimensions of the webpage.
  $(wndow_elements).css(width_height_css);
  // The HTML elements using the selector, ".wndow", is formatted to fit 
  // dimensions of a given "window".
  $(bkgrnd_element).css(width_height_css);
  // The HTML element using the selector, "#bkgrnd", is is formatted to fit 
  // dimensions of a given "window".
  $(nav_elements).css(nav_css);
  // The HTML elements using the selector, "nav, #nav-bkgrnd, #nav-brdr", 
  // are placed off of the left hand side of the browser window.
   
  inc_bkgrnd = 0;
  // "inc_bkgrnd" serves as an incrementer which increases in value as 
  // the jQuery Method, ".each", cycles through the HTML elements defined 
  // by the selector, "#bkgrnd > div".

  $(bkgrnd_div_sub_elements).each(
    function () {
      if (inc_bkgrnd > 0) {
      // If the individual <div> element, which is a part of the set of <div> elements that this 
      // loop cycles through is not the first <div> element, then this condition is triggered.
        wndow_sctn_selector = "#wndow-sctn_" + inc_bkgrnd;
        // "wndow_sctn_selector" now holds a selector which identifies the HTML element 
        // which the loop is processing.
        // 
        // The value of "wndow_sctn_selector" would be "#wndow-sctn_1" if the second <div> 
        // element, within the set of HTML elements referred to by the selector, "#bkgrnd > div".
        wndow_sctn_element = $(wndow_sctn_selector);
        // "wndow_sctn_element" now holds the jQuery Object for the selector which is held by 
        // "wndow_sctn_selector".
       
        num_of_wndow_elements = $(wndow_sctn_element).children(".copy").length
        // "num_of_wndow_elements" holds the number of HTML elements identified by the selector, ".wndow".
  
        bkgrnd_width =  (wndow_width * num_of_wndow_elements).toString();
        bkgrnd_height = (wndow_height).toString();
        // "bkgrnd_width" holds a String. The value takes the product of the width of the browser window, 
        // multiplies it by the number of HTML elements using the selector, ".wndow" and making a string 
        // from the product.
        //
        // "bkgrnd_height" holds a String which is made by converting the value of "wndow_height" 
        // to a String.

        bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrnd_width + "x" + bkgrnd_height + 
                            ".jpg')";      
        // "bkgrnd_img_value" holds a string which refers to the value of the CSS property, 'backgroundImage'.
        // 
        // The value of "bkgrnd_img_value" would be "url('/amelia/assets/img/sctn/1/1920x1020.jpg')" 
        // while the Loop is processing the first HTML element using the selector, "#bkgrnd > div" for 
        // a browser window which had a width of 1920px and a height of 1020px.

        width_height_css.backgroundImage = bkgrnd_img_value;
        // The value held by, "bkgrnd_img_value", is added to the Object, "width_height_css". 
        // This adds the CSS property, "backgroundImage", to the CSS properties already held by the variable.
      } else  {
        bkgrnd_width = wndow_width.toString();
        bkgrnd_height = wndow_height.toString();
        // "bkgrnd_width" holds a String which is made by converting the value of "wndow_width" 
        // to a String.
        //
        // "bkgrnd_height" holds a String which is made by converting the value of "wndow_height" 
        // to a String.

        width_height_css.backgroundImage = "url('/amelia/assets/img/sctn/main/" + bkgrnd_width +
                                    "x" + bkgrnd_height + ".jpg')";
         // The value held by, "bkgrnd_img_value", is added to the Object, "width_height_css". 
        // This adds the CSS property, "backgroundImage", to the CSS properties already held by the variable.
      } // END OF if STATEMENT
      
      $(this).css(width_height_css);
      // The <div> element which this loop is processing has its CSS formatted to fit the width and 
      // height of the browser window along with its background image.
      
      inc_bkgrnd++;
      // "inc_bkgrnd", or the number representing the <div> element that this Loop is processed 
      // is incremented.
    } 
  ); // END OF .each METHOD

  setPageInitialLocation();
  // "setPageInitialLocation" is called to pass on the Section and Position values of the webpage 
  // which is viewable to the URL.
  
  animatePageElements();
  // "animatePageElements" is called to animate the blocks that are contained within an individual 
  // "window".

  setTimeout(
    function () {
      displayVerticalNav();
    }, (time_value * 1.25)
  );
  // The inter-section navigation, which appears on the far-right side of the browser 
  // within a desktop or laptop display, or in the middle of the page 
  // within a mobile display is activate.
  // 
  // The function runs after a period of time after the other HTML elements of the web page 
  // are rendered. The time period is twice the value held by the variable, "time_value".

} /* **************** END OF FUNCTION "setupPage" **************** */


function animateInfoElement(time_value) {
  /* **************** **************** **************** **************** **************** 
   * animateInfoElement animates the content of the HTML element 
   * defined by the selector, "#info".
   * 
   * If a browser runs on a mobile device and has a width of "980px", 
   * the contents of, "#info", are animated using different CSS values than those same 
   * contents run within a desktop or laptop browser, or with a larger browser width.
   * **************** *************** **************** **************** **************** */

  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  
  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  if (page_dimensions_Array[0] === 980) {
  // If the width of the browser is equal to "980px", animate the HTML elements 
  // contained by, "#info", to conform to a mobile browser. 
    var info_selector = new String();
    var next_sctn_selector = new String();
    var prev_sctn_selector = new String();
    var nav_selector = new String();
    var next_sctn_span_selector = new String();
    var nav_link_selector = new String();

    var info_element = new Object();
    var next_sctn_element = new Object();
    var prev_sctn_element = new Object();
    var nav_element = new Object();
    var next_sctn_span_element = new Object();
    var nav_link_element = new Object();

    var info_css = new Object();
    var next_sctn_css = new Object();
    var prev_sctn_css = new Object();
    var nav_sctn_css = new Object();
    var nav_css = new Object();
    var nav_link_css = new Object();
        
    info_selector = "#info";
    next_sctn_selector = "#next-sctn";
    prev_sctn_selector = "#prev-sctn";
    nav_selector = "nav";
    next_sctn_span_selector = "#next-sctn > span";
    nav_link_selector = "#nav-link";

    info_element = $(info_selector);
    next_sctn_element = $(next_sctn_selector);
    prev_sctn_element = $(prev_sctn_selector);
    nav_element = $(nav_selector);
    next_sctn_span_element = $(next_sctn_span_selector);
    nav_link_element = $(nav_link_selector);
    
    info_css = {
      "top": -($("#info").height())
    };
    
    next_sctn_css = {
      height: "3em", 
      bottom: "3.56em", 
      backgroundPosition: "0px -418px"
    };
    
    prev_sctn_css = {
      height: "1.56em"
    };
    
    nav_sctn_css = {
      display: "block"
    };
    
    nav_css = {
      display: "block"
    };

    $(info_element).animate(info_css, time_value, 
      function () {
        $(next_sctn_element).css(next_sctn_css);
        $(prev_sctn_element).css(prev_sctn_css);
        $(nav_element).css(nav_css);
        $(next_sctn_span_element).detach();
        $(nav_link_element).fadeTo(time_value, 1);
      });
    
  } else {
  // Otherwise, animate the HTML elements contained by, "#info", 
  // to conform to a desktop or laptop browser.

    var wndow_selector = new String();
    var info_selector = new String();
    var info_img_selector = new String();
    var info_ul_li_selector = new String();
    var info_ul_selector = new String();

    var wndow_element = new Object();
    var info_element = new Object();
    var info_img_element = new Object();
    var info_ul_li_element = new Object();
    var info_ul_element = new Object();

    var display_block_css = new Object();
    var opacity_css = new Object();
    var display_inherit_css = new Object();
    var display_opacity_css = new Object();
    
    wndow_selector = "#wndow-sctn_main";
    info_selector = "#info";
    info_img_selector = "#info img";
    info_ul_li_selector = "#info ul li";
    info_ul_selector = "#info ul";

    wndow_element = $(wndow_selector);
    info_element = $(info_selector);
    info_img_element = $(info_img_selector);
    info_ul_li_element = $(info_ul_li_selector);
    info_ul_element = $(info_ul_selector);

    display_block_css = {
			display: "block"
		};
		
    opacity_css = {
      opacity: 1
    };
    
		display_inherit_css = {
			display: "inherit"
		};
		
	  display_opacity_css = {
			display: "block",
      opacity: 1
		};
    
    time_value_longer = time_value * 2;
    time_value_long = time_value * 1.5;

    $(wndow_element).show("drop", time_value_longer);
    // This jQuery Method, "show", "drops" or animates the panel which serves 
    // as the background of the logo and other items on the landing page 
    // down from the top of the browser window.
    // 
    // This animation occurs over an interval which is twice the time of 
    // a "menu" HTML element to animate.
		$(info_element).css(display_block_css).css(opacity_css);
    // Allow the HTML element, which uses the selctor, "#info", to be visible 
    // within a browser window. The "display" CSS property is set to "display" 
    // and the "opacity" of "#info" is set to "1".
    //
    // The CSS values are applied using the jQuery Method, ".css".
    //
    // The jQuery Method, ".css", is used twice because using both variables 
    // within one ".css" call would make the HTML element, "#info" visibly flash. 
    $(info_img_element).css(display_block_css);
    // The HTML element using the selctor, "#info > img" is made visible by 
    // setting the "display" CSS property to "block".
    //
    // The CSS values are applied using the jQuery Method, ".css".

    $(info_img_element).delay(time_value).fadeTo(time_value_long, 1, 
    // Fade the HTML element, using the selector, "#info > img" 
    // from an opacity of "0" to "1".
      function () {
        $(info_ul_li_element).css(display_inherit_css);
        $(info_ul_element).css(display_opacity_css);
        // Make the HTML elements using the selector, "#info ul li" visible.
        // Make the HTML element using the selector, "#info ul" visible.

        $(info_ul_li_element).each(
          function () {
            $(this).delay(time_value * 0.75).fadeTo(time_value_long, 1);
            // For every bullet point, 
            // or HTML element identified by the selector, "#info ul li", fade in 
            // that bullet point over a time span of a value calculated by multiplying 
            // the value of "time_value" by "1.5".
          }
        );		
			}
		); // END OF METHOD .fadeTo
  } // END OF if STATEMENT

} /* **************** END OF FUNCTION "animateInfoElement" **************** */

function animateFormPanes() {
  /* **************** **************** **************** **************** **************** 
   * animateFormPanes animates the content of the HTML elements which make up 
   * the Screening, Rate, and Contact forms.
   * **************** *************** **************** **************** **************** */

  var clmn_1_selector = new String();
  var clmn_2_selector = new String();
  
  var page_1_selector = new String();
  var page_2_selector = new String();
  var page_1_element = new Object();
  var page_2_element = new Object();
  
  var section_value = new Number();
  // This variable holds a number which represents the Section which is viewable and contains 
  // the form this function processes.

  var url_info_Array = new Array();
  
  var page_off_css = new Object();
  var page_on_css = new Object();
 
  url_info_Array = urlInfo();
  // "url_info_Array" holds the Section and Position values that are 
  // stored within the URL.

  section_value = url_info_Array[0];
  // "section_value" now holds the Section value that was held 
  // by the first index of "url_info_Array".

  page_1_selector = "#form-sctn_" + section_value.toString() + " .form-page_1";
  page_2_selector = "#form-sctn_" + section_value.toString() + " .form-page_2";
  // "page_1_selector" now holds the selector used by the HTML element which contains 
  // the "first page" of the form this function is processing.
  //
  // "page_2_selector" now holds the selector used by the HTML element which contains 
  // the "second page" of the form this function is processing.

  page_1_element = $(page_1_selector);
  page_2_element = $(page_2_selector);
  // "page_1_element" now holds the jQuery Object for the HTML element referred 
  // by the selector which defines the "first page" of the form this function 
  // is processing.
  //
  // "page_2_element" now holds the jQuery Object for the HTML element referred 
  // by the selector which defines the "second page" of the form this function 
  // is processing.

  page_off_css = {
    display: "none"
  };

  page_on_css = {
    display: "block"
  };

  if (section_value === 5)  {
  // If the form this function is processing is held within 'SECTION #5', then 
  // it is 'FORM TYPE #2', which only has one page.
    $(page_1_element).css(page_on_css);
    // The first page is now able to be displayed.
    $(page_1_element).fadeTo(time_value, 1);
    // The "opacity" of the page is moved over time from 0 to 1.
  } else  {
  // Otherwise, if the form this function is processing is 'FORM TYPE #1' 
  // or 'FORM TYPE #6', then the "opacity" of the first page 
  // needs to be checked.

    if ($(page_1_element).css("opacity") === "0")  {
    // If the first page is not visible, this condition is triggered.
      $(page_2_element).fadeTo(time_value, 0);
      // The opacity of the second page is moved over time from 1 to 0.
      $(page_2_element).css(page_off_css);
      // The second page is now invisible.
      $(page_1_element).css(page_on_css);
      // The first page is now able to be displayed.
      $(page_1_element).fadeTo(time_value, 1);
      // The opacity of the first page is moved over time from 0 to 1.
    } else {
    // Otherwise the second page needs to be made visible and the first 
    // page needs to be made invisible.

      $(page_1_element).fadeTo(time_value, 0);
      // The opacity of the first page is moved from 1 to 0.
      $(page_1_element).css(page_off_css);
      // The first page is now invisible.
      $(page_2_element).css(page_on_css);
      // The second page is now able to be displayed.
      $(page_2_element).fadeTo(time_value, 1);  
      // The opacity of the second page is moved over time from 0 to 1.
    } // END OF if STATEMENT which is triggered if the opacity 
      // of the first page this form which this function is processing is 0.
  } // END OF if STATEMENT which is triggered if the Section value 
  // of the form this function is processing is 5.

} /* **************** END OF FUNCTION "animateFormPanes" **************** */

function animatePageElements()  {
  /* **************** **************** **************** **************** **************** 
   * "animatePageElements" triggers a sequence of modifications of CSS values and 
   * properties and animations of various HTML elements which fire when a user 
   * activates a menu option, intra-section, or intrasection option.
   *  
   * The function has a number of purposes.
   *    1. Determine the hash of the URL, if there is one.
   *    2  Allow for the page elements to be rendered within the browser.
   *    3. Make the Sections within the page invisible while the menu is activated 
   *    4. Make the invisible sections of the page visible 
   *       after a menu option is activated.
   * **************** *************** **************** **************** **************** */
  
  var nav_selector = new String();
  var wndow_selector = new String();
  var all_copy_selector = new String();
  var single_copy_selector = new String();
  var headr_selector = new String();
  var sub_nav_selector = new String();
  var div_selector = new String();
  var bkgrnd_selector = new Object();
  // Holds the String value of the selector, "#bkgrnd-sctn_X".

  var nav_element = new Object();
  var cntainr_element = new Object();
  var wndow_elements = new Array();
  var wndow_element = new Object();
  var all_copy_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".copy".
  var single_copy_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".copy:nth-child(X)".
  var headr_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".headr.sctn_X".
  var bkgrnd_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#bkgrnd-sctn_X".
  var sub_nav_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#nav-sctn_X".

  var section_search_string = new String();
  // Holds a String, "#sctn_", which is searched for within the URL hash.
  var position_search_string = new String();
  // Holds a String, "pos=", which is searched for within the URL hash.
  
  var url_hash = new String();
  // Holds the String value of the URL hash

  var current_position = new Number();
  // Holds a number which matches the vertical position within the webpage that is viewable.
  
  var position_value_index_num = new Number();
  // Holds a Number representing the location within the URL hash where the 
  // Position Valueis listed.
    
  var section_value = new String();
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.
  
  var element_off_css = new Object();
  var element_on_css = new Object();
  
  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".

  var window_width = new Number();
  // Holds the numerical value of the width of the browser window.

  var bkgrnd_element_width_val = new Number();
  // Holds a number which is the product of the width of the browser window 
  // and "position_value".
  var bkgrnd_element_x_position = new String();
  // Holds a String which the product of the calculated width of the browser window 
  // and "position_value", which is contained by, "bkgrnd_element_width_val".
  // 
  // This value is used to determine the CSS value of the property, "left", 
  // of the background of a Section.
  
  nav_selector = "nav";
  nav_element = $(nav_selector);
  
  section_search_string = "sctn_main";
  // "section_search_string" holds a string that is looked for within "url_hash".
  // 
  // NOTE: If the variable names within the URL are changed, the value of 
  // "section_search_string" needs to be updated.
  url_hash = window.location.hash;
  
  if ($(nav_element).css("left") !== "0px" && 
      url_hash !== "" && 
      url_hash.indexOf(section_search_string) === -1) {
  // If the HTML element, "<nav>", is not viewable, the URL does not include a hash of any kind 
  // and the string held by, "section_search_string", is not contained within "url_hash", 
  // this condition is triggered.
  
    current_position = $(window).scrollTop();

    section_value = determineCurrentSection(current_position);
    // Based upon the vertical position of the viewable portion of the webpage 
    // within the browser window, a number representing the current Section 
    // is passed along to "section_value".

    position_search_string = "pos=";
    // "position_search_string" holds a string that is looked for within "url_hash".
    // 
    // NOTE: If the variable names within the URL are changed, the value of 
    // "position_search_string" needs to be updated.
    position_value_index_num = url_hash.indexOf(position_search_string);
    // "position_value_index_num" equals the "location" within the "url_hash" 
    // that the beginning of the value of "position_search_string" occurs.

    if (position_value_index_num === -1)  {
    // If the value of "url_hash" is "#sctn_main", this condition is triggered.
      position_value = "0";
      // If the value of "url_hash" does not include a Position value, the webpage 
      // has just been loaded and therefore the next section which will be viewed 
      // will default to the "first window pane".
    } else {
      position_value = url_hash.charAt(position_value_index_num + position_search_string.length);
      // If the value of "url_hash" contains a Position value, it is passed 
      // on to "position_value".
    }
    
    position_value = parseInt(position_value);
    // The String datatype of "position_value" is changed to a Number.

    all_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy";
    single_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 2).toString() + ")";
    headr_selector = ".headr.sctn_" + section_value.toString();
    div_selector = "div";
    sub_nav_selector = "#nav-sctn_" + section_value.toString();
    bkgrnd_selector = "#bkgrnd-sctn_" + section_value.toString();

    all_copy_element = $(all_copy_selector);
    single_copy_element = $(single_copy_selector);
    headr_element = $(headr_selector);
    sub_nav_element = $(sub_nav_selector);
    bkgrnd_element = $(bkgrnd_selector);

    element_off_css = {
      display: "none"
    };

    element_on_css = {
      display: "block"
    };
    
    page_dimensions_Array = parseWindowDimensions();
    // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".

    window_width = page_dimensions_Array[0];
    // The width, held by, "page_dimensions_Array", is passed to "window_width".
  
    bkgrnd_element_width_val = window_width * position_value;
    // "bkgrnd_element_width_val" holds the product of "window_width" and "position_value".
    // It is also the horizontal position within a background for a Section that matches 
    // up with the viewable "window pane".
    
    bkgrnd_element_x_position =  "-" + bkgrnd_element_width_val.toString() + "px 0px";
    // "bkgrnd_element_x_position" holds the value for the CSS property, "backgroundPosition" 
    // for the Section that this function is processing.

    $(bkgrnd_element).css("backgroundPosition", bkgrnd_element_x_position);
    // The background of the current Section that this function is processing 
    //  is made to now match the viewable window pane.

    $(all_copy_element).css(element_off_css);
    // In order to isolate the content of the viewable window pane, all webpage content
    // is made invisible.
    $(single_copy_element).css(element_on_css);
    // Now, the content of the Section that this function is processing is made visible.

    if ($(sub_nav_element) !== undefined) {
    // If the Section this function is processing contains intra-sectional navigation 
    // this condition is triggered.
      $(sub_nav_element).css(element_on_css);
      // The <div> HTML element which contains the intra-sectional navigation is now 
      // made visible.
    } // END OF if STATEMENT triggered if this Section contains intra-sectional navigation.
    
    $(headr_element).fadeTo(time_value, 1, 
    // The contents of the window pane of the Section this function is processing are faded 
    // into view, starting with the HTML element serving as the header.  
      function () {
        fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, time_value);
        // "fadeCopyElements" is triggered to fade in the various content of the Section this
        // function is processing.
      }
    );
  } // END OF if STATEMENT that is trigged if the intersectional navigation on the left is not visible, 
    // the URL does not contain a hash and Section value.
} /* **************** END OF FUNCTION "animatePageElements" **************** */

function displayVerticalNav() {
  /* **************** **************** **************** **************** **************** 
   * Displays the inter-section navigation that appears on the right hand side 
   * of the browser window.
   * 
   * If the vertical location of the webpage within the browser window is near the top 
   * of the browser window, the up arrow does not appear. If the webpage's location 
   * is near the bottom of the webpage, the down arrow does not appear.
   * **************** **************** **************** **************** **************** */

  var current_position = new Number();
  // Holds a number which matches the vertical position within the webpage that is viewable.
   
  var intersection_off_css = new Object();
  var intersection_on_css = new Object();

  var prev_sctn_selector = new String();
  var next_sctn_selector = new String();
  var wndow_selector = new String();
  
  var prev_sctn_element = new Object();
  var next_sctn_element = new Object();
  var wndow_elements = new Object();
  
  intersection_off_css = {
    display: "none", 
    opacity: 0
  }
  
  intersection_on_css = {
    display: "block",
    opacity: 1
  };

  current_position = $(window).scrollTop();
  // The current vertical position of the browser window within the webpage 
  // is passed on to, "current_position".
  
  prev_sctn_selector = "#prev-sctn";
  next_sctn_selector = "#next-sctn";

  prev_sctn_element = $(prev_sctn_selector);
  next_sctn_element = $(next_sctn_selector);
  
  if (current_position === 0)  {
  // If the vertical location of the visible Section is at the top 
  // of the webpage, this condition is triggered.
    $(prev_sctn_element).css(intersection_off_css);
    // The up arrow is made invisible.
    $(next_sctn_element).css(intersection_on_css);
    // The down arrow is made visible.
  } else {
  // Otherwise, if the vertical location of the visible Section is lower 
  // on the webpage, this condition is triggered.
    if ($(prev_sctn_element).css("display") === "none")  {
    // If the up arrow is invisible, this condition is triggered.
      $(prev_sctn_element).css(intersection_on_css);
      // The up arrow is made visible.
    } // END OF if STATEMENT which is triggered if the up arrow is invisible.
    
    wndow_selector = new String();
    wndow_elements = new Object();
    
    var wndow_height = new Number();
    // Holds the height of the HTML elements using the selector, ".wndow", 
    // as passed on from the second index of "page_dimensions_Array".
    var wndow_location_margin = new Number();
    // Holds a Number which determines the distance, in pixels, 
    // between the vertical location of the webpage and its distance 
    // from the top or bottom of the webpage.
 
    var webpage_location_val = new Number();
    // Holds a Number which is the result of subtracting the height of 
    // HTML elements using the selector, ".wndow", and a buffer from the top or 
    // bottom of the webpage from the product of multiplying 
    // the height of, ".wndow" elements by the number of ".wndow" elements.
    //
    // This value marks the vertical location within the webpage that triggers 
    // a condition that allows for the down arrow to made visible.
    var num_of_wndow_elements = new Number();
    // Holds a Number that contains the total number of HTML elements using 
    // the selector, ".wndow".
    
    wndow_selector = ".wndow";
    wndow_elements = $(wndow_selector);

    wndow_height = $(wndow_elements).height();
    wndow_location_margin = 100;
    num_of_wndow_elements = $(wndow_elements).length;
    // "num_of_wndow_elements" holds the number of HTML elements identified by the selector, ".wndow".
    
    webpage_location_val = (wndow_height * num_of_wndow_elements) - wndow_height - wndow_location_margin;
    
    if (current_position >= webpage_location_val)  {
    // If the visible portion of the website lies lower on the webpage than the 
    // value of "webpage_location_val", this condition is triggered.
      $(next_sctn_element).css(intersection_off_css);
      // The down arrow is made invisible.
      $(prev_sctn_element).css(intersection_on_css);
      // The up arrow is made visible.
    } else {
      if ($(next_sctn_element).css("display") === "none") {
      // If the down arrow is invisible, this condition is triggered.
        $(next_sctn_element).css(intersection_on_css);
        // The down arrow is made visible.
      } // END OF if STATEMENT that is triggered if the down arrow is invisible.
    } // END OF if STATEMENT that is triggered if the visible portion of the webpage 
      // is lower than the value of "webpage_location_val".
  } // END OF if STATEMENT that is triggered if the visible portion of the webpage 
    // is at the top.
} /* **************** END OF FUNCTION "displayVerticalNav" **************** */

function animateSctnNav(sctn_nav_element, time_value) {
  /* **************** **************** **************** **************** **************** 
   * Animates the intra-section navigation that appears within 'SECTION #3' 
   * and 'SECTION #4'.
   * **************** **************** **************** **************** **************** */
  
  var sctn_nav_link_selector = new String();
  var sctn_nav_link_element = new Object();

  var sctn_nav_id_val = new String();
  // Holds the selector of the <div> HTML element which contains the menu which 
  // serves as intrasection navigation.
  
  var sctn_nav_background_position = new String();
  // Holds the value of the CSS property "background-position" for the HTML element 
  // which serves as intrasection navigation.

  var sctn_nav_base_css = new Object();
  var sctn_nav_hover_css = new Object();
  var sctn_nav_click_1_css = new Object();
  var sctn_nav_click_2_css = new Object();
  var sctn_nav_mobile_base_css = new Object();
  var sctn_nav_mobile_click_css = new Object();

  sctn_nav_id_val = $(sctn_nav_element).parent().parent().attr("id");
  // The "id" of the <div> HTML element which contains the individual 
  // menu options is passed on to, "sctn_nav_id_val".

  sctn_nav_link_selector = "#" + sctn_nav_id_val + " > div > div";
  // The selector for the <div> element which contains the individual 
  // menu options is created and passed on to, "sctn_nav_link_selector".
  sctn_nav_link_element = $(sctn_nav_link_selector);

  sctn_nav_background_position = $(sctn_nav_element).css("backgroundPosition");
  // The value for the CSS property, "background-position", is passed on to 
  // "sctn_nav_background_position".

  sctn_nav_base_css = {
    backgroundPosition: "0px 0px"
  };

  sctn_nav_hover_css = {
    backgroundPosition: "0px -35px"
  };

  sctn_nav_click_1_css = {
    backgroundPosition: "0px -70px"
  };

  sctn_nav_click_2_css = {
    backgroundPosition: "0px -105px"
  };

  sctn_nav_mobile_base_css = {
    backgroundPosition: "0px 0px", 
    backgroundColor: "#000"
  };

  sctn_nav_mobile_click_css = {
    backgroundPosition: "0px -210px", 
    backgroundColor: "#666"
  };

  $(sctn_nav_element).css("opacity", 0);
  // The <div> element containing the <div> element containing the 
  // individual menu options is made invisible.

  if (window.navigator.userAgent.indexOf("Mobile") === -1 &&  
      window.navigator.userAgent.indexOf("Tablet") === -1)  {
  // If this browser is a desktop browser, this condition is triggered.
    switch (sctn_nav_background_position) {
      case "0px 0px":
        $(sctn_nav_element).css(sctn_nav_hover_css);
      break;
      // If the main intrasection navigation menu is in it's 'base' 
      // click state, change the click state to, 'hover'.

      case "0% 0%":
        $(sctn_nav_element).css(sctn_nav_hover_css);
      break;
      // If the main intrasection navigation menu is in it's 'base' 
      // click state, change the click state to, 'hover'.

      case "0px -35px":
        if ($(sctn_nav_link_element).css("display") === "none") {
        // If the individual menu options are not visible, 
        // this condition is triggered.
          $(sctn_nav_element).css(sctn_nav_base_css);
          // The main intrasection navigation menu is changed to 
          // its base state.
        } else if ($(sctn_nav_link_element).css("display") === "block") {
        // If the individual menu options are visible, this 
        // condition is triggered.
          $(sctn_nav_element).css(sctn_nav_click_1_css);
          // The main intrasection navigation menu is changed to its 
          // "first" click state.
          $(sctn_nav_element).fadeTo((time_value / 3), 1);
          $(sctn_nav_element).fadeTo((time_value / 3), 0);
          // The main intrasection navigation menu is gradually made 
          // invisible and then visible yet again.

          $(sctn_nav_element).css(sctn_nav_click_2_css);
          // The main intrasection navigation menu is changed 
          // to its "second" click state.
        }      
      break;
      // If the main intrasection navigation menu is in it's 'hover' 
      // click state, change the click state to the first, 'click', 
      // click state.

      case "0px -105px":
        if ($(sctn_nav_link_element).css("display") === "none") {
          $(sctn_nav_element).css(sctn_nav_base_css);
        }
      break;
      // If the main intrasection navigation is in its "second" click state 
      // and has been clicked, the click state is changed to its "base" state.
    }
  } else {
  // Otherwise, if the browser is a mobile browser, this condition is triggered.
    if (sctn_nav_background_position === "0px 0px" && 
    // If the main intrasection navigation is in its "base" state, 
    // this condition is triggered.
      $(sctn_nav_link_element).css("display") === "block") {
      // The individual menu options are made visible.
      
      $(sctn_nav_element).css(sctn_nav_mobile_click_css);
      // The main intrasection navigation has its click state changed 
      // to the "click" click state.
    } else {
    // Otherwise, if the navigation is in its "click" click state, 
    // this condition is triggered.
      $(sctn_nav_element).css(sctn_nav_mobile_base_css);
      // The main intrasection navigation is changed to the "base" click state.
    } // END OF if STATEMENT that is triggered when the browser is a mobile browser 
      // and the main intrasection navigation is in its "base" click state.
  } // END OF if STATEMENT that is triggered when the browser is a mobile browser.
  
  $(sctn_nav_element).fadeTo((time_value / 2), 1);
  // The main intrasection navigation is faded in.
}  /* **************** END OF FUNCTION "animateSctnNav" **************** */

function animateSctnNavLinks(sctn_nav_link_element) {
  /* **************** **************** **************** **************** **************** 
   * Makes the individual menu options of the intrasection navigation 
   * that appears within 'SECTION #3' and 'SECTION #4' visible or invisible.
   * **************** **************** **************** **************** **************** */
  
  if ($(sctn_nav_link_element).css("display") === "none")  {
  // If the individual menu options are invisible, this condition is triggered.
    $(sctn_nav_link_element).css("opacity", 0);
    // The main intrasection navigation is faded to an opacity of 0.
    $(sctn_nav_link_element).css("display", "block");
    // The main intrasection navigation is ready to be made visible
    $(sctn_nav_link_element).fadeTo((time_value / 2), 1);
    // The main intrasection navigation is faded to an opacity of 1.
  } else {
  // Otherwise, if the individual menu options are visible, 
  // this condition is triggered.
    $(sctn_nav_link_element).fadeTo((time_value / 2), 1);
    // The main intrasection navigation is faded to an opacity of 1.
    $(sctn_nav_link_element).css("display", "none"); 
    // The main intrasection navigation is made invisible.
  } // END OF if STATEMENT that is triggered if the individual menu options are 
    // invisible.
} /* **************** END OF FUNCTION "animateSctnNavLinks" **************** */

function animateSideNav(time_value) {
  /* **************** **************** **************** **************** **************** 
   * Animates the visibility and layout of the HTML elements contained within the webpage 
   * when the main intersection navigation menu that appears on the left of the webpage 
   * is clicked.
   * 
   * The HTML elements using the selectors, "nav", "#nav-brdr", "#nav-bkgrnd", 
   * "#options", "#cntainr", ".wndow", ".headr", ".copy", ".sctn_nav" 
   * all have their layout altered by this function.
   * **************** **************** **************** **************** **************** */

  var nav_selector = new String();
  var options_selector = new String();
  var nav_bkgrnd_selector = new String();
  var nav_brdr_selector = new String();
  var cntainr_selector = new String();
  var wndow_selector = new String();
  var headr_selector = new String();
  var copy_selector = new String();
  var info_selector = new String();
  var sctn_nav_selector = new String();
  var prev_next_sctn_selector = new String();
  var bkgrnd_selector = new String();
  
  var nav_element = new Object();
  var options_element = new Object();
  var nav_bkgrnd_element = new Object();
  var nav_brdr_element = new Object();
  var cntainr_element = new Object();
  var wndow_element = new Object();
  var wndow_elements = new Array();
  var headr_elements = new Array();
  var info_element = new Object();
  var copy_elements = new Array();
  var bkgrnd_element = new Object();
  var sctn_nav_element = new Object();
  var prev_next_sctn_element = new Object();

  var nav_width = new Number();
  // Holds the numerical value of the width of the HTML element 
  // identified by the selector, "nav".
  var element_width = new Number();
  // Holds the numerical value of the calculated width of HTML elements 
  // identified by the selectors, "#cntainr" and #bkgrnd".
  // 
  // Both of the HTML elements, "#cntainr" and "#bkgrnd" have the value 
  // of their widths changed to the difference of the total width 
  // of the browser window and the width of the HTML element identified 
  // by the selector, "nav".
  var window_width = new Number();
  // Holds the numerical value of the width of the browser window.
  var wndow_width = new Number();
  // Holds the numerical value of the width of the HTML element using 
  // the selector, ".wndow".
  
  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".

  nav_selector = "nav";
  options_selector = "#options";
  nav_bkgrnd_selector = "#nav-bkgrnd";
  nav_brdr_selector = "#nav-brdr";
  cntainr_selector = "#cntainr";
  wndow_selector = ".wndow";
  headr_selector = ".headr";
  copy_selector = ".copy";
  info_selector = "#info";
  sctn_nav_selector = ".sctn_nav";
  prev_next_sctn_selector = "#prev-sctn, #next-sctn";
  bkgrnd_selector = "#bkgrnd, #bkgrnd > div";

  nav_element = $(nav_selector);
  options_element = $(options_selector);
  nav_bkgrnd_element = $(nav_bkgrnd_selector);
  nav_brdr_element = $(nav_brdr_selector);
  cntainr_element = $(cntainr_selector);
  wndow_elements = $(wndow_selector);
  headr_elements = $(headr_selector);
  copy_elements = $(copy_selector);
  info_element = $(info_selector);
  sctn_nav_element = $(sctn_nav_selector);
  prev_next_sctn_element = $(prev_next_sctn_selector);
  bkgrnd_element = $(bkgrnd_selector);

  nav_width = $(nav_element).width();
  // The width of the HTML element using the selector, "#nav" is 
  // calculated using the jQuery Method, ".width();
  // 
  // That value is passed onto the variable, "nav_width".
  
  window_width = $(window).width();
  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various HTML elements 
    // of the webpage within the browser window are passed on to "page_dimensions_Array".
  wndow_width = page_dimensions_Array[0];

if ($(nav_element).css("left") !== "0px")  {
// If the intersection navigation that appears on the left side of the webpage 
// is visible, this condition is triggered.
    element_width = window_width - nav_width;
    // The difference of the width of the browser window and the value held ]
    // by "nav_width" is passed onto the variable "element_width".
    //
    // The value contained by, "element_width", is used to resize the HTML elements 
    // containing the HTML content of the entire webpage, "#cntainr", 
    // the background images of the webpage, "#bkgrnd", and the HTML elements 
    // held within each Section of the webpage, ".wndow".

    var nav_visible_css = new Object();
    var nav_mobile_visible_css = new Object();
    var options_staging_css = new Object();
    var element_shifted_right_css = new Object();
    var element_extended_css = new Object();
    var element_invisible_css = new Object();

    nav_visible_css = {
      left: "0px", 
      opacity: 1
    };

    nav_mobile_visible_css = {
      display: "block"
    };

    options_staging_css = {
      display: "block", 
      left: -nav_width, 
      opacity: 1
    };

    element_shifted_right_css = {
      left: nav_width
    };

    element_extended_css = {
      width: (wndow_width - nav_width),
      left: nav_width
    };

    element_invisible_css = {
      display: "none"
    };
    
    $(info_element).css(element_invisible_css);
    // The block of HTML content that appears in the 'MAIN LANDING SECTION' 
    // is made invisible.

    $(headr_elements).css(element_invisible_css);
    $(copy_elements).css(element_invisible_css);
    $(sctn_nav_element).css(element_invisible_css);
    // The visible headers, HTML content, and intrasection navigation is
    // made invisible.
    
    $(options_element).css(options_staging_css);
    // The menu options of the intersection navigation are ready to be viewed 
    // once the panel containing the intersection navigation scrolls in 
    // from the left.

    $(nav_element).animate(nav_visible_css, time_value)
    $(nav_bkgrnd_element).animate(nav_visible_css, time_value);
    $(nav_brdr_element).animate(nav_visible_css, time_value);
    $(options_element).animate(nav_visible_css, time_value);
    // The main intersection that appears on the left of the webpage scrolls 
    // in from the left to the right.
    //
    // The HTML elements affected by these statements are: "nav", 
    // "#nav-bkgrnd", "#nav-brdr", "#options".

    if (wndow_width === 980 || 
        wndow_width === 1024)  {
    // If the width of a HTML element using the selector, ".wndow", is 
    // 980 or 1024, or fits a mobile device, this condition is triggered.

      $(nav_element).css(nav_mobile_visible_css);
      $(nav_bkgrnd_element).css(nav_mobile_visible_css);
      $(nav_brdr_element).css(nav_mobile_visible_css);
      $(bkgrnd_element).css(element_extended_css);
      // The intersection navigation is now visible. Also the background 
      // is shifted to the right, out of view.

      element_extended_css = element_extended_css + element_invisible_css;
      // The CSS properties and values held by "element_extended_css" are 
      // combined with the CSS properties and values held by "element_invisible_css".

      $(cntainr_element).css(element_extended_css);
      $(wndow_elements).css(element_extended_css);
      $(prev_next_sctn_element).css(element_invisible_css);
      // The visible content of the webpage is made invisible.
    } else {
    // Otherwise, if the browser is a desktop browser, this condition 
    // is triggered.
      $(cntainr_element).animate(element_shifted_right_css, time_value);
      $(bkgrnd_element).animate(element_shifted_right_css, time_value);
      // The HTML content and the background is shifted to the right, out of view.
    }
  } else  {
  // Otherwise, if the intersection navigation that appears on the left hand 
  // of the webpage is invisible, this condition is triggered.

    var nav_invisible_css = new Object();
    var element_shifted_left_css = new Object();
    var element_visible_css = new Object();
    var headr_visible = new Object();

    window_width = $(window).width();
    
    nav_invisible_css = {
      left: -nav_width
    };

    element_shifted_left_css = {
      left: "0px"
    };

    element_visible_css = {
      display: "block"
    };

    headr_visible = {
      display: "table"
    };

    $(options_element).animate(nav_invisible_css, time_value, 
    // The individual menu options of the intersection navigation is made invisible 
    // by scrolling the options to the left, out of view.
      function () {
        $(nav_element).animate(nav_invisible_css, time_value);
        $(nav_bkgrnd_element).animate(nav_invisible_css, time_value);
        $(nav_brdr_element).animate(nav_invisible_css, time_value);
        // The background of the intersection navigation is made invisible 
        // by scrolling the HTML elements to the left, out of view.

        if (wndow_width === 980)  {
        // If the browser is a mobile browser, this condition is triggered.
          $(cntainr_element).css(element_visible_css);
          $(wndow_elements).css(element_shifted_left_css);
          $(bkgrnd_element).css(element_visible_css);
          $(prev_next_sctn_element).css(element_visible_css);
          // The HTML content, backgrounds, and intersection navigation that 
          // appears in the middle of the webpage is made visible.
        }

        $(cntainr_element).animate(element_shifted_left_css, time_value);
        // The HTML element which contains the HTML content and other forms 
        // of content is scrolled back to the left, into view.
        $(bkgrnd_element).animate(element_shifted_left_css, time_value, 
          function () {
            $(cntainr_element).width(window_width);
            $(sctn_nav_element).width(window_width);
            $(bkgrnd_element).width(window_width);
            $(wndow_elements).width(window_width);
            $(headr_elements).css(headr_visible);
            $(copy_elements).css(element_visible_css);
            $(info_element).css(element_visible_css);
            // Once the background is made visible, the visible HTML element 
            // containing content, intrasection navigation, headers, 
            // and other content is made visible.
          }
        );
        // The background and other forms of content is made visible.
      }
    );
    // Scrolling the individual menu options to the left, out of view, triggers 
    // a set of animations and visibility changes that returns the webpage content 
    // back into view.
  } // END OF if STATEMENT that is triggered if the intersection navigation that appears 
    // on the left side of the webpage is visible.
} /* **************** END OF FUNCTION "animateSideNav" **************** */

function determineCurrentSection(current_position)  {
  /* **************** **************** **************** **************** **************** 
   * Determines the vertical position of the browser and passes the Section that is 
   * currently visible back to the URL.
   * 
   * This function runs while the page is loading.
   * **************** **************** **************** **************** **************** */

  var cntainr_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height"
  // for the HTML element using the selector, "#cntainr".
  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".
  var section_value_num = new Number();
  // Holds a Number representing the location within the URL hash where the 
  // Section Value is listed.
  var window_margin = new Number();
  // Holds a Number which is used to determine a range of values which 
  // the location can fall into and still be considered to be within a Section.

  var cntainr_selector = new String();
  var wndows_selector = new String();
  
  var cntainr_element = new Object();
  var wndows_elements = new Array();

  cntainr_selector = "#cntainr";
  wndows_selector = ".wndow";

  cntainr_element = $(cntainr_selector);
  wndows_elements = $(wndows_selector);

  cntainr_height = $(cntainr_element).height();
  wndow_height = $(wndows_elements).height();

  window_margin = 0.05;

  section_value_num = Math.floor(current_position / wndow_height + window_margin); 
  // To get the Section value for the current section which is viewable, the number 
  // which is the result of dividing the current location of the browser along the 
  // webpage by the sum of height of the HTML element using the selector, ".wndow", 
  // and the value of window margin is rounded down to the nearest integer.

  return section_value_num;
  // The Section value is returned to setURL.   
} /* **************** END OF FUNCTION "determineSectionValue" **************** */

function setURL(current_position, url_hash)  {
  /* **************** **************** **************** **************** **************** 
   * Passes on data to the URL that controls the animation of various content within 
   * the webpage.
   * 
   * This function operates as the webpage loads.
   * **************** **************** **************** **************** **************** */

  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".
  var window_margin = new Number();
  // Holds a Number which is used to determine a range of values which 
  // the location can fall into and still be considered to be within a Section.
  
  var wndow_selector = new String();
  var info_selector = new String();
  
  var wndow_elements = new Object();
  var info_element = new Object();

  var info_opacity_value = new String();
  // The opacity of the HTML element using the selector, "#info", 
  // at the time that this function begins is passed to "info_opacity_value".

  var section_value = new String();
  // Holds the String value of the selector for the HTML element using the 
  // selector, "#wndow-sctn_X".
  // 
  // The value of "section_value" would be "#wndow-sctn_1" if the visible 
  // Section was 'SECTION #1'.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.

  var section_value_num = new Number();
  // Holds a Number which is returned by the execution of the function, 
  // "determineCurrentSection". It represents the Section.

  wndow_selector = ".wndow";
  info_selector = "#info";
  
  wndow_elements = $(wndow_selector);
  info_element = $(info_selector);

  wndow_height = $(wndow_elements).height(); 
  window_margin = 150;
  // "wndow_margin" is given a range of 150 pixels that the current location of the 
  // browser window can fall into and still be considered part of the previous section.
  info_opacity_value = $(info_element).css("opacity");

  if ((current_position === 0) && 
      (url_hash.indexOf("sctn_main") === -1) && 
      (info_opacity_value === "0")) {
  // If the browser window is at the top of the webpage, the URL does not include the hash, 
  // "#sctn_main", and the opacity of the HTML element using the selector, "#info" is 0, 
  // this condition is triggered.

      url_hash = "#sctn_main";     
  } else {
  // Otherwise, if the webpage appears in a different location from the top, this condition 
  // is triggered.
    section_value_num = determineCurrentSection(current_position);
    // "section_value_num" is passed a Number from the function, "determineCurrentSection", 
    // which represents the Section which is currently visible.

    if (section_value_num !== Infinity) {
    // This condition validates the Section value that the function, "determineCurrentSection", 
    // passes back to this function. If the value of, "section_value_num" lies between a range 
    // of 1 - 6, this condition is triggered.

      section_value = "#wndow-sctn_" + section_value_num;
      
      if (current_position >= (wndow_height - window_margin)) {
      // If the current position of the browser window lies below the 'MAIN LANDING SECTION', 
      // this condition is triggered.
        position_value = (determineVisibleCopyElement(section_value)).toString();;  
      } else  {
      // Otherwise, if the browser window lies within the 'MAIN LANDING SECTION', 
      // this condition is triggered.
        position_value = "0";
      } // END OF if STATEMENT that is triggered if the current location of the browser window 
        // lies below the 'MAIN LANDING SECTION'.
      
      if (position_value === "-1")  {
      // If the value passed to, "position_value", is an unknown value, '-1', this 
      // condition is triggered.
        
        position_value = "0";
        // If an unknown value, "-1", is passed on to, "position_value", the "first" 
        // window pane ought to be shown. The Position value for the "first" 
        // window pane is "0".
      } // END OF if STATEMENT that is triggered if the Position value is invalid.

      url_hash = "#sctn_" + section_value.charAt(section_value.length - 1) + "?pos=" + position_value;

      if (url_hash === "#sctn_0?pos=0") {
      // If there has been an error with the Section value, which has its value set to, "0", 
      // this condition is triggered.

        url_hash = "#sctn_main";
        // The value of, "url_hash", is now made to set the hash as, "#sctn_main".
      } // END OF if STATEMENT which is triggered if there is an error with the 
        // Section value.
    } // END OF if STATEMENT which is triggered if the Section value is valid.
  } // END OF if STATEMENT which is triggered if the current location of the 
    // browser window lies within 'MAIN LANDING SECTION', the opacity of 
    // the HTML content within 'MAIN LANDING SECTION' is "0", and the hash 
    // of the URL is not, "#sctn_main".

  if (url_hash !== window.location.hash)  {
  // If the current hash of the URL has changed, this condition is triggered.
    window.location.hash = url_hash;
  } // END OF if STATEMENT which is triggered if the URL has been changed.
}  /* **************** END OF FUNCTION "setURL" **************** */

function animateMenuOptions(option_element) {
  /* **************** **************** **************** **************** **************** 
   * Animates the click states of the menu options contained within the intersection 
   * navigation that appears on the left side of the browser window.
   * **************** **************** **************** **************** **************** */

  var base_css = new Object();
  var hover_css = new Object();

  var time_value_long = new Number();
  var time_value_short = new Number();
 
  hover_css = {
    "backgroundColor": "#ccc", 
    "color": "#000"
  };

  base_css = {
    "backgroundColor": "#000", 
    "color": "#fff"
  };
  
  time_value_long = time_value / 2;
  time_value_short = time_value / 4;
  
  if ($(option_element).css("backgroundColor") === "rgb(0, 0, 0)") {
  // If the click state of the menu option is in its "base" state, 
  // this condition is triggered.
    $(option_element).animate(hover_css, time_value_long);
    // The click state of the menu option is changed to its "hover" state.
  } else {
  // Otherwise if the click state of the menu option is in its "hover" state 
  // this condition is triggered.
    $(option_element).animate(base_css, time_value_short);
    // The click state of the menu option is changed to its "base" state.
  } // END OF if STATEMENT which is triggered if the menu option is in 
    // its "base" click state.
} /* **************** END OF FUNCTION "animateMenuOptions" **************** */

function setPageInitialLocation()  {
  /* **************** **************** **************** **************** **************** 
   * Navigates the browser window to the location that allows for the full window 
   * of the visible section to be displayed.
   * **************** **************** **************** **************** **************** */

  var url_hash = new String();
  
  var section_value = new String();
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.
  
  var wndow_selector = new String();
  var copy_selector = new String();
  
  var wndow_element = new Object();
  var copy_element = new Object();

  var wndow_height = new Number();
  // Holds a Number which represents the value of the CSS property, "height" 
  // for an single instance of the HTML element using the selector, ".wndow".

  var copy_visible_css = new Object();

  scroll_to_value = new Number();
  // Holds a value which matches the vertical location, in pixels.

  url_hash = window.location.hash;

  section_value = url_hash.charAt(6);
  position_value = url_hash.charAt(12);

  copy_visible_css = {
    display: "block"
  };

  if (section_value !== "m" &&  
      section_value !== "")  {
  // If the current visible section is not 'MAIN LANDING SECTION', this condition 
  // is triggered.

    position_value = parseInt(position_value);
    // "position_value" is converted to a Number datatype so that it can be adjusted 
    // by a mathematical statement.

    wndow_selector = ".wndow";
    copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 3).toString() + ")";
    
    wndow_element = $(wndow_selector);
    copy_element = $(copy_selector);

    wndow_height = $(wndow_element).height();
    
    scroll_to_value = section_value * wndow_height;
    // The vertical location of the visible window is set. 

    $(copy_element).css(copy_visible_css);
    
    $(window).scrollTop(scroll_to_value);
    // The browser window is placed to view the complete window pane of the 
    // visible Section .
  } else  {
  // Otherwise, if the current visible Section is 'MAIN LANDING SECTION', 
  // this condition is triggered.
    $(window).scrollTop(0);
  } // END OF if STATMENT which is triggered if the visible Section is not 
    // 'MAIN LANDING SECTION'.
} /* **************** END OF FUNCTION "setInitialLocation" **************** */

function fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, time_value)  {
  /* **************** **************** **************** **************** **************** 
   * The content of the visible Section are made visible by fading their opacity 
   * from 0 to 1.
   * **************** **************** **************** **************** **************** */
  
  $(single_copy_element).children(div_selector).fadeTo(time_value, 1, 
    function () {
      var form_selector = new String();
      var form_element = new Object();

      if (section_value === 3 || 
          section_value === 4)  {
      // If the current visible Section contains intrasection navigation, 
      // this condition is triggered.
        $(sub_nav_element).fadeTo(time_value, 1);
      } // END OF if STATEMENT which is triggered if the current Section 
        // contains intrasection navigation.

      form_selector = "#form-sctn_" + section_value.toString() + " .form-page_1";
      form_element = $(form_selector);

      if ($(form_element).css("opacity") === "0" && 
          (section_value === 1 && position_value === 1 || 
           section_value === 5 && position_value === 1 || 
           section_value === 6 && position_value === 1))  {
      // If the current visible Section contains a form which is invisible 
      // and the Section contains a form, this condition is triggered.

        animateFormPanes();
        // The function, "animateFormPanes" fades the opacity of the form 
        // contained with the current Section from 0 to 1.
      } // END OF if STATEMENT which is triggered if a Section contains a form 
        // that is now to be made visible.
    } // END of FUNCTION which fades in the HTML content of a visible Section.
  );
} /* **************** END OF FUNCTION "fadeCopyElements" **************** */