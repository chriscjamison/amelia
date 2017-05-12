/* Filename: animations.js
 *  Contains all JavaScript functions and behavior that controls the layout 
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
 *      Displays the inter-sectional navigation which appears as two white arrows located 
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
 *      Animates the movement of the inter-sectional navigation that appears on the left hand 
 *      side of the browser window.
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
  // Holds the numerical value of the width of the visible area of the browser. 
  // Captured by the jQuery Method "$(window).width()"
  
  var window_height = new Number();
  // Holds the numerical value of the height of the visible area of the browser. 
  // Captured by the jQuery Method "$(window).height()"
  
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
    // has the dimensions of 980x1308px. These dimensions are the same as an iPad.
      page_dimensions_Array[1] = 1308;  
    } else  {
    // Otherwise the browser has the dimensions of 980x1740px.
    // These dimensions are the same as an iPhone.
      page_dimensions_Array[1] = 1740;
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
  // Holds the string which is returned by the HTML DOM property, "window.location.hash".

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
  // Holds the String values referencing the Section Value and Position Value 
  // which are contained within the string held by, "url_hash".
  //
  // The array is passed on to the functions which call, "urlInfo"; 
  // "setupPage" and "animatePageElements".

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
    // These variables hold Selectors which define the inter-sectional navigation 
    // which appear as two white arrows.
    //
    // The values passed to these variables are, "#prev-sctn" for "prev_sctn_selector" 
    // and "#next-sctn" for "next_sctn_selector".

    var prev_sctn_element = new Object();
    var next_sctn_element = new Object();
    // These variables hold jQuery Objects which refer to HTML elements 
    // using the selectors defined by, "prev_sctn_selector" for "prev_sctn_element" 
    // and "next_sctn_selector" for "next_sctn_element".

    prev_sctn_selector = "#prev-sctn";
    next_sctn_selector = "#next-sctn";
    // "prev_sctn_selector" now holds "#prev-sctn" 
    // and "next_sctn_selector" holds "#next-sctn".

    prev_sctn_element = $(prev_sctn_selector);
    next_sctn_element = $(next_sctn_selector);
    // "prev_sctn_element" now holds the jQuery Object 
    // for the selector, "#prev-sctn" and 
    // "next_sctn_element" holds the jQuery Object
    // for the selector, "#next-sctn".

    if (window_width >= 1260 && 
        window_width < 1920)  {
    // If the width of the browser is greater than 1260 yet less than 1920, 
    // this condition is triggered.

      var inter_nav_css = new Object();
      // Holds the value of the CSS property, "right"", 
      //
      // The values contained within this object, format the HTML elements 
      // identified by the selectors, "#prev-sctn" and "#next-sctn".
  
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
      // This variable holds the selector for the block of content which contains the logo 
      // that appears within the main landing page.
      //
      // The value passed to this variable is, "#info".

      var info_element = new Object();
      // This variable holds the jQuery Object that refers to the HTML element using 
      // the selector, "#info".
      
      var info_css = new Object();
      // Holds the CSS properties and values of "bottom", and "right".
      // 
      // The values contained within this object, format the HTML element 
      // using the selector, "#info". 
      var inter_nav_2_css = new Object();
      // Holds the values of the CSS properties, "right" and "bottom".
      // 
      // The values contained with this object format the HTML elements using 
      // the selectors, "#prev-sctn" and "#next-sctn".

      info_selector = "#info";
      // "info_selector" now holds, "#info".

      info_element = $(info_selector);
      // "info_element" now holds the jQuery Object for the selector, "#info".

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
      // The inter-sectional navigation which consists of white arrows 
      // appears in the middle top and middle bottom of the browser window.
      
    } // END OF if STATEMENT which is triggered if the window_width is 1920.
  } // END of if STATEMENT which is triggered if the browser is for a mobile device.

  if (window_width === 980)  {
    var info_img_selector = new String();
    // Holds the selector for the image of the logo contained in the block of content 
    // which appears on the main landing page.
    //
    // The value passed to this variable is, "#info img".
    var prev_sctn_span_selector = new String();
    var next_sctn_span_selector = new String();
    // Holds the selector for text descriptors of the inter-sectional navigation 
    // that appears in the form of two white arrows.
    // 
    // The values passed to these variables are, 
    // "#prev-sctn > span" for "prev_sctn_span_selector" 
    // and "#next-sctn > span" for "next_sctn_span_selector".
    
    var info_img_element = new Object();
    // Holds the jQuery Object that refers to the HTML element using
    // the selector, "#info img".
    
    var prev_sctn_span_element = new Object();
    var next_sctn_span_element = new Object();
    // These variables hold jQuery Objects which refer to HTML elements 
    // using the selectors defined by, "prev_sctn_span_selector" for "prev_sctn_span_element" 
    // and "next_sctn_selector" for "next_sctn_span_element".
    
    var info_img_css = new Object();
    // Holds the HTML attributes, "src", "width", and "height", for the 
    // HTML element using the selector, "#info > img".
    //
    // These attributes format the HTML element using the selector, "#info > img".

    info_img_selector = "#info > img";
    // "info_img_selector" now holds "#info > img".
    prev_sctn_span_selector = "#prev-sctn > span";
    // "prev_sctn_span_selector" now holds "#prev-sctn > span"."
    next_sctn_span_selector = "#next-sctn > span";
    // "next_sctn_span_selector" now holds "#next-sctn > span".
    
    info_img_element = $(info_img_selector);
    // "info_img_element" now holds the jQuery Object 
    // for the selector, "#info img".
    next_sctn_span_element = $(next_sctn_span_selector);
    prev_sctn_span_element = $(prev_sctn_span_selector);
    // "prev_sctn_span_element" holds the jQuery Object 
    // for the selector, "#prev-sctn > span".
    // "next_sctn_span_element" holds the jQuery Object 
    // for the selector, "#next-sctn > span".

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
   * This function also initializes the placement of the intrapage navigation 
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
  // Holds the "width" and "height" values of the browser window.
  // 
  // The width and height values are call by "parseWindowDimensions" and passed on 
  // to "page_dimensions_Array".
  
  var page_height = new Number();
  // Holds the total height of the loaded web page.
  // 
  // "page_height" is calculated by multiplying the height of the browser frame, 
  // as it is calculated by the jQuery Method, "$(window).height()", 
  // and the total number of HTML elements using the selector, ".wndow".
  
  var nav_width = new Number();
  var nav_left_val = new Number();

  var cntainr_selector = new String();
  // Holds the CSS selector, "#cntainr".
  var wndow_selector = new String();
  // Holds the CSS selector, ".wndow".
  var copy_css = new String();
  // Holds the CSS selector, ".copy".
  var bkgrnd_selector = new String();
  // Holds the CSS selector, "#bkgrnd".
  var nav_selector = new String();
  // Holds the CSS selectors, "nav, #nav-bkgrnd, #nav-brdr".
  var bkgrnd_div_sub_selector = new String();
  // Holds the CSS selector, "#bkgrnd > div".
  var wndow_sctn_selector = new String();
  // Holds the CSS selector, "#wndow-sctn_X".

  var cntainr_element = new Object();
  // Holds the jQuery Object for the HTML DOM element using the selector, "#cntainr".
  var wndow_elements = new Object();
  // Holds the jQuery Object for the HTML DOM elements using the selector, ".wndow".
  var copy_elements = new Object();
  // Holds the jQuery Object for the HTML DOM elements using the selector, ".copy".
  var bkgrnd_element = new Object();
  // Holds the jQuery Object for the HTML DOM element using the selector, "#bkgrnd".
  var nav_elements = new Object();
  // Holds the jQuery Object for the HTML DOM elements using the selectors, "nav, #nav-bkgrnd, #nav-brdr".
  var bkgrnd_div_sub_elements = new Object();
  // Holds the jQuery Object for the HTML DOM elements using the selector, "#bkgrnd > div".
  var wndow_sctn_element = new Object();
  // Holds the jQuery for the HTML DOM element referenced within the selector contained within 
  // the variable, "wndow_sctn_selector".
  //
  // The selector will follow the following format, "#wndow-sctn_X", with X representing a 
  // Section Value identifying an individual section.

  var css_1 = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#cntainr". 
  var css_2 = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML elements 
  // identified by the selector, ".wndow". 
  var css_3 = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#bkgrnd". 
  var css_4 = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML elements 
  // identified by the selector, ".copy". 
  
  var inc_bkgrnd = new Number();
  // Holds a number which represents the Section Value of the background image 
  // loaded within a given HTML element using the selector, "#bkgrnd > div".
  //  
  // "inc_bkgrnd" is used within the String held by "bkgrnd_img_value".
  
  var bkgrnd_img_value = new String();
  // Holds a String defining the value of the CSS property, "background-image", 
  // which is used within the jQuery Method, ".each", as it is used for 
  // the HTML elements using the selectors, "#bkgrnd > div".
  
  var bkgrnd_width = new String();
  // Holds the width of the background image as calculated by multiplying the width returned to the Array, 
  // "page_dimensions_Array[0]", by the number of ".copy" HTML DIV elements within a given Section.
  var bkgrnd_height = new String();
  // Holds the height of the background image as returne to the Array, "page_dimensions_Array[1]".
  
  cssAdjustment();
  // cssAdjusment is called to render various HTML elements of the webpage 
  // within the browser window.

  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various 
  // HTML elements of the webpage within the browser window 
  // are passed on to "page_dimensions_Array".
  page_height = $(window).height() * $(".wndow").length;
  // The value for "page_height" is determined by multiplying the value 
  // calculated by the jQuery Method, "$(window).height()", and 
  // the number of HTML elements using the selector, ".wndow".
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

  css_1 = {
    "width": page_dimensions_Array[0],
    "height": page_height
  };
  
  css_2 = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  css_3 = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };

  css_4 = {
    "left": nav_left_val
  }
  
  $(cntainr_element).css(css_1);
  // The values of the CSS properties, "width" and "height" are modified 
  // using the jQuery Method, ".css".
  //
  // The HTML element using the selector, "#cntainr", has it's CSS 
  // values of "width" and "height" set to equal the width 
  // of the browser window and the height of the webpage.
  $(wndow_elements).css(css_2);
  // The values of the CSS properties, "width" and "height" are modified
  // using the jQuery Method, ".css".
  //
  // The HTML elements using the selector, ".wndow", have its CSS 
  // values set to match the values of the browser width and height, 
  // as calculated by "parseWindowDimensions". 
  
  $(bkgrnd_element).css(css_3);
  // The values of the CSS properties, "width" and "height" are modified 
  // using the jQuery Method, ".css".
  //
  // The HTML element using the selector, "#bkgrnd", has its CSS 
  // values set to match the values of the browser width and height, 
  // as calculated by "parseWindowDimensions". 

  $(nav_elements).css(css_4);
   
  inc_bkgrnd = 0;
  // "inc_bkgrnd" serves as an incrementer which increases in value as 
  // the jQuery Method, ".each", cycles through the HTML elements defined 
  // by the selector, "#bkgrnd > div".

  $(bkgrnd_div_sub_elements).each(
    function () {
      if (inc_bkgrnd > 0) {
        wndow_sctn_selector = "#wndow-sctn_" + inc_bkgrnd;
        wndow_sctn_element = $(wndow_sctn_selector);
        
        bkgrnd_width =  (page_dimensions_Array[0] * $(wndow_sctn_element).children(".copy").length).toString();
        bkgrnd_height = (page_dimensions_Array[1]).toString();

        bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrnd_width + "x" + bkgrnd_height + 
                            ".jpg')";      

        css_3.backgroundImage = bkgrnd_img_value;
      } else  {
        bkgrnd_width = (page_dimensions_Array[0]).toString();
        bkgrnd_height = (page_dimensions_Array[1]).toString();
        
        css_3.backgroundImage = "url('/amelia/assets/img/sctn/main/" + bkgrnd_width +
                                    "x" + bkgrnd_height + ".jpg')";
      } // END OF if STATEMENT
      
      $(this).css(css_3);
      
      inc_bkgrnd++;
    } 
  ); // END OF .each METHOD

  /* .each STATEMENT LOGIC ************** **************** **************** **************** 
   *  I - If the value of "inc_bkgrnd" is greater than "0".
   *    A. If the background being modified is not the background for "#sctn_main".
   *      1. Set the value of "bkgrnd_1_selector" equal to the combination of 
   *         the string, "#wndow-sctn_" and the value of "inc_bkgrnd".
   *            a. The value of, "bkgrnd_1_selector", serves as selector which is modified 
   *               within this Method.
   *      2. Calculate the value of the width of a background image by multiplying 
   *         the value of the browser width and height 
   *         as calculated by "parseWindowDimensions" and store that value within 
   *         "bkgrnd_width".
   *      3. Determine the value of the String which will serve as the value 
   *         for the CSS property, "background-image".
   *            a. The string is made up of the path to the file which holds the 
   *               background image which is loaded within the HTML element being 
   *               modified by this Method.
   *      4. The value, determined in Step I-A-3, is added to the Object, "bkgrnd_css". 
   *  II - If the value of "inc_bkgrnd" is "0".
   *      A. Determine the valueof the String which will serve as the value 
   *         for the CSS property, "background-image".
   *            a. The string is made up of the path to the file which holds the 
   *               background image which is loaded within the HTML element being 
   *               modified by this Method.
   *  III - Set the CSS values of the HTML element, defined by the selector 
   *        held by "bkgrnd_selector".
   *      A. The CSS properties, "width", "height", and "background-image", are modified 
   *         by the values held within the Object, "bkgrnd_css".
   *  IV - The value of "inc_bkgrnd" increased by "1".
   * 
   * **************** **************** **************** **************** **************** */

  setPageInitialLocation();
  
  animatePageElements();

  setTimeout(
    function () {
      displayVerticalNav();
    }, (time_value * 1.25)
  );
  // The intrapage navigation, which appears on the far-right side of the browser 
  // within a desktop or laptop display, or in the middle of the page 
  // within a mobile display is activate.
  // 
  // The function runs after a period of time after the other HTML elements of the web page 
  // are rendered. The time period is twice the value held by the variable, "time_value".
  // 
  // The value of, "time_period" is defined as a global variable and is located
  // near the top of this file.

  // setTimeout(animateInfoElement, time_value * 2);
} /* **************** END OF FUNCTION "setupPage" **************** */


