//animations.js

/* **************** **************** **************** **************** **************** 
   * "animations.js" holds the various functions which modify various HTML elements 
   * and create transition type animations using those elements.
   * 
   * ~~~ LIST OF FUNCTIONS ~~~
   *  parseWindowDimensions 
   *    Collects the width and height of the browser.
   * 
   *  urlInfo 
   *    Scans the hash, as referenced by, "window.location.hash" 
   *    for the "Section" and "Position" values.
   * 
   *  cssAdjustmentCopy
   *    Adjusts the placement of various HTML elements within the browser window 
   *    based upon the parameters of the browser a visitor is viewing.
   * 
   *  setupPage 
   *    Initializes the rendering of the HTML elements within the browser window.
   *  
   *  animateInfoElement
   *    Animates the content of the HTML element defined by the selector, "#info".
   * 
   *  sortCopyElements
   *    Determines which HTML content within a given "Section" is made visible.
   *    - Uses parameter - "section_value":String
   * 
   *  animateFormPanes
   *    Animates the content of the HTML elementw which make up 
   *    the Screening, Rate, and Contact forms.
   *    - Uses parameter - "section_value":String
   * 
   *  animatePageElements
   *    Triggers a sequence of modifications of CSS values and properties and animations 
   *    of various HTML elements which fire when a user 
   *    activates a menu option, intrapage, or intrasection option.
   * **************** *************** **************** **************** **************** */
var time_value = new Number();

