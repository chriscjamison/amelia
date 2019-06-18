/* Filename: main.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the 'One Page' template.
 */


function setWindowDimensions() {
  /* **************** **************** **************** **************** **************** 
   *  Reads the browser width and height and returns numerical values of width and height 
   *  which are used by various functions to layout HTML elements within the webpage. 
   * 
   *  Once the dimensions are gathered from the browser a numerical value is set 
   *  which corresponds with the dimensions of the background images for the 
   *  individual ".section-window_frame" elements.
   * 
   *  The numerical values of the height and width are passed through to the place 
   *  of the function call using the Array, 'page_dimensions_Array'.
   * **************** **************** **************** **************** **************** */

  // A Number variable which will hold the width of the browser is intialized.
  var window_width; 

  // The width of the browser is passed on.
  window_width = window.innerWidth;

  // A String variable which will hold the type of browser which is displaying the webpage 
  // (smartphone, tablet, standard, small_hd, full_hd).
  var display_type = "";

  // IF/ELSE statement which best matches the browser dimensions to the background images for 
  // the various 'window frame' elements.
  if (window_width <= 414)  { 
    // The display is likely for a smartphone.
    display_type = "smartphone";
  } else if (window_width > 414 && window_width <= 1024) {
    // The display is likely for a tablet device.
    display_type = "tablet";
  } else if (window_width > 1024 && window_width <= 1280) {
    // The display is a standard desktop display.
    display_type = "standard";
  } else if (window_width > 1280 && window_width <= 1600)  {
    // The display is a 720p desktop display.
    display_type = "small_hd"
  } else if (window_width > 1600)  {
    // The display is a 1080p desktop display.
    display_type = "full_hd";
  } 

  // The string contained by 'display_type' which refers to the dimensions of the display 
  // is returned.
  return display_type;

} // END of FUNCTION setWindowDimensions