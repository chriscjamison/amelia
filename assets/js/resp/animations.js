
//animations.js
function parseWindowDimensions()  {
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
        } 
      } else  {
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
          }
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
            // also a common width of a laptop display, is "1280"
              page_dimensions_Array[0] = 1280;
              
              if (window_height <= 800) {
              // The height value of a device with a width of roughly "1280px", 
              // which also has a browser height of less than "800px", is "800"
                page_dimensions_Array[1] = 800;
              } else {
                // The height value of a device with a width of roughly "1280px", 
                // which also has a browser height of greater than "800px", is "1024"
                page_dimensions_Array[1] = 1024;
              }
            } else {
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
                }
              }
            }
          }
        }
    }
  } 
  
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
  }

  /* IF STATEMENT LOGIC ************** **************** **************** **************** 
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
   *  urlInfo scans the hash, as referenced by, "window.location.hash",
   *  for the values for Section Value and Position Value.
   * 
   *  The values for Section Value and Position Value are used 
   *  by the functions, "setupPage" and "animatePageElements", to navigate 
   *  to the location within the webpage and display the corresponding background image 
   *  and content for the section of the page that the Section Value 
   *  and Position value reference.
   * **************** **************** **************** **************** **************** */
  
  var page_dimensions_Array = new Array();
  // Holds the width and height of the browser window.
  // 
  // The width and height values are calculated by "parseWindowDimensions" and passed on 
  // to "pageDimensions_Array".

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
        "bottom": "14.5em",
        "right": "7em"
      };
    
      info_2_css = {
        "src": "/amelia/assets/img/logo/lg.png", 
        "width": "200", 
        "height": "190"
      };
   
      $("#next-sctn").css(next_sctn_1_css);
      // The HTML element identified by the selector, "#next-sctn", is formatted by 
      // using the CSS properties held by the Object, "next_sctn_1_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#next-sctn", to best 
      // render within a desktop or laptop browser.
      $("#prev-sctn").css(prev_sctn_css);
      // The HTML element identified by the selector, "#prev-sctn", is formatted by 
      // using the CSS properties held by the Object, "prev_sctn_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#prev-sctn", to best 
      // render within a desktop or laptop browser.
      $("#prev-sctn > span, #next-sctn > span").css(next_sctn_2_css);  
      // The HTML elements identified by the selectors, 
      // "#prev-sctn > span" and "#next-sctn > span", are formatted by 
      // using the CSS properties held by the Object, "prev_sctn_css".
      // 
      // The Method, "css", is meant to alter the HTML elements, 
      // "#prev-sctn > span" and "#next-sctn > span" to best  
      // render within a desktop or laptop browser.
      $("#info").css(info_1_css);
      // The HTML element identified by the selector, "#prev-sctn", is formatted by 
      // using the CSS properties held by the Object, "prev_sctn_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#prev-sctn", to best 
      // render within a desktop or laptop browser.
      $("#info > img").attr(info_2_css);
      // The HTML element identified by the selector, "#info > img", is formatted by 
      // using the CSS properties held by the Object, "info_2_css".
      // 
      // The Method, "css", is meant to alter the HTML element, "#info > img", to best 
      // render within a desktop or laptop browser.
    
      $("#prev-sctn > span").html("Click to view the previous section");
      // The navigation "arrow" which navigates a visitor from one section 
      // to the previous section has the text, "Click to view the previous section", 
      // added to the SPAN element holding the "arrow".
      $("#next-sctn > span").html("Click to view the next section");
      // The navigation "arrow" which navigates a visitor from one section 
      // to the next section has the text, "Click to view the next section", 
      // added to the SPAN element holding the "arrow".
    }
  }
    
  if ($(window).width() === 980)  {
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

    nav_sctn_css =  {
      width: "6.8em",
      height: "6.56em",
      margin: "0 auto"
    };
   
    $(".copy").each(
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
        
        $(this).css(copy_css);
        // Sets the value of the CSS property as they are held within the Object, "copy_css".
        //
        // The current HTML element, ".copy", is positioned in the middle of the page, just below 
        // the HTML element using the selector, ".headr", for the section being cycled through.
      }
    ); // END OF Method ".each"

    $("#info").css(info_4_css);
    // Sets the CSS properties, "width" and "height", of the HTML element using the selector, "#info", 
    // using the values held by, "info_4_css".
    // 
    // The HTML element, "#info", is formatted to take up the full width of the browser window, 
    // and "70%" of the height of that browser window.
    $("#info > img").attr(info_5_css);
    // Sets the HTML attributes, "src", "width", and "height", of the HTML element 
    // using the selector, "#info > img", using the values held by, "info_5_css".
    // 
    // The HTML element, "#info > img", is passed these attributes to display a smaller 
    // image to fit a mobile browser.

    $("#next-sctn").css(next_sctn_css);
    // Sets the CSS properties, "right", "backgroundImage", "backgroundPosition", 
    // of the HTML element using the selector, "#next-sctn", using the values held by, 
    // "next_sctn_css".
    //
    // These values are passed to the HTML element, "#next-sctn", to format this element 
    // to function as a navigation button within a mobile browser.
    $("#prev-sctn > span, #next-sctn > span").css(nav_sctn_css);
    // Sets the CSS properties, "width", "height", and "margin", of the HTML elements 
    // using the selectors, "#prev-sctn > span" and "#next-sctn > span", using values 
    // held by, "nav_sctn_css".
    // 
    // The HTML elements, "#prev-sctn > span" and "#next-sctn > span", are formatted 
    // to have a smaller width and height than these elements would have within the 
    // default desktop or laptop display. The elements also are horizontally centered 
    // within the browser window.

    $("#prev-sctn > span").html("");
    // Removes the HTML from the HTML element using the selector, "#prev-sctn > span".
    //
    // The above HTML element has text to describe the navigation function of this element.
    // The Method, ".html", strips that HTML.
    $("#next-sctn > span").html("Press to view the next section");
    // Sets the HTML from the HTML element using the selector, "#next-sctn > span"
    // to "Press to view the next section".
    //
    // The above HTML element lacks text to describe the navigation function of this element.
    // The Method, ".html", adds the descriptive text, "Press to view the next section", 
    // to the HTML element. 
  } // END OF IF STATEMENT

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
  
  var bkgrnd_1_selector = new String();
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
        bkgrnd_1_selector = "#wndow-sctn_" + inc_bkgrnd;
        
        bkgrnd_width =  page_dimensions_Array[0] * $(bkgrnd_1_selector).children(".copy").length;
        bkgrnd_img_value = "url('/amelia/assets/img/sctn/" + 
                            inc_bkgrnd + "/" + bkgrnd_width + "x" + page_dimensions_Array[1] + 
                            ".jpg')";      

        bkgrnd_css.backgroundImage = bkgrnd_img_value;
      } else  {
        
        bkgrnd_css.backgroundImage = "url('/amelia/assets/img/sctn/main/" + page_dimensions_Array[0] +
                                    "x" + page_dimensions_Array[1] + ".jpg')";
      }
      
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

} // END OF FUNCTION setupPage


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
    
    $("#info").animate(info_css);
    // Animates the HTML element identified by the selector, "#info" 
    // from it's initial "visible" position and "hides" it from view 
    // by scrolling "#info" up and out of view. 
    // 
    // The animation is initiated by the jQuery Method, ".animate".
    $("#next-sctn > span").html("");
    // The description above the "arrow", held by the HTML element 
    // identified by the selector, "#next-sctn > span", is stripped 
    // 
    // The text is stripped using the jQuery Method, ".html".
    $("#next-sctn").css(next_sctn_css);
    // The "arrow", which is used to lead the visitor to the next section 
    // is placed near the center-bottom of the browser window. 
    // Also, the size of the "arrow" is decreased.
    //
    // The position size are changed using the jQuery Method, ".css".
  
    $("#prev-sctn").css(next_sctn_height_css);
    // The "arrow", which is used to lead the visitor to the previous section 
    // has it's size decreased.
    
    $("#prev-sctn > span, #next-sctn > span").animate(nav_sctn_css);
    // Fades the HTML elements which holds "arrows" which serve as links 
    // to intrapage navigation are brought into view.
    // 
    // The elements brought into view are animated using the 
    // jQuery Method, ".animate".    
    $("nav, #nav-bkgrnd, #nav-brdr").css(nav_css);
    // The intrapage navigation HTML elements are made available for view.
    // 
    // The elements brought into view are made visible using the 
    // jQuery Method, ".css".
    $("#nav-link").animate(nav_link_css, 800);
    // The "hamburger navigation icon" is the only element will be viewable.
    // 
    // The "icon" is made viewable by using the jQuery Method, ".animate".		
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
} // END OF FUNCTION animateInfoElement