function animateInfoElement() {
  /* **************** **************** **************** **************** **************** 
   * animateInfoElement animates the content of the HTML element 
   * defined by the selector, "#info".
   * 
   * If a browser runs on a mobile device and has a width of "980px", 
   * the contents of, "#info", are animated using different CSS values than those same 
   * contents run within a desktop or laptop browser, or with a larger browser width.
   * **************** *************** **************** **************** **************** */

  var page_dimensions_Array = new Array();
  // Holds the "width" and "height" values of the browser window.
  // 
  // The width and height values are call by "parseWindowDimensions" and passed on 
  // to "page_dimensions_Array".
  
  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  if (page_dimensions_Array[0] === 980) {
    var info_css = new Object();
    // Holds the value for the CSS property, "top"
    // 
    // The value of this Object will modify the HTML element identified 
    // by the selector, "#info".
    // 
    // The value is calculated by determining the "height" of "#info" 
    // and then the inverse of that value.
    var next_sctn_css = new Object();
    // Holds the values for the CSS properties, "height" and "bottom".
    // 
    // The values of this Object will modify the HTML element identified 
    // by the selector, "#next-sctn".
    var prev_sctn_css = new Object();
     // Holds the value for the CSS property, "height".
    // 
    // The value of this Object will modify the HTML element identified 
    // by the selector, "#prev-sctn".
    var nav_sctn_css = new Object();
     // Holds the value for the CSS property, "display".
    // 
    // The value of this Object will modify the HTML elements identified 
    // by the selectors, "#prev-sctn > span" and "#next-sctn > span".
    var nav_css = new Object();
     // Holds the value for the CSS property, "block".
    // 
    // The value of this Object will modify the HTML elements identified 
    // by the selectors, "nav", "#nav-bkgrnd", and "#nav-brdr".
    var nav_link_css = new Object();
     // Holds the value for the CSS property, "opacity".
    // 
    // The value of this Object will modify the HTML element identified 
    // by the selector, "#nav-link".
    
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
    /*
    nav_link_css = {
      "opacity": 1
    };*/

    $("#info").animate(info_css, time_value, 
      function () {
        $("#next-sctn").css(next_sctn_css);
        $("#prev-sctn").css(prev_sctn_css);
        $("nav").css(nav_css);
        $("#next-sctn > span").detach();
        $("#nav-link").fadeTo(time_value, 1);
      });
    
  } else {
    var logo_1_css = new Object();
    // Holds the value for the CSS property, "display".
    // 
    // The value of this Object will modify the HTML elements 
    // using the selectors, "#info" and "#info > img".
    var logo_2_css = new Object();
    // Holds the value for the CSS property, "opacity".
    // 
    // The value of this Object will modify the HTML element
    // using the selector, "#info". 
    var logo_3_css = new Object();
    // Holds the value for the CSS property, "display".
    // 
    // The value of this Object will modify the HTML elements 
    // using the selectors, "#info ul li".
    var logo_4_css = new Object();
    // Holds the values for the CSS properties, "display" and "opacity".
    // 
    // The value of this Object will modify the HTML elements 
    // using the selector, "#info ul".
    
    logo_1_css = {
			display: "block"
		};
		
    logo_2_css = {
      opacity: 1
    };
    
		logo_3_css = {
			display: "inherit"
		};
		
	  logo_4_css = {
			display: "block",
      opacity: 1
		};
    
    time_value_1 = time_value * 2;
    time_value_2 = time_value * 1.5;

    $("#wndow-sctn_main").show("drop", time_value_1);
    // This jQuery Method, "show", "drops" or animates the panel which serves 
    // as the background of the logo and other items on the landing page 
    // down from the top of the browser window.
    // 
    // This animation occurs over an interval which is twice the time of 
    // a "menu" HTML element to animate.
		$("#info").css(logo_1_css).css(logo_2_css);
    // Allow the HTML element, which uses the selctor, "#info", to be visible 
    // within a browser window. The "display" CSS property is set to "display" 
    // and the "opacity" of "#info" is set to "1".
    //
    // The CSS values are applied using the jQuery Method, ".css".
    //
    // The jQuery Method, ".css", is used twice because using both variables 
    // within one ".css" call would make the HTML element, "#info" visibly flash. 
    $("#info > img").css(logo_1_css);
    // The HTML element using the selctor, "#info > img" is made visible by 
    // setting the "display" CSS property to "block".
    //
    // The CSS values are applied using the jQuery Method, ".css".

    $("#info > img").delay(time_value).fadeTo(time_value_2, 1, 
      function () {
        $("#info ul li").css(logo_3_css);
        $("#info ul").css(logo_4_css);
        
        $("#info ul li").each(
          function () {
            $(this).delay(time_value * 0.75).fadeTo(time_value_2, 1);
          }
        );		
			}
		); // END OF METHOD .fadeTo
    /* .fadeTo STATEMENT LOGIC ********* **************** **************** **************** 
     *  I - Fade the HTML element, using the selector, "#info > img" 
     *      from an opacity of "0" to "1".
     *    A. Only run this function after delaying for a time span of a value calculated 
     *       by multiplying the value of "time_value" by "2".
     *  II - Set the CSS values of various HTML elements to allow those elements 
     *       top appear visible.
     *    A. Make the HTML elements using the selector, "#info ul li" visible.
     *    B. Make the HTML element using the selector, "#info ul" visible.
     *  III - Fade in the individual bullet points.
     *    A. For every bullet point, 
     *       or HTML element identified by the selector, "#info ul li", fade in 
     *       that bullet point over a time span of a value calculated by multiplying 
     *       the value of "time_value" by "1.5".
     * **************** **************** **************** **************** **************** */

  } // END OF if STATEMENT

  /* if STATEMENT LOGIC ************** **************** **************** **************** 
   *  I - If the width of the browser is equal to "980px", 
   *      animate the HTML elements contained by, "#info", to conform 
   *      to a mobile browser. 
   *      from an opacity of "0" to "1".
   *  II - Otherwise, animate the HTML elements contained by, "#info", 
   *       to conform to a desktop or laptop browser.
   * 
   * **************** **************** **************** **************** **************** */

} /* **************** END OF FUNCTION "animateInfoElement" **************** */

