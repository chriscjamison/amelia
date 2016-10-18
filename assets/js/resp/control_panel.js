<<<<<<< HEAD
var time_value = new Number(400);
var window_margin = new Number(150);
var wndow_height = new Number();
var current_position = new Number();

$(document).ready(
  function () {
    var url_string = new String();
    var url_hash = new String();

    url_string = window.location.href;
    url_hash = window.location.hash;

    if (url_string.indexOf("rateValue") != -1) {      
      $("#sctn_5-desc-6 > span > span > sup + span").text(url_string.slice((url.indexOf("rateValue") + 10), url_string.length));
    }

    var form_selectors = new String();

    form_selectors = "#form-sctn_6 .form-page_1";

    if (url_hash === "#sctn_6?pos=1&bkgrnd=base" && 
        url_hash.indexOf("copyValues") === -1)  {
      $(form_selectors).css("display", "block");
      $(form_selectors).fadeTo(time_value, 1);
    }
    
    $("#nav-link").on("mouseover", 
      function () {
        navLinkHoverState();
      }
    );

    $("#nav-link").on("mouseout", 
      function () {
        navLinkHoverState(); 
      }
    );
    
    $("#nav-link").on("click", 
      function () {
        slideNav();
        
        navLinkHoverState();
      }
    );
    
    $("#options > span").on("click",
      function () {
        var section_value = new String();

        var time_value_1 = new Number();
        var time_Value_2 = new Number();
        var time_value_3 = new Number();
        
        var options_1_css = new Object();
        var options_2_css = new Object();

        options_1_css = {
          "backgroundColor": "#ccc", 
          "color": "#000"
        };

        options_2_css = {
          "backgroundColor": "#000", 
          "color": "#fff"
        };

        section_value = $(this).attr("id");

        time_value_1 = time_value / 4;
        time_value_2 = time_value / 2;
        time_value_3 = time_value * 1.5;

        $(this).animate(options_1_css, time_value_1, 
          function () {
            $(this).animate(options_2_css, time_value_2, 
              function () {
                animatePageElements();
                
                setTimeout(
                  function () {
                    if (section_value !== "sctn_main") {
                      url_hash = section_value + "?pos=0&bkgrnd=base";  
                    } else  {
                      url_hash = section_value + "?bkgrnd=base";  
                    }
                  }, time_value_3
                );
              }
            );
          }
        );
        
        navLinkHoverState();
        
      }
    );
    
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        var current_location = new Number();
        var wndow_height = new Number();
        var location_num = new Number();
        var new_location = new Number();
        var section_value = new Number();
        var user_agent = new Number();

        var inc = new Number();

        var sctn_bkgrnd_position = new String();

        var copy_selector = new String();
        var wndow_selector = new String();

        var url_hash = new String();
        
        current_location = $(window).scrollTop();
        url_hash = url_hash;
        user_agent = window.navigator.userAgent;
        wndow_height = $("#wndow-sctn_1").height();
        
        if ($(this).attr("id") === "prev-sctn")  {
          location_num = ((Math.floor(current_location / wndow_height) - 1) * wndow_height) - current_location;
          
          sctn_bkgrnd_position = "0px -111px";
        } else {
          if (Math.floor(current_location / wndow_height) === 0 && 
              (url_hash === "" || url_hash.indexOf("#sctn_main") > -1))  {
            location_num = 0;
          } else  {
            location_num = ((Math.floor(current_location / wndow_height) + 1) * wndow_height) - current_location;
          }
          
           sctn_bkgrnd_position = "0px -234px";
        }
        
        new_location = current_location + location_num;
        
        if (current_location === 0 &&
            $("#info").css("top") !== "0px" && 
            $("#next-sctn").css("bottom") === "8.25em")  {
          section_value = 0;
        } else {
          if (current_location === 0 && 
              url_hash === "#sctn_main")  {
            section_value = 1;
          } else  {
            section_value = Math.floor(new_location / wndow_height);
          }
        }
        
        if (section_value > 0) {
          animatePageElements()
        } else {
          if (user_agent.indexOf("Mobile") > -1 || user_agent.indexOf("Tablet") > -1) {
            if ((section_value === 0) && 
                (current_location === 0) && 
                ($(window).width() === 980) && 
                ($("#info").css("top") === "0px")) {
              animateInfoElement();
            }
          }
          
          url_hash = "sctn_main";
          
        }
        
        
        $(this).css("backgroundPosition", sctn_bkgrnd_position);
        
        if ($(this).attr("id") === "prev-sctn") {
          sctn_bkgrnd_position = "0px 0px";
        } else {
          sctn_bkgrnd_position = "0px -145px";
        }
        
        setTimeout(function () {$(this).css("backgroundPosition", sctn_bkgrnd_position)}, time_value);
        
        setTimeout(function () {url_hash = url_hash;}, (time_value * 1.5));
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
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();

        var sctnNavBaseCSS = new Object();

        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        sctnNavBaseCSS = {
          backgroundPositionY: "0px"
        };

        if ($(sctnNavLinkElement).css("display") === "none" && 
            $(sctnNavElement).css("backgroundPositionY") === "0px") {
          $(sctnNavElement).css(sctnNavBaseCSS);
        } else {
          if ($(sctnNavElement).css("backgroundPositionY") !== "-105px")  {
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
        window.location.hash = "#sctn_1?pos=1&bkgrnd=base";

        $("#form-sctn_1 .form-page_1").css("display", "block");
        $("#form-sctn_1 .form-page_1").fadeTo(time_value, 1);
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1&bkgrnd=base";
      }
    );
    
    $("input#sctn_5-cntct").click(
      function () {
        window.location.hash = "#sctn_6?pos=1&bkgrnd=base";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.hash = "#sctn_6?pos=1&bkgrnd=base";

        $("#form-sctn_6 .form-page_1").css("display", "block");
        $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
      }
    )
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
       
    $(window).on("scroll", 
      function () {
        
        wndow_height = $(".wndow").height(); 
        
        current_position = $(window).scrollTop();  
        
        if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
            (url_hash.indexOf("sctn_main") === -1) && 
            (current_position > 1)) {
          animateInfoElement();
        }
        
        if ((current_position === 0) && 
            (url_hash.indexOf("sctn_main") === -1)) {
          window.location.hash = "#sctn_main?bkgrnd=base";
          
        }
        
        if ((current_position >= wndow_height) && 
            (current_position < wndow_height + window_margin) && 
            (url_hash.indexOf("sctn_1") === -1))  {
              
          sortCopyElements("sctn_1");
        } 
        
        if ((current_position >= wndow_height * 2) && 
            (current_position < (wndow_height * 2) + window_margin) && 
            (url_hash.indexOf("sctn_2") === -1))  {
           sortCopyElements("sctn_2");
        }   
        
        if ((current_position >= wndow_height * 3) && 
            (current_position < (wndow_height * 3) + window_margin) && 
            (url_hash.indexOf("sctn_3") === -1))  {
          sortCopyElements("sctn_3");
        } 
        
        if ((current_position >= wndow_height * 4) && 
            (current_position < (wndow_height * 4) + window_margin) && 
            (url_hash.indexOf("sctn_4") === -1))  {
           sortCopyElements("sctn_4");
        }
        
        if ((current_position >= wndow_height * 5) && 
            (current_position < (wndow_height * 5) + window_margin) && 
            (url_hash.indexOf("sctn_5") === -1))  {
          sortCopyElements("sctn_5");
        }
      
        if ((current_position >= wndow_height * 6) && 
            (url_hash.indexOf("sctn_6") === -1))  {
          sortCopyElements("sctn_6");
        }

        
      }
    );
    
    $(window).on("hashchange",
      function () {
        if (url_hash.indexOf("copyValues=") === -1) {
          animatePageElements();
        }
        
        if (url_hash.indexOf("#sctn_6?pos=1") > -1 && 
            url_hash.indexOf("copyValues") === -1)  {
          $("#form-sctn_6 .form-page_1").css("display", "block");
          $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
        }
      }
    );

    setupPage();
    animatePageElements();
    
    $(window).on("resize", 
      function () {
        setupPage();
        animatePageElements();
      }
    );
  }
