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
        var nav_selector = new String();
        var nav_element = new Object();
        
        var nav_left_value = new String();
        
        nav_selector = "nav";
        nav_element = $(nav_selector);

        nav_left_value = $(nav_element).css("left");

        if (nav_left_value === "0px") {
          setTimeout(
            function () {
              navLinkHoverState("base");
            }, (time_value * 2.5)
          );
        } else {
          navLinkHoverState("click");
        }
        
        animateSideNav();        
      }
    );

    $("#options > a").on("mouseenter", 
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
      }
    );

    $("#options > a").on("mouseleave", 
      function () {
        var option_element = new Object();

        option_element = this;

        animateMenuOptions(option_element);
      }
    );
    
    $("#options > a").on("click",
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

    $("#next-sctn").on("click", 
      function () {
        animateInfoElement();
      }
    );
    
    $(".sctn_nav > div > span").on("mouseover",
			function () {
        var sctn_nav_selector = new String();
        var sctn_nav_element = new Object();

        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_element = $(sctn_nav_selector);

        if ($(sctn_nav_element).css("backgroundPosition") !== "0px -105px")  {
          animateSctnNav(sctn_nav_element);
        }
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
			function () {
        var sctn_nav_selector = new String();
        var sctn_nav_element = new Object();
        
        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_element = $(sctn_nav_selector);
        
        if ($(sctn_nav_element).css("backgroundPosition") !== "0px -105px")  {
          animateSctnNav(sctn_nav_element);
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
        animateFormPanes();
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

    $("#sctn_6-no_2 > fieldset > p > input[type='radio']").change( 
      function () {
        $("input#sctn_6-field-email").val("");
        $("input#sctn_6-field-email").focus();
      }
    );

    $("#sctn_6-no_3 > fieldset").mouseenter( 
      function () {
        validateQuestionField("start", "sctn_6-no_3");
      }
    );

    $("#sctn_6-no_3 > fieldset").mouseleave( 
      function () {
        validateQuestionField("reset", "sctn_6-no_3");
      }
    );

    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        animateFormPanes();
      }
    );

    
    $("form#form-sctn_1, form#form-sctn_5, form#form-sctn_6").submit(
      function (event) {
        var form_complete_flag = new Boolean;
  
        form_complete_flag = validateForm();

        if (form_complete_flag === false) {
          var alert_div_element = new String();

          var cntainr_selector = new String();
          var cntainr_element = new Object();

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

          cntainr_selector = "#cntainr";
          cntainr_element = $(cntainr_selector);

          $(cntainr_element).prepend(alert_div_element);

          $("#alrt").click(
            function () {
              $(this).fadeTo(time_value, 0, 
                function () {
                  $(this).detach();
                }
              );
            }
          );

          event.preventDefault();
        }
      }
    );

    $(window).on("load", 
      function () {
        var page_dimensions_Array = new Array();
        
        var body_height = new Number();

        var animate_page_flag = new Boolean();

        setupPage();

        page_dimensions_Array = parseWindowDimensions();

        body_height = page_dimensions_Array[1];


        if (url_pathname === "/amelia/sc/" || 
            url_pathname === "/amelia/sc/index.htm") {
          if (window.navigator.userAgent.indexOf("Mobile") === -1 && 
              window.navigator.userAgent.indexOf("Tablet") === -1) {
            if (body_height <= 1308)  {
              animate_page_flag = false;
            } 
          }
        }

        if (animate_page_flag === true) {
          animatePageElements();
        } else {
          animateInfoElement();
        }
        
        if (url_href.indexOf(rate_value_search_string) !== -1) {
          setRateValue(rate_value_search_string);
        }
      }
    );

    $(window).on("resize", 
      function () {
        setupPage();
      }
    );
  }
);

