/* Filename: animations.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the multi-page template.
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
   *  parseWindowDimensions collects the width and height of the 'window' DOM element 
   *  by using the jQuery methods "$(window).width()" and "$(window).height()". 
   * 
   *  Once the dimensions are gathered from the browser a numerical value is set 
   *  which corresponds with the background images for the indiviual ".wndow" elements.
   * 
   *  The numberical values of the height and width are passed through to the place 
   *  of the function call by way of the Array - page_dimensions_Array.
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
  
  var url_pathname = new String();
  var url_href = new String();
  
  var section_char_val = new Number();
  // Holds the value that the Method, "indexOf", returns 
  // when the string, "sctn_" is searched for within, "url_hash". 
  var position_char_val = new Number();
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
  var url_section_location = new Number();

  var url_search_string_1 = new String();
  var url_search_string_2 = new String();

  var url_info_Array = new Array();
  // Holds the String values referencing the Section Value and Position Value 
  // which are contained within the string held by, "url_hash".
  //
  // The array is passed on to the functions which call, "urlInfo"; 
  // "setupPage" and "animatePageElements".

  url_search_string_1 = ".htm";
  url_search_string_2 = "index";

  url_pathname = window.location.pathname; 
  url_href = window.location.href;

  if (url_pathname.indexOf(url_search_string_1) === -1) {
  // If the URL of the webpage does not contain a filename, 
  // then this condition is triggered.
    url_section_location = 2
  } else {
  // Otherwise, if the URL of the webpage does contain a filename
  // then this condition is triggered.
    if (url_pathname.indexOf(url_search_string_2) === -1) {
    // If the webpage is not the landing page for a Section, 
    // then this condition is triggered.
      url_section_location = 12;
    } else {
    // Otherwise, if the webpage is the landing page for a section 
    // then this condition is triggered.
      url_section_location = 11;
    } // END of "if" STATEMENT which is triggered if the webpage  
      // is not the landing page for a Section.
  } // END of "if" STATEMENT that is triggered if the webpage 
    // does not ontain a filename.
  
  section_char_val = url_pathname.length - url_section_location;
  // The location of the number which represents the Section of 
  // the webpage this function is processing is the remainder of 
  // the value of "url_section_location" subtracted from the 
  // length in characters of the pathname of the URL.
  position_char_val = url_href.length - 5;
  // The location of the number which represents the viewable 
  // webpage within a section is the remainder of the number 5 
  // subtracted from the length in characters of the hash 
  // of the URL.
  section_value = url_pathname.charAt(section_char_val);
  // "section_value" collects the character stored within, "url_hash" that lies 
  // at the end of the string stored within, "section_string".
  //
  // The value of "section_value" is also the Section Value contained within 
  // the hash value contained in the URL.
  
  position_value = url_href.charAt(position_char_val);
  // "section_value" collects the character stored within, "url_hash" that lies 
  // at the end of the string stored within, "section_string".
  //
  // The value of "section_value" is also the Section Value contained within 
  // the hash value contained in the URL.

  if ((section_value === "t" || 
      section_value === "c"))  {
  // If the viewable webpage is the 'MAIN LANDING PAGE', then this 
  // condition is triggered.
    url_info_Array[0] = "main";
    url_info_Array[1] = "0";
  } else  {
  // Otherwise, if the viewable webpage is not 'MAIN LANDING PAGE', 
  // then this condition is triggered.
    url_info_Array[0] = parseInt(section_value);
    url_info_Array[1] = parseInt(position_value);
  } // END of "if" STATEMENT which is triggered if the viewable 
    // webpage is the 'MAIN LANDING PAGE'.

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
  var window_height = new Number();
  
  var info_selector = new String();
  var info_img_selector = new String();
  var next_sctn_selector = new String();
  var prev_sctn_selector = new String();
  var next_sctn_span_selector = new String();
  var prev_sctn_span_selector = new String();

  var info_element = new Object();
  var info_img_element = new Object();
  var next_sctn_element = new Object();
  var prev_sctn_element = new Object();
  var next_sctn_span_element = new Object();
  var prev_sctn_span_element = new Object();

  var next_sctn_1_css = new Object();
  var next_sctn_2_css = new Object();
  var prev_sctn_css = new Object();
  var info_1_css = new Object();
  var info_2_css = new Object();
    
  page_dimensions_Array = parseWindowDimensions();
  // The width and height of the browser window is passed to "pageDimensions_Array" by 
  // the function, "parseWindowDimensions".

  window_width = page_dimensions_Array[0];
  window_height = page_dimensions_Array[1];
  
  info_selector = "#info";
  info_img_selector = "#info > img";
  next_sctn_selector = "#next-sctn";
  prev_sctn_selector = "#prev-sctn";
  next_sctn_span_selector = "#next-sctn > span";
  prev_sctn_span_selector = "#prev-sctn > span";

  info_element = $(info_selector);
  info_img_element = $(info_img_selector);
  next_sctn_element = $(next_sctn_selector);
  prev_sctn_element = $(prev_sctn_selector);
  next_sctn_span_element = $(next_sctn_span_selector);
  prev_sctn_span_element = $(prev_sctn_span_selector);
  
  if (window_width > 980)  {
  // If the width of the browser window is greater than 980px, then this 
  // condition is triggered.
    if (window_width > 1900)  {
    // If the width of the browser window is greater than 1900, then this 
    // condition is triggered.
      var info_1_css = new Object();
      var info_2_css = new Object();
      
      var ul_selector = new String();
      var li_selector = new String();

      var ul_element = new Object();
      var li_element = new Object();

      info_1_css = {
        "width": "38.6em",
        "height": "15.2em",
        "bottom": "14em"
      };
      
      info_2_css = {
        margin: "0px"
      };

      ul_selector = "#info > ul";
      li_selector = "#info ul li:first-of-type";

      ul_element = $(ul_selector);
      li_element = $(li_selector);

      $(ul_element).css(info_2_css);
      $(li_element).css(info_2_css);
      $(info_element).css(info_1_css);
    }
    
    if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
    // If the browser is a desktop browser, then this condition 
    // is triggered.
      $(next_sctn_element).detach();
      // The down arrow prompting the user to make the menu visible 
      // is removed from the webpage.
    } // END of "if" STATEMENT that is triggered if the browser is a 
      // desktop browser.
  } else if (window_width === 980)  {
  // Otherwise, if the width of the browser window is 980px, then this 
  // condition is triggered.
    var nav_link_selector = new String();
    var nav_link_element = new Object();

    var nav_link_css = new Object();
    var info_img_css= new Object();
    
    nav_link_selector = "#nav-link";
    nav_link_element = $(nav_link_selector);
    
    nav_link_css = {
      opacity: 0
    };
    
    info_img_css = {
      "src": "/amelia/assets/img/logo/logo_phone.png", 
      "width": "480", 
      "height": "455"
    };
  
    if ($(info_element).html() !== undefined)  {
    // If the content of the HTML element using the selector, 
    // "#info", is visible, then this condition is triggered.
      $(nav_link_element).css(nav_link_css);
      $(info_img_element).attr(info_img_css);
    } // END of "if" STATEMENT which is triggered if the HTML element, 
      // "info", is visible.
  } // END OF if STATEMENT which is triggered if the browser window 
    // is greater than 980px.
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
   * which are returned to the Array, "page_dimensions_Array", the values 
   * of the CSS properties, "width" and "height" are applied to the HTML elements using 
   * the selectors, "#cntainr", ".wndow", ".copy", and "#bkgrnd". 
   * 
   * The HTML elements, using the selectors, "#bkgrnd > div", has it's, "background image", 
   * property set by a jQuery bit of code which loads images based upon the 
   * "width" and "height" values passed on to the Array, "page_dimensions_Array".
   * **************** **************** **************** **************** **************** */

  var page_dimensions_Array = new Array();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  var window_width = new Number();
  // Holds the numerical value of the width of the browser window.
  var window_height = new Number();
  // Holds the numberical value of the height of the browser window.

  var cntainr_selector = new String();
  var wndow_selector = new String();
  var copy_selector = new String();
  var bkgrnd_selector = new String();

  var cntainr_element = new Object();
  var wndow_elements = new Array();
  var copy_element = new Object();
  var bkgrnd_element = new Object();

  var section_value;
  // Holds a number that represents the Section this function 
  // processes.

  var background_width = new Number();
  
  var cntainr_css = new Object();
  var wndow_css = new Object();
  var bkgrnd_css = new Object();
  var copy_css = new Object();
  
  var inc_bkgrnd = new Number();
  // Holds a number which represents the Section Value of the background image 
  // loaded within a given HTML element using the selector, "#bkgrnd > div".
  
  var bkgrnd_div_selector = new String();
  var bkgrnd_div_element = new Object();

  var bkgrnd_img_value = new String();
  // Holds a String defining the value of the CSS property, "background-image", 
  // which is used within the jQuery Method, ".each", as it is used for 
  // the HTML elements using the selectors, "#bkgrnd > div".
  
  cssAdjustment();
  // cssAdjusment is called to render various HTML elements of the webpage 
  // within the browser window.

  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various 
  // HTML elements of the webpage within the browser window 
  // are passed on to "page_dimensions_Array".
  
  window_width = page_dimensions_Array[0];
  window_height = page_dimensions_Array[1];

  cntainr_selector = "#cntainr";
  wndow_selector = "#wndow";
  copy_selector = "#copy";
  bkgrnd_selector = "#bkgrnd";

  cntainr_element = $(cntainr_selector);
  wndow_element = $(wndow_selector);
  copy_element = $(copy_selector);
  bkgrnd_element = $(bkgrnd_selector);

  cntainr_css = {
    "width": window_width,
    "height": window_height
  };
  
  wndow_css = {
    "width": window_width,
    "height": window_height
  }; 
  
  copy_css = {
    "height": window_height
  };
  
  bkgrnd_css = {
    "width": window_width,
    "height": window_height
  };
  
  $(cntainr_element).css(cntainr_css);
  $(wndow_element).css(wndow_css);
  $(bkgrnd_element).css(bkgrnd_css);
   
  url_info_Array = urlInfo();
  // "urlInfo" passes the Section and Position values of the current webpage 
  // under processing to "url_info_Array".

  section_value = url_info_Array[0];
  
  bkgrnd_div_selector = "#bkgrnd > div";
  bkgrnd_div_element = $(bkgrnd_div_selector);

  switch (section_value)  {
  // This statement sets, "background_width", to the correct value 
  // depending on the value of "section_value".
    case "main":
      background_width = window_width;
    break;

    case 1:
      background_width = window_width * 4;
    break;

    case 2:
      background_width = window_width;
    break;

    case 3:
      background_width = window_width * 4;
    break;

    case 4:
      background_width = window_width * 4;
    break;

    case 5:
      background_width = window_width * 3;
    break;

    case 6:
      background_width = window_width * 3;
    break;
  } // END of "switch" STATEMENT

  bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                      section_value + "/" + background_width.toString() + "x" + window_height.toString() + 
                      ".jpg')";      
  // The value of "bkgrnd_img_value" is set to match the path of the 
  // background images of the various Sections.
  // 
  // The value of "bkgrnd_img_value" would be set to, 
  // "url('/amelia/assets/img/sctn/main/1920x1020.jpg')", if the dimensions of the 
  // browser were 1920x1020 and the value of "section_value" was "main".

  bkgrnd_css.backgroundImage = bkgrnd_img_value;
  // The value of "bkgrnd_img_value" is set as the value of the CSS property, 
  // "background-image". That CSS value is attached to the Object, "bkgrnd_css".

  $(bkgrnd_div_element).css(bkgrnd_css);

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
  
  var window_width = new Number();

  page_dimensions_Array = parseWindowDimensions();
  // The calculated values for the "width" and "height" of various HTML elements 
  // of the webpage within the browser window are passed on to "page_dimensions_Array".
  
  window_width = page_dimensions_Array[0];

  if (window_width === 980) {
  // If the browser is a mobile browser, this condition is triggered.
    var info_css = new Object();
    var next_sctn_css = new Object();
    var prev_sctn_css = new Object();
    var nav_sctn_css = new Object();
    var nav_css = new Object();
    var nav_link_css = new Object();
    
    info_css = {
      "top": -($("#info").height())
    };
    
    next_sctn_css = {
      height: "3em", 
      bottom: "3.56em", 
      backgroundPosition: "0px -418px"
    };
    
    nav_sctn_css = {
      display: "block"
    };
    
    nav_css = {
      display: "block"
    };

    $("#info").animate(info_css, time_value,
    // The HTML element, "#info", is removed from view.
      function () {
        $("#next-sctn").detach();
        // The down arrow prompting the user for action is removed from 
        // the webpage.
        $("nav").css(nav_css);
        // The navigation is now ready to be activated.
        $("#nav-link").fadeTo(time_value, 1);
        // The main menu icon is faded into view.
      });
  } else {
  // Otherwise, if the browser has larger dimensions, this condition 
  // is triggered.
    var logo_1_css = new Object();
    var logo_2_css = new Object();
    var logo_3_css = new Object();
    var logo_4_css = new Object();
    
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
    
    time_value_long = time_value * 2;
    time_value_short = time_value * 1.5;
    time_value_delay = time_value & 0.75;

    $("#wndow-sctn_main").show("drop", time_value_long);
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
    $("#info > img").css(logo_1_css);
    // The HTML element using the selctor, "#info > img" is made visible by 
    // setting the "display" CSS property to "block".

    $("#info > img").delay(time_value).fadeTo(time_value_short, 1,
    // After a delay of a length of time, as set by, "time_value", the logo 
    // is faded into view.
      function () {
        $("#info ul li").css(logo_3_css);
        // The HTML of the list items are made available for view.
        $("#info ul").css(logo_4_css);
        // The HTML list is now visible.
        $("#info ul li").fadeTo(time_value_short, 1);
        // The list items are now visible.		
			} 
		);
  } // END OF if STATEMENT

  $("#next-sctn").css("display", "none");
  // The down arrow prompting the user for action is now made invisible.

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

  page_1_selector = ".form-page_1";
  page_2_selector = ".form-page_2";
  
  page_1_element = $(page_1_selector);
  page_2_element = $(page_2_selector);

  css_1 = {
    display: "none"
  };

  css_2 = {
    display: "block"
  };

  url_info_Array = urlInfo();

  section_value = url_info_Array[0];

  if (section_value === 5)  {
    $(page_1_element).css(css_2);
    $(page_1_element).fadeTo(time_value, 1);
  } else  {
    if ($(page_1_element).css("opacity") === "0")  {
      $(page_2_element).fadeTo(time_value, 0);
      $(page_2_element).css(css_1);
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
  
  var section_value;
  // Holds the String value of the Section Value listed in the URL hash.
  var position_value;
  // Holds the String value of the Position Value listed in the URL hash.
  var bkgrnd_position = new Number();
  var bkgrnd_location = new Number();

  var page_dimensions_Array = new Array();
  var url_info_Array = new Array();

  
  var div_selector = new String();
  // Holds the String value of the selector, "#wndow-sctn_X".
  var copy_selector = new String();
  // Holds the String value of the selector, "#wndow-sctn_X > .copy:nth_child(Y)".
  var headr_selector = new String();
  // Holds the String value of the selector, ".headr.sctn_X".
  var sub_nav_selector = new String();
  var bkgrnd_selector = new String();

  var css_1 = new Object();
  // Holds the values for the CSS properties, "display".
  //
  // The default value is, "none".
  var css_2 = new Object();
  var css_3 = new Object();
  
  var copy_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".copy:nth-child(X)".
  var headr_element = new Object();
  // Holds the contents of the HTML element identified by the selector, ".headr.sctn_X".
  var sub_nav_element = new Object();
  // Holds the contents of the HTML element identified by the selector, "#nav-sctn_X".
  var bkgrnd_element = new Object();

  url_info_Array = urlInfo();

  section_value = url_info_Array[0];
  position_value = url_info_Array[1];

  copy_selector = "#copy";
  headr_selector = ".headr";
  sub_nav_selector = "#nav-sctn_" + section_value.toString();
  bkgrnd_selector = "#bkgrnd > div";
  div_selector = "div";

  copy_element = $(copy_selector);
  headr_element = $(headr_selector);
  sub_nav_element = $(sub_nav_selector);
  bkgrnd_element = $(bkgrnd_selector);

  page_dimensions_Array = parseWindowDimensions();
  bkgrnd_location = page_dimensions_Array[0];

  bkgrnd_position = (page_dimensions_Array[0] * position_value).toString();

  bkgrnd_position = "-" + bkgrnd_position + " 0px";

  css_1 = {
    display: "block"
  };
  
  css_2 = {
    backgroundPosition: bkgrnd_position
  };

  css_3 = {
    opacity: 0
  };

  $(copy_element).css(css_1);
  $(sub_nav_element).css(css_1);
  $(bkgrnd_element).css(css_2);

  if (section_value === 3 || 
      section_value === 4)  {
    div_selector = "div:first-of-type";
  }

  $(headr_element).fadeTo(time_value, 1, 
    function () {
      $(copy_element).children(div_selector).fadeTo(time_value, 1, 
        function () {
          if (section_value === 3 || 
              section_value === 4)  {
            $(sub_nav_element).fadeTo(time_value, 1);
          }
        }
      );

      if ((section_value === 1 && position_value === 1) || 
          (section_value === 5 && position_value === 1) || 
          (section_value === 6 && position_value === 1))  {
        animateFormPanes();      
      }
    }
  );
} /* **************** END OF FUNCTION "animatePageElements" **************** */

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
          $(sctn_nav_element).css(css_2);
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

function animateSctnNavLinks(sctn_nav_element) {
  var sctn_nav_div_selector = new String();
  var sctn_nav_div_element = new Object();

  var css_1 = new Object();
  var css_2 = new Object();
  var css_3 = new Object();

  css_1 = {
    opacity: 0
  };

  css_2 = {
    display: "block"
  };

  css_3 = {
    display: "none"
  };

  sctn_nav_div_selector = "#" + $(sctn_nav_element).parent().parent().attr("id") + " > div > div";
  // window.alert("sctn_nav_div_selector = " + sctn_nav_div_selector);
  sctn_nav_div_element = $(sctn_nav_div_selector);

  // window.alert("sctn_nav_div_selector = " + sctn_nav_div_selector);
  if ($(sctn_nav_div_element).css("display") === "none")  {
    $(sctn_nav_div_element).css(css_1);
    $(sctn_nav_div_element).css(css_2);
    $(sctn_nav_div_element).fadeTo((time_value / 2), 1);
  } else {
    $(sctn_nav_div_element).fadeTo((time_value / 2), 1);
    $(sctn_nav_div_element).css(css_3);    
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
  // Holds the Stri ng value of the selector, "#nav-brdr".
  var cntainr_selector = new String();
  // Holds the String value of the selector, "#cntainr".
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
  headr_selector = ".headr";
  copy_selector = "#copy";
  info_selector = "#info";
  sctn_nav_selector = ".sctn_nav";
  bkgrnd_selector = "#bkgrnd, #bkgrnd > div";

  nav_element = $(nav_selector);
  options_element = $(options_selector);
  nav_bkgrnd_element = $(nav_bkgrnd_selector);
  nav_brdr_element = $(nav_brdr_selector);
  cntainr_element = $(cntainr_selector);
  headr_elements = $(headr_selector);
  copy_elements = $(copy_selector);
  info_element = $(info_selector);
  sctn_nav_element = $(sctn_nav_selector);
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
    
    $(nav_element).animate(css_1, (time_value / 1.25));
    $(nav_bkgrnd_element).animate(css_1, (time_value / 1.25));
    $(nav_brdr_element).animate(css_1, (time_value / 1.25));
    
    if (wndow_width === 980 || 
        wndow_width === 1024)  {
      $(nav_element).css(css_2);
      $(nav_bkgrnd_element).css(css_2);
      $(nav_brdr_element).css(css_2);
      $(bkgrnd_element).css(css_5);
      
      css_5 = css_5 + css_6;

      $(cntainr_element).css(css_5);
      $(options_element).css(css_2);
      $(options_element).animate(css_1, (time_value / 1.25));
    } else {
      $(cntainr_element).animate(css_4, (time_value / 1.25));
      $(bkgrnd_element).animate(css_4, (time_value / 1.25), 
        function () {
          $(options_element).css(css_2);
          $(options_element).animate(css_1, (time_value / 1.25));
        });
      // 
      
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
        $(nav_element).animate(css_6, time_value / 2);
        $(nav_bkgrnd_element).animate(css_6, time_value);
        $(nav_brdr_element).animate(css_6, time_value);

        if (wndow_width === 980)  {
          $(cntainr_element).css(css_8);
          $(copy_elements).css(css_7);
          $(bkgrnd_element).css(css_8);
        }

        $(cntainr_element).animate(css_7, time_value);
        $(bkgrnd_element).animate(css_7, time_value, 
          function () {
            $(cntainr_element).width(window_width);
            $(sctn_nav_element).width(window_width);
            $(bkgrnd_element).width(window_width);
            $(copy_elements).width(window_width);

            $(sctn_nav_element).css(css_8);
            $(headr_elements).css(css_9);
          }
        );
      }
    );
  }
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