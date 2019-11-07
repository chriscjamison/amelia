/* Filename: main.js
 *  Contains all JavaScript functions and behavior that control the layout 
 *  and physical appearance of the webpage using the 'One Page' template.
 */

$(window).on("load", 
  function () {
    initializePage();

    displayContent();

    animateIntrapageNavigation();
  }
);

$(window).on("hashchange", 
  function () {
    displayContent();
    
    positionContent();

    positionBackgrounds();
  }
);

$(window).on("scroll",  
  function () {
    displayContent();

    animateIntrapageNavigation();
  }
);

$(document).ready(
  function () {
    setRateValue();

    $("#div-nav-icon").on("mouseover", 
      function () {
        animateMenuIcon("mouseover");
      }
    );

    $("#div-nav-icon").on("mouseout", 
      function () {
        animateMenuIcon("mouseout");
      }
    );

    $("#div-nav-icon").on("click", 
      function () {
        animateMenuIcon("click");

        animateVisibleContent();

        animateMenu();
      }
    );

    $("#div-nav-options a").on("mouseover", 
      function () {
        $(this).removeClass();
        $(this).addClass("nav-option-hover");
      }
    );

    $("#div-nav-options a").on("mouseout", 
      function () {
        $(this).removeClass();
        $(this).addClass("nav-option-base");
      }
    );

    $("#div-nav-options a").on("click", 
      function () {
        $(this).removeClass();
        $(this).addClass("nav-option-click");

        navigateToNewSection($(this).attr("id"));

        animateMenuIcon("click");

        animateVisibleContent();

        animateMenu();
      }
    );

    $("#button-article-1-start").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1";

        centerBrowser();

        positionContent();
        // animateFormPanes("article-1");
      }
    );

    $("#mobile-button-article-1-start").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=1";

        centerBrowser();

        positionContent();
        // animateFormPanes("article-1");
      }
    );

    $("#button-form-article-1-next").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#button-form-article-1-previous").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-next-1").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-previous-2").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=1";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-next-2").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=3";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-previous-3").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-next-3").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=4";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-1-previous-4").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=1&position=1&question=3";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-article-5-start").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=5&position=1&question=1";

        centerBrowser();

        positionContent();
      }
    );

    $("#button-article-5-start").on("click", 
      function () {
        window.location.hash = "#article=5&position=1";

        centerBrowser();

        positionContent();
      }
    );

    $("#mobile-button-form-article-5-next-1").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=5&position=1&question=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-5-previous-2").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=5&position=1&question=1";

        centerBrowser();

        swapFormQuestions();
      }
    );


    $("#button-article-5-contact").on("click", 
      function () {
        window.location.hash = "#article=6&position=0";

        centerBrowser();

        positionContent();
      }
    );

    $("#mobile-button-article-5-contact").on("click", 
      function () {
        window.location.hash = "#article=6&position=0";

        centerBrowser();

        positionContent();
      }
    );

    $("#button-article-6-start").on("click", 
      function () {
        window.location.hash = "#article=6&position=1";

        centerBrowser();

        positionContent();
      }
    );
    
    $("#mobile-button-article-6-start").on("click", 
      function () {
        window.location.hash = "#article=6&position=1&question=1";

        centerBrowser();

        positionContent();
      }
    );

    $("#mobile-button-article-6-more_info").on("click", 
      function () {
        var button_element = {};

        button_element = $(this);

        var button_id_value = "";

        button_id_value = $(button_element).attr("id");

        swapColumns(button_id_value);
      }
    );

    $("#button-article-6-map").on("click", 
      function () {
        window.open("https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027", "_blank");
      }
    );

    $("#mobile-button-article-6-back").on("click", 
      function () {
        var button_element = {};

        button_element = $(this);

        var button_id_value = "";

        button_id_value = $(button_element).attr("id");

        swapColumns(button_id_value);
      }
    );

    $("#button-form-article-6-next").on("click", 
      function () {
        window.location.hash = "#article=6&position=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#button-form-article-6-previous").on("click", 
      function () {
        window.location.hash = "#article=6&position=1";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-next-1").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-previous-2").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=1";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-next-2").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=3";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-previous-3").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=2";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-next-3").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=4";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#mobile-button-form-article-6-previous-4").on("click", 
      // Activates when the user clicks on a "button" element within "SECTION #1" 
      // to move to 'FORM TYPE #1'.
      function () {
        window.location.hash = "#article=6&position=1&question=3";

        centerBrowser();

        swapFormQuestions();
      }
    );

    $("#div-form-article-1-question-1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-1-question-1");
      }
    );

    $("#div-form-article-1-question-1 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-1-question-1");
      }
    );

    $("#div-form-article-1-question-1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-1-question-1");
      }
    );
    
    $("#div-form-article-1-question-3 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-1-question-3");
      }
    );

    $("#div-form-article-1-question-4 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-1-question-4");
      }
    );

    $("#div-form-article-1-question-4 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-1-question-4");
      }
    );

    $("#div-form-article-5-question-1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-5-question-1");
      }
    );

    $("#div-form-article-5-question-1 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-5-question-1");
      }
    );

    $("#div-form-article-5-question-2 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-5-question-2");
      }
    );

    $("#div-form-article-5-question-2 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-5-question-2");
      }
    );

    $("#div-form-article-6-question-1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-6-question-1");
      }
    );

    $("#div-form-article-6-question-1 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-6-question-1");
      }
    );

    $("#div-form-article-6-question-2 > fieldset").mouseenter( 
      function () {
        validateQuestionField("start", "div-form-article-6-question-1");
      }
    );

    $("#div-form-article-6-question-2 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-6-question-2");
      }
    );

    $("#div-form-article-6-question-2 > fieldset > p > input[type='radio']").change(
      function () {
        $("#input-article-6-phone_email-email").val("");
      }
    );

    $("#div-form-article-6-question-3 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "div-form-article-6-question-3");
      }
    );

    $("#div-form-article-6-question-3 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "div-form-article-6-question-3");
      }
    );

    $("#form-article-1, #form-article-5, #form-article-6").submit(
      function () {
        // An Object variable which will hold the relevant data referring 
        // to the form under processing is initialized.
        var form_element = {};

        // The relevant data referring to the form under processing is passed on.
        form_element = this;

        // The data contained by the form under processing is checked for errors.
        validateForm(form_element);
      }
    );
          

    $("#a-nav-article-3").on("mouseover", 
      function () {
        animateIntrasectionLink("mouseover", $(this).attr("id"));
      }
    );

    $("#a-nav-article-3").on("mouseout", 
      function () {
        animateIntrasectionLink("mouseout", $(this).attr("id"));
      }
    );
    
    $("#a-nav-article-3").on("click", 
      function () {
        swapArticleNavigationLink($(this).attr("id"));
      }
    );

    $("#div-nav-article-3 > div > div > a").on("click", 
      function () {
       closeSectionNavigation("3");
      }
    );

    $("#a-nav-article-4").on("mouseover", 
      function () {
        animateIntrasectionLink("mouseover", $(this).attr("id"));
      }
    );

    $("#a-nav-article-4").on("mouseout", 
      function () {
        animateIntrasectionLink("mouseout", $(this).attr("id"));
      }
    );

    $("#a-nav-article-4").on("click", 
      function () {
        swapArticleNavigationLink($(this).attr("id"));
      }
    );

    $("#div-nav-article-4 > div > div > a").on("click", 
      function () {
       closeSectionNavigation("4");
      }
    );
  }
);



function swapColumns(button_id_value) {
  // An Array which will hold the characters contained within 'button_id_value' 
  // which have been broken up between characters seperated by the character, '-', 
  // is initialized.
  var button_id_data_Array = [];

  // The value of 'button_id_value' is broken up into smaller segments.
  button_id_data_Array = button_id_value.split("-");

  // A String variable which will hold a character which identifies the 'section' 
  // which called this function.
  section_num_value = "";

  // The character which identifies the 'section' is passed on.
  section_num_value = button_id_data_Array[3];

  // A String variable which will hold the CSS selector which refers 
  // to the HTML element containing the 'columns' of content this function 
  // is processing is initialized.
  var div_column_selector = "";

  // The CSS selector which refers to the HTML element containing the columns
  // of content under processing is passed on.
  div_column_selector = "#article-content-" + section_num_value + " > div > .div-content-column";

  // An Object variable which will hold the jQuery object which refers to the 
  // HTML element containing the column of content under prcessing is initialized.
  var div_column_elements = {};

  // String variable which will hold the CSS selector for the individual columns 
  // of content this function processes are initialized.
  var div_first_column_selector = "";
  var div_second_column_selector = "";

  // The CSS selectors which refer to the HTML elements containing the columns 
  // of content under processing is created.
  div_first_column_selector = div_column_selector + ":first-of-type";
  div_second_column_selector = div_column_selector + ":last-of-type";

  // Object variables which will hold the jQuery objects which refers to the 
  // columns of content within a section are initialized.
  var div_first_column_element = {};
  var div_second_column_element = {};

  // The jQuery objects which refer to the columns of content within a section 
  // are passed on.
  div_first_column_element = $(div_first_column_selector);
  div_second_column_element = $(div_second_column_selector);

  // A String variable which will hold the CSS class which makes a column of content 
  // not visible is initialized.
  var column_not_visible_class_value = "";

  // The CSS class which makes a column of content not visible is passed on.
  column_not_visible_class_value = "div-column-not_visible";

  // A Boolean variable which will hold a flag which will hold the value 
  // of 'true' if the column under processing is not visible is initialized.
  var is_column_not_visible;

  // The function assumes the first column is visible.
  is_column_not_visible = false;

  // The visibility of the first column is found and passed on.
  is_column_not_visible = $(div_first_column_element).hasClass(column_not_visible_class_value);

  // All references to the CSS class which makes a column of content not visible 
  // are removed.
  $(div_first_column_element).removeClass(column_not_visible_class_value);
  $(div_second_column_element).removeClass(column_not_visible_class_value);

  // IF/ELSE statement which changes the visibility of the columns. If the 
  // first column was already visible, the first column will be hidden and the 
  // second column will now become visible.
  if (is_column_not_visible === false) {
    $(div_first_column_element).addClass(column_not_visible_class_value);
  } else {
    $(div_second_column_element).addClass(column_not_visible_class_value);
  }
}



function animateIntrasectionLink(click_state, link_id_value)  {
  // A String variable which will hold the CSS selector which refers to the intersection 
  // links menu icon is initialized.
  var section_link_selector = "";

  // The CSS selector which refers to the intersection links menu icon is passed on.
  section_link_selector = "#div-nav-article-" + link_id_value.slice(-1) + " div a:first-of-type";

  // An Object variable which will hold the jQuery object which refers to the intersection 
  // links menu icon is initialized.
  var section_link_element = {};

  // The jQuery object which refers to the intersection links menu icon is passed on.
  section_link_element = $(section_link_selector);

  // A String variable which will hold the value of the CSS property 'background-position', 
  // of the intersection links menu icon is initialized.
  var section_link_background_position_value = "";

  // The value of the CSS property, 'background-position', for the intersection links menu 
  // icon is passed on.
  section_link_background_position_value = $(section_link_element).css("backgroundPosition");

  // The name of a CSS class which will reset the click state of 
  // the intrasection menu icon is initialized.
  var base_state = "";

  // The name of a CSS class which will reset the click state 
  // of the intrasection menu icon is passed on.
  base_state = "nav-article-base"; 

  // The name of a CSS class which will change the click state of 
  // the intrasection menu icon to 'hover' is initialized.
  var hover_state = "";

  // The name of a CSS class which will set the click state of 
  // the intrasection menu icon to 'hover' is passed on.
  hover_state = "nav-article-hover"; 

  // The name of a CSS class which will change the click state of 
  // the link under processing to 'clicked' is initialized.
  var clicked_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'clicked' is passed on.
  clicked_state = "nav-article-click-2"; 

  // IF/ELSE statement which changes the click state of the intersection menu icon if the 
  // cursor hovers over or out of the icon.
  if (click_state === "mouseover")  {
    if (section_link_background_position_value === "0px 0px" || 
        section_link_background_position_value === "0% 0%") {
      $(section_link_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(section_link_element).removeClass();
        }, 50
      );
  
      setTimeout(
        function () {
          $(section_link_element).addClass(hover_state);
          
          $(section_link_element).fadeTo(100, 1);
        }, 100
      );
    }
  } else if (click_state === "mouseout")  {
    if (section_link_background_position_value === "0px -35px") {
      $(section_link_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(section_link_element).removeClass();
        }, 50
      );
  
      setTimeout(
        function () {
          $(section_link_element).addClass(base_state);
          
          $(section_link_element).fadeTo(100, 1);
        }, 100
      );
    }
  }

}