function sortCopyElements(section_value) {
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
  
  var position_value = new Number();
  // Holds a Number which identifies the individual, ".copy" HTML element containing 
  // the HTML content which a visitor wants to view.
  
  var inc = new Number();
  // Holds an incrementer used by an ".each" jQuery Method.
  // 
  // "inc" is used to increment through various ".copy" HTML elements which 
  // are identified by the selector held by "wndow_selector".
  
  if (section_value === null)  {
    $(".copy").each(
      function () {
        if ($(this).css("display") === "block") {
          position_value = inc;
        }
        
        inc++;
      }
    );
    
    /* .each METHOD LOGIC ************* **************** **************** **************** 
    *  I - For every ".copy" HTML element, determine if the value 
    *      of the CSS property, "display", is "block". 
    *    A. If the CSS value of the current ".copy" HTML element is set to "block".
    *       1. Set "position_value" to the value of "inc".
    *    B. Increment the value of "inc".  
    * **************** **************** **************** **************** **************** */
  } else {
    wndow_selector = "#wndow-" + section_value + " > .copy";
    
    $(wndow_selector).each(
      function () {
        if ($(this).css("display") === "block") {
          position_value = inc;
        }
        
        inc++;
      }
    );
    
    url_hash = "#" + sectionValue + "?pos=" + positionValue;
    
    window.location.hash = url_hash;
  }
  
  setTimeout(function() {displayVerticalNav();}, time_value);
}