function animateFormPanes() {
  /* **************** **************** **************** **************** **************** 
   * animateFormPanes animates the content of the HTML elements which make up 
   * the Screening, Rate, and Contact forms.
   * **************** *************** **************** **************** **************** */

  var clmn_1_selector = new String();
  // Holds the selector of the "<DIV>" element which holds the HTML content which 
  // makes up form options for the Screening, Rate, or Contact form.
  //
  // This variable holds the selector of the first "page" of a given form.
  var clmn_2_selector = new String();
  // Holds the selector of the "<DIV>" element which holds the HTML content which 
  // makes up form options for the Screening, Rate, or Contact form.
  //
  // This variable holds the selector of the second "page" of a given form.
  
  var page_1_selector = new String();
  var page_2_selector = new String();
  
  var page_1_element = new Object();
  var page_2_element = new Object();

  var section_value = new Number();
  
  var url_info_Array = new Array();

  var css_1 = new Object();
  var css_2 = new Object();

  url_info_Array = urlInfo();

  section_value = url_info_Array[0];

  page_1_selector = "#form-sctn_" + section_value.toString() + " .form-page_1";
  page_2_selector = "#form-sctn_" + section_value.toString() + " .form-page_2";
  
  page_1_element = $(page_1_selector);
  page_2_element = $(page_2_selector);

  css_1 = {
    display: "none"
  };

  css_2 = {
    display: "block"
  };

  if (section_value === 5)  {
    $(page_1_element).css(css_2);
    $(page_1_element).fadeTo(time_value, 1);
  } else  {
    if ($(page_1_element).css("opacity") === "0")  {
      $(page_2_element).fadeTo(time_value, 0);
      $(page_2_element).css(css_1);
      $(page_1_element).css(css_2);
      $(page_1_element).fadeTo(time_value, 1);
    } else {
      $(page_1_element).fadeTo(time_value, 0);
      $(page_1_element).css(css_1);
      $(page_2_element).css(css_2);
      $(page_2_element).fadeTo(time_value, 1);  
    }
  }

} /* **************** END OF FUNCTION "animateFormPanes" **************** */

