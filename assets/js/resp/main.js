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



function parseURLHash() {
  /* **************** **************** **************** **************** **************** 
   * Navigates the browser window to the location that allows for the full window 
   * of the visible section to be displayed.
   * **************** **************** **************** **************** **************** */

  // A String variable which will hold the hash located at the end of the URL is initialized.
  var url_hash = "";

  // A String variable which will hold the value within the URL hash which refers to 
  // the section of content to be viewed is initialized.
  var section_value = "";
  // A String variable which will hold the value within the URL hash which refers to 
  // the block of content within a section to be viewed is initialized.
  var position_value = "";

  // The hash located at the end of the URL is passed on.
  url_hash = window.location.hash;

  // A String variable which will hold the character which will be searched 
  // for within the value of 'url_hash' is initialized.
  var url_hash_search_string = "";

  // An Array which will hold the individual variables held within the URL hash 
  // is initialized.
  var url_hash_variables_Array = [];

  // The character which will be used to seperate the variables held within the URL 
  // has is passed on.
  url_hash_search_string = "&";

  // The variables contained within the URL hash are parsed from the string and passed on.
  url_hash_variables_Array = url_hash.split(url_hash_search_string);

  // IF/ELSE statement which passes on the values of the variables held with the URL's 
  // hash. Both the variables for the section and block of content will be passed on, 
  // unless only one variable exists.
  if (url_hash_variables_Array.length > 1) {
    // The variables which refer to the section and block of content to be viewable are  
    // passed on.
    section_value = url_hash_variables_Array[0];
    position_value = url_hash_variables_Array[1];

    // The values of the variables referring to the section and block of content to be 
    // viewable are passed back.
    section_value = section_value.slice(section_value.length - 1);
    position_value = position_value.slice(position_value.length - 1);

    // The values of the variables referring to the section and block of content are passed 
    // on to 'url_hash_variables_Array'.
    url_hash_variables_Array = [section_value, position_value];
  } else {
    // A String variable which will be searched for within the variable holding the value 
    // of the section to be viewable is initialized.
    var section_value_search_string = "";

    // The character which will be searched for within the variable holding the value 
    // of the section to be viewable is passed on.
    section_value_search_string = "=";

    // The value of the variable which refer to the section to be viewable is passed on.
    section_value = url_hash_variables_Array[0].slice(url_hash_variables_Array[0].indexOf(section_value_search_string) + 1);

    // The value of the variable which refers to the section to be viewable is passed 
    // back to 'url_hash_variables_Array'.
    url_hash_variables_Array[0] = section_value;
  }

  // The variable(s) which refer to the section to be viewable is returned.
  return url_hash_variables_Array;
} // END of FUNCTION parseURLHash



function setValueOfHashVariables()  {
  // An Array which will hold the values of the variables held within the URL hash 
  // is initialized.
  var url_hash_variables_Array = [];

  // The values of the variables held within the URL are passed on by calling the 
  // function 'parseURLHash'.
  url_hash_variables_Array = parseURLHash();

  // IF/ELSE statement which sets an integer to correspond with the section to be 
  // viewable.
  if (url_hash_variables_Array[0] === "main") {
    url_hash_variables_Array[0] = 0;
  } else {
    url_hash_variables_Array[0] = url_hash_variables_Array[0].parseInt();
  }

  // IF/ELSE statement which sets an integer to correspond to the block of content 
  // to be viewable.
  if (url_hash_variables_Array.length > 1)  {
    url_hash_variables_Array[1] = url_hash_variables_Array[1].parseInt();
  }

  // The numerical values referring to the values of the variables held within the 
  // URL has is returned.
  return url_hash_variables_Array;
} // END of FUNCTION setValueOfHashVariables