function animateFormPanes(section_value) {
  form_id = "#form-" + section_value;

  page_1_selector = form_id + " .form-page_1";
  page_2_selector = form_id + " .form-page_2";

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
  }
}

function animatePageElements()  {
  var url_hash = window.location.hash;

  if (url_hash.indexOf("base") > -1) {
    var url_hash_info_Array = new Array();

    url_hash_info_Array = urlInfo();

    if (url_hash_info_Array.length === 2) {      
      var section_value = new String();
      var position_value = new String();

      var wndow_selector = new String();
      var wndows_selector = new String();
      var copy_element_selector = new String();
      var sctn_nav_selector = new String();
      var bkgrnd_selector = new String();
      var nav_link_selector = new String();
      var info_selector = new String();

      var bkgrnd_position_x = new String();

      var blok_elements = new Object();
      var page_dimensions_Array = new Array();

      var scroll_value = new Number();

      section_value = url_hash_info_Array[0];
      position_value = url_hash_info_Array[1];   
      
      wndow_selector = "#wndow-sctn_" + section_value;
      copy_element_selector = ".copy:nth-child(" + (position_value + 3) + ")";
      headr_selector = ".headr.sctn_" + section_value;
      bkgrnd_selector = "#bkgrnd-sctn_" + section_value;
      nav_link_selector = "#nav-link";
      wndows_selctor = ".wndow";

      blok_elements = $(wndow_selector).children(copy_element_selector).children("div");

      scroll_value = section_value * $(wndows_selector).height();
      
      $(wndow_selector).css(".copy").css("display", "none");
      $(wndow_selector).children(copy_element_selector).css("display", "block");
      $(headr_selector).fadeTo((time_value * 1.5), 1);
      
      blok_elements.each(
        function () {
          $(this).fadeTo(time_value, 1);
        }
      );

      if (section_value === 3 || section_value === 4) {
        sctn_nav_selector = "#nav-sctn_" + section_value;

        $(sctn_nav_selector).fadeTo(time_value, 1);
      }      
      
      $(bkgrnd_selector).fadeTo(time_value, 0);      
      
      page_dimensions_Array = parseWindowDimensions();

      bkgrnd_position_x = "\"" + -(page_dimensions_Array[0] * position_value) + " 0px" + "\"";

      $(bkgrnd_selector).css("backgroundPosition", bkgrnd_position_x);

      $(bkgrnd_selector).css("opacity", 1);

      if (url_hash !== "" && url_hash != "#sctn_main")  {
        $(nav_link_selector).fadeTo(time_value, 1);
      }
    } else {
      if ($(info_selector).css("opacity") === "0" && page_dimensions_Array[0] !== 980) {
        animateInfoElement();
      }
    }
  } else  {
    var nav_1_selector = new String();
    var nav_2_selector = new String();
    var nav_3_selector = new String();
    var nav_4_selector = new String();
    var nav_5_selector = new String();

    var options_1_selector = new String();
    var options_2_selctor = new String();
    var options_3_selector = new String();

    var wndows_selector = new String();
    var wndow_selector = new String();
    var cntainr_selector = new String();
    var bkgrnd_selector = new String();
    var sctn_nav_selector = new String();
    var headr_selector = new String();
    var next_nav_selector = new String();

    var copy_values_string = new String();
    var bkgrnd_value_string = new String();

    var window_height = new Number();
    var window_width = new Number();
    var nav_width = new Number();
    var copy_elements_length = new Number();

    var inc_1 = new Number();

    var copy_elements_url_Array = new Array();
    var copy_elements_Array = new Array();

    var css_1 = new Object(); // "opacity": 0, "width": -($("#nav").width())
    var css_2 = new Object(); // "display": "none"
    var css_3 = new Object(); // "left": -($("#nav").width())
    var css_4 = new Object(); // "display": "block"
    var css_5 = new Object(); // "width": $(window).width()
    var css_6 = new Object(); // "display": "table"
    var css_7 = new Object(); // "width": $(window).width(), "left": "0px"
    var css_8 = new Object(); // "left": "0px"
    var css_9 = new Object(); // "left": "0px", "opacity", 1
    var css_10 = new Object(); // "width": $(window).width() - $("#nav").width(), "left": $("#nav").width()
    var css_11 = new Object(); // "width": $(window).width() - $("#nav").width()

    window_height = $(window).height();
    window_width = $(window).width();
    
    nav_width = -($(next_nav_selector).width());
    nav_position = window_width - nav_width;

    nav_1_selector = "#nav";
    nav_2_selector = "#nav-bkgrnd";
    nav_3_selector = "#nav-brdr";
    nav_4_selector = nav_1_selector + ", " + nav_2_selector;
    nav_5_selector = nav_1_selector + ", " + nav_2_selector + ", " + nav_3_selector;

    options_1_selector = "#options";
    options_2_selector = "#options > span";
    options_3_selector = options_1_selector + ", " + options_2_selector;
    
    cntainr_selector = "#cntainr";
    wndow_selector = ".wndow";
    bkgrnd_selector = "#bkgrnd, #bkgrnd > div";
    sctn_nav_selector = ".sctn_nav";
    headr_selector = ".headr";
    next_nav_selector = "#prev-sctn, #next-sctn";
    multiple_selector = "#info, .copy, .headr, .sctn_nav, #prev-sctn, #next-sctn";

    bkgrnd_value_string = "bkgrnd=nav";
    copy_values_string = "&copyValues";
    
    css_1 = {
      "opacity": 0,
      "width": nav_width
    };

    css_2 = {
      "display": "none"
    };

    css_3 = {
      "left": nav_width
    };

    css_4 = {
      "display": "block"
    };

    css_5 = {
      "width": window_width
    };

    css_6 = {
      "display": "table"
    };

    css_7 = {
      "width": window_width, 
      "left": "0px"
    };

    css_8 = {
      "left": "0px"
    };

    css_9 = {
      "left": "0px", 
      "opacity": 1
    };

    css_10 = {
      "width": nav_position, 
      "left": nav_width
    };
    
    css_11 = {
      "width": nav_position
    };

    if ($(nav_1_selector).css("left") === "0px")  {
    
      $(nav_4_selector).css("height", window_height);
      
      if ($(nav_selector).css("left") === "0px")  {
        $(options_1_selector).animate(css_1, 
          function () {          
            $(options_3_selector).css(css_2);
            $(nav_5_selector).animate(css_3);
          }
        );
      }

      copy_elements_url_Array = url_hash.split("=");
      
      copy_elements_length = copy_elements_url_Array.length;

      copy_elements_Array = copy_elements_url_Array[copy_elements_length - 1];

      for (inc_1 = 0; inc_1 < copy_elements_length; inc_1++)  {
        wndows_selector = "#wndow-sctn_" + (inc_1 + 1);

        if (!isNan(copy_elements_Array[inc_1 * 1])) {
          copy_selector = ".copy:nth-child(" + ((copy_elements_url_Array[inc_1 * 1]) + 3) + ")";
        
          $(wndows_selector).children(copy_selector).css(css_4);
        }
      }

      $(wndow_selector).css(css_5);
      $(cntainr_selector, bkgrnd_selector).css(css_7);
      $(sctn_nav_selector, next_nav_selector).css(css_4);
      $(headr_selector).css(css_6);

      if (url_hash.indexOf(copy_values_string) === -1) {
        window.location.hash = "#sctn_nav?bkgrnd=base";
      } else {
        url_nav_value = url_hash;

        if (url_hash.indexOf(bkgrnd_value_string) > -1)  {
          url_nav_value = url_nav_value.replace("nav", "base");
        }

        window.location.hash = url_nav_value.substring(1, url_hash.indexOf(copy_values_string));
      }
    } else  {
      var nav_transition = time_value / 1.25;

      var copy_1_selector = new String();
      var copy_2_selector = new String();

      copy_1_selector = ".copy";

      copy_elements_Array = $(".copy");

      $(nav_5_selector).animate(css_8, nav_transition, 
        function () {
          $(options_3_selector).css(css_4);
          $(options_1_selector).css(css_9);
        }
      );

      $(wndow_selector).each(
        function () {
          inc_1 = 0;
          copy_2_selector = ".copy:nth-child(3)";
          copy_elements_length = $(this).children(copy_1_selector).length;

          if ($(this).children(copy_2_selector).css("display") === "none") {
            while (inc_1 < copy_elements_length && 
                    $(this).children(copy_2_selector).css("display") === "none") {
              inc_1++;
              copy_2_selector = ".copy:nth-child(" + (inc_1 + 3) + ")";
            }
          } else  {
            if ($(this).attr("id") === "wndow-sctn_1") {
              if (inc_1 === 0)  {
                copy_values_string = copy_values_string + "0";
              } else  {
                copy_values_string = copy_values_string + (inc_1--);
              }
            } else  {
              if (inc_1 === 0)  {
                copy_values_string = copy_values_string + ", 0";
              } else  {
                copy_values_string = copy_values_string + (inc_1--);
              }
            }
          }

          if (inc_1 === copy_elements_length) {
            if ($(this).attr("id") === "wndow-sctn_1") {
              copy_values_string = copy_values_string + "-";
            } else  {
              copy_values_string = copy_values_string + ",-";
            }
          } else  {
            if (inc_1 > 0)  {
              copy_values_string = copy_values_string + inc_1;
            } else  {
              copy_values_string = copy_values_string + "," + inc_1;
            }
          }
        }
      );
    }

    $(cntainr_selector, bkgrnd_selector).css(css_10);
    $(wndows_selector).css(css_11);
    $(multiple_selector).css(css_2);

    if (url_hash.indexOf("?") === -1) {
      copy_values_string = copy_values_string.replace("&", "?");
    }

    setTimeout(function () {window.location.hash = copy_values_string;}, nav_transition);
  }
  
  $(window).scrollTop(scroll_value);
  
  setTimeout(displayVerticalNav, time_value * 1.5);
}