function animatePageElements()  {
  /* **************** **************** **************** **************** **************** 
   * "animatePageElements" triggers a sequence of modifications of CSS values and 
   * properties and animations of various HTML elements which fire when a user 
   * activates a menu option, intrapage, or intrasection option.
   *  
   * The function has a number of purposes.
   *    1. Determine the hash of the URL, if there is one.
   *    2  Allow for the page elements to be rendered within the browser.
   *    3. Make the Sections within the page invisible while the menu is activated 
   *    4. Make the invisible sections of the page visible 
   *       after a menu option is activated.
   * **************** *************** **************** **************** **************** */
  
  var url_hash = new String();
  // Holds the String value of the URL hash
  
  
  var position_value_index_num = new Number();
  // Holds a Number representing the location within the URL hash where the 
  // Position Valueis listed.
  var bkgrnd_element_x_position = new Number();
  // Holds a Number which the product of the calculated width of the browser window 
  // and "position_value".
  // 
  // This value is used to determine the CSS value of the property, "left", 
  // of the background of a Section.
  
  var section_search_string = new String();
  // Holds a String, "#sctn_", which is searched for within the URL hash.
  var position_search_string = new String();
  // Holds a String, "pos=", which is searched for within the URL hash.
  var section_value = new String();
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value = new String();
  // Holds the String value of the Position Value listed in the URL hash.
  
  var nav_selector = new String();
  // Holds the String value of the selector, "nav".
  var wndow_selector = new String();
  // Holds the String value of the selector, "#wndow-sctn_X".
  var all_copy_selector = new String();
  // Holds the String value of the selector, "#wndow-sctn_X > .copy".
  var single_copy_selector = new String();
  // Holds the String value of the selector, "#wndow-sctn_X > .copy:nth_child(Y)".
  var headr_selector = new String();
  // Holds the String value of the selector, ".headr.sctn_X".
  var sub_nav_selector = new String();
  // Holds the String value of the selector, "#nav-sctn_X".
  var div_selector = new String();
  // Holds the String value of the selector, "div".
  //
  // Is used to define Children elements of the HTML element identified 
  // by the selector used in, "copy_selector".
  var bkgrnd_selector = new Object();
  // Holds the String value of the selector, "#bkgrnd-sctn_X".

  var nav_element = new Object();
  var nav_width = new String();

  var css_1 = new Object();
  // Holds the values for the CSS properties, "display".
  //
  // The default value is, "none".
  var css_2 = new Object();
  // Holds the values for the CSS properties, "display".
  //
  // The default value is, "block".

  var nav_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "nav".
  var cntainr_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#cntainr".
  var wndow_elements = new Array();
  // Holds the contents of the HTML elements identified by the selector, ".wndow".
  var wndow_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#wndow-sctn_X".
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

  var page_dimensions_Array = new Array();
  
  var bkgrnd_element_path = new String();

  var window_margin = new Number();
  var current_position = new Number();
  
  nav_selector = "nav";
  nav_element = $(nav_selector);

  section_search_string = "sctn_main";

  url_hash = window.location.hash;
  // window.alert("url_hash = " + url_hash);
  // window.alert("$(nav_element).css(\"left\") = " + $(nav_element).css("left"));
  if ($(nav_element).css("left") !== "0px" && 
      url_hash !== "" && 
      url_hash.indexOf(section_search_string) === -1) {
    current_position = $(window).scrollTop();

    section_value = determineCurrentSection(current_position);
// window.alert("section_value = " + section_value);
    position_search_string = "pos=";
    position_value_index_num = url_hash.indexOf(position_search_string);

    if (position_value_index_num === -1)  {
      position_value = "0";
    } else {
      position_value = url_hash.charAt(position_value_index_num + position_search_string.length);
    }
// window.alert("position_value_index_num = " + position_value_index_num);
    
    position_value = parseInt(position_value);

//  window.alert("position_value = " + position_value);

    all_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy";
    single_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 2).toString() + ")";
    // window.alert("single_copy_selector = " + single_copy_selector);
    headr_selector = ".headr.sctn_" + section_value.toString();
    div_selector = "div";
    sub_nav_selector = "#nav-sctn_" + section_value.toString();
    bkgrnd_selector = "#bkgrnd-sctn_" + section_value.toString();

    all_copy_element = $(all_copy_selector);
    single_copy_element = $(single_copy_selector);
    headr_element = $(headr_selector);
    sub_nav_element = $(sub_nav_selector);
    bkgrnd_element = $(bkgrnd_selector);

    css_1 = {
      display: "none"
    };

    css_2 = {
      display: "block"
    };
    
    page_dimensions_Array = parseWindowDimensions();

    bkgrnd_element_x_position = page_dimensions_Array[0] * position_value;

    bkgrnd_element_x_position =  "-" + bkgrnd_element_x_position.toString() + "px 0px";

    // window.alert("bkgrnd_element_x_position = " + bkgrnd_element_x_position);

    $(bkgrnd_element).css("backgroundPosition", bkgrnd_element_x_position);

    $(all_copy_element).css(css_1);
    $(single_copy_element).css(css_2);
    $(sub_nav_element).css(css_2);
    
    $(headr_element).fadeTo(time_value, 1, 
      function () {
        fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, time_value);
      }
    );
  }
} /* **************** END OF FUNCTION "animatePageElements" **************** */

