function animatePageElements()  {
  var url_hash = window.location.hash;

  if (url_hash.indexOf("base") > -1) {
    var url_hash_info_Array = new Array();


    url_hash_info_Array = URLInfo();

    if (url_hash_info_Array.length === 2) {      
      var section_value = new String();
      var position_value = new String();

      var wndow_selector = new String();
      var wndows_selector = new String();
      var copy_element_selector = new String();
      var sctn_nav_selector = new String();
      var bkgrnd_selector = new String();
      var nav_link_selector = new String();
      var info_selector = new String();

      var bkgrnd_position_x = new String();

      var blok_elements = new Object();
      var page_dimensions_Array = new Array();

      var scroll_value = new Number();

      section_value = url_hash_info_Array[0];
      position_value = url_hash_info_Array[1];   
      
      wndow_selector = "#wndow-sctn_" + section_value;
      copy_element_selector = ".copy:nth-child(" + (position_value + 3) + ")";
      headr_selector = ".headr.sctn_" + section_value;
      bkgrnd_selector = "#bkgrnd-sctn_" + section_value;
      nav_link_selector = "#nav-link";
      wndows_selctor = ".wndow";

      blok_elements = $(wndow_selector).children(copy_element_selector).children("div");

      scroll_value = section_value * $(wndows_selector).height();
      
      $(wndow_selector).css(".copy").css("display", "none");
      $(wndow_selector).children(copy_element_selector).css("display", "block");
      $(headr_selector).fadeTo((time_value * 1.5), 1);
      
      blok_elements.each(
        function () {
          $(this).fadeTo(time_value, 1);
        }
      );

      if (section_value === 3 || section_value === 4) {
        sctn_nav_selector = "#nav-sctn_" + section_value;

        $(sctn_nav_selector).fadeTo(time_value, 1);
      }      
      
      $(bkgrnd_selector).fadeTo(time_value, 0);      
      
      page_dimensions_Array = parseWindowDimensions();

      bkgrnd_position_x = "\"" + -(page_dimensions_Array[0] * position_value) + " 0px" + "\"";

      $(bkgrnd_selector).css("backgroundPosition", bkgrnd_position_x);

      $(bkgrnd_selector).css("opacity", 1);

      if (url_hash !== "" && url_hash != "#sctn_main")  {
        $(nav_link_selector).fadeTo(time_value, 1);
      }
    } else {
      if ($(info_selector).css("opacity") === "0" && page_dimensions_Array[0] !== 980) {
        animateInfoElement();
      }
    }
  } else  {
    var nav_1_selector = new String();
    var nav_2_selector = new String();
    var nav_3_selector = new String();
    var nav_4_selector = new Strin();
    var nav_5_selector = new String();

    var options_1_selector = new String();
    var options_2_selctor = new String();
    var options_3_selector = new String();

    var wndows_selector = new String();
    var wndow_selector = new String();
    var cntainr_selector = new String();
    var bkgrnd_selector = new String();
    var sctn_nav_selector = new String();
    var headr_selector = new String();
    var next_nav_selector = new String();

    var copy_values_string = new String();
    var bkgrnd_value_string = new String();

    var window_height = new Number();
    var window_width = new Number();
    var nav_width = new Number();
    var copy_elements_length = new Number();

    var inc_1 = new Number();

    var copy_elements_url_Array = new Array();
    var copy_elements_Array = new Array();

    var css_1 = new Object(); // "opacity": 0, "width": -($("#nav").width())
    var css_2 = new Object(); // "display": "none"
    var css_3 = new Object(); // "left": -($("#nav").width())
    var css_4 = new Object(); // "display": "block"
    var css_5 = new Object(); // "width": $(window).width()
    var css_6 = new Object(); // "display": "table"
    var css_7 = new Object(); // "width": $(window).width(), "left": "0px"
    var css_8 = new Object(); // "left": "0px"
    var css_9 = new Object(); // "left": "0px", "opacity", 1
    var css_10 = new Object(); // "width": $(window).width() - $("#nav").width(), "left": $("#nav").width()
    var css_11 = new Object(); // "width": $(window).width() - $("#nav").width()

    window_height = $(window).height();
    window_width = $(window).width();
    
    nav_width = -($(nav_selector).width());
    nav_position = window_width - nav_width;

    nav_1_selector = "#nav";
    nav_2_selector = "#nav-bkgrnd";
    nav_3_selector = "#nav-brdr";
    nav_4_selector = nav_1_selector + ", " + nav_2_selector;
    nav_5_selector = nav_1_selector + ", " + nav_2_selector + ", " + nav_3_selector;

    options_1_selector = "#options";
    options_2_selector = "#options > span";
    options_3_selector = options_1_selector + ", " + options_2_selctor;
    
    cntainr_selector = "#cntainr";
    wndow_selector = ".wndow";
    bkgrnd_selector = "#bkgrnd, #bkgrnd > div";
    sctn_nav_selector = ".sctn_nav";
    headr_selector = ".headr";
    next_nav_selector = "#prev-sctn, #next-sctn";
    multiple_selector = "#info, .copy, .headr, .sctn_nav, #prev-sctn, #next-sctn";

    bkgrnd_value_string = "bkgrnd=nav";
    copy_values_string = "&copyValues";
    
    css_1 = {
      "opacity": 0,
      "width": nav_width
    };

    css_2 = {
      "display": "none"
    };

    css_3 = {
      "left": nav_width
    };

    css_4 = {
      "display": "block"
    };

    css_5 = {
      "width": window_width
    };

    css_6 = {
      "display": "table"
    };

    css_7 = {
      "width": window_width, 
      "left": "0px"
    };

    css_8 = {
      "left": "0px"
    };

    css_9 = {
      "left": "0px", 
      "opacity": 1
    };

    css_10 = {
      "width": nav_position, 
      "left": nav_width
    };
    
    css_11 = {
      "width": nav_position
    };

    if ($(nav_1_selector).css("left") === "0px")  {
    
      $(nav_4_selector).css("height", window_height);
      
      if ($(nav_selector).css("left") === "0px")  {
        $(options_1_selector).animate(css_1, 
          function () {          
            $(options_3_selector).css(css_2);
            $(nav_5_selector).animate(css_3);
          }
        );
      }

      copy_elements_url_Array = url_hash.split("=");
      
      copy_elements_length = copy_elements_url_Array.length;

      copy_elements_Array = copy_elements_url_Array[copy_elements_length - 1];

      for (inc_1 = 0; inc_1 < copy_elements_length; inc_1++)  {
        wndows_selector = "#wndow-sctn_" + (inc_1 + 1);

        if (!isNan(copy_elements_Array[inc_1 * 1])) {
          copy_selector = ".copy:nth-child(" + ((copy_elements_url_Array[inc_1 * 1]) + 3) + ")";
        
          $(wndows_selector).children(copy_selector).css(css_4);
        }
      }

      $(wndow_selector).css(css_5);
      $(cntainr_selector, bkgrnd_selector).css(css_7);
      $(sctn_nav_selector, next_nav_selector).css(css_4);
      $(headr_selector).css(css_6);

      if (url_hash.indexOf(copy_values_string) === -1) {
        window.location.hash = "#sctn_nav?bkgrnd=base";
      } else {
        url_nav_value = url_hash;

        if (url_hash.indexOf(bkgrnd_value_string) > -1)  {
          url_nav_value = url_nav_value.replace("nav", "base");
        }

        window.location.hash = url_nav_value.substring(1, url_hash.indexOf(copy_values_string));
      }
    } else  {
      var nav_transition_1 = nav_transition / 1.25;

      var copy_1_selector = new String();
      var copy_2_selector = new String();

      copy_1_selector = ".copy";

      copy_elements_Array = $(".copy");

      $(nav_5_selector).animate({css_8}, nav_transition_1, 
        function () {
          $(options_3_selector).css(css_4);
          $(options_1_selector).css(css_9);
        }
      );

      $(wndow_selector).each(
        function () {
          inc_1 = 0;
          copy_2_selector = ".copy:nth-child(3)";
          copy_elements_length = $(this).children(copy_1_selector).length;

          if ($(this).children(copy_2_selector).css("display") === "none") {
            while (inc_1 < copy_elements_length && 
                    $(this).children(copy_2_selector).css("display") === "none") {
              inc_1++;
              copy_2_selector = ".copy:nth-child(" + (inc_1 + 3) + ")";
            }
          } else  {
            if ($(this).attr("id") === "wndow-sctn_1") {
              if (inc_1 === 0)  {
                copy_url_values = copy_url_values + "0";
              } else  {
                copy_url_values = copy_url_values + (inc_1--);
              }
            } else  {
              if (inc_1 === 0)  {
                copy_url_values = copy_url_values + ", 0";
              } else  {
                copy_url_values = copy_url_values + (inc_1--);
              }
            }
          }

          if (inc_1 === copy_elements_length) {
            if ($(this).attr("id") === "wndow-sctn_1") {
              copy_url_values = copy_url_values + "-";
            } else  {
              copy_url_values = copy_url_values + ",-";
            }
          } else  {
            if (inc_1 > 0)  {
              copy_url_values = copy_url_values + inc_1;
            } else  {
              copy_url_values = copy_url_values + "," + inc_1;
            }
          }
        }
      );
    }

    $(cntainr_selector, bkgrnd_selector).css(css_10);
    $(wndows_selector).css(css_11);
    $(multiple_selector).css(css_2);

    setTimeout(function () {window.location.hash = copy_url_values;}, nav_transition);
  }
  
  $(window).scrollTop(scroll_value);
  
  setTimeout(displayVerticalNav, timeValue * 1.5);
}