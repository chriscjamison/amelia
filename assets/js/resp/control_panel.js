var time_value = new Number();
var window_margin = new Number();

var url_string = new String();
var url_hash = new String();

var rate_value_search_string = new String();

time_value = 400;
window_margin = 150;

url_string = window.location.href;
url_hash = window.location.hash;

rate_value_search_string = "rateValue=";

$(document).ready(
  function () {
    if (url_string.indexOf(rate_value_search_string) !== -1) {      
      setRateValue(rate_value_search_string);
    }

    var form_selectors = new String();

    form_selectors = "#form-sctn_6 .form-page_1";

    if (url_hash === "#sctn_6?pos=1" && 
        url_hash.indexOf("copyValues") === -1)  {
      $(form_selectors).css("display", "block");
      $(form_selectors).fadeTo(time_value, 1);
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
        determineCopyElements();
        
        animateSideNav();
      
        navLinkHoverState("click");
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
        
        determineCopyElements();
        animateSideNav();
        
        setTimeout(
          function () {
            navLinkHoverState("base");
            activateSideNav(option_element);
          }, (time_value * 2.5));
      }
    );

    $("#prev-sctn, #next-sctn").on("click", 
      function () {
// window.alert("$(this).attr(\"id\") = " + $(this).attr("id"));
        interSectionNav(this);
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
        
        if ($(sctn_nav_element).css("backgroundPosition") !== "0px 0px")  {
          animateSctnNav(sctn_nav_element);
        }
			}
		);

    $(".sctn_nav > div > span").on("click",
			function () {
        var sctn_nav_element = new String();
        var sctn_nav_link_element = new String();
        
        sctn_nav_element = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_link_element = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        animateSctnNavLinks(sctn_nav_link_element);
        animateSctnNav(sctn_nav_element);
			}
		);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var current_sctn_nav_id = $(this).parent().parent().parent().attr("id");
				var current_sctn_nav_id_string = "#" + current_sctn_nav_id + " > div > span";
				var current_sctn_nav_element = "#" + current_sctn_nav_id + " > div > div";
				         
        animateSctnNavLinks(current_sctn_nav_element);
        animateSctnNav(current_sctn_nav_id_string);
      }
		);
    
    $("input#sctn_1-start").on("click", 
      function () {
        window.location.hash = "#sctn_1?pos=1";

        animateFormPanes();
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

    $("#sctn_1-prev, #sctn_1-next").click(
      function () {
        animateFormPanes();
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1";
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
        window.location.hash = "#sctn_6?pos=1";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.hash = "#sctn_6?pos=1";
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
        var field_selector = new String();
        var fieldset_selector = new String();
        var radio_selector = new String();

        var field_element = new Object();
        var fieldset_element = new Object();
        var radio_elements = new Object();

        var radio_element = new Object();
        var radio_element_property = new String();
        var radio_element_num = new Number();

        var inc = new Number();

        var css_1 = new Object();
        var css_2 = new Object();

        field_selector = "#sctn_6-field-email";
        field_element = $(field_selector);

        fieldset_selector = "#sctn_6-no_2 > fieldset";
        fieldset_element = $(fieldset_selector);

        $("input#sctn_6-field-email").val("");
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

    $("input#sctn_6-map").click(
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        animateFormPanes();
      }
    );

    $("#form-sctn_1, #form-sctn_5, #form-sctn_6").submit(
      function (event) {
        var form_complete_flag = new Boolean;
        
        var id_string = new String();
        var section_value = new String();

        var form_selector = new String();
        var form_element = new Object();

        id_string = $(this).attr("id");
        section_value = id_string.substring(5);
        
        form_complete_flag = validateForm(section_value);

        if (form_complete_flag === false) {
          var alert_div_element = new String();

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
        var url_hash = new String();
        var page_dimensions_Array = new Array();
        var window_width = new Number();

        url_hash = window.location.hash;
        page_dimensions_Array = parseWindowDimensions();
        window_width = page_dimensions_Array[0];
        
        setupPage();

        if (url_hash === "" || 
            url_hash === "#sctn_main")  {
          if (window_width > 980) {
            animateInfoElement();
          }
        }

        
      }
    );
    

    $(window).on("scroll", 
      function () {
        var current_position = new Number();
        var url_hash = new String();

        var info_selector = new String();
        var info_element = new Object();

        var info_css_opacity_val = new String();
        
        current_position = $(window).scrollTop();
        url_hash = window.location.hash;

        info_selector = "#info";
        info_element = $(info_selector);

        info_css_opacity_val = $(info_element).css("opacity");
        
        setURL(current_position, url_hash);

        if (current_position === 0 && 
            info_css_opacity_val === "0") {
          animateInfoElement();
        }
      }
    );
    
    $(window).on("hashchange",
      function () {
        var url_hash = new String();

        url_hash = window.location.hash;
        
        if (url_hash.indexOf("copyValues") === -1 && 
            url_hash !== "") {
          var nav_selector = new String();
          var nav_element = new Object();
          var nav_width_string = new String();
          var nav_width_val = new Number();
          var nav_left_string = new String();
          var nav_left_val = new Number();
          var px_search_string = new String();
          var px_search_index_num = new Number();

          nav_selector = "nav";
          nav_element = $(nav_selector);
          
          nav_width_string = $(nav_element).css("width");
          nav_left_string = $(nav_element).css("left");

          px_search_string = "px";
          px_search_index_num = nav_width_string.indexOf(px_search_string);

          nav_width_val = nav_width_string.substring(0, px_search_index_num);
          nav_width_val = parseInt(nav_width_val);

          px_search_index_num = nav_left_string.indexOf(px_search_string);
          nav_left_val = nav_left_string.substring(1, px_search_index_num);
          nav_left_val = parseFloat(nav_left_val);
          nav_left_val = Math.round(nav_left_val);

          if (nav_width_val === nav_left_val) {
            var current_position = new Number();

            current_position = $(window).scrollTop();
            
            animatePageElements();

            setTimeout(
              function () {
                displayVerticalNav();
              }, (time_value * 1.25)
            ); 
          }
        } else if (url_hash === "") {
          setTimeout(
            function () {
              displayVerticalNav();
            }, (time_value * 2.5)
          ); 
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