function displayVerticalNav() {
  var current_position = new Number();
  var wndow_height = new Number();
  var wndow_location_margin = new Number();
  
  var css_1 = new Object();
  var css_2 = new Object();

  var prev_sctn_selector = new String();
  // Holds the CSS selector, "#prev-sctn".
  var next_sctn_selector = new String();
  // Holds the CSS selector, "#next-sctn".
  var wndow_selector = new String();
  // Holds the CSS selector, ".wndow".

  var prev_sctn_element = new Object();
  // Holds the jQuery Object for the HTML DOM element using the selector, "#prev-sctn".
  var next_sctn_element = new Object();
  // Holds the jQuery Object for the HTML DOM element using the selector, "#next-sctn".
  var wndow_elements = new Object();
  // Holds the jQuery Object for the HTML DOM elements using the selector, ".wndow".

  css_1 = {
    display: "block",
    opacity: 1
  };

  css_2 = {
    display: "none", 
    opacity: 0
  }
  
  wndow_height = $(".wndow").height();
  current_position = $(window).scrollTop();
  wndow_location_margin = 100;

  prev_sctn_selector = "#prev-sctn";
  next_sctn_selector = "#next-sctn";

  prev_sctn_element = $(prev_sctn_selector);
  next_sctn_element = $(next_sctn_selector);
  
  if (current_position === 0)  {
    $(prev_sctn_element).css(css_2);
    $(next_sctn_element).css(css_1);
  } else {
    if ($(prev_sctn_element).css("display") === "none")  {
      $(prev_sctn_element).css(css_1);
    }
    
    if (current_position >= ((wndow_height * $(".wndow").length) - wndow_height - wndow_location_margin))  {
      $(next_sctn_element).css(css_2);
      $(prev_sctn_element).css(css_1);
    } else {
      if ($(next_sctn_element).css("display") === "none") {
        $(next_sctn_element).css(css_1);
      }
    }
  }
}