function swapArticleNavigationLink(link_id_value) {
  // A String variable which will hold the CSS selector which refers to the HTML element 
  // containing the intersection links is initialized.
  var article_links_div_selector = "";

  // The CSS selector which refers to the HTML element containing the intersection links 
  // is passed on.
  article_links_div_selector = "#div-nav-article-" + link_id_value.slice(-1) + " > div > div";

  // An Object variable which will hold the jQuery object which refers to the HTML element 
  // containing the intersection links is initialized.
  var article_links_div_element = {};

  // The jQuery object which refers to the HTML element containing the intersection links 
  // is passed on.
  article_links_div_element = $(article_links_div_selector);

  // A Boolean variable which will hold a flag which refers to the visiblilty of the HTML 
  // element holding the intersection links is initialized.
  var are_links_visible;

  // A String variable which will hold the name of a CSS class which, if present, is 
  // a sign that the intrasection links are visible is initialized.
  var nav_article_visible_class = "";

  // The name of a CSS class which, if present, is a sign that the intrasection links 
  // are visible is passed on.
  nav_article_visible_class = "div-nav-article-visible";

  // If the <div> holding the intrasection links contains the CSS class, 'div-nav-article-visible', 
  // 'are_links_visible' will then hold the value of 'true'. Otherwise, 'are_links_visible' 
  // will hold the value of 'false'.
  are_links_visible = $(article_links_div_element).hasClass(nav_article_visible_class);

  // A String variable which will hold the CSS selector which refers to the link under processing 
  // is initialized.
  var article_link_selector = "";

  // The CSS selector which refers to the link under processing is passed on.
  article_link_selector = "#" + link_id_value;

  // An Object variable which will hold the jQuery object which refers to the link 
  // under processing is initialized.
  var article_link_element = {};

  // The jQuery object which refers to the link under processing is passed on.
  article_link_element = $(article_link_selector);

  // The name of a CSS class which will reset the click state of 
  // the link under processing is initialized.
  var base_state = "";

  // The name of a CSS class which will reset the click state 
  // of the link under processing is passed on.
  base_state = "nav-article-base"; 

  // The name of a CSS class which will change the click state of 
  // the link under processing to 'active' is initialized.
  var active_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'active' is passed on.
  active_state = "nav-article-click-1"; 

  // The name of a CSS class which will change the click state of 
  // the link under processing to 'clicked' is initialized.
  var clicked_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'clicked' is passed on.
  clicked_state = "nav-article-click-2"; 

  // The link under processing is faded from view.
  $(article_link_element).fadeOut(50);

  // The link under processing is made not visible.
  setTimeout(
    function () {
      $(article_link_element).removeClass();
    }, 50
  );

  // IF/ELSE statement which will change the click state of the link under processing.
  if (are_links_visible === true) {
    setTimeout(
      function () {
        $(article_link_element).addClass(active_state);

        $(article_link_element).fadeTo(100, 1);
      }, 100
    );

    $(article_link_element).fadeOut(100);
  } else {
    setTimeout(
      function () {
        $(article_link_element).addClass(active_state);

        $(article_link_element).fadeTo(100, 1);
      }, 100
    );

    $(article_link_element).fadeOut(100);

    setTimeout(
      function () {
        $(article_link_element).removeClass();
      }, 100
    );

    setTimeout(
      function () {
        $(article_link_element).addClass(clicked_state);
        
        $(article_link_element).fadeTo(100, 1);
      }, 100
    );
  }
}



function getCurrentSection()  {
  // A Number variable which will hold the height of each section of content 
  // is initialized.
  var section_height;

  // The height of each section of content is passed on.
  section_height = getSectionHeight();

  // A Number variable which will hold the vertical position of the browser 
  // within the webpage is initialized.
  var current_position;

  // The current position of the browser window is passed on.
  current_position = $(window).scrollTop(); 

  // A Number variable which will hold the a value which refers to the 
  // section currently viewable in the browser window is initialized.
  var current_section;

  // The section the browser is currently viewing is found out by 
  // dividing the value of 'current_position' by 'section_height'.
  current_section = Math.floor(current_position / section_height);

  // The current section within the browser window is passed on.
  return current_section;
}



function getSectionHeight() {
  // An Array which will hold the dimensions of the browser window 
  // is initialized.
  var display_dimensions_Array = [];

  // The browser dimensions are passed on.
  display_dimensions_Array = getDisplaySize();

  // A Number variable which will hold the height of each section of content 
  // is initialized.
  var section_height;

  // The height of each section of content is passed on.
  section_height = display_dimensions_Array[1];

  // The height of each section is passed back.
  return section_height;
}



function scrollToPreviousSection()  {
  // A Number variable which will hold the a value which refers to the 
  // section currently viewable in the browser window is initialized.
  var current_section;

  // The section the browser is currently viewing is found out by 
  // dividing the value of 'current_position' by 'section_height'.
  current_section = getCurrentSection();
  
  // A Number variable which will hold the height of each section of content 
  // is initialized.
  var section_height;

  // The height of each section of content is passed on.
  section_height = getSectionHeight();

  // A Number variable which will hold a new point within the webpage to 
  // scroll to is initialized.
  var new_position;

  // A point within the webpage to scroll to is calcluated by subtracting 
  // '1' from the value of 'current_section' and multiplying that value 
  // by the value of 'section_height'.
  new_position = (current_section - 1) * section_height;

  // IF statement which sets the value of 'new_position' to '0' if the 
  // current section is the landing section.
  if (current_section === 0)  {
    new_position = 0;
  }

  // The browser is set to scroll to the point the previous section begins.
  $(window).scrollTop(new_position);
}



function scrollToNextSection()  {
  // A Number variable which will hold the a value which refers to the 
  // section currently viewable in the browser window is initialized.
  var current_section;

  // The section the browser is currently viewing is found out by 
  // dividing the value of 'current_position' by 'section_height'.
  current_section = getCurrentSection();

  // A Number variable which will hold the height of a given section 
  // of content is initialized.
  var section_height;

  // The height of a given section of content is passed on.
  section_height = getSectionHeight()

  // A Number variable which will hold a new point within the webpage to 
  // scroll to is initialized.
  var new_position;

  // A point within the webpage to scroll to is calcluated by subtracting 
  // '1' from the value of 'current_section' and multiplying that value 
  // by the value of 'section_height'.
  new_position = (current_section + 1) * section_height;

  // The browser is set to scroll to the point the previous section begins.
  $(window).scrollTop(new_position);
}



function animateIntrapageNavigation() {
  // A String variable which will hold the CSS selector which refers to the 
  // main block of content is initialized.
  var main_selector = "";

  // The CSS selector which refers to the main block of content is passed on.
  main_selector = "main";

  // An Object variable which will hold a jQuery object which refers to the 
  // main block of content is initialized.
  var main_element = {};

  // The jQuery object which refers to the main block of content is passed on.
  main_element = $(main_selector);

  // A Number variable which will hold the height of the webpage is initialized.
  var webpage_height;

  // The height of the webpage is passed on.
  webpage_height = $(main_element).height();

  // A Number variable which will hold the height of each section of content 
  // is initialized.
  var section_height;

  // The height of each section of content is passed on.
  section_height = getSectionHeight();

  // A Number variable which will hold the vertical position of the browser 
  // within the webpage is initialized.
  var current_position;

  // The current position of the browser window is passed on.
  current_position = $(window).scrollTop(); 

  // A Boolean variable which represents if the browser is at the top of the 
  // webpage is initialized.
  var is_browser_at_the_top;

  // A Boolean variable which represents if the browser is at the bottom 
  // of the webpage is initialized.
  var is_browser_at_the_bottom;

  // The default states of the flags are passed on. For the sake of this 
  // function, it is assumed that the browser is at the top of the webpage.
  is_browser_at_the_top = true;
  is_browser_at_the_bottom = false;

  // IF statement which determines if the browser is at the top of the webpage.
  if (current_position > 0) {
    is_browser_at_the_top = false;
  }
  // IF statement which determines if the browser is at the bottom of the webpage.
  if (section_height >= (webpage_height - current_position)) {
    is_browser_at_the_bottom = true;
  }

  // IF/ELSE IF statement which will change the visibility of the intrapage 
  // navigation which appears along the bottom of the webpage. 
  // If the browser is at the top of the webpage, the link for the 'previous' 
  // section is not displayed. If the browser is at the bottom of the webpage 
  // the link for the 'next' section is not displayed. Otherwise, both links 
  // are displayed.
  if (is_browser_at_the_top === true) {
    // A String variable which will hold the CSS selector which refers to the 
    // link to the previous section is initialized.
    var previous_link_selector = "";

    // The CSS selector which refers to the link to the previous section 
    // is passed on.
    previous_link_selector = "#a-nav-article-previous";

    // An Objet variable which will hold the jQuery object which refers to the 
    // link to the previous section is initialized.
    var previous_link_element = {};

    // The jQuery object which refers to the link to the previous section 
    // is passed on.
    previous_link_element = $(previous_link_selector);

    // The link to the previous section is made visible.
    if ($(previous_link_element).css("opacity") !== "0")  {
      $(previous_link_element).fadeTo(400, 0);
    }
  } 
  
  if (is_browser_at_the_bottom === true) {
    // A String variable which will hold the CSS selector which refers to the 
    // link to the next section is initialized.
    var next_link_selector = "";

    // The CSS selector which refers to the link to the next section 
    // is passed on.
    next_link_selector = "#a-nav-article-next";

    // An Object variable which will hold the jQuery object which refers to the 
    // link to the next section is initialized.
    var next_link_element = {};

    // The jQuery object which refers to the link to the next section 
    // is passed on.
    next_link_element = $(next_link_selector);

    // The link to the next section is made visible.
    if ($(next_link_element).css("opacity") !== "0")  {
      $(next_link_element).fadeTo(400, 0);
    }
  }

  if (is_browser_at_the_bottom === false && 
      is_browser_at_the_top === false) {
    // String variables which will hold the CSS selectors which refer to the 
    // intrapage navigation are initialized.
    var previous_link_selector = "";
    var next_link_selector = "";

    // The CSS selectors which refer to the intrapage navigation are passed on.
    previous_link_selector = "#a-nav-article-previous";
    next_link_selector = "#a-nav-article-next";

    // Object variables which will hold the jQuery objects which refer to the 
    // intrapage navigation are initialized.
    var previous_link_element = {};
    var next_link_element = {};

    // The jQuery objects which refer to the intrapage navigation are passed on.
    previous_link_element = $(previous_link_selector);
    next_link_element = $(next_link_selector);

    // The link to the previous section is made visible.
    if ($(previous_link_element).css("opacity") !== "1")  {
      $(previous_link_element).fadeTo(400, 1);
    }

    // The link to the next section is made visible.
    if ($(next_link_element).css("opacity") !== "1")  {
      $(next_link_element).fadeTo(400, 1);
    }
  }
}



function displayContent() {
  // A Number variable which will hold the height of each section of content 
  // is initialized.
  var section_height;

  // The height of each section of content is passed on.
  section_height = getSectionHeight();

  // A Number variable which will hold a value which be added to the 
  // value of 'current_position' will cause the content to load as the 
  // visitor scrolls through the webpage.
  var position_offset_value;

  // The value which will cause content to be made visible is passed on.
  position_offset_value = 0;

  // A Number variable which will hold the vertical position of the browser 
  // within the webpage is initialized.
  var current_position;

  // The current position of the browser window is passed on.
  current_position = $(window).scrollTop();

  // A Number variable which will hold the a value which refers to the 
  // section currently viewable in the browser window is initialized.
  var current_section;

  // The section the browser is currently viewing is found out by 
  // dividing the value of the sum of 'current_position' and 'position_offset_value' by 'section_height'.
  current_section = Math.round((current_position + position_offset_value) / section_height);

  // A String variable which will hold a CSS selector which refers 
  // to the section which is visible in the browser window is initialized.
  var article_visible_selector = "";

  // The CSS selector which refers to the section which is visible 
  // is passed on.
  article_visible_selector = "#article-content-" + current_section.toString();

  // IF statment which will change the value of 'article_visible_selector' 
  // if the section visible in the browser window is the landing section.
  if (current_section === 0)  {
    article_visible_selector = "#article-content-landing";
  }

  // An Object variable which will hold the jQuery object which refers 
  // to the section which is visible in the browser window is initialized.
  var article_visible_element = {};

  // The jQuery object which refers to the section which is visible 
  // in the browser window is passed on.
  article_visible_element = $(article_visible_selector);

  // A Boolean variable which will hold a value which refers to the value 
  // of the CSS property, 'opacity', is initialized.
  var is_content_visible;

  // IF/ELSE statement which determines if the content within the browser 
  // window is visible.
  if ($(article_visible_element).css("opacity") !== "0")  {
    is_content_visible = true;  
  } else {
    is_content_visible = false;
  }

  // An Array which will hold the dimensions of the browser window 
  // is initialized.
  var display_dimensions_Array = [];

  // The browser dimensions are passed on.
  display_dimensions_Array = getDisplaySize();

  // A Number which will hold the width of the sections of content is initialized.
  var section_width;

  // The width of the sections of content is passed on.
  section_width = display_dimensions_Array[0];

  // The content within the browser window is made visible.
  if (is_content_visible === false && (current_section !== 0 || (current_section === 0 && section_width > 1024))) {
    $(article_visible_element).fadeTo(400, 1);
  } else if (is_content_visible === false && section_width < 1024 && current_section === 0) {
    setTimeout(
      function () {
        $(article_visible_element).fadeTo(400, 1);
      }, 650
    );
  }
}