=======
var time_value = new Number(400);
var window_margin = new Number(150);
var wndow_height = new Number();
var current_position = new Number();

$(document).ready(
  function () {
    var url_string = new String();
    var url_hash = new String();

    url_string = window.location.href;
    url_hash = window.location.hash;

    if (url_string.indexOf("rateValue") != -1) {      
      $("#sctn_5-desc-6 > span > span > sup + span").text(url_string.slice((url.indexOf("rateValue") + 10), url_string.length));
    }

    var form_selectors = new String();

    form_selectors = "#form-sctn_6 .form-page_1";

    if (url_hash === "#sctn_6?pos=1&bkgrnd=base" && 
        url_hash.indexOf("copyValues") === -1)  {
      $(form_selectors).css("display", "block");
      $(form_selectors).fadeTo(time_value, 1);
    }
    
    $("#nav-link").on("mouseover", 
      function () {
        navLinkHoverState();
      }
    );

    $("#nav-link").on("mouseout", 
      function () {
        navLinkHoverState(); 
      }
    );
    
    $("#nav-link").on("click", 
      function () {
        slideNav();
        
        navLinkHoverState();
      }
    );
    
    $("#options > span").on("click",
      function () {
        var section_value = new String();

        var time_value_1 = new Number();
        var time_Value_2 = new Number();
        var time_value_3 = new Number();
        
        var options_1_css = new Object();
        var options_2_css = new Object();

        options_1_css = {
          "backgroundColor": "#ccc", 
          "color": "#000"
        };

        options_2_css = {
          "backgroundColor": "#000", 
          "color": "#fff"
        };

        section_value = $(this).attr("id");

        time_value_1 = time_value / 4;
        time_value_2 = time_value / 2;
        time_value_3 = time_value * 1.5;

        $(this).animate(options_1_css, time_value_1, 
          function () {
            $(this).animate(options_2_css, time_value_2, 
              function () {
                animatePageElements();
                
                setTimeout(
                  function () {
                    if (section_value !== "sctn_main") {
                      url_hash = section_value + "?pos=0&bkgrnd=base";  
                    } else  {
                      url_hash = section_value + "?bkgrnd=base";  
                    }
                  }, time_value_3
                );
              }
            );
          }
        );
        
        navLinkHoverState();
        
      }
    );
    
    $("#prev-sctn, #next-sctn").on("click", 
      function () {
        var current_location = new Number();
        var wndow_height = new Number();
        var location_num = new Number();
        var new_location = new Number();
        var section_value = new Number();
        var user_agent = new Number();

        var inc = new Number();

        var sctn_bkgrnd_position = new String();

        var copy_selector = new String();
        var wndow_selector = new String();

        var url_hash = new String();
        
        current_location = $(window).scrollTop();
        url_hash = url_hash;
        user_agent = window.navigator.userAgent;
        wndow_height = $("#wndow-sctn_1").height();
        
        if ($(this).attr("id") === "prev-sctn")  {
          location_num = ((Math.floor(current_location / wndow_height) - 1) * wndow_height) - current_location;
          
          sctn_bkgrnd_position = "0px -111px";
        } else {
          if (Math.floor(current_location / wndow_height) === 0 && 
              (url_hash === "" || url_hash.indexOf("#sctn_main") > -1))  {
            location_num = 0;
          } else  {
            location_num = ((Math.floor(current_location / wndow_height) + 1) * wndow_height) - current_location;
          }
          
           sctn_bkgrnd_position = "0px -234px";
        }
        
        new_location = current_location + location_num;
        
        if (current_location === 0 &&
            $("#info").css("top") !== "0px" && 
            $("#next-sctn").css("bottom") === "8.25em")  {
          section_value = 0;
        } else {
          if (current_location === 0 && 
              url_hash === "#sctn_main")  {
            section_value = 1;
          } else  {
            section_value = Math.floor(new_location / wndow_height);
          }
        }
        
        if (section_value > 0) {
          animatePageElements()
        } else {
          if (user_agent.indexOf("Mobile") > -1 || user_agent.indexOf("Tablet") > -1) {
            if ((section_value === 0) && 
                (current_location === 0) && 
                ($(window).width() === 980) && 
                ($("#info").css("top") === "0px")) {
              animateInfoElement();
            }
          }
          
          url_hash = "sctn_main";
          
        }
        
        
        $(this).css("backgroundPosition", sctn_bkgrnd_position);
        
        if ($(this).attr("id") === "prev-sctn") {
          sctn_bkgrnd_position = "0px 0px";
        } else {
          sctn_bkgrnd_position = "0px -145px";
        }
        
        setTimeout(function () {$(this).css("backgroundPosition", sctn_bkgrnd_position)}, time_value);
        
        setTimeout(function () {url_hash = url_hash;}, (time_value * 1.5));
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
        var sctnNavElement = new String();
        var sctnNavLinkElement = new String();

        var sctnNavBaseCSS = new Object();

        sctnNavElement = "#" + $(this).parent().parent().attr("id") + " > div > span";
        sctnNavLinkElement = "#" + $(this).parent().parent().attr("id") + " > div > div";
        
        sctnNavBaseCSS = {
          backgroundPositionY: "0px"
        };

        if ($(sctnNavLinkElement).css("display") === "none" && 
            $(sctnNavElement).css("backgroundPositionY") === "0px") {
          $(sctnNavElement).css(sctnNavBaseCSS);
        } else {
          if ($(sctnNavElement).css("backgroundPositionY") !== "-105px")  {
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
        window.location.hash = "#sctn_1?pos=1&bkgrnd=base";

        $("#form-sctn_1 .form-page_1").css("display", "block");
        $("#form-sctn_1 .form-page_1").fadeTo(time_value, 1);
      }
    );

    $("input#sctn_5-start").on("click", 
      function () {
        window.location.hash = "#sctn_5?pos=1&bkgrnd=base";
      }
    );
    
    $("input#sctn_5-cntct").click(
      function () {
        window.location.hash = "#sctn_6?pos=1&bkgrnd=base";
      }
    );

    $("input#sctn_6-start").click(
      function () {
        window.location.hash = "#sctn_6?pos=1&bkgrnd=base";

        $("#form-sctn_6 .form-page_1").css("display", "block");
        $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
      }
    )
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
       
    $(window).on("scroll", 
      function () {
        
        wndow_height = $(".wndow").height(); 
        
        current_position = $(window).scrollTop();  
        
        if ((window.navigator.userAgent.indexOf("Mobile") !== -1 || window.navigator.userAgent.indexOf("Tablet") !== -1) && 
            (url_hash.indexOf("sctn_main") === -1) && 
            (current_position > 1)) {
          animateInfoElement();
        }
        
        if ((current_position === 0) && 
            (url_hash.indexOf("sctn_main") === -1)) {
          window.location.hash = "#sctn_main?bkgrnd=base";
          
        }
        
        if ((current_position >= wndow_height) && 
            (current_position < wndow_height + window_margin) && 
            (url_hash.indexOf("sctn_1") === -1))  {
              
          sortCopyElements("sctn_1");
        } 
        
        if ((current_position >= wndow_height * 2) && 
            (current_position < (wndow_height * 2) + window_margin) && 
            (url_hash.indexOf("sctn_2") === -1))  {
           sortCopyElements("sctn_2");
        }   
        
        if ((current_position >= wndow_height * 3) && 
            (current_position < (wndow_height * 3) + window_margin) && 
            (url_hash.indexOf("sctn_3") === -1))  {
          sortCopyElements("sctn_3");
        } 
        
        if ((current_position >= wndow_height * 4) && 
            (current_position < (wndow_height * 4) + window_margin) && 
            (url_hash.indexOf("sctn_4") === -1))  {
           sortCopyElements("sctn_4");
        }
        
        if ((current_position >= wndow_height * 5) && 
            (current_position < (wndow_height * 5) + window_margin) && 
            (url_hash.indexOf("sctn_5") === -1))  {
          sortCopyElements("sctn_5");
        }
      
        if ((current_position >= wndow_height * 6) && 
            (url_hash.indexOf("sctn_6") === -1))  {
          sortCopyElements("sctn_6");
        }

        
      }
    );
    
    $(window).on("hashchange",
      function () {
        if (url_hash.indexOf("copyValues=") === -1) {
          animatePageElements();
        }
        
        if (url_hash.indexOf("#sctn_6?pos=1") > -1 && 
            url_hash.indexOf("copyValues") === -1)  {
          $("#form-sctn_6 .form-page_1").css("display", "block");
          $("#form-sctn_6 .form-page_1").fadeTo(time_value, 1);
        }
      }
    );

    setupPage();
    animatePageElements();
    
    $(window).on("resize", 
      function () {
        setupPage();
        animatePageElements();
      }
    );
  }
>>>>>>> 7943f836c39a968128a07383b96bc481737469d2
);