function animateSctnNav(sctn_nav_element) {
  var sctn_nav_link_selector = new String();
  var sctn_nav_link_element = new Object();

  var sctn_nav_id_val = new String();
  
  var sctn_nav_background_position = new String();

  var css_1 = new Object();
  var css_2 = new Object();
  var css_3 = new Object();
  var css_4 = new Object();
  var css_5 = new Object();
  var css_6 = new Object();

  sctn_nav_id_val = $(sctn_nav_element).parent().parent().attr("id");

  sctn_nav_link_selector = "#" + sctn_nav_id_val + " > div > div";
  sctn_nav_link_element = $(sctn_nav_link_selector);

  sctn_nav_background_position = $(sctn_nav_element).css("backgroundPosition");
  
  css_1 = {
    backgroundPosition: "0px 0px"
  };

  css_2 = {
    backgroundPosition: "0px -35px"
  };

  css_3 = {
    backgroundPosition: "0px -70px"
  };

  css_4 = {
    backgroundPosition: "0px -105px"
  };

  css_5 = {
    backgroundPosition: "0px 0px", 
    backgroundColor: "#000"
  };

  css_6 = {
    backgroundPosition: "0px -210px", 
    backgroundColor: "#666"
  };

  $(sctn_nav_element).css("opacity", 0);

  if (window.navigator.userAgent.indexOf("Mobile") === -1 &&  
      window.navigator.userAgent.indexOf("Tablet") === -1)  {
    switch (sctn_nav_background_position) {
      case "0px 0px":
        $(sctn_nav_element).css(css_2);
      break;

      case "0% 0%":
        $(sctn_nav_element).css(css_2);
      break;

      case "0px -35px":
        if ($(sctn_nav_link_element).css("display") === "none") {
          $(sctn_nav_element).css(css_1);
        } else if ($(sctn_nav_link_element).css("display") === "block") {
          $(sctn_nav_element).css(css_3);

          $(sctn_nav_element).fadeTo((time_value / 3), 1);
          $(sctn_nav_element).fadeTo((time_value / 3), 0);

          $(sctn_nav_element).css(css_4);
        }      
      break;

      case "0px -105px":
        if ($(sctn_nav_link_element).css("display") === "none") {
          $(sctn_nav_element).css(css_1);
        }
      break;
    }
  } else {
    if (sctn_nav_background_position === "0px 0px" && 
        $(sctn_nav_link_element).css("display") === "block") {
      $(sctn_nav_element).css(css_6);
    } else {
      $(sctn_nav_element).css(css_5);
    }
  }
  
  $(sctn_nav_element).fadeTo((time_value / 2), 1);
}

function animateSctnNavLinks(sctn_nav_link_element) {
  if ($(sctn_nav_link_element).css("display") === "none")  {
    $(sctn_nav_link_element).css("opacity", 0);
    $(sctn_nav_link_element).css("display", "block");
    $(sctn_nav_link_element).fadeTo((time_value / 2), 1);
  } else {
    $(sctn_nav_link_element).fadeTo((time_value / 2), 1);
    $(sctn_nav_link_element).css("display", "none");    
  }
}