function closeSectionNavigation(link_id_value) {
  // A String variable which will hold the CSS selector which refers 
  // to intrasection navigation is initialized.
  var section_nav_div_selector = "";

  // The CSS selector which refers to intrasection navigation 
  // is passed on.
  section_nav_div_selector = ".div-nav-article > div > div";

  // An Object variable which will hold the jQuery object which 
  // refers to the intrasection navigation is initialized.
  var section_nav_div_element = {};

  // The jQuery object which refers to the intrasection navigation 
  // is initialized.
  section_nav_div_element = $(section_nav_div_selector);

  // A String variable which will hold the name of a CSS class 
  // which will hide the links of the intrasection navigation 
  // is initialized.
  var nav_visible_class = "";

  // The name of a CSS class which will hide the links of the 
  // intrasection navigation is passed on.
  nav_visible_class = "div-nav-article-visible";

  // The links of the intrasection navigation are faded from view.
  $(section_nav_div_element).fadeOut(50);

  // The links of the intrasection navigation are made not visible.
  setTimeout(
    function () {
      $(section_nav_div_element).removeClass(nav_visible_class);
    }, 50
  );

  // A String variable which will hold the CSS selector which 
  // refers to the link which shows or hides the links within 
  // the 'section' navigation is initialized.
  var article_link_selector = "";

  // The CSS selector which refers to the link which shows or 
  // hides the links within the section navigation is passed on.
  article_link_selector = "#a-nav-article-" + link_id_value;

  // An Object variable which will hold the jQuery object which 
  // refers to the link which shows or hides the links within 
  // the section navigation is initialized.
  var article_link_element = {};

  // A String variable which will hold the name of a CSS class used 
  // to reset the click state of the link under processing is initialized.
  var link_click_state_class = "";

  // The name of a CSS class which will be used to reset the click state 
  // of the link under processing is passed on.
  link_click_state_class = "nav-article-base";

  // The jQuery object which refers to the link which shows or hides 
  // the links within the section navigation is passed on.
  article_link_element = $(article_link_selector);

  // The link is faded from view.
  $(article_link_element).fadeOut(50);

  // All CSS classes are removed from the link this function is processing.
  setTimeout(
    function () {
      $(article_link_element).removeClass();
    }, 50
  );

  // The link this function is processing is returned to its base hover state.
  setTimeout(
    function () {
      $(article_link_element).addClass(link_click_state_class);

      $(article_link_element).fadeTo(100, 1);
    }, 100
  );
}


function showSectionNavigation(article_value) {
  // String variables which will hold the CSS selector which refers to 
  // intrasection navigation is initialized.
  var section_nav_div_selector = "";

  // The CSS selectors which refer to intrasection navigation are passed on.
  section_nav_div_selector = "#div-nav-article-" + article_value + " div div";

  // Object variables which will hold the jQuery objects which refer to 
  // the intrasection navigation are initialized.
  var section_nav_div_element = {};

  // The jQuery objects which refer to the intrasection navigation 
  // are passed on.
  section_nav_div_element = $(section_nav_div_selector);

  // A String variable which will hold a CSS class which sets the intrasection 
  // navigation visible is initialized.
  var section_nav_visible_selector = "";

  // The CSS class which will set the intrasection navigation visible 
  // is passed on.
  section_nav_visible_selector = "div-nav-article-visible";
  
  // A Boolean variable which will hold a value which reflects the visibility 
  // of the intrasection navigation is initialized.
  var is_section_navigation_visible;

  // The value, 'false', is passed on to 'is_section_navigation_visible'.
  // For the sake of this function, the intrasection navigation is assumed 
  // to be not visible.
  is_section_navigation_visible = false;

  // The visibilty of the intrasection navigation is determined.
  is_section_navigation_visible = $(section_nav_div_element).hasClass(section_nav_visible_selector);
  
  // IF/ELSE statement which will determine if the intrasection 
  // navigation is visible.
  if (is_section_navigation_visible === false)  {
    $(section_nav_div_element).fadeOut(50);

    setTimeout(
      function () {
        $(section_nav_div_element).removeClass(section_nav_visible_selector);
      }, 50
    );

    setTimeout(
      function () {
        $(section_nav_div_element).addClass(section_nav_visible_selector);
  
        $(section_nav_div_element).fadeTo(150, 1);
      }, 150
    );
  } else {
    $(section_nav_div_element).fadeOut(50);

    setTimeout(
      function () {
        $(section_nav_div_element).removeClass(section_nav_visible_selector);
      }, 50
    );
  }
}


function swapFormQuestions()  {
  // An Array which will hold the data held by GET variables contained within 
  // the hash of the URL is iniitalized.
  var hash_data_Array = [];

  // The data held by GET variables contained within the hash of the URL 
  // is passed on.
  hash_data_Array = extractHashData();

  // Strings which will hold the data from the GET variables 
  // in the hash of the URL are initialized.
  var article_value = "";
  var position_value = "";

  // A Number variable which will hold the number of values held 
  // within 'hash_data_Array'.
  var num_of_values;

  // The number of values held within 'hash_data_Array' is passed on.
  num_of_values = hash_data_Array.length;
  
  // IF/ELSE statement which will display two questions at a time 
  // if the browser is a desktop browser ('num_of_values' = 2) or 
  // display only one question at a time if the browser is a 
  // smartphone browser ('num_of_values' = 3).
  if (num_of_values === 2)  {
    // The values of the GET variables in the hash of the URL 
    // are passed on.
    article_value = hash_data_Array[0];
    position_value = hash_data_Array[1];

    // String variables which will hold CSS selectors which refer to 
    // the different 'pages' of form questions are initialized.
    var page_one_questions_selector = "";
    var page_two_questions_selector = "";

    // The CSS selectors which refer to the different 'pages' of form 
    // questions of form questions are passed on.
    page_one_questions_selector = "#form-article-" + article_value + " .div-form-page-1";
    page_two_questions_selector = "#form-article-" + article_value + " .div-form-page-2";

    // Object variables which will hold jQuery objects which refer to 
    // the different 'pages' of form questions are initialized.
    var page_one_questions_elements = {};
    var page_two_questions_elements = {};

    // jQuery objects which refer to the different 'pages' of form questions 
    // are passed on.
    page_one_questions_elements = $(page_one_questions_selector);
    page_two_questions_elements = $(page_two_questions_selector);

    // A String variable which will hold the CSS class which sets a given 'page' 
    // to visible is initialized.
    var page_visible_selector = "";

    // The CSS class which sets a given 'page' to visible is passed on.
    var page_visible_selector = "div-form-page-visible";

    // The pages of form questions are faded from view.
    $(page_one_questions_elements).fadeOut(50);
    $(page_two_questions_elements).fadeOut(50);

    // The CSS class which makes a given 'page' visible is stripped from both pages.
    setTimeout(
      function () {
        $(page_one_questions_elements).removeClass(page_visible_selector);
        $(page_two_questions_elements).removeClass(page_visible_selector);  
      }, 50
    );
    
    // IF/ELSE statement which will set the visibility of a given page.
    if (position_value === "1") {
      setTimeout( 
        function () {
          $(page_one_questions_elements).addClass(page_visible_selector);

          $(page_one_questions_elements).fadeTo(200, 1);
        }, 200
      );
    } else {
      setTimeout( 
        function () {
          $(page_two_questions_elements).addClass(page_visible_selector);

          $(page_two_questions_elements).fadeTo(200, 1);
        }, 200
      );
    }
  } else if (num_of_values === 3)  {

    // A String variable which will hold the value of the GET variable, 
    // 'question' is initialized.
    var question_value = "";

    // The values of the GET variables in the hash of the URL 
    // are passed on.
    article_value = hash_data_Array[0];
    position_value = hash_data_Array[1];
    question_value = hash_data_Array[2];

    // String variables which will hold CSS selectors which refer to 
    // the different 'pages' of form questions are initialized.
    var page_one_questions_selector = "";
    var page_two_questions_selector = "";

    // The CSS selectors which refer to the different 'pages' of form 
    // questions of form questions are passed on.
    page_one_questions_selector = "#form-article-" + article_value + " .div-form-page-1";
    page_two_questions_selector = "#form-article-" + article_value + " .div-form-page-2";

    // Object variables which will hold jQuery objects which refer to 
    // the different 'pages' of form questions are initialized.
    var page_one_questions_elements = {};
    var page_two_questions_elements = {};

    // jQuery objects which refer to the different 'pages' of form questions 
    // are passed on.
    page_one_questions_elements = $(page_one_questions_selector);
    page_two_questions_elements = $(page_two_questions_selector);

    // A String variable which will hold the CSS class which sets a given 'page' 
    // to visible is initialized.
    var page_visible_selector = "";

    // The CSS class which sets a given 'page' to visible is passed on.
    var page_visible_selector = "div-form-page-visible";

    // The 'pages' of form questions are faded from view.
    $(page_one_questions_elements).fadeOut(50);
    $(page_two_questions_elements).fadeOut(50);

    // The CSS class which makes a given 'page' visible is stripped from both pages.
    setTimeout(
      function () {
        $(page_one_questions_elements).removeClass(page_visible_selector);
        $(page_two_questions_elements).removeClass(page_visible_selector);
      }, 50
    );
    
    
    // IF/ELSE statement which will set the visibility of a given page.
    if (position_value === "1" && (question_value === "1" || question_value === "2")) {
      setTimeout(
        function () {
          $(page_one_questions_elements).addClass(page_visible_selector);

          $(page_one_questions_elements).fadeTo(200, 1);
        }, 200
      );
    } else {
      setTimeout(
        function () {
          $(page_two_questions_elements).addClass(page_visible_selector);

          $(page_two_questions_elements).fadeTo(200, 1);
        }, 200
      );
    }
    
    // A String variable which will hold the CSS selector which refers 
    // to the question which will be made visible is initialized.
    var form_question_selector = "";

    // The CSS selector which refers to the question which will be made 
    // visibile is passed on.
    form_question_selector = "#div-form-article-" + article_value + "-question-" + question_value;

    // An Object variable which will hold the jQuery object which refers 
    // to the question which will be made visible is initialized.
    var form_question_element = {};

    // The jQuery object which refers to the question which will 
    // be made visible is passed on.
    form_question_element = $(form_question_selector);

    // A String variable which will hold a CSS selector which refers to all 
    // questions within the form is initialized.
    var form_questions_selector = "";

    // The CSS selector which refers to all questions within the form 
    // is passed on.
    form_questions_selector = "#form-article-" + article_value + " .div-form-question";

    // An Object variable which will hold the jQuery object which refers to 
    // all questions within the form is initialized.
    var form_questions_elements = {};

    // The jQuery object which refers to all questions within the form 
    // is passed on.
    form_questions_elements = $(form_questions_selector);
    
    // A String variable which will hold the CSS class selector for the question 
    // to be made visible is initialized.
    var form_question_visible_class_name = "";

    // The CSS class selector which refers to the question to be made visible 
    // is passed on.
    form_question_visible_class_name = "div-form-question-visible";
    
    // The form questions are faded from view.
    $(form_questions_elements).fadeOut(50);

    // Any CSS class referernce which makes the question visible is removed.
    setTimeout(
      function () {
        $(form_questions_elements).removeClass(form_question_visible_class_name);
      }, 50
    );

    // The form question is made visible and faded into view.

    setTimeout(
      function () {
        $(form_question_element).addClass(form_question_visible_class_name);

        $(form_question_element).fadeTo(200, 1);
      }, 200
    );

    // A String variable which will hold a CSS selector which refers to all 
    // navigation buttons within a form is initialized.
    var form_questions_buttons_selector = "";

    // The CSS selector which wil hold the CSS selector which refers to all 
    // navigation buttons within a form is passed on.
    form_questions_buttons_selector = "#form-article-" + article_value + " input[type=button], #submit-form-article-" + article_value;

    // An Object variable which will hold the jQuery object which refers 
    // to all navigation buttons within a form is initialized.
    form_questions_buttons_elements = {};

    // The jQuery object which refers to all navigation buttons within a form 
    // is passed on.
    form_questions_buttons_elements = $(form_questions_buttons_selector);

    // A String variable which will hold a CSS class name is intialized.
    var button_visible_class_name = "";

    // The CSS class name, 'button_visible', is passed on.
    button_visible_class_name = "button_visible";

    // All navigation buttons are made 'not visible'.
    $(form_questions_buttons_elements).removeClass(button_visible_class_name);

    // A Number variable which will hold the number of questions within the 
    // form under processing is initialized.
    var num_of_form_questions;

    // The number of form questions within the form under processing 
    // is passed on.
    num_of_form_questions = $(form_questions_elements).length;

    // The type of 'question_value' is changed to Number.
    question_value = parseInt(question_value);

    // IF/ELSE IF/ELSE statement which displays navigation buttons 
    // corresponding to the currently visible form question.
    if (question_value === 1) {
      // A String variable which will hold the CSS selector which 
      // refers to the navigation button moving on to the next 
      // question is initialized.
      var next_button_selector = "";

      // The CSS selector which refers to the navigation button 
      // to the next question is passed on.
      next_button_selector = "#mobile-button-form-article-" + article_value + "-next-" + question_value;

      // An Object variable which will hold the jQuery object which 
      // refers to the navigation button to the next question 
      // is initialized.
      var next_button_element = {};

      // The jQuery object which refers to the navigation button 
      // to the next question is passed on.
      next_button_element = $(next_button_selector);

      // The navigation button to the next question is made visible.
      $(next_button_element).addClass(button_visible_class_name);
    } else if (question_value > 1 && question_value < num_of_form_questions)  {
      // String variables which will hold CSS selectors which refer to the 
      // navigation buttons used to display different form questions 
      // are initialized.
      var previous_button_selector = "";
      var next_button_selector = "";

      // The CSS selectors which refer to the navigations to the previous 
      // and next questions are passed on.
      var previous_button_selector = "#mobile-button-form-article-" + article_value + "-previous-" + question_value;
      var next_button_selector = "#mobile-button-form-article-" + article_value + "-next-" + question_value;

      // Object variables which will hold jQuery objects which refer 
      // to the navigation buttons to the previous and next questions 
      // are initialized.
      var previous_button_element = {};
      var next_button_element = {};

      // The jQuery objects which refer to the navigation buttons to the 
      // previous and next questions are passed on.
      previous_button_element = $(previous_button_selector);
      next_button_element = $(next_button_selector);

      // The navigation buttons to the previous and next questions are 
      // made visible.
      $(previous_button_element).addClass(button_visible_class_name);
      $(next_button_element).addClass(button_visible_class_name);
    } else {
      // String variables which will hold CSS selectors which refer to the 
      // navigation button used to display the previous question and the 
      // button used to submit the form are initialized.
      var previous_button_selector = "";
      var submit_button_selector = "";

      // The CSS selectors which refer to the navigation button pointing to 
      //  the previous question and the submit button are passed on.
      var previous_button_selector = "#mobile-button-form-article-" + article_value + "-previous-" + question_value;
      var submit_button_selector = "#submit-form-article-" + article_value;

      // Object variables which will hold jQuery objects which refer 
      // to the navigation button to the previous question and the submit button 
      // are initialized.
      var previous_button_element = {};
      var submit_button_element = {};

      // The jQuery objects which refer to the navigation button to the 
      // previous question and submit button are passed on.
      previous_button_element = $(previous_button_selector);
      submit_button_element = $(submit_button_selector);

      // The navigation button to the previous button and the submit button are 
      // made visible.
      $(previous_button_element).addClass(button_visible_class_name);
      $(submit_button_element).addClass(button_visible_class_name);
    }
  }
}