function navigateToWindowPane(url_hash_viewable_values_Array) {
  // A String variable which will hold the character which corresponds with the section 
  // that is viewable is initialized.
  var section_value = "";

  // The character which corresponds with the section that is viewable is passed on.
  section_value = url_hash_viewable_values_Array[0].toString();

  // A String variable which will hold the CSS selector which refers to the section 
  // which is viewable is initialized.
  var window_frame_selector = "";

  // The CSS selector which refers to the section which is viewable is passed on.
  window_frame_selector = "#section-window_frame-" + section_value;

  // An Object variable which will hold the jQuery object which refers to the section 
  // that is viewable is initialized.
  var window_frame_element = {};

  // The jQuery object which refers to the HTML element which holds the section 
  // that is viewable is passed on.
  window_frame_element = $(window_frame_selector);

  // An Object variable which will hold CSS values which make all blocks of content 
  // within the section that is now viewable invisible is initialized.
  var window_pane_not_visible_css = {};
  // An Object variable which will hold CSS values which make the block of content 
  // which the variable in the URL hash refers to visible is initialized.
  var window_pane_visible_css = {};

  // A CSS value which will make all blocks of content within the section that is 
  // now visible invisible is passed on.
  window_pane_not_visible_css = {
    display: "none"
  };

  // All blocks of content within the section which is now visible are now made 
  // invisible.
  $(window_frame_element).children("div").css(window_pane_not_visible_css);

  // A CSS value which will make the block of content which the variable in the URL 
  // hash refers to is passed on.
  window_pane_visible_css = {
    display: "block"
  };

  // A String variable which will hold the character which corresponds with the block 
  // of content to make viewable is initialized.
  var position_value = "";

  // The character which will hold the character which corresponds with the HTML element 
  // which holds the block of content to be made viewable is passed on.
  position_value = url_hash_viewable_values_Array[1].toString();

  // A String variable which will hold the CSS selector which refers to the block of 
  // content to be made viewable is initialized.
  var window_pane_selector = "";

  // The CSS selector for the block of content to be made viewable is passed on.
  window_pane_selector = window_frame_selector + " > div:nth-child(" + position_value + ")";

  // An Object variable which will hold the jQuery object which refers to the HTML element 
  // which holds the block of content to be made viewable is initialized.
  var window_pane_element = {};

  // The jQuery object that refers to the HTML element which holds the block of content 
  // to be made viewable is passed on.
  window_pane_element = $(window_pane_selector);

  // The block of content which the variable in the URL hash refers to is made visible.
  $(window_pane_element).css(window_pane_visible_css);
} // END of FUNCTION 



function navigateToWindowFrame() {
  // A String variable which will hold a CSS selector which refers to the sections of 
  // content is initialized.
  var window_frame_selector = "";
  
  // A Number variable which will hold the height of the sections of content within a 
  // section is initialized.
  var window_frame_height;

  // The CSS selector which refers to the HTML elements which hold the sections 
  // of content is passed on.
  window_frame_selector = ".section-window_frame";

  // An Object variable which will hold the jQuery object which refers to the HTML 
  // elements which hold the sections of content is initialized.
  var window_frame_elements = {};

  // The jQuery object which refers to the HTML elements which hold the sections 
  // of content is passed on.
  window_frame_elements = $(window_frame_selector);
  
  // The height of a section of content is passed on.
  window_frame_height = $(window_frame_elements).innerHeight;

  // An Array which will hold numerical values which correspond with the section to 
  // be made viewable is initialized.
  var url_hash_viewable_values_Array = [];

  // The numerical values which correspond with the section to be made viewable 
  // are passed on.
  url_hash_viewable_values_Array = setValueOfHashVariables();

  // A Number variable which corresponds with the section to be made viewable 
  // is initialized.
  var section_value;

  // The value which corresponds with the section to be made viewable is passed on.
  section_value = url_hash_viewable_values_Array[0];

  //0 A Number variable which will hold the vertical location within the webpage that 
  // the brower window will navigate to is initialized.
  var page_location;

  // The vertical location within the webpage that the browser window will be navigated 
  // to is calculated by multiplying the value referring to the section to be made viewable 
  // by the height of the sections of content. That value is passed on.
  page_location = section_value * window_frame_height;

  // The browser window navigates to the vertical location of the section to be made 
  // viewable.
  $(window).scrollTop(page_location);

  // IF statement which makes calls a function to make the block of content viewable 
  // if the section which was navigated to is not the top-most section.
  if (url_hash_viewable_values_Array.length > 1)  {
    // A block of content will be made viewable by calling 'navigateToWindowPane'.
    navigateToWindowPane(url_hash_viewable_values_Array);
  }
} // END of FUNCTION navigateToWindowFrame



function initializePage()  {
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

      // IF statement which sets the value of 'num_of_window_panes' to 1 if the background 
      // under processing is the top-most section.
      if (inc_backgrounds === 0)  {
        num_of_window_panes = 1;
      }

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

  // The section and block of content which the values of the variables within the URL 
  // hash refer to are made viewable.
  navigateToWindowFrame();
  
} // END of FUNCTION initializePage

