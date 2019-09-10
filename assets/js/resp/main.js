/* Filename: main.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the 'One Page' template.
 */

 $(document).ready(
   function () {
     initializePage();
   }
 );

function setDisplayType() {
/* **************** **************** **************** **************** **************** 
 *  Reads the browser width and height and returns numerical values of width and height 
 *  which are used by various functions to layout HTML elements within the webpage. 
 * 
 *  Once the dimensions are gathered from the browser a numerical value is set 
 *  which corresponds with the dimensions of the background images for the 
 *  individual ".article-content" elements.
 * 
 *  The numerical values of the height and width are passed through to the place 
 *  of the function call using the Array, 'page_dimensions_Array'.
 * **************** **************** **************** **************** **************** */

  // A Number variable which will hold the width of the browser is initialized.
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

    url_hash_search_string = "=";
    
    // The values of the variables referring to the section and block of content to be 
    // viewable are passed back.
    section_value = url_hash_variables_Array[0].slice((url_hash_variables_Array[0].indexOf(url_hash_search_string) + 1));
    position_value = url_hash_variables_Array[1].slice((url_hash_variables_Array[1].indexOf(url_hash_search_string) + 1));

    // The values of the variables referring to the section and block of content are passed 
    // on to 'url_hash_variables_Array'.
    url_hash_variables_Array = [section_value, position_value];
  } else {
    // The current section is the Landing Screen. As a result, the value 
    // of 'url_hash_variables_Array[0]' is set to '0'.
    url_hash_variables_Array[0] = "0";
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
  if (url_hash_variables_Array[0] !== "main" && url_hash_variables_Array[0] !== "0") {
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
  var article_selector = "";

  // The CSS selector which refers to the section which is viewable is passed on.
  article_selector = "#article-content-" + section_value;

  // An Object variable which will hold the jQuery object which refers to the section 
  // that is viewable is initialized.
  var article_element = {};

  // The jQuery object which refers to the HTML element which holds the section 
  // that is viewable is passed on.
  article_element = $(article_selector);

  // An Object variable which will hold CSS values which make all blocks of content 
  // within the section that is now viewable invisible is initialized.
  var content_block_not_visible_css = {};
  // An Object variable which will hold CSS values which make the block of content 
  // which the variable in the URL hash refers to visible is initialized.
  var content_block_visible_css = {};

  // A CSS value which will make all blocks of content within the section that is 
  // now visible invisible is passed on.
  content_block_not_visible_css = {
    display: "none"
  };

  // All blocks of content within the section which is now visible are now made 
  // invisible.
  $(article_element).children("div").css(content_block_not_visible_css);

  // A CSS value which will make the block of content which the variable in the URL 
  // hash refers to is passed on.
  content_block_visible_css = {
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
  var content_block_selector = "";

  // The CSS selector for the block of content to be made viewable is passed on.
  content_block_selector = article_selector + " > div:nth-child(" + position_value + ")";

  // An Object variable which will hold the jQuery object which refers to the HTML element 
  // which holds the block of content to be made viewable is initialized.
  var content_block_element = {};

  // The jQuery object that refers to the HTML element which holds the block of content 
  // to be made viewable is passed on.
  content_block_element = $(content_block_selector);

  // The block of content which the variable in the URL hash refers to is made visible.
  $(content_block_element).css(content_block_visible_css);
} // END of FUNCTION 



function navigateToWindowFrame() {
  // A String variable which will hold a CSS selector which refers to the sections of 
  // content is initialized.
  var article_selector = "";
  
  // A Number variable which will hold the height of the sections of content within a 
  // section is initialized.
  var article_height;

  // The CSS selector which refers to the HTML elements which hold the sections 
  // of content is passed on.
  article_selector = "article";

  // An Object variable which will hold a jQuery object which refers to the HTML elements 
  // which hold the sections of content is initialized.
  var article_elements = {};

  // The jQuery object which refers to the HTML elements which hold the sections 
  // of content is passed on.
  article_elements = $(article_selector);
  
  // The height of a section of content is passed on.
  article_height = document.getElementsByTagName(article_selector)[0].clientHeight;

  // An Array which will hold numerical values which correspond with the section to 
  // be made viewable is initialized.
  var url_hash_viewable_values_Array = [];

  // The numerical values which correspond with the section to be made viewable 
  // are passed on.
  url_hash_viewable_values_Array = parseURLHash();

  // A Number variable which corresponds with the section to be made viewable 
  // is initialized.
  var section_value;

  // The value which corresponds with the section to be made viewable is passed on.
  section_value = url_hash_viewable_values_Array[0];

  // A Number variable which will hold an integer which matches the vertical 
  // location within the webpage of the section the hash variable refers to 
  // is initialized.
  var section_location;

  // IF/ELSE statement which sets the value of 'section_value' to 0 if the section 
  // the hash variable refers to is the landing section. Otherwise the value 
  // of 'section_value' is set to an integer which matches the section the hash 
  // variable refers to.
  if (section_value === "main") {
    section_location = 0;
  } else {
    section_location = parseInt(section_value);
  }

  //0 A Number variable which will hold the vertical location within the webpage that 
  // the brower window will navigate to is initialized.
  var page_location;

  // The vertical location within the webpage that the browser window will be navigated 
  // to is calculated by multiplying the value referring to the section to be made viewable 
  // by the height of the sections of content. That value is passed on.
  page_location = section_location * article_height;

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



function layoutBackgrounds()  {
  // A String variable which will hold the CSS selector which refers to the sections 
  // of content within the webpage is initialized.
  var all_sections_selector = "";
  // A String variable which will hold the CSS selector which refers to a  
  // section of content within the webpage is initialized.
  var section_selector = "";
  // A String variable which will hold the CSS selector which refers to the blocks of 
  // content within a section is initialized.
  var content_blocks_selector = "";
  

  
  // An Object variable which will hold a jQuery object which refers to the HTML elements 
  // containing sections of content is initialied.
  var all_sections_elements = {};
  // An Object variable which will hold a jQuery object which refers to the HTML element 
  // which hold a section of content is initialized.
  var section_element = {};
  // An Object variable which will hold a jQuery object which refers to the HTML elements 
  // which hold the blocks of content within a section is initialized.
  var content_blocks_elements = {};

  // The CSS selector which refers to all of the sections of content within the webpage 
  // is passed on.
  all_sections_selector = "article";
  // The CSS selector which refers to an individual section of content within the webpage 
  // is passed on.
  section_selector = "#article-content-";
  // The CSS selector which refers to blocks of content within a section 
  // is passed on.
  content_blocks_selector = ".div-content"

  /* // The jQuery object which refers to the HTML element which hold the background images 
  // is passed on.
  background_elements = $(background_selector); */
  // The jQuery object which refers to all of the HTML elements which hold sections 
  // of content is passed on.
  all_sections_elements = $(all_sections_selector);
/*   // The jQuery object which refers to the HTML element which hold a section 
  // of content is passed on.
  section_element = $(section_selector);
  // The jQuery object which refers to the HTML elements which hold blocks of content 
  // within a section is passed on.
  content_blocks_elements = $(content_blocks_selector);
 */

  // An Array which will hold the dimensions of the browser is initialized.
  var browser_dimensions_Array = [];
  
  // A Number variable which will hold the height of the sections of content within a 
  // section is initialized.
  var article_height;

  // The dimensions of the browser window is passed on.
  browser_dimensions_Array = setDisplayType();

  // The height of the browser window is passed on.
  article_height = browser_dimensions_Array[1];

  // A Number variable which will hold the number of sections within the 
  // webpage is initialized.
  var num_sections;

  // The number of sections within the webpage is passed on.
  num_sections = $(all_sections_elements).length;

  // A Number variable which will hold an incrementer which changes value as 
  // a loop cycles which processes the individual backgrounds is initialized.
  var inc;

  // A String variable which will hold the CSS selector for the section 
  // the loop below is processing is initialized.
  var current_section_selector = "";

  // An Object variable which will hold the jQuery object which refers to the 
  // HTML element the loop below is processing is initialized.
  var current_section_element = {};

  // An Array which will hold the number of blocks of content for each 
  // section of content is initialized.
  var num_content_blocks_Array = [];
  
  // A Number variable which will hold the number of blocks of content 
  // within a section is initialized.
  var num_content_blocks;
  
  // A FOR loop which will count the number of blocks of content within 
  // each section and then pass that value to an array.
  for (inc = 0; inc < num_sections; inc++)  {
    // IF/ELSE statement which will set the value of the suffix to 
    // 'section_selector' to 'landing' if the section is the 'landing' section.
    // Otherwise, the suffix will be set to the value of 'inc'.
    if (inc === 0) {
      current_section_selector = section_selector + "landing";
    } else {
      current_section_selector = section_selector + inc.toString();
    }

    // The jQuery object which refers to the HTML element containing 
    // a section of content is passed on.
    current_section_element = $(current_section_selector);

    // The number of blocks of content for each section is passed on.
    num_content_blocks_Array[inc] = $(current_section_element).children(content_blocks_selector).length;
  } 

  // A Number variable which will hold a value which matches the width of the background 
  // image for an individual section is initialized.
  var background_width;
  // A Number variable which will hold a value which matches the height of the background 
  // image for an individual section is initialized.
  var background_height;

  // A String variable which will hold the path used by the loop to load a background 
  // image for the section the loop is processing is initialized.
  var background_image_path = "";

  // An Object variable which will hold CSS values used to format the HTML element holding 
  // the background image the loop is processing is initialized.
  var background_css = {};

  // A String variable which will hold a prefix of the CSS selector referring to the 
  // HTML elements holding background images is initialized.
  var background_selector = "";
  // A String variable which will hold the CSS selector referring to the HTML element 
  // holding the background image the loop below is processing is initialized.
  var current_background_selector = "";

  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector '#section-backgrounds > div' is initialized.
  var current_background_element = {};

  // The CSS selector for the HTML element which holds the background images for the 
  // webpage is passed on.
  background_selector = "#div-background-";


  // A FOR loop which loads the background image of each section.
  for (inc = 0; inc < num_sections; inc++)  {
    // IF statement which will set the value of 'num_content_blocks' to 
    // the numeral '1' if no blocks of content has been found.
    if (num_content_blocks_Array[inc] === 0)  {
      num_content_blocks = 1;
    } else {
      num_content_blocks = num_content_blocks_Array[inc];
    }

    // The width of the background image for this section is calculated by multiplying 
    // the number of blocks of content by the width of the browser window as calculated 
    // by 'setDisplayType'.
    background_width = num_content_blocks * browser_dimensions_Array[0];
    // The height of the background image for this section is passed on.
    background_height = article_height;

    // A String variable which will hold the prefix of the path referring to the background 
    // image the loop is processing is initialized.
    background_image_path = "";
    
    // The prefix of the path the background images are stored is passed on.
    background_image_path = "url('/assets/img/backgrounds/";

    // IF/ELSE statement which loads the background image for the section being processed.
    // 
    // If the current section is the first section, the string, 'landing', is used withing 
    // the path, otherwise the value of 'inc_backgrounds' is used after that value is 
    // converted to a string.
    if (inc === 0)  {
      background_image_path = background_image_path + "landing" + 
                              "/" + background_width.toString() + "x" + 
                              background_height.toString() + ".jpg')";
    } else {
      background_image_path = background_image_path + inc.toString() + 
                              "/" + background_width.toString() + "x" + 
                              background_height.toString() + ".jpg')";
    }

    background_css = {
      "width": background_width, 
      "height": background_height, 
      "backgroundImage": background_image_path
    };

    // IF/ELSE statement which will set the value of the suffix to 
    // 'current_background_selector' to 'landing' if the section is the 'landing' section.
    // Otherwise, the suffix will be set to the value of 'inc'.
    if (inc === 0) {
      current_background_selector = background_selector + "landing";
    } else {
      current_background_selector = background_selector + inc.toString();
    }

    // A jQuery object which refers to the HMTL element holding the background 
    // image this loop is processing is passed on.
    current_background_element = $(current_background_selector);

    // The background image path and the dimensions of the HTML element holding 
    // the background image are changed.
    $(current_background_element).css(background_css);
  }
} // END of FUNCTION layoutBackgrounds



function setWebpageHeight() {
  // A String variable which will hold the CSS selector referring to all content 
  // on the webpage is initialized.
  var main_selector = "";
  // A String variable which will hold the CSS selector referring to content 
  // within a given section is initialized.
  var article_selector = "";
  
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector 'article' is initialized.
  var main_element = {};
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector '.article-content' is initialized.
  var article_elements = {};

  // The CSS selector for the HTML element, '<article>' is passed on.
  main_selector = "main";
  // The CSS selector for the HTML elements which holds the sections of content is 
  // passed on.
  article_selector = ".article-content";
  
  // The jQuery object which refers to the HTML element '<article>' is passed on.
  main_element = $(main_selector);
  // The jQuery object which refers to the HTML elements which hold content 
  // is passed on.
  article_elements = $(article_selector);
  
  // An Array which will hold the dimensions of the browser window is initialized.
  var browser_dimensions_Array = [];
  // A Number variable which will hold the height of the browser window is initialized.
  var article_height;
  // A Number variable which will hold the number of sections of content within 
  // the webpage is initialized.
  var num_of_sections;
  // A Number variable which will hold the height of the webpage is initialized.
  var webpage_height;

  // The dimensions of the browser are passed on.
  browser_dimensions_Array = setDisplayType();

  // The height of the browser window is passed on.
  article_height = browser_dimensions_Array[1];

  // The number of sections within the webpage is passed on. 
  // 
  // The number of sections is discovered by counting the number of the HTML elements 
  // '.article-content' within the HTML.
  num_of_sections = $(article_elements).length;

  // The total height of the webpage is calculated by multiplying the height of the 
  // browser window by the number of sections. 
  webpage_height = article_height * num_of_sections;

  // The height of the HTML element '<main>' is set to the value of 'webpage_height'.
  $(main_element).innerHeight = webpage_height;
} // END of FUNCTION setWebpageHeight



function setupArticles()  {
  // A String variable which will hold the CSS selector referring to content 
  // within a given section is initialized.
  var article_selector = "";
  
  // The CSS selector for the HTML elements which holds the sections of content is 
  // passed on.
  article_selector = ".article-content";

  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector '.article-content' is initialized.
  var article_elements = {};

  // The jQuery object which refers to the HTML elements which hold content 
  // is passed on.
  article_elements = $(article_selector);

  // A Number variable which will hold the number of 'sections' within the webpage is 
  // initialized.
  var num_of_articles;

  // The number of 'sections' is passed on.
  num_of_articles = $(article_elements).length;

  // A String variable which will hold a CSS selector which refers to the blocks of 
  // content within the section the loop processes is initialized.
  var content_blocks_selector = "";

  // The CSS selector which refers to the blocks of content within a section is passed on.
  content_blocks_selector = ".div-content";

  // A String variable which will hold the CSS selector which refers to the blocks 
  // within a 'section' is initialized.
  var current_content_block_selector = "";

  // A Number variable which will hold the number of blocks within the section the loop 
  // processing.
  var num_of_content_blocks;

  // A String variable which will hold the CSS selector which refers to the current 
  // background the following loop is processing is initialized.
  var current_article_selector = "";

  // An Object variable which will hold the jQuery object which refers to the blocks 
  // of content within the background the following loop is processing is initialized.
  var current_article_elements = {};

  // The base of the CSS selector which will refer to the 'section' the loop below 
  // is processing is passed on.
  current_article_selector = "#article-content-";

  // An Array which will hold the browser dimensions is initialized.
  var browser_dimensions_Array = [];

  // The dimensions of the browser are passed on.
  browser_dimensions_Array = setDisplayType();

  // A Number variable which will hold the width of the browser is initialized.
  var window_width;

  // The width of the browser is passed on.
  window_width = browser_dimensions_Array[0];

  // An Object variable which will hold the CSS values which refer to the dimensions 
  // a 'section' will be set to is initialized.
  var section_css = {};

  // SWITCH statement which sets the height and width of a given section based on 
  // the dimensions of the browser.
  switch (window_width) {
    case 1366:
      section_css.width = "1903px"
    break;
  }

  // A Number variable which will serve as an incrementer for the loop below 
  // is initialized.
  var i;

  // FOR loop which will set the width and height of the <article> tag referencing 
  // each 'section' and make visible the block of content within each 'section' 
  // a visitor wishes to see.
  for (i = 0; i < num_of_articles; i++)  {
    // IF/ELSE statement which sets the CSS selector of the 'section' this loop 
    // is processing. If the 'section' is the landing section, 'main' is included 
    // in the selector. Otherwise the value of 'i' is included.
    if (i === 0)  {
      current_article_selector = current_article_selector + "main";
    } else {
      current_article_selector = current_article_selector + i.toString();
    }


  }



  
}

function initializePage()  {
  /* **************** **************** **************** **************** **************** 
  * 'initializePage' initializes the rendering of the HTML elements 
  * using the selectors, 'article', '.article-content', '.div-content', 
  * and "#section-backgrounds".
  *   
  * This function also initializes the placement of the inter-section 
  * which uses "arrows". These arrows appear on the far-right side of the browser window 
  * within a desktop or laptop display and in the middle of the top and bottom edges 
  * of a mobile display .
  * 
  * Based upon the width and height values calculated by, 'setWindowDimensions', 
  * the values of the CSS properties, "width" and "height" are applied 
  * to the HTML elements using the selectors, "#cntainr", ".wndow", ".copy", 
  * and "#section-backgrounds". 
  * 
  * The HTML elements, using the selectors, "#section-backgrounds > div", has its, "background image", 
  * property set by a jQuery segment of code which loads images based upon the 
  * "width" and "height" values passed on to the Array, "page_dimensions_Array".
  * **************** **************** **************** **************** **************** */

  

  // The background images are added to the webpage.
  layoutBackgrounds();

  // The height of the webpage is set.
  setWebpageHeight();

  // The section and block of content which the values of the variables within the URL 
  // hash refer to are made viewable.
  navigateToWindowFrame();
} // END of FUNCTION initializePage