function calculateNavigationPoint(section_value) {
  // A Number variable which will hold the height of a given section 
  // of content is initialized.
  var section_height;

  // The height of a given section of content is passed on.
  section_height = getSectionHeight();

  // A Number variable which will hold the position within the webpage 
  // to scroll to is initialized.
  var scroll_to_value;

  // The position within the webpage to scroll to is passed on. That value 
  // is found by multiplying the place within the webpage the new section is 
  // located, 'section_value, by the height of the webpage's 
  // sections, 'section_height'.
  scroll_to_value = section_value * section_height;

  return scroll_to_value;
}



function navigateToNewSection(new_section_id) {
  // An Array which will hold the characters within 'new_section_id' 
  // is initialized.
  var new_section_id_Array = [];

  // The string, 'new_section_id', is split into two strings seperated 
  // by the character, '-'.
  new_section_id_Array = new_section_id.split("_");

  // A String variable which will hold the suffix of, 'new_section_id', 
  // is intiialized.
  new_section_id_value = "";

  // The suffix of 'new_section_id' is passed on.
  new_section_id_value = new_section_id_Array[1];

  // IF/ELSE statement which will determine the point within the webpage 
  // to scroll to.
  if (new_section_id_value === "landing") {
    section_value = 0;
  } else {
    section_value = parseInt(new_section_id_value);
  }

  scroll_to_value = calculateNavigationPoint(section_value);

  // The browser is scrolled to the position of the new section.
  $(window).scrollTop(scroll_to_value);
}


function showNotVisibleContent()  {
  // A String variable which will hold the CSS selector for the sections 
  // of content is initialized.
  var article_selector = "";

  // The CSS selector which refers to the sections of content within the 
  // webpage is passed on.
  article_selector = "article";

  // An Object variable which will hold the jQuery object which refers 
  // to the sections of content is initialized.
  var article_elements = {};

  // The jQuery object which refers to the sections of content within 
  // the webpage is passed on.
  article_elements = $(article_selector);

  // An Object variable which will a value for the CSS property, 
  // 'display', is initialized.
  var article_display_css = {};

  // A value of the CSS property, 'display', which will be used 
  // to make the sections of content not visible is passed on.
  article_display_css = {
    display: "block"
  };

  $(article_elements).css(article_display_css);

  $(article_elements).fadeTo(400, 1);
}



function hideVisibleContent() {
  // A String variable which will hold the CSS selector for the sections 
  // of content is initialized.
  var article_selector = "";

  // The CSS selector which refers to the sections of content within the 
  // webpage is passed on.
  article_selector = "article";

  // An Object variable which will hold the jQuery object which refers 
  // to the sections of content is initialized.
  var article_elements = {};

  // The jQuery object which refers to the sections of content within 
  // the webpage is passed on.
  article_elements = $(article_selector);
/* 
  // An Object variable which will a value for the CSS property, 
  // 'display', is initialized.
  var article_display_css = {};

  // A value of the CSS property, 'opacity', which will be used 
  // to fade out the sections of content is passed on.
  article_opacity_css = {
    opacity: 0
  };
 */
  // A value of the CSS property, 'display', which will be used 
  // to make the sections of content not visible is passed on.
  article_display_css = {
    display: "none"
  };

  $(article_elements).fadeTo(250, 0);

  setTimeout(
    function () {
      $(article_elements).css(article_display_css);
    }, 500
  );
}



function locateVisibleContent() {
  // A String variable which will hold the CSS selector for the blocks 
  // of content within a section is initialized.
  var div_content_selector = "";
  // A String variable which will hold the CSS selector for the 
  // visible block of content within a section is initialized.
  var div_content_visible_selector = "";

  // The CSS selector which refers to the blocks of content within a section 
  // is passed on.
  div_content_selector = ".div-content";
  // The CSS selector which refers to the visible block of content within 
  // a section is passed on.
  div_content_visible_selector = "div-content-visible";

  // An Object variable which will hold the jQuery object which refers 
  // to blocks of content within a section is initialized.
  var div_content_elements = {};
  // An Object variable which will hold the jQuery object which refers 
  // to an individual block of content is initialized.
  var div_content_element = {};

  // An Array which will hold values which point out the blocks of content 
  // within the website are visible is initialized.
  var visible_blocks_Array = [];

  // A Number variable which will hold the number of sections of content 
  // within the webpage is initialized.
  var num_of_sections;

  // The number of sections of content within the website is passed on.
  num_of_sections = getNumOfSections();

  // A Number variable which will hold the value of a loop incrementer 
  // is initialized.
  var article_num;
  // A Number variable which will hold the value of a loop incrementer 
  // is intialized.
  var block_num;

  // The loop incrementer is set to '0'.
  article_num = 0;

  // EACH loop which will locate the visible block of content within the 
  // sections of content and note its 'block number' within the section.
  $.each(article_elements, 
    function () {
      div_content_elements = $(this).children(div_content_selector);
      
      // The loop incrementer is set to '0'.
      block_num = 0;

      // EACH loop which will find the visible block of content within 
      // 'this' section.
      $.each(div_content_elements, 
        function () {
          div_content_element = $(this);

          if ($(div_content_element).hasClass(div_content_visible_selector))  {
            visible_blocks_Array[article_num] = block_num;
          } else {
            block_num++;
          }
        }
      );

      article_num++;
    }
  );

  var visible_blocks_string = "";

  visible_blocks_string = "|visible=";

  // A Number is initialized which will serve as a loop incrementer.
  var inc;

  // FOR loop which will construct a string which identifies the visible 
  // blocks of content. 
  for (inc = 0; inc < num_of_sections; inc++) {
    visible_blocks_string = visible_blocks_string + visible_blocks_Array[inc];

    if (inc < num_of_sections - 1)  {
      visible_blocks_string = visible_blocks_string + ",";
    }
  }
  
  // A String which will hold the hash of the URL is initialized.
  var url_hash = "";

  // The hash of the URL is passed on.
  url_hash = window.location.hash;

  // The string which identifies the blocks of content which are visible 
  // is constructed.
  url_hash = url_hash + visible_blocks_string;

  window.location.hash = url_hash;
}



function animateVisibleContent()  {
  // A String variable which will hold the CSS selector for the background 
  // for the side navigation is initialized.
  var nav_background_selector = "";

  // The CSS selector which refers to the background for the side navigation 
  // is passed on.
  nav_background_selector = "#div-nav-background";

  // An Object variable which will hold the jQuery object which refers to 
  // the background for the side navigation is initialized.
  var nav_background_element = {};

  // The jQuery object which refers to the background for the side navigation 
  // is passed on.
  nav_background_element = $(nav_background_selector);

  // A String variable which will hold the value of the CSS property, 'left', 
  // for the background for the side navigation is initialized.
  var nav_background_left_value = "";

  // The value of the CSS property, 'left', for the background for the side 
  // navigation is passed on.
  nav_background_left_value = $(nav_background_element).css("left");

  // The String value is converted to an integer.
  nav_background_left_value = parseFloat(nav_background_left_value);

  if (nav_background_left_value < 0)  {
    hideVisibleContent();
  } else {
    showNotVisibleContent();
  }
}



function showIntersectionNavigation() {
  // String variables which will hold the CSS selectors which refer to the arrows 
  // which link to one section before and after the current section are initialized.
  var previous_link_selector = "";
  var next_link_selector = "";

  // The CSS selectors which refer to the arrows which link to one section before 
  // and after the current section are passed on.
  previous_link_selector = "#a-nav-article-previous";
  next_link_selector = "#a-nav-article-next";

  // Object variables which will hold jQuery objects which refer to the arrows 
  // which link to one section before and after the current section are initialized.
  var previous_link_element = {};
  var next_link_element = {};

  // The jQuery objects which refer to the arrows which link to one section before 
  // and after the current section are passed on.
  previous_link_element = $(previous_link_selector);
  next_link_element = $(next_link_selector);

  var current_section;

  current_section = getCurrentSection();

  var num_of_sections;

  num_of_sections = getNumOfSections();

  // The links are made visible.
  if (current_section > 0 && current_section < num_of_sections)  {
    $(previous_link_element).fadeTo(250, 1);
    $(next_link_element).fadeTo(250, 1);
  } else if (current_section === 0) {
    $(next_link_element).fadeTo(250, 1);
  } else {
    $(previous_link_element).fadeTo(250, 1);
  }  
}



