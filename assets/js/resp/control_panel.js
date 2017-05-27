/* Filename: forms.js
 *  Contains JavaScript statements and functions which are triggered by interacting 
 *  with HTML DOM elements of the webpage.
 * 
 *  --- NOTE! ---
 *  + JavaScript functions which control the layout and  physical appearance of the webpage 
 *    are contained within, 'animations.js'.
 *  + JavaScript functions which assist the page with navigation are located within, 'nav.js'.
 *  + JavaScript functions which are called when a user interacts with a form located 
 *    on the webpage are contained within, 'forms.js'.
 *    
 * ******************************************************************************************** */

var time_value = new Number();
// Holds the length of time, in miliseconds, that animations are to take place.
var window_margin = new Number();
// The distance in pixels that the browser window can lie either above or below 
// a Section and still be considered viewing an individual Section.

var url_string = new String();
var url_hash = new String();

var rate_value_search_string = new String();
// Holds a String which corresponds with a GET variable that appears in the URL 
// once the form, 'FORM TYPE #2', has responded to the form submission.

time_value = 500;
window_margin = 150;

url_string = window.location.href;
url_hash = window.location.hash;

rate_value_search_string = "rateValue=";

$(document).ready(
  function () {
    if (url_string.indexOf(rate_value_search_string) !== -1) {      
    // If the GET variable, "rateValue", appears in the URL, this 
    // condition is triggered.
      setRateValue(rate_value_search_string);
    }

    var form_selectors = new String();

    form_selectors = "#form-sctn_6 .form-page_1";

    if (url_hash === "#sctn_6?pos=1" && 
        url_hash.indexOf("copyValues") === -1)  {
    // If 'FORM TYPE #3' is viewable and the inter-section navigation 
    // that appears on the left of the browser window is not visible, 
    // this condition is triggered.
      $(form_selectors).css("display", "block");
      // The form's "first" page is made visible.
      $(form_selectors).fadeTo(time_value, 1);
      // The form's "first" page is faded in from an opacity of 0 to 1.
    } // END of "if" STATEMENT which is triggered if 'FORM TYPE #3' is 
      // viewable and the inter-section navigation that appears on the 
      // left of the browser window is not visible.
    
    $("#nav-link").on("mouseover", 
    // Once the user moves the cursor over the "menu icon", the 
    // click-state of the "menu icon" is changed to the "hover" state.
      function () {
        navLinkHoverState("hover", time_value);
      }
    );

    $("#nav-link").on("mouseout", 
    // Once the user moves the cursor away from the "menu icon", the 
    // click-state of the "menu icon" is changed to the "base" state.
      function () {
        navLinkHoverState("base", time_value); 
      }
    );
    
    $("#nav-link").on("click", 
    // Once the user clicks the "menu icon", the inter-section 
    // navigation that appears on the left side of the browser window 
    // is made visible and the click-state of the "menu icon" is changed 
    // to the "first" "click" state.
      function () {
        var nav_selector = new String();
        var nav_element = new Object();
        
        var nav_left_value = new String();
        // Holds the value of the CSS property, "left", of the 
        // HTML element using the selector, "nav".

        nav_selector = "nav";
        nav_element = $(nav_selector);

        nav_left_value = $(nav_element).css("left");

        if (nav_left_value === "0px") {
        // If the main menu of the 
        // browser window, this condition is triggered.
          setTimeout(
            function () {
              navLinkHoverState("base", time_value);
              // The click-state of the "menu icon" is changed to the "base" 
              // state.
            }, (time_value * 2.5)
          );
        } else {
        // Otherwise, if the navigation is not viewable, this condition is 
        // triggered.
          navLinkHoverState("click", time_value);
          // The click-state of the "menu icon" is changed to the "first" 
          // "click" state.
        }
        
        assembleURLString(time_value);
        // "assembleURLString" determines the Positions of the ".copy" elements 
        // contained in the various Sections.
        
        animateSideNav(time_value);
        // "animateSideNav" animates the inter-section navigation that appears 
        // on the left of the browser window into view.
      }
    );
    
   $("#options > a").on("mouseenter",
   // If the user moves the cursor over one of the menu options of the 
   // main menu of the browser window, 
   // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );

    $("#options > a").on("mouseleave", 
    // If the user moves the cursor over one of the menu options of the 
    // main menu of the browser window, 
    // the click-state of the menu option is changed.
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
        // "animateMenuOptions" changes the click-state of the menu option.
      }
    );
    
    $("#options > a").on("click",
    // If the user clicks on one of the menu options, the visible Positions 
    // within the Sections are found and passed on to the URL hash, 
    // the main menu side of the 
    // browser window is made visible, the click-state of the "menu icon" 
    // is changed and the browser window navigates to the Section 
    // that the user wishes to view.
      function () {
        var option_element = new Object();

        option_element = this;
        
        assembleURLString(time_value);
        // "assembleURLString" determines the Positions of the ".copy" elements 
        // contained in the various Sections.
        animateSideNav(time_value);
        // "animateSideNav" animates the inter-section navigation that appears 
        // on the left of the browser window into view.
        
        setTimeout(
          function () {
            navLinkHoverState("base", time_value);
            // The click-state of the "menu icon" is changed to "base".
            activateSideNav(option_element);
            // "activateSideNav" navigates the browser window to the Section 
            // the user wishes to view.
          }, (time_value * 2.5));
      }
    );

    $("#prev-sctn, #next-sctn").on("click", 
    // If the user clicks one of the arrows that make up the inter-section 
    // navigation that appears on the right of a desktop browser, the 
    // browser window navigates to the Section the user wishes to view.
      function () {
        interSectionNav(this);
        // "interSectionNav" navigates the browser window to the Section 
        // the user wishes to view.
      }
    );
    

    $(".sctn_nav > div > span").on("mouseover",
    // If the user moves the cursor over the "menu icon" of the intra-section 
    // navigation, the click-state of the "menu icon" changes.
			function () {
        var sctn_nav_selector = new String();
        var sctn_nav_element = new Object();

        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_element = $(sctn_nav_selector);

        if ($(sctn_nav_element).css("backgroundPosition") !== "0px -105px")  {
        // If the click-state of "menu icon" of the intra-section navigation 
        // is not the "click" state, this condition is triggered.
          animateSctnNav(sctn_nav_element, time_value);
          // "animateSctnNav" changes the click-state of the menu icon of the 
        // intra-section navigation.
        } // END of "if" STATEMENT which is triggered if the click-state of 
          // the intra-section navigation is not the "click" state.
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
    // If the user moves the cursor away from the "menu icon" of the intra-section 
    // navigation, the click-state of the "menu icon" changes. 
			function () {
        var sctn_nav_selector = new String();
        var sctn_nav_element = new Object();
        
        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_element = $(sctn_nav_selector);
        
        if ($(sctn_nav_element).css("backgroundPosition") !== "0px 0px")  {
        // If the click-state of "menu icon" of the intra-section navigation 
        // is not the "base" state, this condition is triggered.
          animateSctnNav(sctn_nav_element, time_value);
          // "animateSctnNav" changes the click-state of the menu icon of the 
        // intra-section navigation.
        } // END of "if" STATEMENT which is triggered if the click-state of 
          // the intra-section navigation is not the "base" state.
			}
		);

    $(".sctn_nav > div > span").on("click",
    // If the user clicks the "menu icon" of the intra-section 
    // navigation, the menu options become visible and 
    // the click-state of the "menu icon" changes. 
			function () {
        var sctn_nav_element = new String();
        var sctn_nav_link_element = new String();
        
        sctn_nav_element = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_link_element = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        animateSctnNavLinks(sctn_nav_link_element);
        // "animateSctnNavLinks" makes the menu options of the intra-section 
        // navigation visible.
        animateSctnNav(sctn_nav_element, time_value);
        // "animateSctnNav" changes the click-state of the menu icon of the 
        // intra-section navigation.
			}
		);

		$(".sctn_nav > div > div > a").on("click",
    // Activates when the user clicks on a menu option of the intra-section 
    // navigation.
			function () {
				var current_sctn_nav_id = $(this).parent().parent().parent().attr("id");
				var current_sctn_nav_id_string = "#" + current_sctn_nav_id + " > div > span";
				var current_sctn_nav_element = "#" + current_sctn_nav_id + " > div > div";
				         
        animateSctnNavLinks(current_sctn_nav_element);
        // "animateSctnNavLinks" makes the menu options of the intra-section 
        // navigation invisible.
        animateSctnNav(current_sctn_nav_id_string, time_value);
        // "animateSctnNav" changes the click-state of the menu icon of the 
        // intra-section navigation.
      }
		);
    
    $("input#sctn_1-start").on("click", 
    // Activates when the user clicks on a "button" element within "SECTION #1" 
    // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#sctn_1?pos=1";

        animateFormPanes();
        // "animateFormPanes" fades in the "first" page of 'FORM TYPE #1'.
      }
    );

    $("#sctn_1-no_1 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "first" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_1 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "first" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_3 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "third" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_3");
        // The data of the form question is in the process of validation.
      }
    );
    
    $("#sctn_1-no_3 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "third" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_3");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "fourth" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("start", "sctn_1-no_4");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "fourth" form question 
    // of 'FORM TYPE #1' within 'SECTION #1'.
      function () {
        validateQuestionField("reset", "sctn_1-no_4");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_1-prev, #sctn_1-next").click(
    // Fades in the individual pages of 'FORM TYPE #3' in 'SECTION #6'.
      function () {
        animateFormPanes();
        // "animateFormPanes" fades in the "first" page of 'FORM TYPE #1'.
      }
    );

    $("input#sctn_5-start").on("click", 
    // Changes the URL hash to navigate the browser to 'FORM TYPE #2' of 
    // 'SECTION #5'.
      function () {
        window.location.hash = "#sctn_5?pos=1";
      }
    );

    $("#sctn_5-no_1 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "first" form question 
    // of 'FORM TYPE #2' within 'SECTION #5'.
      function () {
        validateQuestionField("start", "sctn_5-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_5-no_1 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "first" form question 
    // of 'FORM TYPE #2' within 'SECTION #5'.
      function () {
        validateQuestionField("reset", "sctn_5-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_5-no_2 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "second" form question 
    // of 'FORM TYPE #2' within 'SECTION #5'.
      function () {
        validateQuestionField("start", "sctn_5-no_2");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_5-no_2 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "second" form question 
    // of 'FORM TYPE #2' within 'SECTION #5'.
      function () {
        validateQuestionField("reset", "sctn_5-no_2");
        // The data of the form question is in the process of validation.
      }
    );
    
    $("input#sctn_5-cntct").click(
    // Changes the URL hash to navigate the browser to 'FORM TYPE #3' of 
    // 'SECTION #6'.
      function () {
        window.location.hash = "#sctn_6?pos=1";
      }
    );

    $("input#sctn_6-start").click(
    // Changes the URL hash to navigate the browser to 'FORM TYPE #3' of 
    // 'SECTION #6'.
      function () {
        window.location.hash = "#sctn_6?pos=1";
      }
    );

    $("#sctn_6-no_1 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "first" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("start", "sctn_6-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_6-no_1 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "first" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("reset", "sctn_6-no_1");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_6-no_2 > fieldset").mouseenter( 
    // Activates when the user moves the cursor over the "second" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("start", "sctn_6-no_2");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_6-no_2 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "second" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("reset", "sctn_6-no_2");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_6-no_2 > fieldset > p > input[type='radio']").change(
    // Removes the data contained within the text field of the "second" 
    // form question of 'FORM TYPE #3'.
      function () {
       $("input#sctn_6-field-email").val("");
      }
    );

    $("#sctn_6-no_3 > fieldset").mouseenter(
    // Activates when the user moves the cursor over the "third" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("start", "sctn_6-no_3");
        // The data of the form question is in the process of validation.
      }
    );

    $("#sctn_6-no_3 > fieldset").mouseleave(
    // Activates when the user moves the cursor away from the "third" form question 
    // of 'FORM TYPE #3' within 'SECTION #6'.
      function () {
        validateQuestionField("reset", "sctn_6-no_3");
        // The data of the form question is in the process of validation.
      }
    );

    $("input#sctn_6-map").click(
    // Launches a Bing map inside of the current browser tab or window.
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-prev, #sctn_6-next").click(
    // Fades in the "first" page of 'FORM TYPE #3' in 'SECTION #6'.
      function () {
        animateFormPanes();
        // "animateFormPanes" fades in the "first" page of 'FORM TYPE #1'.
      }
    );

    $("#form-sctn_1, #form-sctn_5, #form-sctn_6").submit(
    // Validates the data contained with either 'FORM TYPE #1', 
    // 'FORM TYPE #2', or 'FORM TYPE #3'.
      function (event) {
        var form_complete_flag = new Boolean;
        // A Boolean which is set to true if the all of the data 
        // of a form is proper.
        
        var id_string = new String();
        // Holds the selector of the <form> HTML element which the user 
        // is submitting.
        var section_value = new String();
        // This variable holds a number which represents the Form 
        // the user is submitting.

        var form_selector = new String();
        var form_element = new Object();

        id_string = $(this).attr("id");
        section_value = id_string.substring(5);
        
        form_complete_flag = validateForm(section_value);
        // If the data of the form is proper, the value 
        // of "form_complete_flag" will be "true". 
        // 
        // If any of the data of the form is improper, 
        // the value of "form_complete_flag" will be 
        // false.
        if (form_complete_flag === false) {
        // If the form that this function processes contains 
        // improper data, then this condition is triggered.
          var alert_div_element = new String();
          // Holds HTML which makes up an alert which appears 
          // within the browser window to inform the user that 
          // input withing the form needs to change.

          var wndow_selector = new String();
          var wndow_element = new Object();

          var alrt_selector = new String();
          var alrt_element = new Object();

          alert_div_element = 
            "<div id=\"alrt\">" + 
            "  <div>" + 
            "    <div>" + 
            "      <span>Alert</span>" + 
            "      <p>This form needs more information than you provided.</p>" +
            "      <p>Please check the question fields that are surrounded by red borders.</p>" +  
            "      <p>Click the screen to close this alert.</p></div>" + 
            "    </div>" + 
            "  </div>" + 
            "</div>";

          wndow_selector = "#wndow-" + section_value;
          wndow_element = $(wndow_selector);

          $(wndow_element).prepend(alert_div_element);
          // The HTML of "alert_div_element" is inserted into the HTML of the webpage.

          $("#alrt").click(
          // Activates when the user clicks on the alert message.
            function () {
              $(this).fadeTo(time_value, 0, 
              // The alert message fades out.
                function () {
                  $(this).detach();
                  // The HTML code is removed from the webpage.
                }
              );
            }
          );

          event.preventDefault();
          // Code which validates the Method.
        }
      }
    );

    $(window).on("load", 
      function () {
        var url_hash = new String();
        var page_dimensions_Array = new Array();
        // The calculated values for the "width" and "height" of various HTML elements 
        // of the webpage within the browser window are passed on to "page_dimensions_Array".
        var window_width = new Number();
        // Holds the numerical value of the width of the browser window.

        url_hash = window.location.hash;
        page_dimensions_Array = parseWindowDimensions();
        window_width = page_dimensions_Array[0];
        
        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 

        if (url_hash === "" || 
            url_hash === "#sctn_main")  {
        // If the URL hash is blank or is "#sctn_main", this condition 
        // is triggered.
          if (window_width > 980) {
          // If the width of the browser window is greater than 980px, 
          // this condition is triggered.
            animateInfoElement(time_value);
            // The HTML content contained within 'MAIN LANDING SECTION' is 
            // faded into view.
          } // END of "if" STATEMENT which is triggered if the browser 
            // window is greater than 980px.
        } // END of "if" STATEMENT which is triggered if the URL hash 
          // is blank or is "#sctn_main".

        
      } // END of ".on("load")" Method
    );
    

    $(window).on("scroll", 
      function () {
        var current_position = new Number();
        // Holds a number which matches the vertical position within the webpage that is viewable.
        var url_hash = new String();

        var info_selector = new String();
        var info_element = new Object();

        var info_css_opacity_val = new String();
        // Holds the value of the CSS property, "opacity" for the HTML element 
        // using the selector, "#info".
        
        current_position = $(window).scrollTop();
        url_hash = window.location.hash;

        info_selector = "#info";
        info_element = $(info_selector);

        info_css_opacity_val = $(info_element).css("opacity");
        
        setURL(current_position, url_hash);
        // "setURL" matches the URL hash with the current viewable Section.

        if (current_position === 0 && 
            info_css_opacity_val === "0") {
        // If the current location of the browser window is 0 and the 
        // HTML content contained within 'MAIN LANDING SECTION' has an 
        // opacity of 0, then this condition is triggered.
          animateInfoElement(time_value);
          // The HTML content contained within 'MAIN LANDING SECTION' is 
          // faded into view.
        } // END of "if" STATEMENT which is triggered if the current 
          // location of the browser window is 0 and the HTML content 
          // within 'MAIN LANDING SECTION' has an opacity of 0.
      } // END of ".on("scroll") Method
    );
    
    $(window).on("hashchange",
      function () {
        var url_hash = new String();

        url_hash = window.location.hash;
        
        if (url_hash.indexOf("copyValues") === -1 && 
            url_hash !== "") {
        // If the inter-section navigation which appears on the left 
        // of the browser window is not visible and the URL hash 
        // is not blank, then this condition is triggered.
          var nav_selector = new String();
          var nav_element = new Object();

          var nav_width_string = new String();
          // Holds the value of the CSS property, "width", of the HTML element 
          // using the selector, "nav".
          var nav_left_string = new String();
          // Holds the value of the CSS property, "left", of the HTML element 
          // using the selector, "nav".

          var px_search_string = new String();
          // Holds a String which is searched for within the value of 
          // "nav_width_string."
          var px_search_index_num = new Number();
          // Holds the location within the value of, "nav_width_string", that 
          // the value, "px_search_index_num", appears.
          var nav_width_val = new Number();
          // Holds the numeric value of the width of the HTML element, "nav".
          var nav_left_val = new Number();
          // Holds the numeric value of the CSS property, "left", of the 
          // HTML element, "nav".
          
          nav_selector = "nav";
          nav_element = $(nav_selector);
          
          nav_width_string = $(nav_element).css("width");
          nav_left_string = $(nav_element).css("left");
          
          px_search_string = "px";
          px_search_index_num = nav_width_string.indexOf(px_search_string);

          nav_width_val = nav_width_string.substring(0, px_search_index_num);
          // The numeric value of the width of the HTML element, "nav", is 
          // extracted from the value of "nav_width_string".
          nav_width_val = parseInt(nav_width_val);
          // The value of "nav_width_val" is changed to an Number.

          px_search_index_num = nav_left_string.indexOf(px_search_string);
          nav_left_val = nav_left_string.substring(1, px_search_index_num);
          // The numberic value of the CSS property, "left", of the HTML element 
          // "nav", is extracted from the value of "nav_left_val".
          // 
          // The "-" character is not included so that the absolute value of the 
          // CSS property, "left", is taken.
          nav_left_val = parseFloat(nav_left_val);
          // The value of "nav_left_val" is changed to a Number.
          nav_left_val = Math.round(nav_left_val);
          // The numeric value of "nav_left_val" is rounded to an integer.

          if (nav_width_val === nav_left_val) {
          // If the main menu of the 
          // browser window is not visible, this condition is triggered.
            var current_position = new Number();
            // Holds a number which matches the vertical position 
            // within the webpage that is viewable.
            
            current_position = $(window).scrollTop();
            
            animatePageElements();
            // "animatePageElements" is called to animate the blocks 
            // that are contained within an individual "window".
            
            setTimeout(
              function () {
                displayVerticalNav();
              }, (time_value * 1.25)
            );
            // The intrapage navigation, which appears on the far-right side 
            // of the browser within a desktop or laptop display, or 
            // in the middle of the page within a mobile display is activate.
          } else if (url_hash === "") {
          // If the visible Section is now 'MAIN LANDING SECTION', 
          // this condition is triggered.
            setTimeout(
              function () {
                displayVerticalNav();
              }, (time_value * 2.5)
            ); 
            // The intrapage navigation, which appears on the far-right side 
            // of the browser within a desktop or laptop display, or 
            // in the middle of the page within a mobile display is activate.
          } // END of "if" STATEMENT which is triggered if the visible Section 
            // is now 'MAIN LANDING SECTION.
        } // END of "if" STATEMENT which is triggered if the main menu is not 
          // visible and the URL hash is not blank.
      } // END of ".on("hashchange")" Method
    );
    
    $(window).on("resize", 
      function () {
        setupPage(time_value);
        // "setupPage" prepares for view the HTML elements of the visible Section 
      } // END of ".on("resize")" Method
    );

  }
);