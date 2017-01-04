var time_value = new Number();
var window_margin = new Number();

var url_string = new String();
var url_hash = new String();

time_value = 400;
window_margin = 150;

url_string = window.location.href;
url_hash = window.location.hash;

$(document).ready(
  function () {
    if (url_string.indexOf("rateValue") != -1) {      
      $("#sctn_5-desc-6 > span > span > sup + span").text(url_string.slice((url_string.indexOf("rateValue") + 10), url_string.length));
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
        
        determineCopyElements();
        animateSideNav();
        
        setTimeout(
          function () {
            navLinkHoverState("base");
            activateSideNav(option_element);
          }, (time_value * 1.5));
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
    
    $("#sctn_1-prev, #sctn_1-next").click(
      function () {
        animateFormPanes("sctn_1");
      }
    );

    $("input#sctn_1-start").on("click", 
      function () {
        window.location.hash = "#sctn_1?pos=1";

        $("#form-sctn_1 .form-page_1").css("display", "block");
        $("#form-sctn_1 .form-page_1").fadeTo(time_value, 1);
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1";
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
        var url_hash = new String();

        url_hash = window.location.hash;
        
        setupPage();
        // window.alert("url_hash = " + url_hash);
        if (url_hash === "" || 
            url_hash === "#sctn_main")  {
          animateInfoElement();
        } else {
          setTimeout(
            function () {
              setPageInitialLocation(url_hash);
            }, (time_value / 2)
          ); 
        }
      }
    );
    

    $(window).on("scroll", 
      function () {
        var current_position = new Number();

        var info_selector = new String();
        var info_element = new Object();

        var info_css_opacity_val = new String();
        
        current_position = $(window).scrollTop();
        
        info_selector = "#info";
        info_element = $(info_selector);

        info_css_opacity_val = $(info_element).css("opacity");
        
        setURL();

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
          animatePageElements(); 
        }
        
        if (url_hash.indexOf("#sctn_6?pos=1") > -1 && 
            url_hash.indexOf("copyValues") === -1)  {
          $("#form-sctn_6 .form-page_1").css("display", "block");
          $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
        }
      }
    );
    
    $(window).on("resize", 
      function () {
        setupPage();
        setURL();
        animatePageElements();
      }
    );
  }
);