function hideIntersectionNavigation() {
  // String variables which will hold the CSS selectors which refer to the arrows 
  // which link to one section before and after the current section are initialized.
  var previous_link_selector = "";
  var next_link_selector = "";

  // The CSS selectors which refer to the arrows which link to one section before 
  // and after the current section are passed on.
  previous_link_selector = "#a-nav-article-previous";
  next_link_selector = "#a-nav-article-next";

  // Object variables which will hold jQuery objects which refer to the arrows 
  // which link to one section before and after the current section are initialized.
  var previous_link_element = {};
  var next_link_element = {};

  // The jQuery objects which refer to the arrows which link to one section before 
  // and after the current section are passed on.
  previous_link_element = $(previous_link_selector);
  next_link_element = $(next_link_selector);

  // The links are hidden from view.
  $(previous_link_element).fadeTo(250, 0);
  $(next_link_element).fadeTo(250, 0);
}



function animateMenu()  {
  // A String variable which will hold the CSS selector for the background 
  // for the side navigation is initialized.
  var nav_background_selector = "";
  // A String variable which will hold the CSS selector for the border 
  // for the side navigation is initialized.
  var nav_border_selector = "";
  // A String variable which will hold the CSS selector for the menu 
  // options of the side navigation is initalized.
  var nav_options_selector = "";

  // The CSS selector which refers to the background for the side navigation 
  // is passed on.
  nav_background_selector = "#div-nav-background";
  // The CSS selector which refers to the border for the side navigatoin 
  // is passed on.
  nav_border_selector = "#div-nav-border";
  // The CSS selector which refers to the menu options for the side navigation 
  // is passed on.
  nav_options_selector = "#div-nav-options";

  // An Object variable which will hold the jQuery object which refers to 
  // the background for the side navigation is initialized.
  var nav_background_element = {};
  // An Object variable which will hold the jQuery object which refers to 
  // the border for the side navigation is initialized.
  var nav_border_element = {};
  // An Object variable which will hold the jQuery object which refers to 
  // the menu options for the side navigation is initialized.
  var nav_options_element = {};

  // The jQuery object which refers to the background for the side navigation 
  // is passed on.
  nav_background_element = $(nav_background_selector);
  // The jQuery object which refers to the border for the side navigation 
  // is passed on.
  nav_border_element = $(nav_border_selector);
  // The jQuery object which refers to the menu options for the side navigation 
  // is passed on.
  nav_options_element = $(nav_options_selector);

  // A String variable which will hold the value of the CSS property, 'left', 
  // for the background for the side navigation is initialized.
  var nav_background_left_value = "";

  // The value of the CSS property, 'left', for the background for the side 
  // navigation is passed on.
  nav_background_left_value = $(nav_background_element).css("left");

  // The String value is converted to an integer.
  nav_background_left_value = parseFloat(nav_background_left_value);

  // All CSS classes are removed from the HTML elements for the 
  // background, border, and menu options of the side navigation.
  $(nav_background_element).removeClass();
  $(nav_border_element).removeClass();
  $(nav_options_element).removeClass();

  // The name of a CSS class which will allow the navigation elements 
  // to be made visible is initialized.
  var nav_visible_class = "";

  // The name of a CSS class which will allow the navigation elements 
  // to be made visible is passed on.
  nav_visible_class = "nav-visible"; 

  // The name of a CSS class which will allow the navigation elements 
  // to be made not visible is initialized.
  var nav_not_visible_class = "";

  // The name of a CSS class which will allow the navigation elements 
  // to be made not visible is passed on.
  nav_not_visible_class = "nav-not_visible"; 

  // IF/ELSE statment which will display the background of the side navigation 
  // if the background is not visible. 
  // 
  // If the background is visible, this statement will make the background 
  // not visible.
  if (nav_background_left_value < 0)  {
    // The background, border, and menu options for the side navigation 
    // are made visible.
    setTimeout(
      function () {
        $(nav_background_element).addClass(nav_visible_class);
        $(nav_border_element).addClass(nav_visible_class);
        $(nav_options_element).addClass(nav_visible_class);

        $(nav_background_element).fadeTo(200, 1);
        $(nav_border_element).fadeTo(200, 1);
        $(nav_options_element).fadeTo(200, 1);
      }, 100
    );

    hideIntersectionNavigation();
  } else if (nav_background_left_value === 0) {
    showIntersectionNavigation();
    
    // The background, border, and menu options for the side navigation are 
    // made not visible.
    setTimeout(
      function () {
        $(nav_background_element).addClass(nav_not_visible_class);
        $(nav_border_element).addClass(nav_not_visible_class);
        $(nav_options_element).addClass(nav_not_visible_class);
      }, 50
    );
  }
}



function animateMenuIcon(click_state)  {
  // An Array which will hold the dimensions of the browser 
  // initialized.
  var browser_dimensions_Array = [];

  // The dimensions of the browser are passed on.
  browser_dimensions_Array = getDisplaySize();

  // A Number variable which will hold the width of the display 
  // is initialized.
  var window_width;

  // The width of the display is passed on.
  window_width = browser_dimensions_Array[0];

  // Initialize String variable which will hold the CSS selector for the menu icon.
  var menu_icon_selector = "";

  // Initialize Object variable which will hold the jQuery object which refers to 
  // the menu icon.
  var menu_icon_element = {};

  // The CSS selector for the menu icon is passed on.
  menu_icon_selector = "#div-nav-icon";

  // The jQuery object which refers to the menu icon is passed on.
  menu_icon_element = $(menu_icon_selector);

  // A String variable which will hold the value of the CSS property, 'background-position', 
  // for the menu icon is initialized.
  var menu_icon_background_position_value = "";

  // The value of the CSS property, 'background-position', of the menu icon is passed on.
  menu_icon_background_position_value = $(menu_icon_element).css("backgroundPosition");
  
  // The name of a CSS class which will reset the click state of 
  // the menu icon is initialized.
  var base_state = "";

  // The name of a CSS class which will reset the click state of the 
  // menu icon is passed on.
  base_state = "nav-icon-base"; 

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'hover' is initialized.
  var hover_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'hover' is passed on.
  hover_state = "nav-icon-hover"; 

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'active' is initialized.
  var active_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'active' is passed on.
  active_state = "nav-icon-click-1"; 

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'clicked' is initialized.
  var clicked_state = "";

  // The name of a CSS class which will set the click state of 
  // the menu icon to 'clicked' is passed on.
  clicked_state = "nav-icon-click-2"; 


  // IF/ELSE statement which will change the hover state of the menu icon. 
  // 
  // If the menu icon was in its base state when the cursor moved over it, the hover state 
  // will change to 'hover'. If the menu icon was in its hover state, the state will change 
  // to the base state. Otherwise, if the hover state is 'clicked', the menu state will 
  // not change.
  if (menu_icon_background_position_value !== "0px -150px") {
    if ((menu_icon_background_position_value === "0% 0%" || 
        menu_icon_background_position_value === "0px 0px") && 
        click_state === "mouseover") {
      $(menu_icon_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(menu_icon_element).removeClass();
        }, 50
      );

      setTimeout(
        function () {
          $(menu_icon_element).addClass(hover_state);

          $(menu_icon_element).fadeTo(50, 1);
        }, 50
      );
    } else if (menu_icon_background_position_value === "0px -50px") {
      $(menu_icon_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(menu_icon_element).removeClass();
        }, 50
      );
        
      if (click_state === "click") {
        setTimeout(
          function () {
            $(menu_icon_element).addClass(active_state);
  
            $(menu_icon_element).fadeTo(50, 1);
          }, 50
        );

        setTimeout(
          function () {
            $(menu_icon_element).addClass(clicked_state);
  
            $(menu_icon_element).fadeTo(50, 1);
          }, 175
        );
      } else if (click_state === "mouseout") {
        $(menu_icon_element).fadeTo(50, 0.5);
    
        setTimeout(
          function () {
            $(menu_icon_element).removeClass();
          }, 50
        );
    
        setTimeout(
          function () {
            $(menu_icon_element).addClass(base_state);
    
            $(menu_icon_element).fadeTo(50, 1);
          }, 50
        );
      }  
    } else if ((menu_icon_background_position_value === "0% 0%" || 
                menu_icon_background_position_value === "0px 0px") && 
                click_state === "click" && 
                window_width < 1024) {
      $(menu_icon_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(menu_icon_element).removeClass();
        }, 50
      );

      setTimeout(
        function () {
          $(menu_icon_element).addClass(clicked_state);

          $(menu_icon_element).fadeTo(50, 1);
        }, 50
      );
    } else if ((menu_icon_background_position_value !== "0% 0%" || 
                menu_icon_background_position_value !== "0px 0px") && 
                click_state !== "mouseout") {
      $(menu_icon_element).fadeTo(50, 0.5);
  
      setTimeout(
        function () {
          $(menu_icon_element).removeClass();
        }, 50
      );
  
      setTimeout(
        function () {
          $(menu_icon_element).addClass(base_state);
  
          $(menu_icon_element).fadeTo(50, 1);
        }, 50
      );
    }  
  } else {
    if (click_state === "click")  {
      $(menu_icon_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(menu_icon_element).removeClass();
        }, 50
      );

      setTimeout(
        function () {
          $(menu_icon_element).addClass(base_state);

          $(menu_icon_element).fadeTo(50, 1);
        }, 50
      );
    }
  }
} 



function extractHashData()  {
  // A String which will hold the hash of the URL is initialized.
  var url_hash = "";

  // The current value of the hash of the URL is passed on.
  url_hash = window.location.hash;

  // IF statement which will continue running this function if the URL 
  // contains a hash.
  if (url_hash !== "") {
    // The prefix, '#', is removed from 'url_hash'.
    url_hash = url_hash.substr(1);

    // An Array which will hold the values of the hash's GET variables 
    // is initialized.
    hash_values_Array = [];

    // The values of the hash are passed on.
    hash_values_Array = url_hash.split("&");

    // A Number variable which will hold the number of values held 
    // in 'hash_values_Array' is initialized.
    var num_of_values;

    // The number of values held within 'hash_values_Array' 
    // is passed on.
    num_of_values = hash_values_Array.length;

    // IF/ELSE IF statement which processes values for two variables if 
    // 'num_of_values' equals '2'. If 'num_of_values' equals '3', the 
    // statement processes three variables.
    if (num_of_values == 2) {
      // An Array which will hold the raw GET variable data for 'article' 
      // is initialized.
      var article_value_Array = [];
      // An Array which will hold the raw GET variable data for 'position' 
      // is initialized.
      var position_value_Array = [];
      
      // A String which will hold the value of the GET variable for 'article' 
      // is initialized.
      var article_value = "";
      // A String which will hold the value of the GET variable for 'position' 
      // is initialized.
      var position_value = "";

      // The values of the GET variables, 'article' and 'position', are passed on.
      article_value_Array = hash_values_Array[0].split("=");
      article_value = article_value_Array[1];

      position_value_Array = hash_values_Array[1].split("=");
      position_value = position_value_Array[1];

      // An Array which will hold the parsed data from the hash of the URL 
      // is initialized.
      var parsed_hash_data_Array = [];

      // The data points for the variables, 'article' and 'position', are 
      // passed on.
      parsed_hash_data_Array = [article_value, position_value];
    } else if (num_of_values === 3) {
      // Array variables which will hold the raw GET variable data for 'article', 
      // 'position', and 'question' are initialized. 
      var article_value_Array = [];
      var position_value_Array = [];
      var question_value_Array = [];
      
      // String variables which will hold the value of the GET variables for 'article', 
      // 'position', and 'question' are initialized.
      var article_value = "";
      var position_value = "";
      var question_value = "";

      // The values of the GET variables, 'article', 'position', 
      // and 'question' are passed on.
      article_value_Array = hash_values_Array[0].split("=");
      article_value = article_value_Array[1];

      position_value_Array = hash_values_Array[1].split("=");
      position_value = position_value_Array[1];

      question_value_Array = hash_values_Array[2].split("=");
      question_value = question_value_Array[1];

      // An Array which will hold the parsed data from the hash of the URL 
      // is initialized.
      var parsed_hash_data_Array = [];

      // The data points for the variables, 'article', 'position', and 'question', 
      // are passed on.
      parsed_hash_data_Array = [article_value, position_value, question_value];
    }
    
    // The data are passed on.
    return parsed_hash_data_Array;
  }
}