time_value = 400;

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
  // Holds the numerical value of the width of the visible area of the browser. 
  // Captured by the Method "$(window).width()"
  
  var window_height = new Number();
  // Holds the numerical value of the height of the visible area of the browser. 
  // Captured by the Method "$(window).height()"
  
  var page_dimensions_Array = new Array();
  // Holds the calculated values of the width and height of the visible area of the browser. 
  // The value is calculated by the Variables "window_width" and "window_height".

  window_width = $(window).width();
  // Width of the visible area of the browser is captured.
  window_height = $(window).height();
  // Height of the visible area of the browser is captured.
  
 /* **************** **************** **************** **************** **************** 
  * The following IF statement sets a calculated numerical constant based upon the 
  * width and height values of "window_width" and "window_height" 
  * **************** **************** **************** **************** **************** */

  if (window_width < 360) {
    // If the window width is roughly 360px, the browser is likely a mobile device.
    // 
    // The height of the display of a mobile device, with the width of 360px is 540px.
    //
    // The dimensions of the background image for a browser 
    // with a width of 360px are "360px x 540px" 
    page_dimensions_Array[0] = 360;
    page_dimensions_Array[1] = 540;
  } else {
    if (window_width <= 640) {
      // The width value of a background image of a modern mobile device 
      // with a width of roughly 640px is "640"
        
      page_dimensions_Array[0] = 640;
      
      if (window_height > 1000)  {
        // The height value of a modern mobile device with a typical width 
        // of "640px" is "1136"

        page_dimensions_Array[1] = 1136;
      } // END OF if STATEMENT -- height > 1000  
    } else {
      if (window_width <= 980) {
        // The width value of a typical mobile device with a browser width 
        // of roughly "980px", also the typical width of an iPad, is "980"  
          
        page_dimensions_Array[0] = 980;
        
        if (window_height > 1308)  {
        // The width value of a mobile device with a height of roughly "1300px", 
        // also the typical height of an iPad, is "1740"
          page_dimensions_Array[1] = 1740;
        } else  {
        // The width value of a mobile device with a height of roughly "1300px" is "1308"
          page_dimensions_Array[1] = 1308;  
        } // END OF if STATEMENT -- height > 1308
      } else {
        if (window_width <= 1024) {
          // The width value of a mobile device with a width of roughly "1024px", 
          // also a common width of a smartphone, is "1024"
          // 
          // The height value of a mobile device with a width of roughly "1024px", 
          // also a common width of a smartphone, is "1500"

          page_dimensions_Array[0] = 1024;
          page_dimensions_Array[1] = 1500;
        } else {
          if (window_width <= 1280) {
            // The width value of a device with a width of roughly "1280px", 
            // also a common width of a laptop display, is "1280".
            page_dimensions_Array[0] = 1280;
            
            if (window_height <= 800) {
              // The height value of a device with a width of roughly "1280px", 
              // which also has a browser height of less than "800px", is "800"
              page_dimensions_Array[1] = 800;
            } else {
              // The height value of a device with a width of roughly "1280px", 
              // which also has a browser height of greater than "800px", is "1024"
              page_dimensions_Array[1] = 1024;
            } // END OF if STATEMENT -- height <= 800
          } else  {
            if (window_width <= 1366) {
            // The width value of a device with a browser width of roughly "1366px", 
            // which also is a common browser width of a laptop display, is "1366"
            //
            // The height value of a device with a browser width of roughly "1366px", 
            // which also is a common browser width of a laptop display, is "768"
              
              page_dimensions_Array[0] = 1366;
              page_dimensions_Array[1] = 768;
            } else {
              if (window_width <= 1600) {
              // The width value of a device with a browser width of roughly "1600px", 
              // which also is a common browser width of a desktop or laptop display, is "1600"
              // 
              // The height value of a device with a browser width of roughly "1600px", 
              // which also is a common browser width of a desktop or laptop display, is "900"
                page_dimensions_Array[0] = 1600;
                page_dimensions_Array[1] = 900;
              } else {                
                // If the browser width of a display is greater than "1600px", 
                // the width value is "1900"
                // 
                // If the browser width of a display is greater than "1600px", 
                // the height value is "1020"
                page_dimensions_Array[0] = 1920;
                page_dimensions_Array[1] = 1020;
              } // END OF if STATEMENT -- <= 1600
            } // END OF if STATEMENT -- <= 1366
          } // END OF if STATEMENT -- <= 1280
        } // END OF if STATEMENT -- <= 1024 
      } // END OF if STATEMENT -- <= 980
    } // END OF if STATEMENT -- <= 640
  }  // END OF if STATEMENT -- < 360
  
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
    url_info_Array[0] = "main";
  } else  {
    url_info_Array[0] = section_value;
    url_info_Array[1] = position_value;
  } // END OF if STATEMENT

  /* if STATEMENT LOGIC ************** **************** **************** **************** 
   *  I - If the value of, "position_string", CANNOT BE FOUND WITHIN, "url_hash".
   *    A.  Store values within "url_info_Array" 
   *      1.  Set the first value of the array, "url_info_Array", to the string, "main".
   * 
   *  II - If the value of, "position_string", IS FOUND WITHIN, "url_hash".
   *    A.  Store values within, "url_info_Array".
   *      1.  Set the first value of the array, "url_info_Array", to the value
   *          of, "section_value".
   *      2.  Set the second value of the array, "url_info_Array", to the value 
   *          of, "position_value". 
   * **************** **************** **************** **************** **************** */

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
  // to "pageDimensions_Array".

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
  // Holds CSS properties and values of "width", "height", "paddingTop", "right", bottom", 
  // "backgroundImage", and "backgroundPosition".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#next-sctn".
  var next_sctn_2_css = new Object();
  // Holds CSS properties and values of "width", "height", "paddingTop", "right", "bottom", 
  // "backgroundImage, and "backgroundPosition".
  //
  // The values contained within this object, format the HTML elements using the 
  // selectors, "#prev-sctn > span" and "#next-sctn > span".
  var prev_sctn_css = new Object();
  // Holds CSS properties and values of "width", "height", "paddingTop", "right", bottom", 
  // "backgroundImage", and "backgroundPosition".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#prev-sctn".
  var info_1_css = new Object();
  // Holds the CSS properties and values of "width", "height", "bottom", and "right".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#info". 
  var info_2_css = new Object();
  // Holds the HTML attributes and values of "src", "width", and "height".
  // 
  // The values contained within this object, format the HTML element 
  // idtentified by the selector, "#info > img".
    
  page_dimensions_Array = parseWindowDimensions();
  // The width and height of the browser window is passed to "pageDimensions_Array" by 
  // the function, "parseWindowDimensions".
  
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
  
  if (page_dimensions_Array[0] >= 1260)  {
    if ((window.navigator.userAgent.indexOf("Mobile") === -1) && 
        (window.navigator.userAgent.indexOf("Tablet") === -1))  {
      next_sctn_1_css = {
        "width": "5em",
        "height": "5.3em",
        "paddingTop": "0",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px -145px"
      };
      
      prev_sctn_css = {
        "width": "5em",
        "height": "4em",
        "paddingTop": "1.3em",
        "right": "1.56em",
        "bottom": "1.56em",
        "backgroundImage": "url('/amelia/assets/img/nav/next/next-sctn.png')",
        "backgroundPosition": "0px 0px"
      };
      
      next_sctn_2_css = {
        "width": "5em",
        "height": "3.12em"
      };

      info_1_css = {
        "width": "19.5em",
        "height": "27.2em",
        "bottom": "8.75em",
        "right": "9em"
      };
    
      info_2_css = {
        "src": "/amelia/assets/img/logo/lg.png", 
        "width": "200", 
        "height": "190"
      };
      
      
      $(next_sctn_element).css(next_sctn_1_css);
      // The HTML element identified by the selector, "#next-sctn", is formatted by 
      // using the CSS properties held by the Object, "next_sctn_1_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#next-sctn", to best 
      // render within a desktop or laptop browser.
      $(prev_sctn_element).css(prev_sctn_css);
      // The HTML element identified by the selector, "#prev-sctn", is formatted by 
      // using the CSS properties held by the Object, "prev_sctn_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#prev-sctn", to best 
      // render within a desktop or laptop browser.
      $(next_sctn_span_element).css(next_sctn_2_css);  
      // The HTML elements identified by the selectors, 
      // "#prev-sctn > span" and "#next-sctn > span", are formatted by 
      // using the CSS properties held by the Object, "prev_sctn_css".
      // 
      // The Method, "css", is meant to alter the HTML elements, 
      // "#prev-sctn > span" and "#next-sctn > span" to best  
      // render within a desktop or laptop browser.
      $(prev_sctn_span_element).css(next_sctn_2_css);
      
        
      if (page_dimensions_Array[0] > 1900)  {
        $(info_element).css(info_1_css);
        // The HTML element identified by the selector, "#prev-sctn", is formatted by 
        // using the CSS properties held by the Object, "prev_sctn_css".
        // 
        // The Method, "css", is meant to alter the HTML element, "#prev-sctn", to best 
        // render within a desktop or laptop browser.

        var ul_selector = new String();
        var li_selector = new String();

        var ul_element = new Object();
        var li_element = new Object();

        var info_3_css = new Object();

        info_1_css = {
          "width": "38.6em",
          "height": "15.2em",
          "bottom": "9.2em"
        };
        
        info_3_css = {
          margin: "0px"
        };

        ul_selector = "#info > ul";
        li_selector = "#info ul li:first-of-type";

        ul_element = $(ul_selector);
        li_element = $(li_selector);

        $(ul_element).css(info_3_css);
        $(li_element).css(info_3_css);
        $(info_element).css(info_1_css);
      }
      
      $(info_img_element).attr(info_2_css);
      // The HTML element identified by the selector, "#info > img", is formatted by 
      // using the CSS properties held by the Object, "info_2_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#info > img", to best 
      // render within a desktop or laptop browser.
    
      $(prev_sctn_span_element).html("Click to view the previous section");
      // The navigation "arrow" which navigates a visitor from one section 
      // to the previous section has the text, "Click to view the previous section", 
      // added to the SPAN element holding the "arrow".
      $(next_sctn_span_element).html("Click to view the next section");
      // The navigation "arrow" which navigates a visitor from one section 
      // to the next section has the text, "Click to view the next section", 
      // added to the SPAN element holding the "arrow".
    }
  } // END OF if STATEMENT
    
  if ($(window).width() === 980)  {
    var copy_selector = new String();

    var copy_element = new Object();

    var copy_css = new Object();
    // Holds the CSS value for the property, "marginLeft", which is used to 
    // position the HTML elements using the selector, ".copy", to appear 
    // within the browser window as they were designed.
    var info_4_css = new Object();
    // Holds the CSS values for the properties, "width" and "height". 
    // 
    // These values format the HTML element using the selector, "#info".
    var info_5_css = new Object();
    // Holds the HTML attributes, "src", "width", and "height", for the 
    // HTML element using the selector, "#info > img".
    //
    // These attributes format the HTML element using the selector, "#info > img".
    var next_sctn_css = new Object();
    // Holds the CSS values for the properties, "right", "backgroundImage", 
    // and "backgroundPosition".
    //
    // These values format the HTML element using the selector, "#next-sctn".
    var nav_sctn_css = new Object();
    // Holds the CSS values for the properties, "width", "height", and "margin".
    //
    // These values format the HTML elements using the selectors, 
    // "#prev-sctn > span" and "#next-sctn > span".

    copy_selector = ".copy";

    copy_element = $(copy_selector);
    
    copy_css = {
      "marginLeft": "14.5em",
    };
        
    info_4_css = {
      "width": page_dimensions_Array[0],
      "height": (page_dimensions_Array[1] * 0.7)
    };
    
    info_5_css = {
      "src": "/amelia/assets/img/logo/logo_phone.png", 
      "width": "480", 
      "height": "455"
    };
    
    next_sctn_css = {
      right: "24.1em",
      backgroundImage: "url('/amelia/assets/img/nav/next/resp/next-sctn.png')", 
      backgroundPosition: "0px -234px"
    };

    nav_sctn_css = {
      width: "6.8em",
      height: "6.56em",
      margin: "0 auto"
    };
   
    /*$(copy_elements).each(
      function () {
        switch ($(this).parent().attr("id").charAt(11))  {
          case "1":
            copy_css.width = "48.13em";
          break;
        } // END OF SWITCH STATEMENT
        
        /* SWITCH STATEMENT LOGIC ********* **************** **************** **************** 
         *  I - If the parent of this ".copy" element is #wndow-sctn_1"
         *    A.  Set the "width" of the element to "48.13em". 
         * **************** **************** **************** **************** **************** */
        /*
        $(this).css(copy_css);
        // Sets the value of the CSS property as they are held within the Object, "copy_css".
        //
        // The current HTML element, ".copy", is positioned in the middle of the page, just below 
        // the HTML element using the selector, ".headr", for the section being cycled through.
      }
    ); // END OF .each METHOD
*/
    $(info_element).css(info_4_css);
    // Sets the CSS properties, "width" and "height", of the HTML element using the selector, "#info", 
    // using the values held by, "info_4_css".
    // 
    // The HTML element, "#info", is formatted to take up the full width of the browser window, 
    // and "70%" of the height of that browser window.
    $(info_img_element).attr(info_5_css);
    // Sets the HTML attributes, "src", "width", and "height", of the HTML element 
    // using the selector, "#info > img", using the values held by, "info_5_css".
    // 
    // The HTML element, "#info > img", is passed these attributes to display a smaller 
    // image to fit a mobile browser.

    $(next_sctn_element).css(next_sctn_css);
    // Sets the CSS properties, "right", "backgroundImage", "backgroundPosition", 
    // of the HTML element using the selector, "#next-sctn", using the values held by, 
    // "next_sctn_css".
    //
    // These values are passed to the HTML element, "#next-sctn", to format this element 
    // to function as a navigation button within a mobile browser.
    $(next_sctn_span_element, prev_sctn_span_element).css(nav_sctn_css);
    // Sets the CSS properties, "width", "height", and "margin", of the HTML elements 
    // using the selectors, "#prev-sctn > span" and "#next-sctn > span", using values 
    // held by, "nav_sctn_css".
    // 
    // The HTML elements, "#prev-sctn > span" and "#next-sctn > span", are formatted 
    // to have a smaller width and height than these elements would have within the 
    // default desktop or laptop display. The elements also are horizontally centered 
    // within the browser window.

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
  } // END OF if STATEMENT

  /* IF STATEMENT LOGIC ************** **************** **************** **************** 
   *  I - If the height of the browser has a value greater than "1260".
   *    A. If the browser is NOT a mobile browser.
   *      1. Initialize the values of the Objects which will contain CSS properties 
   *         and values meant to format various HTML elements.
   *         a. The HTML element using the selector, "#next-sctn", which also serves 
   *            as a navigation button, is formatted to fit a desktop or laptop display.
   *         b. The HTML element using the selector, "#prev-sctn", which also serves 
   *            as a navigation button, is formatted to fit a desktop or laptop display.
   *         c. The HTML elements using the selectors, 
   *            "#prev-sctn > span" and "#next-sctn > span", which holds text which 
   *            describes the function of the corresponding naviation buttons.
   *         d. The HTML element using the selector, "#info", is positioned on the page 
   *            in the place is it designed to appear within a desktop or laptop display.
   *         e. The HTML element using the selector, "#info > img", is 
   *            to format the IMG contained within the tag using the selector, "#info" 
   *            to appear on a display larger than the mobile version 
   *            which serves as the default.
   *         f. The HTML element using the selector, "#prev-sctn > span", is passed text 
   *            which describes the function of the navigation button it is associated with.
   *         g. The HTML element using the selector, "#next-sctn > span", is passed text 
   *            which describes the function of the navigation button it is associated with.
   *  II - If the width of the browser is "980".
   *    A. Initialize Objects to hold CSS properties and values.
   *    B. Cycle through every HTML element using the selector, ".copy".
   *      1. If the current HTML element has a parent HTML element which uses 
   *         the selector, "#wndow-sctn_1".
   *         a. Set the width of the current HTML element to, "48.13em".
   *      2. Set the value of the CSS property, "marginLeft", to "14.5em".
   *    C. The HTML element, "#info", is formatted to take up the width 
   *       of the browser window and 70% of the height of the browser window.
   *    D. The HTML element using the selector, "#info > img", is passed HTML attributes 
   *       which formats the element to best fit within a mobile browser.
   *    E. The HTML element using the selector, "#next-sctn", is passed CSS values 
   *       which sets the image of the navigation "arrow" to a smaller size than the 
   *       default desktop or laptop display. The HTML element is also horizontally 
   *       centered within the browser window.
   *    F. The HTML elements using the selectors, 
   *       "#prev-sctn > span" and "#next-sctn > span", are passed CSS values which format
   *       the HTML elements to a smaller width and height than the default desktop or 
   *       laptop display. These HTML elements are also horizontally centered within the 
   *       browser window.
   *    G. The HTML element using the selector, "#prev-sctn > span", 
   *       has its HTML stripped.
   *    H. The HTML element using the selector, "#next-sctn > span", has HTML 
   *       describes the navigation function of the element.
   * **************** **************** **************** **************** **************** */

  if ((page_dimensions_Array[0] === 1920) && 
      ((window.navigator.userAgent.indexOf("Mobile") !== -1) ||  
      (window.navigator.userAgent.indexOf("Tablet") !== -1))) {
    info_6_css = {
      bottom: "8.25em",
      right: "9em"
    }

    nav_css = {
      right: "54em", 
      bottom: "6em"
    };

    $(info_element).css(info_6_css);
    $(next_sctn_element, prev_sctn_element).css(nav_css);
  }

} /* **************** END OF FUNCTION "cssAdjustment" **************** */

