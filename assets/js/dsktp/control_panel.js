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
    
    // window.alert("url_pathname = " + url_href);
    if (url_href.indexOf(rate_value_search_string) !== -1) {   
      // window.alert("rate_value_search_string = " + rate_value_search_string);   
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


        
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        interSectionNav(this);
      }
    );
    

    $(".sctn_nav > div > span").on("mouseover",
			function () {
        var sctn_nav_selector = new String();

        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";

        if ($(sctn_nav_selector).css("backgroundPosition") !== "0px -105px")  {
          animateSctnNav(sctn_nav_selector);
        }
			}
		);

    $(".sctn_nav > div > span").on("mouseout",
			function () {
        var sctn_nav_selector = new String();
        var sctn_nav_link_selector = new String();

        var sctn_nav_element = new Object();
        var sctn_nav_link_selector = new Object();

        var css_1 = new Object();

        sctn_nav_selector = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctn_nav_link_selector = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        sctn_nav_element = $(sctn_nav_selector);
        sctn_nav_link_element = $(sctn_nav_link_selector);

        css_1 = {
          backgroundPosition: "0px 0px"
        };

        if ($(sctn_nav_link_element).css("display") === "none" && 
            $(sctn_nav_element).css("backgroundPosition") === "0px 0px") {
          $(sctn_nav_element).css(sctnNavBaseCSS);
        } else {
          if ($(sctn_nav_element).css("backgroundPosition") !== "0px -105px")  {
            animateSctnNav(sctnNavElement);
          }
        }
			}
		);

    $(".sctn_nav > div > span").on("click",
			function () {
        var sctnNavVisibleCSS = new Object();
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();
        
        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        animateSctnNavLinks(sctnNavLinkElement);
        
        animateSctnNav(sctnNavElement);
			}
		);

		$(".sctn_nav > div > div > a").on("click",
			function () {
				var currentSctnNavID = $(this).parent().parent().parent().attr("id");
				var currentSctnNavIDString = "#" + currentSctnNavID + " > div > span";
				var currentSctnNavElement = "#" + currentSctnNavID + " > div > div";
				         
        animateSctnNavLinks(currentSctnNavElement);
        animateSctnNav(currentSctnNavIDString);
      }
		);
    
    $("input#sctn_1-start").on("click", 
      function () {
        formData("start");
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        formData("start");
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

        $("#form-sctn_6 .form-page_1").css("display", "block");
        $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
      }
    );

    $("input#sctn_6-map").click(
      function () {
        window.location.href = "https://www.bing.com/mapspreview?&cp=30.303075~-97.745526&lvl=19&dir=106.769&pi=1.662&style=x&mo=z.0&osid=a9917ca0-d3c5-4f1d-8d63-06e918dccf3d&v=2&sV=2&form=S00027";
      }
    );
    
    $("#sctn_6-prev, #sctn_6-next").click(
      function () {
        animateFormPanes("sctn_6");
      }
    );

    $(window).on("load", 
      function () {
        var url_pathname = new String();

        url_pathname = window.location.pathname;
        // window.alert("url_pathname = " + url_pathname);

        // window.alert("url_pathname.indexOf(\"/1/\") = " + url_pathname.indexOf("/1/"));
        // window.alert("url_pathname.indexOf(\"page_1.htm\") = " + url_pathname.indexOf("page_1.htm"));
        if ((url_pathname.indexOf("/1/") !== -1 && url_pathname.indexOf("page_1.htm") !== -1)) {
          setTimeout(
            function () {
              formData("set_1");
            }, (time_value * 1.25));
        }
      });
  }
);