function centerBrowser()  {
  // An Array which will hold the data from the hash of the URL 
  // is initialized.
  var hash_data_Array = [];
  // The data from the hash of the URL is gathered.
  hash_data_Array = extractHashData();

  if (hash_data_Array !== undefined) {
    // A Number which will hold the position within the webpage to scroll to 
    // in order to center the browser over a given section is initialized.
    var scroll_to_value;

    // A Number which will hold identification of the current section 
    // is initialized.
    var section_value;

    // The identification for the current section is passed on.
    section_value = parseInt(hash_data_Array[0]);

    // The position the browser will scroll to in order to center the browser 
    // over the current section is passed on.
    scroll_to_value = calculateNavigationPoint(section_value);

    // The browser is centered over the current section.
    $(window).scrollTop(scroll_to_value);
  }
}



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



function positionContent()  {
  // An Array which will hold the values of the GET variables 
  // in the hash of the URL is initialized.
  var hash_data_Array = [];

  // The data from the GET variables in the hash of the URL 
  // is gathered.
  hash_data_Array = extractHashData();

  // IF statement which only runs the code to position the content 
  // if a hash in the URL exists.
  if (hash_data_Array !== undefined)  {
    // Strings which will hold the data from the GET variables 
    // in the hash of the URL are initialized.
    var article_value = "";
    var position_value = "";

    // The values of the GET variables in the hash of the URL 
    // are passed on.
    article_value = hash_data_Array[0];
    position_value = hash_data_Array[1];

    // A String which will hold the CSS selector for section 
    // of content which will be positioned is initialized.
    var article_selector = "";

    // The CSS selector for the section of content which will 
    // be positioned is initialized.
    article_selector = "#article-content-" + article_value + " .div-content";

    // An Object which will hold the jQuery object which refers 
    // to the section of content which will be positioned 
    // is intiialized.
    var article_element = {};

    // The jQuery object which refers to the section of content 
    // which will be positioned is passed on.
    article_element = $(article_selector);
    
    // A String variable which will hold the CSS selector which refers 
    // to the block of content within this section which is visible 
    // is initialized.
    var div_content_visible_selector = "";

    // The CSS selector for the block of content which is visible 
    // within this section is passed on.
    div_content_visible_selector = "div-content-visible"; 

    // All blocks of content within the section which is now visible are now made 
    // invisible.
    $(article_element).fadeOut(200);

    setTimeout(
      function () {
        $(article_element).removeClass(div_content_visible_selector);
      }, 200
    );

    // The value of 'position_value' is converted to an integer.
    position_value = parseInt(position_value);

    // A String variable which will hold the CSS selector which refers to the block of 
    // content to be made viewable is initialized.
    var content_block_selector = "";

    // The CSS selector for the block of content to be made viewable is passed on.
    content_block_selector = article_selector + ":nth-child(" + (position_value + 2).toString() + ")";

    // IF statment which will alter the value of 'content_block_selector' if the 
    // 'section' includes a form.
    if ((article_value === "1" || article_value === "6") && 
        position_value > 1) {
      content_block_selector = article_selector + ":nth-child(" + (position_value + 1).toString() + ")";
    }

    // An Object variable which will hold the jQuery object which refers to the HTML element 
    // which holds the block of content to be made viewable is initialized.
    var content_block_element = {};

    // The jQuery object that refers to the HTML element which holds the block of content 
    // to be made viewable is passed on.
    content_block_element = $(content_block_selector);

    // The block of content which the variable in the URL hash refers to is made visible.
    setTimeout(
      function () {
        $(content_block_element).addClass(div_content_visible_selector);

        $(content_block_element).fadeIn(400);
      }, 400
    );

    // A Number variable which will hold the number of values held 
    // within 'hash_data_Array'.
    var num_of_values;

    // The number of values held within 'hash_data_Array' is passed on.
    num_of_values = hash_data_Array.length;

    // A Number variable which will hold a threshold to gauge if form 
    // questions need to be made visible.
    var position_threshold;

    // IF/ELSE statement which will set the threshold to load form questions 
    // to '1' if the browser can contain two questions ('num_of_values' equals '2' - 
    // a desktop browser). 
    // Otherwise, the threshold will be set to '0' since the browser 
    // only contains one question ('num_of_values' equals '3' - a smartphone browser).
    if (num_of_values === 2)  {
      position_threshold = 1;
    } else if (num_of_values === 3) {
      position_threshold = 0;
    }

    // IF statment which will change the current 'page' of form questions if the 
    // 'section' includes a form.
    if ((article_value === "1" || article_value === "5" || article_value === "6") && 
        position_value > position_threshold) {
      swapFormQuestions();
    }

    // The background of the section is repositioned.
    positionBackgrounds();
  }
}



function positionBackgrounds() {
  // An Array which will hold the values of the GET variables contained within 
  // the hash of the URL is initialized.
  var hash_data_Array = [];

  // The data from the GET variables contained within the hash of the URL 
  // are passed on.
  hash_data_Array = extractHashData();

  // An Array which will hold the dimensions of the browser is initialized.
  var display_dimensions_Array = [];

  // The dimensions of the browser are passed on.
  display_dimensions_Array = getDisplaySize();
  
  // String variables which will hold the value of the GET variables, 
  // 'article' and 'position', are initialized.
  var article_value = "";
  var position_value = "";

  // The values of the GET variables, 'article' and 'position', are passed on.
  article_value = hash_data_Array[0];
  position_value = hash_data_Array[1];

  // The value of, 'position_value', is converted into an integer.
  position_value = parseInt(position_value);

  // A Number variable which will hold the width of the browser window 
  // is initialized.
  var window_width;

  // The width of the browser window is passed on.
  window_width = display_dimensions_Array[0];

  // A Number variable which will hold a value which moves the <div> which holds 
  // the background image into the proper position is initialized.
  var background_position;

  // The distance the <div> which holds the background is moved is calculated 
  // by multiplying the value of 'position_value' by the width of the browser 
  // window. That value is now passed on.
  background_position = -position_value * window_width;

  // IF statment which will alter the value of 'background_position' if the 
  // background which will be repositioned is for a 'section' which includes 
  // a form.
  if ((article_value === "1" || article_value === "6") && 
      position_value > 1) {
    background_position = -(position_value - 1) * window_width;
  }

  // A String variable which will hold the value of the CSS property, 'background-position', 
  // is initialized. This value will be used to reposition the background image.
  var background_left_value = "";

  // The value of the CSS propery, 'background-position', which will be used to 
  // reposition the background image is passed on.
  background_left_value = background_position + "px";
  
  // A String variable which will hold the CSS selector for the background 
  // which will be repositioned is initialized.
  var background_selector = "";

  // The CSS selector for the background which will be repositioned is passed on.
  background_selector = "#div-background-" + article_value;

  // An Object variable which will hold the jQuery object which refers to the background 
  // which will be repositioned is initialized.
  var background_element = {};

  // The jQuery object which refers to the background which will be repositioned 
  // is passed on.
  background_element = $(background_selector);

  // The background is repositioned.
  $(background_element).css("left", background_left_value);
}


function getDisplaySize() {
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

  // A Number variable which will hold the dimensions of the browser 
  // are initialized.
  var window_width; 

  // The dimensions of the browser are passed on.
  window_width = window.outerWidth;

  // An Array which will hold values which best matches the dimensions of the browser 
  // window is initialized.
  var display_dimensions_Array;

  // IF/ELSE statement which best matches the browser dimensions to the background images for 
  // the various 'window frame' elements.
  if (window_width <= 414)  { 
    // The display is likely for a smartphone.
    display_dimensions_Array = [414, 735];
  } else if (window_width > 414 && window_width <= 1024) {
    // The display is likely for a tablet device.
    display_dimensions_Array = [768, 1024];
  } else if (window_width > 1024 && window_width <= 1280) {
    // The display is a standard desktop display.
    display_dimensions_Array = [1024, 1366];
  } else if (window_width > 1280 && window_width <= 1382)  {
    // The display is a 720p desktop display.
    display_dimensions_Array = [1366, 768];
  } else if (window_width > 1382)  {
    // The display is a 1080p desktop display.
    display_dimensions_Array = [1920, 1080];
  } 

  // The string contained by 'display_dimensions_Array' which refers to the dimensions of the display 
  // is returned.
  return display_dimensions_Array;

} // END of FUNCTION getDisplaySize




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



function validateTextFields(question_value) {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold the CSS selector which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_selector = new String();
  // The CSS selector which refers to the '<input>' HTML element which has 
  // been checked is passed on.
  checked_selector = "#" + question_value + " input:checked"; 
  
  // An Object variable which will hold the jQuery object which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_element = new Object(); 
  // The jQuery object which refers to the '<input>' HTML element which has been checked 
  // is passed on.      
  checked_element = $(checked_selector);
  
  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var base_border_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  base_border_class_value = "form_question_base_border";
  
  // IF/ELSE statement which will change the appearance of the border containing the 
  // '<input>' fields if the data is improper. If the '<input>' field contains 
  // improper data and the visitor is attempting to correct the data, the appearance 
  // of the border is restored to its default state.
  if (validation_type === "reset" && 
      $(checked_element).attr("name") === undefined) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(error_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    );    
  } else if (validation_type === "start" && 
             $(fieldset_element).hasClass(error_border_class_value) === true) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(base_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    );    
  }
}



function validateSelectField(question_value)  {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold the CSS selector which refers to the 
  // '<select>' field is initialized.
  var option_selector = "";
  // The CSS selector which refers to the '<select>' field is passed on.
  option_selector = "#" + question_value + " > fieldset > div > select > option:selected";

  // An Object variable which will hold the jQuery object which refers to the 
  // '<select>' field is initialized.
  var option_element = {};
  // The jQuery object which refers to the '<select>' field is passed on.
  option_element = $(option_selector);

  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var base_border_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  base_border_class_value = "form_question_base_border";
  
  // IF/ELSE IF statement which changes the appearance of the border containing the 
  // '<select>' field if the value of that field has not been changed. If the visitor 
  // is attempting to correct the error, the appearance of the border is changed back 
  // to its default state.
  if (validation_type === "reset" && 
      $(option_element).val() === "default") {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(error_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    ); 
  } else if (validation_type === "start" && 
             $(fieldset_element).hasClass(error_border_class_value) === true) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(base_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    );    
  }
}



function validateRadioButtonsTypeOne(question_value) {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold the CSS selector which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_selector = new String();
  // The CSS selector which refers to the '<input>' HTML element which has 
  // been checked is passed on.
  checked_selector = "#" + question_value + " > span + fieldset > p > input:checked"; 
  
  // An Object variable which will hold the jQuery object which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_element = new Object(); 
  // The jQuery object which refers to the '<input>' HTML element which has been checked 
  // is passed on.      
  checked_element = $(checked_selector);

  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var base_border_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  base_border_class_value = "form_question_base_border";
    
  // IF/ELSE IF statement which changes the appearance of the border containing 
  // the form fields if none of the form fields have been clicked. Otherwise, 
  // if the visitor is correcting improper data, the appearance of the border 
  // is changed to its default state.
  if (validation_type === "reset" && 
      ($(checked_element).attr("name") === undefined ||  
        $(checked_element).attr("name") === "monthly_income")) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(error_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    ); 
  } else if (validation_type === "start" && 
              $(fieldset_element).hasClass(error_border_class_value)) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(base_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    );    
  }
}



function validateRadioButtonsTypeTwo(question_value) {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold the CSS selector which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_selector = new String();
  // The CSS selector which refers to the '<input>' HTML element which has 
  // been checked is passed on.
  checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
  
  // An Object variable which will hold the jQuery object which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_element = new Object(); 
  // The jQuery object which refers to the '<input>' HTML element which has been checked 
  // is passed on.      
  checked_element = $(checked_selector);

  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var base_border_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  base_border_class_value = "form_question_base_border";
    
  // IF/ELSE IF statement which changes the appearance of the border containing 
  // the form fields if none of the form fields have been clicked. Otherwise, 
  // if the visitor is correcting improper data, the appearance of the border 
  // is changed to its default state.
  if (validation_type === "reset" && 
      $(checked_element).attr("name") === undefined) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(error_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    ); 
  } else if (validation_type === "start" && 
            $(fieldset_element).hasClass(error_border_class_value)) {
    $(fieldset_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(base_border_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
      }, 100
    );    
  }
}



