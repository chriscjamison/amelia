$(document).ready( 
  function ()	{
    var time_value = new Number();
    var url_pathname = new String();
    var url_href = new String();
    var base_url_value = new String();
    var rate_value_search_string = new String();

    time_value = 400;
    url_pathname = window.location.pathname;
    url_href = window.location.href;
    base_url_value = "http://localhost/amelia/sc/";
    rate_value_search_string = "rateValue=";

    setupPage();

    if (url_pathname === "/amelia/sc/" || 
        url_pathname === "/amelia/sc/index.htm")  {
      animateInfoElement();
    } else {
      animatePageElements();
    }
    
    if (url_href.indexOf(rate_value_search_string) !== -1) {
      setRateValue(rate_value_search_string);
    }

    $("#nav-link").on("mouseover", 
      function () {
        navLinkHoverState("hover");
      }
    );

    $("#nav-link").on("mouseout", 
      function () {
        navLinkHoverState("base"); 
      }
    );
    
    $("#nav-link").on("click", 
      function () {
        animateSideNav();
      
        navLinkHoverState("click");
      }
    );
    
   $("#options > span").on("mouseenter", 
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
      }
    );

    $("#options > span").on("mouseleave", 
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
      }
    );
    
    $("#options > span").on("click",
      function () {
        var option_element = new Object();

        option_element = this;
        
        animateSideNav();
        
        setTimeout(
          function () {
            navLinkHoverState("base");
            activateSideNav(option_element);
          }, (time_value * 2.5));
      }
    );
    
    $(".sctn_nav > div > span").on("mouseover",
			function () {
        var sctn_nav_div_selector = new String();
        var sctn_nav_div_element = new Object();

        var sctn_nav_menu_element = new Object();

        var background_position_value = new String();
        
        sctn_nav_menu_element = this;

        sctn_nav_div_selector = "#" + $(sctn_nav_menu_element).parent().parent().attr("id") + " > div > div";
        sctn_nav_div_element = $(sctn_nav_div_selector);

        background_position_value = "0px 0px";
        
        if ($(sctn_nav_menu_element).css("backgroundPosition") === background_position_value)  {
          animateSctnNav(sctn_nav_menu_element);
        }
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
			function () {
        var sctn_nav_div_selector = new String();
        var sctn_nav_div_element = new Object();

        var sctn_nav_menu_element = new Object();

        var background_position_value = new String();
        var display_value = new String();
        
        sctn_nav_menu_element = this;

        sctn_nav_div_selector = "#" + $(sctn_nav_menu_element).parent().parent().attr("id") + " > div > div";
        sctn_nav_div_element = $(sctn_nav_div_selector);

        background_position_value = "0px 0px";
        display_value = "none";

        if ($(sctn_nav_div_element).css("display") === display_value && 
            $(sctn_nav_menu_element).css("backgroundPosition") !== background_position_value)  {
          animateSctnNav(sctn_nav_menu_element);
        }
			}
		);

    $(".sctn_nav > div > span").on("click",
			function () {
        var sctn_nav_menu_element = new Object();

        sctn_nav_menu_element = this;

        animateSctnNavLinks(sctn_nav_menu_element);
        
        animateSctnNav(sctn_nav_menu_element);
			}
		);

    $("input#sctn_1-start").on("click", 
      function () {
        window.location.href = base_url_value + "sctn/1/page_1.htm";
      }
    );
    
    $("#sctn_1-no_1 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "sctn_1-no_1");
      }
    );

    $("#sctn_1-no_1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "sctn_1-no_1");
      }
    );

    $("#sctn_1-no_3 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "sctn_1-no_3");
      }
    );

    $("#sctn_1-no_3 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "sctn_1-no_3");
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "sctn_1-no_4");
      }
    );

    $("#sctn_1-no_4 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "sctn_1-no_4");
      }
    );

    $("input#sctn_1-prev, input#sctn_1-next").on("click", 
      function () {
        swapQuestions("sctn_1");
      }
    );
    
    $("input#sctn_5-start").on("click", 
      function () {
        window.location.href = base_url_value + "sctn/5/page_1.htm";
      }
    );
    
    $("#sctn_5-no_1 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "sctn_5-no_1");
      }
    );

    $("#sctn_5-no_1 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "sctn_5-no_1");
      }
    );

    $("#sctn_5-no_2 > fieldset").mouseleave(
      function () {
        validateQuestionField("reset", "sctn_5-no_2");
      }
    );

    $("#sctn_5-no_2 > fieldset").mouseenter(
      function () {
        validateQuestionField("start", "sctn_5-no_2");
      }
    );
    
    $("input#sctn_5-cntct").click(
      function () {
        window.location.href = base_url_value + "sctn/6/page_1.htm";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.href = base_url_value + "sctn/6/page_1.htm";
      }
    );

    $("input#sctn_6-map").click(
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-no_1 > fieldset").mouseenter( 
      function () {
        validateQuestionField("start", "sctn_6-no_1");
      }
    );

    $("#sctn_6-no_1 > fieldset").mouseleave( 
      function () {
        validateQuestionField("reset", "sctn_6-no_1");
      }
    );

    $("#sctn_6-no_2 > fieldset").mouseenter( 
      function () {
        validateQuestionField("start", "sctn_6-no_2");
      }
    );

    $("#sctn_6-no_2 > fieldset").mouseleave( 
      function () {
        validateQuestionField("reset", "sctn_6-no_2");
      }
    );

    $("input[name='phone_email']").change( 
      function () {
        var field_selector = new String();
        var fieldset_selector = new String();

        var field_element = new Object();
        var fieldset_element = new Object();
        
        var css_1 = new Object();
        var css_2 = new Object();

        field_selector = "#sctn_6-field-email";
        field_element = $(field_selector);

        fieldset_selector = "#sctn_6-no_2 > fieldset";
        fieldset_element = $(fieldset_selector);

        css_1 = {
          color: "#000"
        };

        css_2 = {
          borderColor: "#cfd7a3"
        };

        $(field_element).css(css_1);
        $(fieldset_element).css(css_2);
        $("input#sctn_6-field-email").val("");
        // validateQuestionField("change", "sctn_6-no_2");
      }
    );

    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        swapQuestions("sctn_6");
      }
    );

    $("input#sctn_6-sbmt").click(
      function () {
        window.location.href = base_url_value + "sctn/6/page_2.htm";
      }
    );

    $(window).on("load", 
      function () {
        if ((url_pathname.indexOf("/1/") !== -1 && url_pathname.indexOf("page_1.htm") !== -1)) {
          setTimeout(
            function () {
              swapQuestions("sctn_1");
            }, (time_value * 1.25));
        }

        if ((url_pathname.indexOf("/5/") !== -1 && url_pathname.indexOf("page_1.htm") !== -1)) {
          setTimeout(
            function () {
              swapQuestions("sctn_5");
            }, (time_value * 1.25));
        }

        if ((url_pathname.indexOf("/6/") !== -1 && url_pathname.indexOf("page_1.htm") !== -1)) {
          setTimeout(
            function () {
              swapQuestions("sctn_6");
            }, (time_value * 1.25));
        }
      });
  }
);