function setupPage()  {
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
  
  var cntainr_css = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#cntainr". 
  var wndow_css = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML elements 
  // identified by the selector, ".wndow". 
  var bkgrnd_css = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML element 
  // identified by the selector, "#bkgrnd". 
  var copy_css = new Object();
  // Holds the CSS properties and values of "width" and "height".
  // 
  // The values contained within this object, format the HTML elements 
  // identified by the selector, ".copy". 
  
  var inc_bkgrnd = new Number();
  // Holds a number which represents the Section Value of the background image 
  // loaded within a given HTML element using the selector, "#bkgrnd > div".
  //  
  // "inc_bkgrnd" is used within the String held by "bkgrnd_img_value".
  
  var bkgrnd_div_selector = new String();
  // Holds a String representing the selector of the HTML element being modified by 
  // the jQuery Method, ".each".
  //
  // The HTML element is one of the many elements defined 
  // by the selector, "#bkgrnd > div".
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
  page_height = $(window).height() * $(".wndow").length;
  // The value for "page_height" is determined by multiplying the value 
  // calculated by the jQuery Method, "$(window).height()", and 
  // the number of HTML elements using the selector, ".wndow".
  
  cntainr_css = {
    "width": page_dimensions_Array[0],
    "height": page_height
  };
  
  wndow_css = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  copy_css = {
    "height": page_dimensions_Array[1]
  };
  
  bkgrnd_css = {
    "width": page_dimensions_Array[0],
    "height": page_dimensions_Array[1]
  };
  
  $("#cntainr").css(cntainr_css);
  // The values of the CSS properties, "width" and "height" are modified 
  // using the jQuery Method, ".css".
  //
  // The HTML element using the selector, "#cntainr", has it's CSS 
  // values of "width" and "height" set to equal the width 
  // of the browser window and the height of the webpage.
  $(".wndow").css(wndow_css);
  // The values of the CSS properties, "width" and "height" are modified
  // using the jQuery Method, ".css".
  //
  // The HTML elements using the selector, ".wndow", have its CSS 
  // values set to match the values of the browser width and height, 
  // as calculated by "parseWindowDimensions". 
  
  $("#bkgrnd").css(bkgrnd_css);
  // The values of the CSS properties, "width" and "height" are modified 
  // using the jQuery Method, ".css".
  //
  // The HTML element using the selector, "#bkgrnd", has its CSS 
  // values set to match the values of the browser width and height, 
  // as calculated by "parseWindowDimensions". 
   
  inc_bkgrnd = 0;
  // "inc_bkgrnd" serves as an incrementer which increases in value as 
  // the jQuery Method, ".each", cycles through the HTML elements defined 
  // by the selector, "#bkgrnd > div".

  $("#bkgrnd > div").each(
    function () {
      if (inc_bkgrnd > 0) {
        bkgrnd_div_selector = "#wndow-sctn_" + inc_bkgrnd;
        bkgrnd_div_element = $(bkgrnd_div_selector);
        
        bkgrnd_width =  page_dimensions_Array[0] * $(bkgrnd_div_element).children(".copy").length;
        bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrnd_width + "x" + page_dimensions_Array[1] + 
                            ".jpg')";      

        bkgrnd_css.backgroundImage = bkgrnd_img_value;
      } else  {
        
        bkgrnd_css.backgroundImage = "url('/amelia/assets/img/sctn/main/" + page_dimensions_Array[0] +
                                    "x" + page_dimensions_Array[1] + ".jpg')";
      } // END OF if STATEMENT
      
      $(this).css(bkgrnd_css);
      
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

  setTimeout(displayVerticalNav, time_value * 2);
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
      "height": "35px", 
      "bottom": "1.56em"
    };
    
    prev_sctn_css = {
      "height": "25px"
    };
    
    nav_sctn_css = {
      "display": "block"
    };
    
    nav_css = {
      "display": "block"
    };
    
    nav_link_css = {
      "opacity": 1
    };
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

function sortCopyElements(section_value) {

  var visible_copy_elements = new Array();
  // Holds an Array which is created when the JavaScript Method, ".split", is run on the 
  // the String value held by the JavaScript Method, "window.location.hash".
  // 
  // The Array will consist of multiple elements which include characters which respresent 
  // the ".copy" HTML element which appeared visible within the webpage before the 
  // side navigation was activated.


  /* **************** **************** **************** **************** **************** 
   * sortCopyElements determines which HTML content within a given "section" 
   * is made visible.
   * 
   * The function accepts the parameter, "section_value", which directs the function to 
   * sort through the HTML content to find the HTML element using the selector, ".copy", 
   * which holds the content which a visitor wants to view.
   * **************** *************** **************** **************** **************** */
  var wndow_selector = new String();
  // Holds a String which matches the selector of the ".copy" HTML element which is 
  // being examined by the logic of an ".each" jQuery Method.
  var copy_selector = new String();
  var copy_elements = new Array();
  var copy_element = new Object();
  var position_value = new Number();
  // Holds a Number which identifies the individual, ".copy" HTML element containing 
  // the HTML content which a visitor wants to view.
  
  var inc = new Number();
  // Holds an incrementer used by an ".each" jQuery Method.
  // 
  // "inc" is used to increment through various ".copy" HTML elements which 
  // are identified by the selector held by "wndow_selector".
  
  copy_selector = "#wndow-" + section_value + " > .copy";
  // copy_selector = "#wndow-" + section_value + " > .copy:first-of-type";

  copy_elements = $(wndow_selector);

  $(copy_elements).each(
    function () {
      copy_element = this;

      if ($(copy_element).css("display") === "none")  {
        inc++;
      }
    }
  );
  
  /* .each METHOD LOGIC ************* **************** **************** **************** 
   *  I - For every ".copy" HTML element, determine if the value 
   *      of the CSS property, "display", is "block". 
   *    A. If the CSS value of the current ".copy" HTML element is set to "block".
   *       1. Set "position_value" to the value of "inc".
   *    B. Increment the value of "inc".  
   * **************** **************** **************** **************** **************** */
  
  position_value = inc;

  url_hash = "#" + section_value + "?pos=" + position_value;
  // Assemble the URL hash which will determine which location within the page 
  // that the browser will display after "sortCopyElements" is complete.  
  window.location.hash = url_hash;
  // Set the URL hash to the value contained within, "url_hash".

  
  setTimeout(function() {displayVerticalNav();}, time_value);
  // Activates the function, "displayVerticalNav", which displays intrapage navigation.
  //
  // "displayVerticalNav" is activated after a period which is equal to the 
  // value of "time_value".

} /* **************** END OF FUNCTION "sortCopyElements" **************** */

function animateFormPanes(section_value) {
  /* **************** **************** **************** **************** **************** 
   * animateFormPanes animates the content of the HTML elements which make up 
   * the Screening, Rate, and Contact forms.
   * **************** *************** **************** **************** **************** */

  var form_id = new String();
  // Holds the selector of the HTML form which, "animateFormPanes", is modifying.
  //
  // The value held by, "form_id", is made up of the String snippet, "#form-" 
  // and the Section Value parameter which is passed to, "animateFormPanes", when 
  // a button which triggers an action of the form which is a request 
  // for more form options.
  
  var page_1_selector = new String();
  // Holds the selector of the "<DIV>" element which holds the HTML content which 
  // makes up form options for the Screening, Rate, or Contact form.
  //
  // This variable holds the selector of the first "page" of a given form.
  var page_2_selector = new String();
  // Holds the selector of the "<DIV>" element which holds the HTML content which 
  // makes up form options for the Screening, Rate, or Contact form.
  //
  // This variable holds the selector of the second "page" of a given form.
  
  form_id = "#form-" + section_value; 
  // Sets the value of, "form_id", to the combination of the String, "#form", 
  // and the value held by, "section_value".w
  //
  // This statement defines part of the selector of the form which, "animateFormPanes", 
  // will alter.

  page_1_selector = form_id + " .form-page_1";
  page_2_selector = form_id + " .form-page_2";
  // Sets the values of the selectors, held by, "page_1_selector" and "page_2_selector"
  // which are a combination of the String value held by "form_id" and the String to follow.
  //
  // The variables are used to determine which form "pane" is visible and also 
  // to animate and make visible or make invisible each form pane depending 
  // on the form pane a visitor is viewing and interacting with.

 if ($(page_1_selector).css("display") === "block")  {
    $(page_1_selector).fadeTo(time_value, 0);
    $(page_1_selector).css("display", "none");

    $(page_2_selector).css("display", "block");
    $(page_2_selector).fadeTo(time_value, 1);
  } else  {
    $(page_2_selector).fadeTo(time_value, 0);
    $(page_2_selector).css("display", "none");

    $(page_1_selector).css("display", "block");
    $(page_1_selector).fadeTo(time_value, 1);
  } // END OF if STATEMENT

  /* if STATEMENT LOGIC ************** **************** **************** **************** 
   *  I - The first form pane is visible. 
   *    A. Fade out the first form pane.
   *      1. The time span which the animation runs is equal to the value of 
   *         the variable, "time_value".
   *        a. "time_value" is a global variable which sets the amount of time an 
   *           an animation is to last.
   *    B. Make the first form pane invisible.
   *      1. The first form pane has it's CSS property, "display", set to "none".
   *    C. Make the second form pane visible.
   *      1. The second form pane has it's CSS property, "display", set to "block". 
   *    D. Fade in the second window pane
   *      1. The time span which the animation runs is equal to the value of 
   *         the variable, "time_value".    
   *  II - The second form pane is visible.
   *    A. Fade out the second form pane.
   *      1. The time span which the animation runs is equal to the value of 
   *         the variable, "time_value".
   *    B. Make the second form pane invisible.
   *      1. The second form pane has it's CSS property, "display", set to "none".
   *    C. Make the first form pane visible.
   *      1. The first form pane has it's CSS property, "display", set to "block". 
   *    D. Fade in the first window pane
   *      1. The time span which the animation runs is equal to the value of 
   *         the variable, "time_value".       
   * **************** **************** **************** **************** **************** */

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

  url_hash = window.location.hash;
  // window.alert("$(nav_element).css(\"left\") = " + $(nav_element).css("left"));
  if ($(nav_element).css("left") !== "0px" && 
      url_hash !== "" && 
      url_hash.indexOf("sctn_main") === -1) {
    current_position = $(window).scrollTop();

    section_value = determineCurrentSection(current_position);

    position_search_string = "pos=";
    position_value_index_num = url_hash.indexOf(position_search_string);
    position_value = parseInt(url_hash.charAt(position_value_index_num + position_search_string.length));

    // window.alert("position_value = " + position_value);

    all_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy";
    single_copy_selector = "#wndow-sctn_" + section_value.toString() + " > .copy:nth-child(" + (position_value + 3).toString() + ")";
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
    
    if ($(headr_element).css("opacity") === "0") {
      $(headr_element).fadeTo(time_value, 1, 
        function () {
          $(single_copy_element).children(div_selector).fadeTo(time_value, 1, 
            function () {
              if (section_value === 3 || 
                  section_value === 4)  {
                $(sub_nav_element).fadeTo(time_value, 1);
              }
            }
          );

          if ((section_value === 1 && position_value === 1) || 
              (section_value === 1 && position_value === 2) || 
              (section_value === 6 && position_value === 1) || 
              (section_value === 6 && position_value === 2))  {
            var form_section_value = new String();

            form_section_value = "sctn_" + section_value.toString();
            
            animateFormPanes(form_section_value);      
          }
        }
      );
    } else {
      $(single_copy_element).children(div_selector).fadeTo(time_value, 1, 
        function () {
          if (section_value === 3 || 
              section_value === 4)  {
            $(sub_nav_element).fadeTo(time_value, 1);
          }
        }
      );
    }
  }
} /* **************** END OF FUNCTION "animatePageElements" **************** */

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

  nav_selector = "nav";
  options_selector = "#options";
  nav_bkgrnd_selector = "#nav-bkgrnd";
  nav_brdr_selector = "#nav-brdr";
  cntainr_selector = "#cntainr";
  wndow_selector = ".wndow";
  headr_selector = ".headr";
  copy_selector = ".copy";
  info_selector = "#info";
  sctn_nav_selector = ".sctn_nav"
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
  bkgrnd_element = $(bkgrnd_selector);

  nav_width = $(nav_element).width();
  // The width of the HTML element using the selector, "#nav" is 
  // calculated using the jQuery Method, ".width();
  // 
  // That value is passed onto the variable, "nav_width".

  if ($(nav_element).css("left") !== "0px")  {
    element_width = $(window).width() - nav_width;
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
      left: "0px"
    };

    css_2 = {
      left: "0px",
      display: "block", 
      opacity: 1
    };

    css_3 = {
      left: nav_width
    };

    css_4 = {
      display: "none"
    };


    $(nav_element).css(css_1);
    // The CSS value of the property, "left", is set to "0px".
    //
    // The change in value brings the HTML element, "nav", into view.
    $(options_element).css(css_2);
    
    $(nav_bkgrnd_element).css(css_1);
    $(nav_brdr_element).css(css_1);

    $(cntainr_element).css(css_3);
    $(bkgrnd_element).css(css_3);

    $(cntainr_element).width(element_width);
    $(bkgrnd_element).width(element_width);
    $(wndow_elements).width(element_width);

    $(info_element).css(css_4);

    $(headr_elements).css(css_4);
    $(copy_elements).css(css_4);
    $(sctn_nav_element).css(css_4);

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

    $(nav_element).css(css_6);
    $(options_element).css(css_6);
    $(nav_bkgrnd_element).css(css_6);
    $(nav_brdr_element).css(css_6);

    $(cntainr_element).css(css_7);
    $(bkgrnd_element).css(css_7);

    $(cntainr_element).width(window_width);
    $(sctn_nav_element).width(window_width);
    $(bkgrnd_element).width(window_width);
    $(wndow_elements).width(window_width);

    $(info_element).css(css_8);
    $(headr_elements).css(css_9);
    
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

function setURL()  {
  var wndow_height = new Number();
  var window_margin = new Number();
  var current_position = new Number();

  var headr_selector = new String();
  var section_value = new String();
  var position_value = new String();

  var headr_element = new String();

// window.alert("displaySectionContent");
  var url_hash = new String();
  
  wndow_height = $(".wndow").height(); 
  window_margin = 150;

  current_position = $(window).scrollTop();  
  // window.alert("current_position = " + current_position);

  url_hash = window.location.hash;

  if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
      (url_hash.indexOf("sctn_main") === -1) && 
      (current_position > 1)) {
    animateInfoElement();
  }

  if ((current_position === 0) && 
      (url_hash.indexOf("sctn_main") === -1) && 
       ($("#info").css("opacity") !== "0")) {
      url_hash = "#sctn_main";
      
      setTimeout(displayVerticalNav, time_value * 2);
          
  } else {
    if (determineCurrentSection(current_position) !== Infinity) {
      section_value = "#wndow-sctn_" + determineCurrentSection(current_position);

      position_value = determineVisibleCopyElement(section_value);

      url_hash = "#sctn_" + section_value.charAt(section_value.length - 1) + "?pos=" + position_value;

      if (url_hash === "#sctn_0?pos=0") {
        url_hash = "#sctn_main";
      }
    }
  }


  // window.alert("url_hash = " + url_hash);

  if (url_hash !== window.location.hash)  {
    window.location.hash = url_hash;
  }
}
/*
  if ((current_position >= wndow_height) && 
      (current_position < wndow_height + window_margin))  {
    if ($(".headr.sctn_1").css("opacity") === "0")  {
      animatePageElements();
    }

    sortCopyElements("sctn_1");
  } 
 
  if ((current_position >= wndow_height * 2) && 
      (current_position < (wndow_height * 2) + window_margin))  {
    if ($(".headr.sctn_2").css("opacity") === "0")  {
      animatePageElements();
    }
    /*window.alert("wndow_height = " + wndow_height);
    window.alert("current_position = " + current_position);
    window.alert("window_margin = " + window_margin);
    sortCopyElements("sctn_2");
  }   

  if ((current_position >= wndow_height * 3) && 
      (current_position < (wndow_height * 3) + window_margin))  {
    if ($(".headr.sctn_3").css("opacity") === "0")  {
      animatePageElements();
    }

    sortCopyElements("sctn_3");
  } 

  if ((current_position >= wndow_height * 4) && 
      (current_position < (wndow_height * 4) + window_margin))  {
    if ($(".headr.sctn_4").css("opacity") === "0")  {
      animatePageElements();
    }

    sortCopyElements("sctn_4");
  }

  if ((current_position >= wndow_height * 5) && 
      (current_position < (wndow_height * 5) + window_margin))  {
    if ($(".headr.sctn_5").css("opacity") === "0")  {
      animatePageElements();
    }
    
    sortCopyElements("sctn_5");
  }

  if (current_position >= wndow_height * 6)  {
    if ($(".headr.sctn_6").css("opacity") === "0")  {
      animatePageElements();
    }
    
    sortCopyElements("sctn_6");
  } */

function determineVisibleCopyElement(wndow_selector)  {
  var wndow_element = new Object();
  var copy_elements = new Array();
  
  var wndow_element_copy_length = new Number();
  var visible_copy_element_val = new Number();

  var copy_selector = new String();

  var is_copy_element_invisible = new Boolean();
      
  wndow_element = $(wndow_selector);   

  wndow_element_copy_length = $(wndow_element).children(".copy").length;
  // window.alert("wndow_element_copy_length = " + wndow_element_copy_length);
  visible_copy_element_val = 0;
  is_copy_element_invisible = true;
  if (wndow_element_copy_length > 0 && 
      $(wndow_element).children(".headr").css("opacity") === "1")  {
    copy_elements = $(wndow_element).children(".copy");
    

    while (visible_copy_element_val < copy_elements.length && is_copy_element_invisible === true) {
      copy_selector = ".copy:nth-child(" + (visible_copy_element_val + 3).toString() + ")";

      if ($(wndow_element).children(copy_selector).css("display") === "none") {
        visible_copy_element_val++;
      } else  {
        is_copy_element_invisible = false;
      }
    }
  }

  return visible_copy_element_val;
}