function validateName(question_value) {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold a CSS selector refers to the '<input>' 
  // HTML element containing a text field is initialized.
  var field_selector = "";
  // The CSS selector which refers to the '<input>' HTML element containing 
  // a text field is passed on.
  field_selector = "#" + question_value + " fieldset > input";

  // An Object variable which will hold the jQuery object which refers to 
  // the '<input>' HTML element containing a text field is initialized.
  var field_element = {};
  // The jQuery object which refers to the '<input>' HTML element containing 
  // a text field is passed on.
  field_element = $(field_selector);
    
  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var error_text_class_value = "";
  var base_border_class_value = "";
  var base_text_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  error_text_class_value = "form_question_error_text";
  base_border_class_value = "form_question_base_border";
  base_text_class_value = "form_question_base_text";
  
  // IF/ELSE IF statement which removes the default message if that message 
  // is contained within the text field and resets the appearance of the border and 
  // form field to the default state. Otherwise, the appearance of the border and 
  // the form field is changed if the string contained within the form field is smaller 
  // than two characters.
  if ($(field_element).val() === "Please enter your first name")  {
    $(fieldset_element).fadeTo(50, 0.5);
    $(field_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
        $(field_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(base_border_class_value);
        $(field_element).addClass(base_text_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
        $(field_element).fadeTo(100, 1);
      }, 100
    );    

    $(field_element).val("");
  } else if (validation_type === "reset" && 
              $(field_element).val().length <= 2)  {
    $(fieldset_element).fadeTo(50, 0.5);
    $(field_element).fadeTo(50, 0.5);

    setTimeout(
      function () {
        $(fieldset_element).removeClass();
        $(field_element).removeClass();
      }, 50
    );

    setTimeout(
      function () {
        $(fieldset_element).addClass(error_border_class_value);
        $(field_element).addClass(error_text_class_value);
        
        $(fieldset_element).fadeTo(100, 1);
        $(field_element).fadeTo(100, 1);
      }, 100
    );    

    $(field_element).val("Please enter your first name");
  }
}



function validateEmailPhone(question_value) {
  // A String variable which will hold a CSS selector which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_selector = "";
  // The CSS selector which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_selector = "#" + question_value + " > fieldset";
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element which contains the question under processing 
  // is initialized.
  var fieldset_element = {};  
  // The jQuery object which refers to the HTML element which contains 
  // the question under processing is passed on.
  fieldset_element = $(fieldset_selector);

  // A String variable which will hold the CSS selector which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_selector = new String();
  // The CSS selector which refers to the '<input>' HTML element which has 
  // been checked is passed on.
  checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
  
  // An Object variable which will hold the jQuery object which refers to the '<input>' 
  // HTML element which has been checked is initialized.
  var checked_element = new Object(); 
  // The jQuery object which refers to the '<input>' HTML element which has been checked 
  // is passed on.      
  checked_element = $(checked_selector);

  // A String variable which will hold a CSS selector refers to the '<input>' 
  // HTML element containing a text field is initialized.
  var field_selector = "";
  // The CSS selector which refers to the '<input>' HTML element containing 
  // a text field is passed on.
  field_selector = "#input-article-6-phone_email-email";

  // An Object variable which will hold the jQuery object which refers to 
  // the '<input>' HTML element containing a text field is initialized.
  var field_element = {};
  // The jQuery object which refers to the '<input>' HTML element containing 
  // a text field is passed on.
  field_element = $(field_selector);
    
  // String variables which hold CSS class names which, when changed, will change 
  // the appearance of form fields to reflect the improper data they contain 
  // are initialized.
  var error_border_class_value = "";
  var error_text_class_value = "";
  var base_border_class_value = "";
  var base_text_class_value = "";

  // CSS class names which, when used, will change the appearance of form fields 
  // are passed on.
  error_border_class_value = "form_question_error_border";
  error_text_class_value = "form_question_error_text";
  base_border_class_value = "form_question_base_border";
  base_text_class_value = "form_question_base_text";

  // IF/ELSE IF statement which validates the data entered by the visitor is an 
  // email address versus a phone number.
  if ($(checked_element).attr("id") === "input-article-6-phone_email-email") {
    // IF/ELSE statement which removes the default message from the text field 
    // and resets the appearance of the border and text field if the visitor 
    // is adding or correcting data. Otherwise, the format of the email address 
    // is checked.
    if (validation_type === "start" && 
        $(field_element).val() === "Please enter a valid email address") {
      $(fieldset_element).fadeTo(50, 0.5);
      $(field_element).fadeTo(50, 0.5);
  
      setTimeout(
        function () {
          $(fieldset_element).removeClass();
          $(field_element).removeClass();
        }, 50
      );
  
      setTimeout(
        function () {
          $(fieldset_element).addClass(base_border_class_value);
          $(field_element).addClass(base_text_class_value);
          
          $(fieldset_element).fadeTo(100, 1);
          $(field_element).fadeTo(100, 1);
        }, 100
      );    
  
      $(field_element).val("");
    } else {
      if (validation_type === "reset" && 
          ($(field_element).val().length === 0) ||  
          ($(field_element).val().indexOf("@") === -1 || 
          ($(field_element).val().indexOf(".com") === -1 && 
            $(field_element).val().indexOf(".net") === -1 && 
            $(field_element).val().indexOf(".org") === -1 && 
            $(field_element).val().indexOf(".edu") === -1 && 
            $(field_element).val().indexOf(".mil") === -1)))  {
        $(fieldset_element).fadeTo(50, 0.5);
        $(field_element).fadeTo(50, 0.5);
    
        setTimeout(
          function () {
            $(fieldset_element).removeClass();
            $(field_element).removeClass();
          }, 50
        );
    
        setTimeout(
          function () {
            $(fieldset_element).addClass(error_border_class_value);
            $(field_element).addClass(error_text_class_value);
            
            $(fieldset_element).fadeTo(100, 1);
            $(field_element).fadeTo(100, 1);
          }, 100
        );
        
        $(field_element).val("Please enter a valid email address");
      }
    }
  } else if ($(checked_element).attr("id") === "input-article-6-phone_email-phone") {
    // A String variable which will hold the data entered into the text field 
    // is initialized.
    var phone_number_value = "";
    // The value of the text field is passed on.
    phone_number_value = $(field_element).val();
    
    // An Array which will hold the set of characters needed within a properly 
    // formatted phone number is intialized.
    var phone_number_search_values_Array = [];
    // The set of characters which will be searched for within the phone number 
    // given are passed on.
    phone_number_search_values_Array = [
      "(", 
      ")", 
      "-", 
      " "
    ];
    
    // A Number variable which will hold the location within the phone number 
    // that contain characters needed within a properly formatted phone number 
    // is initialized.
    var search_char_index_value;
    // 'search_char_index_value' is set to its default value, 0;
    search_char_index_value = 0;

    // A Number variable which will hold a loop incrementer is initialized.
    var inc;
    // The loop incrementer is set to its default value, 0;
    inc = 0;

    // WHILE loop which searches the phone number for the characters 
    // needed for a properly formatted phone number.
    while (inc < phone_number_search_values_Array.length)  {
      // Characters within a properly formatted phone number are searched for. 
      // The characters within 'phone_number_search_values_Array' are cycled through.
      search_char_index_value = phone_number_value.indexOf(phone_number_search_values_Array[inc], search_char_index_value);
      
      // The character this loop is searching for is removed from the given phone number data.
      phone_number_value = phone_number_value.replace(phone_number_search_values_Array[inc], "");

      // IF statement which increments the loop incrementer by 1 if all mentions of the characters 
      // have been removed.
      if (search_char_index_value === -1) {
        inc++;
      }
    }

    // IF/ELSE IF statement which removes the default message within the 
    // text field and resets the appearance of the border and text field 
    // if the visitor is adding or correcting data. Otherwise, 
    // the appearance of the border and text field reflects improper data.
    if ($(field_element).val() === "Please enter your phone number") {
      $(fieldset_element).fadeTo(50, 0.5);
      $(field_element).fadeTo(50, 0.5);

      setTimeout(
        function () {
          $(fieldset_element).removeClass();
          $(field_element).removeClass();
        }, 50
      );

      setTimeout(
        function () {
          $(fieldset_element).addClass(base_border_class_value);
          $(field_element).addClass(base_text_class_value);
          
          $(fieldset_element).fadeTo(100, 1);
          $(field_element).fadeTo(100, 1);
        }, 100
      );    

      $(field_element).val("");
    } else if (validation_type === "reset" && 
                (phone_number_val.length === 0 ||  
                (phone_number_val.length < 10 || 
                phone_number_val.length > 10))) {
      $(fieldset_element).fadeTo(50, 0.5);
      $(field_element).fadeTo(50, 0.5);
  
      setTimeout(
        function () {
          $(fieldset_element).removeClass();
          $(field_element).removeClass();
        }, 50
      );
  
      setTimeout(
        function () {
          $(fieldset_element).addClass(error_border_class_value);
          $(field_element).addClass(error_text_class_value);
          
          $(fieldset_element).fadeTo(100, 1);
          $(field_element).fadeTo(100, 1);
        }, 100
      );    
  
      $(field_element).val("Please enter your phone number");
    }
  }
}



function validateQuestionField(validation_type, question_value)  {
  // SWITCH statement which passes the data of the question to the correct code.
  switch (question_value) {
    case "div-form-article-1-question-1":
      validateTextFields(validation_type, question_value);
    break;

    case "div-form-article-1-question-3": 
      validateTextFields(validation_type, question_value)
    break;

    case "div-form-article-1-question-4":
      validateSelectField(validation_type, question_value);
    break;

    case "article-5-question-1":
      validateRadioButtonsTypeOne(validation_type, question_value);
    break;

    case "article-5-question-2":
      validateRadioButtonsTypeTwo(validation_type, question_value);
    break;
    
    case "article-6-question-1":
      validateName(validation_type, question_value);
    break;

    case "article-6-question-2":
      validateEmailPhone(validation_type, question_value);      
    break;

    case "article-6-question-3":
      validateRadioButtonsTypeTwo(validation_type, question_value);
    break;
  }
} 



function validateForm(form_element)  {
  // The HTML attribute 'id' of the form under processing is passed on.
  id_string = $(form_element).attr("id");

  // A String variable which will hold the CSS selector for the HTML 
  // element which refers to form under processing is initialized.
  var id_string = "";
  
  // A String variable which will hold the CSS selector which refers to the 
  // the questions contained within the form under processing is initialized.
  var form_questions_selector = "";
  // An Object variable which will hold the jQuery object which refers to the 
  // questions contained within the form under processing is initialized.
  var form_questions_elements = {};

  form_questions_selector = "#" + id_string + " .div-form-question";
  form_questions_elements = $(form_questions_selector);
  
  // A Boolean variable which serves as a flag used to identify all fields as 
  // complete is initialized. 'complete_field_flag' will be set to, 'true', 
  // if all fields are complete. Otherwise, 'complete_field_flag' will be 
  // set to, 'false'.
  var complete_field_flag;
  
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML elements, <input>, is initialized.
  var input_elements = {};
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element, <textarea>, is initialized.
  var textarea_element = {};
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element, <fieldset>, is initialized.
  // An Object variable which will hold the jQuery object which refers 
  // to the HTML element, '<select>, is initialized.
  var select_element = {};

  // An Object variable which will hold the jQuery object which refers 
  // to an individual '<input>' HTML element is initialized.
  var input_element = {};
  // A String variable which will hold the data given by a visitor into 
  // an individual, '<input>', HTML element is initialized.
  var input_element_val = "";
  // A String variable which will hold HTML metadata which describes 
  // the type of the individual, '<input>', HTML element used is 
  // initialized.
  var input_element_type = "";
  // A String variable which will hold the value of an, '<input>', 
  // HTML element of type, 'radio' is initialized.
  var radio_element_property = "";
  // A String variable which will hold the value of an, '<input>', 
  // HTML element of type, 'checkbox' is initialized.
  var checkbox_element_property = new String();
  
  // A Number variable which will hold a loop incrementer is initialized.  
  var inc = new Number();

  // A loop incrementer is set to its initial value, '0'.
  inc = 0;

  // The questions within the form under processing are checked for errors. 
  $(form_questions_elements).each(
  // This loop runs through every input type contained within an 
  // individual form type.
    function () {
      // The following flags default to 'false', showing that the fields 
      // contained with the form under processing to not be complete and 
      // also contain unchecked data.
      complete_field_flag = false;
      input_element_checked_flag = false;
      
      // jQuery objects which hold form data are passed on.
      input_elements = $(this).find("fieldset").find("input");
      textarea_element = $(this).find("textarea");
      select_element = $(this).find("select");
      
      $(input_elements).each(
        function () {
          // The jQuery element which contains the HTML metadata 
          // for the, '<input>, HTML element under processing 
          // is passed on.
          input_element = this;
          input_element_val = $(input_element).val();
          input_element_type = $(input_element).attr("type");

          // IF/ELSE statement which verifys the validity of the data within 
          // the, '<input>', field under processing.
          if ((input_element_type === "text" || 
              input_element_type === "email" ||
              input_element_type === "tel") && 
              (input_element_val.length > 0) && 
              (input_element_val !== "Please enter your first name" && 
               input_element_val !== "Please enter a valid email address" &&
               input_element_val !== "Please enter your phone number")) {
            
            // If the current field under processing is of the type, 'text', 
            // 'email', or 'tel', the field contains some text, and the default 
            // message has been changed, the field is judged to be valid.
            complete_field_flag = true;
          } else if (input_element_type === "radio")  {
         
            // If the '<input>' field has been clicked, the value, 'true', 
            // will be passed on.
            radio_element_property = $(input_element).prop("checked");
            
            // IF statement which passes on the value, 'true', to the flag 
            // which determines if the '<input>' HTML element has been clicked.
            if (radio_element_property === true) {
              input_element_checked_flag = true;
            }
          } else if (input_element_type === "checkbox") {
            // If the '<input>' field has been checked, the value, 'true', 
            // will be passed on.
            checkbox_element_property = $(input_element).prop("checked");

            // IF statement which passes on the value, 'true', to the flag 
            // which determines if the '<input>' HTML element has been checked.
            if (checkbox_element_property === true)  {
              input_element_checked_flag = true;
            } 
          } else if (input_element_type === "range") {
            complete_field_flag = true; 
          } 
        }
      );
      
      // IF statement which checks form fields using '<textarea>' and '<select>'.
      if ($(textarea_element).val() !== undefined) {
        complete_field_flag = true;
      } else if ($(select_element).val() !== undefined)  {
        // IF statement which sets the flag which states if a '<select>' setting 
        // has been changed from the 'default' state.
        if ($(select_element).val() !== "default")  {
          complete_field_flag = true;
        }
      }

      // The flag which states if the '<input>' HTML element contains proper data 
      // is pased on to the place within 'complete_field_flag_Array' which matches 
      // the form question within the form this function is processing.
      complete_field_flag_Array[inc] = complete_field_flag;

      // The loop incrementer has its value increased by 1.
      inc++; 
    }
  );

  // FOR loop which cycles through the values of 'complete_field_flag_Array' 
  // to determine if all data within the form have proper data
  for (inc = 0; inc < complete_field_flag_Array.length; inc++)  {
    // IF statement which passed on the value, 'false', if any of the 
    // fields within the form under processing contain improper data.
    if (complete_field_flag_Array[inc] === false) {
      complete_field_flag = false;
    }
  }

  // IF statement which will generate an error message alerting the visitor 
  // to the improper data input into the form.
  if (complete_field_flag === false) {
    // A String variable which will hold HTML used to hold an alert message 
    // meant for the visitor is initialized.
    var alert_div_element = "";
    
    // A String variable which will hold the CSS selector which refers to the 
    // the 'Section' holding the form under procesing is initialized.
    var article_selector = "";
    // An Object variable which will hold the jQuery object which refers to the 
    // 'Section' holding the form under processing is initialized.
    var article_element = {};

    // The HTML meant to render the alert message meant for the visitor is passed on.
    alert_div_element = 
      "<div id=\"#form-question-alert\">" + 
      "  <div>" + 
      "    <div>" + 
      "      <span>Alert</span>" + 
      "      <p>This form needs more information than you provided.</p>" +
      "      <p>Please check the question fields that are surrounded by red borders.</p>" +  
      "      <p>Click the screen to close this alert.</p></div>" + 
      "    </div>" + 
      "  </div>" + 
      "</div>";

    // The CSS selector which refers to the 'Section' holding the form under 
    // processing is passed on.
    article_selector = "#article-content-" + id_string.slice(-1);
    // The jQuery object which refers to the 'Section' holding the form under 
    // processing is passed on.
    article_element = $(article_selector);

    // The HTML contained within, 'alert_div_element', is added to the 'Section' 
    // containing the form. The HTML is added at the beginning of the code 
    // for that 'Section'.
    $(article_element).prepend(alert_div_element);

    // The alert message fades out of visiblity once it is clicked by the visitor.
    $("##form-question-alert").click(
      function () {
        $(this).fadeTo(400, 0, 
          function () {
            $(this).detach();
          }
        );
      }
    );
  }
}



function setRateValue() {
  // A String variable which will hold the name of the GET variable which contains 
  // the calculated sliding scale rate is initialized.
  var rate_value_search_string = "";
  // The name of the GET variable which will be searched for within the URL is passed on.
  rate_value_search_string = "rateValue=";

  // A Number variable which will the location within the URL which the GET 
  // variable, 'rateValue', lies is initialized.
  var rate_value_index_value;

  // A String variable which will hold the value of the GET variable contained 
  // within the URL is initialzed.
  var rate_value_value = "";

  // A String variable which will contain the URL is initialized.
  var url_string = "";
  // The URL is passed on.
  url_string = window.location.href;
  
  // The location within the URL in which the value of the GET variable referring to the 
  // calculated rate value is passed on.
  rate_value_index_value = url_string.indexOf(rate_value_search_string) + rate_value_search_string.length;
  
  // The calculated rate value is extracted from the URL.
  rate_value_value = url_string.slice(rate_value_index_value, url_string.length);
  
  // IF/ELSE statement which displays the calculated value. The value, 'No Cost', 
  // is used if the value within the URL is '0'. Otherwise, the value used is 
  // the one contained within the URL string.
  if (rate_value_value === "0")  {
    // A String variable which will hold the CSS selector which refers to the 
    // block of content which holds the calculated value is initialized.
    var content_block_selector = "";
    // The CSS selector which refers to the block of content which holds the 
    // calculated value is passed on.
    content_block_selector = "#div-content-block-5-desc-4 > div > div";

    // An Object variable which will hold the jQuery object which refers to the 
    // block of content which holds the calculated value is initialized.
    var content_block_element = {};
    // The jQuery object which refers to the block of content which holds the calculated 
    // value is passed on.
    content_block_element = $(content_block_selector);
    
    // A String variable which holds the name of a CSS class used to format the 
    // block of content holding the calcuated value of 'No Cost' is intialized.
    var no_cost_class_value = "";
    // The name of a CSS class used to format the block of content holding the text, 
    // 'No Cost', is passed on.
    no_cost_class_value = "div-content-no_cost";
    
    // The HTML within the content block holding the calculated value is replaced with the 
    // text 'No Cost'.
    $(content_block_element).text("No Cost");

    // The copy contained within the block holding the calculated value is restyled.
    $(content_block_element).removeClass();
    $(content_block_element).addClass(no_cost_class_value);
  } else  {
     // A String variable which will hold the CSS selector which refers to the 
    // block of content which holds the calculated value is initialized.
    var content_block_selector = "";
    // The CSS selector which refers to the block of content which holds the 
    // calculated value is passed on.
    content_block_selector = "#div-content-block-5-desc-4 > span > span > sup + span";

    // An Object variable which will hold the jQuery object which refers to the 
    // block of content which holds the calculated value is initialized.
    var content_block_element = {};
    // The jQuery object which refers to the block of content which holds the calculated 
    // value is passed on.
    content_block_element = $(content_block_selector);
    
    $(content_block_element).text(rate_value_value);
  }
}



function layoutBackgrounds()  {
  // An Array which will hold the dimensions of the browser is initialized.
  var browser_dimensions_Array = [];
  
  // A Number variable which will hold the width of the sections of content 
  // within a section is initialized.
  var article_width;
  
  // A Number variable which will hold the height of the sections of content within a 
  // section is initialized.
  var article_height;

  // The dimensions of the browser window is passed on.
  browser_dimensions_Array = getDisplaySize();

  // The width of the browser window is passed on.
  article_width = browser_dimensions_Array[0];
  
  // The height of the browser window is passed on.
  article_height = browser_dimensions_Array[1];

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
  
  // The CSS selector which refers to all of the sections of content within the webpage 
  // is passed on.
  all_sections_selector = "article";
  // The CSS selector which refers to an individual section of content within the webpage 
  // is passed on.
  section_selector = "#article-content-";
  // The CSS selector which refers to blocks of content within a section 
  // is passed on.
  content_blocks_selector = ".div-content";

  // The jQuery object which refers to the HTML elements containing sections of content 
  // is passed on.
  all_sections_elements = $(all_sections_selector);

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

  // A String variable which will hold the CSS selector which refers to the HTML element containing 
  // the background images is initialized.
  var backgrounds_selector = "";

  // The CSS selector whicih refers to the HTML element containing the background images 
  // is passed on.
  backgrounds_selector = "#section-backgrounds";
  
  // An Object variable which will hold the jQuery object which refers to the HTML element 
  // containing the backgrounds images is initialized.
  var backgrounds_element = {};

  // The jQuery object which refers to the HTML element which hold the background images 
  // is passed on.
  backgrounds_element = $(backgrounds_selector);

  // A Number variable which will hold the height of the webpage is initialized.
  var webpage_height;

  // The height of the webpage is passed on. That value is calculated by multiplying the 
  // value of 'article_height' by 'num_of_sections'.
  webpage_height = article_height * num_sections;
  
  // An Object variable which will hold values of CSS properties which will define the 
  // width and height of the HTML element holding the background images is initialized.
  var backgrounds_css = {};

  // The width and height of the webpage are passed on.
  backgrounds_css = {
    width: article_width, 
    height: webpage_height
  };
  
  // IF statement which modifies the width of the HTML element holding if the browser 
  // is a mobile browser.
  if (article_width <= 1024)  {
    backgrounds_css.width = $(window).width();
  }

  // The dimensions of the webpage are passed on to the HTML element holding 
  // the background images.
  $(backgrounds_element).css(backgrounds_css);

  // A Number variable which will hold a value which matches the width of the background 
  // image for an individual section is initialized.
  var background_width;
  // A Number variable which will hold a value which matches the height of the background 
  // image for an individual section is initialized.
  var background_height;

  // A String variable which will hold the path used by the loop to load a background 
  // image for the section the loop is processing is initialized.
  var background_image_path = "";

  // A Number variable which will hold the value of the CSS property, 'top'. The value 
  // will place each background underneath each section of content.
  var background_top_value;

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
    // by 'getDisplaySize'.
    background_width = num_content_blocks * article_width;
    // The height of the background image for this section is passed on.
    background_height = article_height;

    // A String variable which will hold the prefix of the path referring to the background 
    // image the loop is processing is initialized.
    background_image_path = "";
    
    // The prefix of the path the background images are stored is passed on.
    background_image_path = "url('/amelia/assets/img/backgrounds/";

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

    background_top_value = (inc * background_height).toString() + "px"

    background_css = {
      width: background_width, 
      height: background_height, 
      top: background_top_value, 
      backgroundImage: background_image_path
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



function getNumOfSections() {
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

  // A Number variable which will hold the number of sections of content within 
  // the webpage is initialized.
  var num_of_sections;

  // The number of sections within the webpage is passed on. 
  // 
  // The number of sections is discovered by counting the number of the HTML elements 
  // '.article-content' within the HTML.
  num_of_sections = $(article_elements).length;

  // The count of the number of sections is passed back.
  return num_of_sections;
}



function setWebpageHeight() {
  // A String variable which will hold the CSS selector referring to all content 
  // on the webpage is initialized.
  var main_selector = "";
  
  // An Object variable which will hold a jQuery object referring to the HTML element 
  // using the CSS selector 'article' is initialized.
  var main_element = {};

  // The CSS selector for the HTML element, '<article>' is passed on.
  main_selector = "main";
  
  // The jQuery object which refers to the HTML element '<article>' is passed on.
  main_element = $(main_selector);
  
  // An Array which will hold the dimensions of the browser window is initialized.
  var browser_dimensions_Array = [];
  // A Number variable which will hold the height of the browser window is initialized.
  var article_height;
  
  // A Number variable which will hold the height of the webpage is initialized.
  var webpage_height;

  // The dimensions of the browser are passed on.
  browser_dimensions_Array = getDisplaySize();

  // The height of the browser window is passed on.
  article_height = browser_dimensions_Array[1];

  // The number of sections within the webpage is passed on. 
  num_of_sections = getNumOfSections();

  // The total height of the webpage is calculated by multiplying the height of the 
  // browser window by the number of sections. 
  webpage_height = article_height * num_of_sections;

  // The height of the HTML element '<main>' is set to the value of 'webpage_height'.
  $(main_element).innerHeight = webpage_height;
} // END of FUNCTION setWebpageHeight



function initializePage()  {
  // The height of the webpage is set.
  setWebpageHeight();

  // The section and block of content which the values of the variables within the URL 
  // hash refer to are made viewable.
  setTimeout( 
    function () {
      layoutBackgrounds();
      centerBrowser();
      positionContent();
    }, 10
  );
  
} // END of FUNCTION initializePage