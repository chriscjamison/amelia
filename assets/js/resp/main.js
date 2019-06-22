/* Filename: main.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the 'One Page' template.
 */


function setDisplayType() {
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

  // An Array which will hold values which best matches the dimensions of the browser 
  // window is initialized.
  var display_dimensions_Array;

  // IF/ELSE statement which best matches the browser dimensions to the background images for 
  // the various 'window frame' elements.
  if (window_width <= 414)  { 
    // The display is likely for a smartphone.
    display_dimensions_Array = [414, 736];
  } else if (window_width > 414 && window_width <= 1024) {
    // The display is likely for a tablet device.
    display_dimensions_Array = [768, 1024];
  } else if (window_width > 1024 && window_width <= 1280) {
    // The display is a standard desktop display.
    display_dimensions_Array = [1280, 800];
  } else if (window_width > 1280 && window_width <= 1600)  {
    // The display is a 720p desktop display.
    display_dimensions_Array = [1366, 768];
  } else if (window_width > 1600)  {
    // The display is a 1080p desktop display.
    display_dimensions_Array = [1920, 1080];
  } 

  // The string contained by 'display_dimensions_Array' which refers to the dimensions of the display 
  // is returned.
  return display_dimensions_Array;

} // END of FUNCTION setDisplayType



function initializePage(time_value)  {
  /* **************** **************** **************** **************** **************** 
  * 'initializePage' initializes the rendering of the HTML elements 
  * using the selectors, 'article', '.section-window_frame', '.div-window_pane', 
  * and "#div-backgrounds".
  *   
  * This function also initializes the placement of the inter-section 
  * which uses "arrows". These arrows appear on the far-right side of the browser window 
  * within a desktop or laptop display and in the middle of the top and bottom edges 
  * of a mobile display .
  * 
  * Based upon the width and height values calculated by, 'setWindowDimensions', 
  * the values of the CSS properties, "width" and "height" are applied 
  * to the HTML elements using the selectors, "#cntainr", ".wndow", ".copy", 
  * and "#div-backgrounds". 
  * 
  * The HTML elements, using the selectors, "#div-backgrounds > div", has its, "background image", 
  * property set by a jQuery segment of code which loads images based upon the 
  * "width" and "height" values passed on to the Array, "page_dimensions_Array".
  * **************** **************** **************** **************** **************** */

  // A String variable which will hold the CSS selector referring to all content 
  // on the webpage is initialized.
  var article_selector = "";
  // A String variable which will hold the CSS selector referring to content 
  // within a given section is initialized.
  var window_frame_selector = "";
  
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector 'article' is initialized.
  var article_element = {};
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector '.section-window_frame' is initialized.
  var window_frame_elements = {};

  // The CSS selector for the HTML element, '<article>' is passed on.
  article_selector = "article";
  // The CSS selector for the HTML elements which holds the sections of content is 
  // passed on.
  window_frame_selector = ".section-window_frame";
  
  // The jQuery object which refers to the HTML element '<article>' is passed on.
  article_element = $(article_selector);
  // The jQuery object which refers to the HTML elements which hold content 
  // is passed on.
  window_frame_elements = $(window_frame_selector);
  
  // A Number variable which will hold the height of the browser window is initialized.
  var window_frame_height;
  // A Number variable which will hold the number of sections of content within 
  // the webpage is intialized.
  var num_of_sections;
  // A Number variable which will hold the height of the webpage is initialized.
  var article_height;

  // The height of the browser is passed on.
  window_frame_height = window.innerHeight;

  // The number of sections within the webpage is passed on. 
  // 
  // The number of sections is discovered by counting the number of the HTML elements 
  // '.section-window_frame' within the HTML.
  num_of_sections = $(window_frame_elements).length;

  // The total height of the webpage is calculated by multiplying the height of the 
  // browser window by the number of sections. 
  article_height = window_frame_height * num_of_sections;

  // The height of the HTML element '<article>' is set to the value of 'article_height'.
  $(article_element).innerHeight = article_height;

  // A String variable which will hold the CSS selector referring to background images 
  // is initialized.
  var background_selector = "";
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector '#div-backgrounds' is initialized.
  var background_element = {};

  // The CSS selector for the HTML element which holds the background images for the 
  // webpage is passed on.
  background_selector = "#div-backgrounds";
  // The jQuery object which refers to the HTML element which hold the background images 
  // is passed on.
  background_element = $(background_selector);

  // A Number variable which will hold an incrementer which changes value as 
  // a loop cycles which processes the individual backgrounds is initialized.
  var inc_backgrounds;

  // The incrementer used within the loop which processes the individual backgrounds 
  // is set to 0.
  inc_backgrounds = 0;

  // A String variable which will hold a CSS selector which refers to the blocks of 
  // content within the section the loop processes is initialized.
  var window_panes_selector = "";

  // The CSS selector which refers to the blocks of content within a section is passed on.
  window_panes_selector = ".div-window_pane";

  // An Array which will hold values which refer to the dimensions of the browser 
  // window is intialized.
  var display_dimensions_Array;

  // The value returned from 'setDisplayType' is passed on. The returned value best matches 
  // the width of the browser window to a background image of similar dimensions.
  display_dimensions_Array = setDisplayType();
  
  // A Number variable which will hold the number of blocks within the section the loop 
  // processing.
  var num_of_window_panes;

  // A Number variable which will hold a value which matches the width of the background 
  // image for an individual section is initialized.
  var background_width;
  // A Number variable which will hold a value which matches the height of the background 
  // image for an individual section is initialized.
  var background_height;

  // A String variable which will hold the path used by the loop to load a background 
  // image for the section the loop is processing is initialized.
  var background_image_path = "";

  // A string fragment which makes up the beginning of the path referring to the background 
  // image the loop is processing is initialized.
  background_image_path = "url('/assets/img/backgrounds/";

  // An Object variable which will hold CSS values used to format the HTML element holding 
  // the background image the loop is processing is initialized.
  var background_css = {};

  // A loop which loads the background image of each section.
  $(background_element).children().each(
    function () {
      // The number of blocks of content within the section this loop is processing is 
      // passed on.
      num_of_window_panes = $(this).children(window_panes_selector).length;

      // The width of the background image for this section is calculated by multiplying 
      // the number of blocks of content by the width of the browser window as calculated 
      // by 'setDisplayType'.
      background_width = num_of_window_panes * display_dimensions_Array[0];
      // The height of the background image for this section is passed on.
      background_height = display_dimensions_Array[1];

      // IF/ELSE statement which loads the background image for the section being processed.
      // 
      // If the current section is the first section, the string, 'main', is used withing 
      // the path, otherwise the value of 'inc_backgrounds' is used after that value is 
      // converted to a string.
      if (inc_backgrounds === 0)  {
        background_image_path = background_image_path + "main" + 
                                "/" + background_width.toString() + "x" + 
                                background_height.toString() + ".jpg')";
      } else {
        background_image_path = background_image_path + inc_backgrounds.toString() + 
                                "/" + background_width.toString() + "x" + 
                                background_height.toString() + ".jpg')";
      }

      background_css = {
        "width": background_width, 
        "height": background_height, 
        "backgroundImage": background_image_path
      };

      // The background image path and the dimensions of the HTML element holding 
      // the background image are changed.
      $(this).css(background_css);

      // The loop incrementer is increased by 1.
      inc_backgrounds++;
    }
  );

}