function animateSideNav() {
  var nav_selector = new String();
  // Holds the String value of the selector, "nav".
  var options_selector = new String();
  // Holds the String value of the selector, "#options".
  var nav_bkgrnd_selector = new String();
  // Holds the String value of the selector, "#nav-bkgrnd".
  var nav_brdr_selector = new String();
  // Holds the String value of the selector, "#nav-brdr".
  var cntainr_selector = new String();
  // Holds the String value of the selector, "#cntainr".
  var wndow_selector = new String();
  // Holds the String value of the selector, ".wndow".
  var headr_selector = new String();
  // Holds the String value of the selector, ".headr".
  var copy_selector = new String();
  // Holds the String value of the selector, ".copy".
  var info_selector = new String();
  // Holds the String value of the selector, "#info".
  var sctn_nav_selector = new String();
  // Holds the String value of the selector, ".sctn_nav".
  var prev_next_sctn_selector = new String();
  var bkgrnd_selector = new String();
  // Holds the String value of the selector, "#bkgrnd".

  var nav_element = new Object();
  // Holds the jQuery Object of the content of the HTML element 
  // identified by the selector, "nav".
  var options_element = new Object();
  // Holds the jQuery Object of the content of the HTML element 
  // identified by the selector, "#options".
  var nav_bkgrnd_element = new Object();
  // Holds the jQuery Object of the content of the HTML element 
  // identified by the selector, "#nav-bkgrnd".
  var nav_brdr_element = new Object();
  // Holds the jQuery Object of the content of the HTML element 
  // identified by the selector, "#nav-brdr".
  var cntainr_element = new Object();
  // Holds the jQuery Object of the content of the HTML element 
  // identified by the selector, "#cntainr".
  var wndow_element = new Object();
  // Holds an individual jQuery Object which is a subset 
  // of the HTML elements identified by the selector, ".wndow".
  // 
  // This Object is created while the individual elements of the 
  // ".wndow" HTML elements are being processed by the jQuery 
  // Method, ".each".
  // 
  // The CSS values of the HTML element held by "wndow_element" 
  // are changed within the ".each" Method.  
  var wndow_elements = new Array();
  // Holds all of the HTML elements within the webpage which are 
  // identified by the selector, ".wndow".
  //
  // The ".wndow" HTML elements contain ".copy" HTML elements which 
  // hold the content of the different Sections of the webpage.
  var headr_elements = new Array();
  // Holds all of the HTML elements within the webpage which are 
  // identified by the selector, ".headr".
  //
  // The ".wndow" HTML elements contain ".headr" HTML elements which 
  // hold the content of the different Sections of the webpage.
  var info_element = new Object();
  // Holds the jQuery object of the content of the HTML element 
  // identified by the selector, "#info".
  var copy_elements = new Array();
  // Holds all of the HTML elements within the webpage which are 
  // identified by the selector, ".copy".
  //
  // The ".copy" HTML elements contain the HTML content of the different 
  // Sections of the webpage.
  var bkgrnd_element = new Object();
  // Holds the jQuery object of the content of the HTML element 
  // identified by the selector, "#bkgrnd".
  var sctn_nav_element = new Object();
  // Holds the jQuery object of the content of the HTML element 
  // identified by the selector, ".sctn_nav".
  var prev_next_sctn_element = new Object();

  var nav_width = new Number();
  // Holds the numberical value of the width of the HTML element 
  // identified by the selector, "nav".
  var element_width = new Number();
  // Holds the numberical value of the calculated width of HTML elements 
  // identified by the selectors, "#cntainr" and #bkgrnd".
  // 
  // Both of the HTML elements, "#cntainr" and "#bkgrnd" have the value 
  // of their widths changed to the difference of the total width 
  // of the browser window and the width of the HTML element identified 
  // by the selector, "nav".
  var window_width = new Number();
  // Holds the numberical value of the width of the browser window.
  var wndow_width = new Number();
  
  var page_dimensions_Array = new Array();

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
  wndow_width = page_dimensions_Array[0];

if ($(nav_element).css("left") !== "0px")  {
    element_width = window_width - nav_width;
    // The difference of the width of the browser window and the value held ]
    // by "nav_width" is passed onto the variable "element_width".
    //
    // The value contained by, "element_width", is used to resize the HTML elements 
    // containing the HTML content of the entire webpage, "#cntainr", 
    // the background images of the webpage, "#bkgrnd", and the HTML elements 
    // held within each Section of the webpage, ".wndow".

    var css_1 = new Object();
    var css_2 = new Object();
    var css_3 = new Object();
    var css_4 = new Object();
    var css_5 = new Object();
    var css_6 = new Object();

    css_1 = {
      left: "0px", 
      opacity: 1
    };

    css_2 = {
      display: "block"
    };

    css_3 = {
      display: "block", 
      left: -nav_width, 
      opacity: 1
    };

    css_4 = {
      left: nav_width
    };

    css_5 = {
      width: (wndow_width - nav_width),
      left: nav_width
    };

    css_6 = {
      display: "none"
    };
    
    $(info_element).css(css_6);

    $(headr_elements).css(css_6);
    $(copy_elements).css(css_6);
    $(sctn_nav_element).css(css_6);
    
    $(options_element).css(css_3);

    $(nav_element).animate(css_1, time_value)
    $(nav_bkgrnd_element).animate(css_1, time_value);
    $(nav_brdr_element).animate(css_1, time_value);
    $(options_element).animate(css_1, time_value);

    if (wndow_width === 980 || 
        wndow_width === 1024)  {
      $(nav_element).css(css_2);
      $(nav_bkgrnd_element).css(css_2);
      $(nav_brdr_element).css(css_2);
      $(bkgrnd_element).css(css_5);
      
      css_5 = css_5 + css_6;

      $(cntainr_element).css(css_5);
      $(wndow_elements).css(css_5);
      $(prev_next_sctn_element).css(css_6);
    } else {
      $(cntainr_element).animate(css_4, time_value);
      $(bkgrnd_element).animate(css_4, time_value);
    }
  } else  {
    var css_6 = new Object();
    var css_7 = new Object();
    var css_8 = new Object();
    var css_9 = new Object();

    window_width = $(window).width();
    
    css_6 = {
      left: -nav_width
    };

    css_7 = {
      left: "0px"
    };

    css_8 = {
      display: "block"
    };

    css_9 = {
      display: "table"
    };

    $(options_element).animate(css_6, time_value, 
      function () {
        $(nav_element).animate(css_6, time_value);
        $(nav_bkgrnd_element).animate(css_6, time_value);
        $(nav_brdr_element).animate(css_6, time_value);

        if (wndow_width === 980)  {
          $(cntainr_element).css(css_8);
          $(wndow_elements).css(css_7);
          $(bkgrnd_element).css(css_8);
          $(prev_next_sctn_element).css(css_8);
        }

        $(cntainr_element).animate(css_7, time_value);
        $(bkgrnd_element).animate(css_7, time_value, 
          function () {
            $(cntainr_element).width(window_width);
            $(sctn_nav_element).width(window_width);
            $(bkgrnd_element).width(window_width);
            $(wndow_elements).width(window_width);

            $(info_element).css(css_8);
            $(headr_elements).css(css_9);
          }
        );
      }
    );
  }
}

function determineCurrentSection(current_position)  {
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

  var cntainr_element = new Object();
  var wndows_elements = new Array();

  var cntainr_selector = new String();
  // Holds the String value of the selector, "#cntainr".
  var wndows_selector = new String();
  // Holds the String value of the selector, ".wndow".

  cntainr_selector = "#cntainr";
  wndows_selector = ".wndow";

  cntainr_element = $(cntainr_selector);
  wndows_elements = $(wndows_selector);

  cntainr_height = $(cntainr_element).height();
  wndow_height = $(wndows_elements).height();

  window_margin = 0.05;

  section_value_num = Math.floor(current_position / wndow_height + window_margin); 
// window.alert("section_value_num = " + section_value_num);

  return section_value_num;
}

function setURL(current_position, url_hash)  {
  var wndow_height = new Number();
  var window_margin = new Number();
  // var current_position = new Number();

  var headr_selector = new String();
  var info_selector = new String();
  var section_value = new String();
  var position_value = new String();

  var headr_element = new Object();
  var info_element = new Object();

  var info_opacity_value = new String();

  wndow_height = $(".wndow").height(); 
  window_margin = 150;

  info_selector = "#info";
  info_element = $(info_selector);

  info_opacity_value = $(info_element).css("opacity");

  if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
      (url_hash.indexOf("sctn_main") === -1) && 
      (current_position > 1)) {
    animateInfoElement();
  }

  if ((current_position === 0) && 
      (url_hash.indexOf("sctn_main") === -1) && 
       (info_opacity_value === "0")) {
      url_hash = "#sctn_main";     
  } else {
    if (determineCurrentSection(current_position) !== Infinity) {
      section_value = "#wndow-sctn_" + determineCurrentSection(current_position);
      
      if (current_position >= (wndow_height - window_margin)) {
        position_value = determineVisibleCopyElement(section_value);  
      } else  {
        position_value = 0;
      }
      
      if (position_value === -1)  {
        position_value = 0;
      }

      url_hash = "#sctn_" + section_value.charAt(section_value.length - 1) + "?pos=" + position_value;

      if (url_hash === "#sctn_0?pos=0") {
        url_hash = "#sctn_main";
      }
    }
  }

  if (url_hash !== window.location.hash)  {
    window.location.hash = url_hash;
  }

  setTimeout(
    function () {
      displayVerticalNav();
      }, (time_value * 1.25)
  );  
}

function animateMenuOptions(option_element) {
  var css_1 = new Object();
  var css_2 = new Object();

  var time_value_1 = new Number();
  var time_value_2 = new Number();
 
  css_1 = {
    "backgroundColor": "#ccc", 
    "color": "#000"
  };

  css_2 = {
    "backgroundColor": "#000", 
    "color": "#fff"
  };

  time_value_1 = time_value / 2;
  time_value_2 = time_value / 4;
  
  if ($(option_element).css("backgroundColor") === "rgb(0, 0, 0)") {
    $(option_element).animate(css_1, time_value_1);
  } else {
    $(option_element).animate(css_2, time_value_2);
  }
}

function setPageInitialLocation()  {
  var section_value = new String();
  var position_value = new String();
  
  var wndow_selector = new String();
  var headr_selector = new String();
  var copy_selector = new String();
  
  var wndow_element = new Object();
  var headr_element = new Object();
  var copy_element = new Object();

  var wndow_height = new Number();

  var css_1 = new Object();
  var css_2 = new Object();

  scroll_to_value = new Number();

  url_hash = window.location.hash;
  // window.alert("url_hash = " + url_hash);

  section_value = url_hash.charAt(6);
  position_value = url_hash.charAt(12);
// window.alert("section_value = " + section_value);
// window.alert("position_value = " + position_value);

  css_1 = {
    display: "block"
  };

  if (section_value !== "m" &&  
      section_value !== "")  {
    section_value = parseInt(section_value);
    position_value = parseInt(position_value);
    // window.alert("section_value = " + section_value);
    wndow_selector = ".wndow";
    copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 3).toString() + ")";
    
    wndow_element = $(wndow_selector);
    copy_element = $(copy_selector);

    wndow_height = $(wndow_element).height();
    scroll_to_value = section_value * wndow_height;
  
    $(copy_element).css(css_1);
    
    $(window).scrollTop(scroll_to_value);
  } else  {
    $(window).scrollTop(0);
  }
}

function fadeCopyElements(single_copy_element, div_selector, section_value, position_value, sub_nav_element, time_value)  {
  $(single_copy_element).children(div_selector).fadeTo(time_value, 1, 
    function () {
      var form_selector = new String();
      var form_element = new Object();

      if (section_value === 3 || 
          section_value === 4)  {
        $(sub_nav_element).fadeTo(time_value, 1);
      }

      form_selector = "#form-sctn_" + section_value.toString() + " .form-page_1";
      form_element = $(form_selector);

      if ($(form_element).css("opacity") === "0" && 
          (section_value === 1 && position_value === 1 || 
           section_value === 5 && position_value === 1 || 
           section_value === 6 && position_value === 1))  {
        animateFormPanes();
      }
    }
  );
}