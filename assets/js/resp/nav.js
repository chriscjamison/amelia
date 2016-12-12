// nav.js
var nav_transition_time = 500;

function cycleNavLink(hover_state)  {
  nav_class = "nav-" + hover_state;
  
  if (hover_state === "base" || 
      hover_state === "hover")  {
        $("#nav-link").fadeTo((nav_transition_time / 2), 0, 
          function () {
            $("#nav-link").removeClass();
            $("#nav-link").addClass(nav_class);
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
          }
        );
  } else {
        // animateSideNav();

        $("#nav-link").fadeTo((nav_transition_time / 2), 0, 
          function () {
            $("#nav-link").removeClass();
            $("#nav-link").addClass("click_1");
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
            $("#nav-link").removeClass();
            $("#nav-link").addClass("click_2");
            $("#nav-link").fadeTo((nav_transition_time / 2), 1);
          }
        );
  }
} // END OF cycleNavLink

function navLinkHoverState() {  
  var current_class = new String();

  var nav_link_selector = new String();
  var options_selector = new String();

  options_selector = "#options";
  nav_link_selector = "#nav-link";

  current_class = $(nav_link_selector).attr("class");
  
  switch (current_class)  {
    case "nav-base":
      cycleNavLink("hover");        
    break;

    case "nav-hover":
      if ($(options_selector).css("opacity") === "0")  {
        cycleNavLink("base");
      } else {
        cycleNavLink("click_1");
      }      
    break;

    case "nav-click_2":
      if ($(options_selector).css("opacity") === "1")  {
        cycleNavLink("base");
      }      
    break;
  }
} // END OF FUNCTION navLinkHoverState

function displayVerticalNav() {
  var current_position = new Number();
  var wndow_height = new Number();
  var page_scroll_margin = new Number();

  var sctn_on_css = new Object();
  var sctn_off_css = new Object();

  sctn_on_css = {
    display: "block",
    opacity: 1
  };

  sctn_off_css = {
    display: "none", 
    opacity: 0
  }
  
  page_scroll_margin = 5;
  wndow_height = $(".wndow").height();
  current_position = $(window).scrollTop();
  
  if (current_position === 0)  {
    $("#prev-sctn").css(sctn_off_css);
  } else {
    if ($("#prev-sctn").css("display") === "none")  {
      $("#prev-sctn").css(sctn_on_css);
    }
    
    if (current_position >= ((wndow_height * $(".wndow").length) - wndow_height))  {
      $("#next-sctn").css(sctn_off_css);
    } else {
      if ($("#next-sctn").css("display") === "none") {
        $("#next-sctn").css(sctn_on_css);
      }
    }
  }
}

function determineCopyElements()  {
  var url_hash = new String();
  // Holds the value of the String returned by the JavaScript METHOD, 
  // "window.location.hash"
  
  var wndow_elements = new Object();
  // Holds the HTML elements identified by the selector, ".wndow".
  var copy_elements = new Object();
  // Holds the HTML elements identified by the selector, ".copy".
  var visible_elements_hash = new String();
  // Holds the value for each HTML element using the selector, ".copy", 
  // within a parent HTML element using the selector, "#wndow_sctn-X", 
  // within a String which becomes the URL Hash for this webpage once 
  // this function is complete.
  var visible_element_value = new String();

  wndow_elements = $(".wndow");
  
  visible_elements_hash = "copyValues=";
  
  url_hash = window.location.hash;
  
  if (url_hash.indexOf("copyValues") === -1)  {
    $(wndow_elements).each(
      function () {
        var inc = new Number();
        var wndow_element = this;

        if ($(wndow_element).children(".copy").length > 0)  {
          copy_elements = $(this).children(".copy");
          

          $(copy_elements).each(
            function () {
              // window.alert("$(this).attr(\"class\") = " + $(this).attr("class"));
              var copy_element = this;
              
              if ($(copy_element).css("display") === "none")  {
                inc++;
              }
            }
          ); 

          if (visible_elements_hash.charAt(visible_elements_hash.length - 1) === "=") {
            if (inc === $(wndow_element).children(".copy").length)  {
              visible_element_value = "0";
            } else  {
              visible_element_value = inc;
            }
          } else  {
            if (inc === $(wndow_element).children(".copy").length)  {
              visible_element_value = ",0";
            } else  {
              visible_element_value = "," + inc;
            }
          }

          visible_elements_hash = visible_elements_hash + visible_element_value;
          // window.alert("$(" + $(this).attr("id") + ").children(\".copy\").css(\"display\") = " + $(this).children(".copy").css("display"));
        }
      
      }
    );

    if (url_hash.indexOf("#") === -1) {
      visible_elements_hash = "#" + visible_elements_hash;
    } else  {
      if (url_hash.indexOf("?") === -1) {
        visible_elements_hash = "?" + visible_elements_hash;
      } else {
        visible_elements_hash = "&" + visible_elements_hash;
      }
    }
    
    visible_elements_hash = window.location.hash + visible_elements_hash;
    // window.alert("visible_elements_hash = " + visible_elements_hash);

    window.location.hash = visible_elements_hash;
  } else  {
    var url_hash_data_Array = new Array();
    var url_hash_values_Array = new Array();

    var copy_selector = new String();
    var wndow_selector = new String();

    var wndow_elements = new Array();
    var copy_elements = new Array();
    var wndow_element = new Object();
    var copy_element = new Object();

    var inc = new Number();
    var url_hash_data_array_value = new Number();

    inc = 0;

    wndow_selector = ".wndow";

    wndow_elements = $(wndow_selector);

    url_hash_data_Array = url_hash.split("=");
    
    if (url_hash_data_Array[1].indexOf("copyValues") !== -1)  {
      url_hash_data_array_value = 2;
    } else {
      if (url_hash_data_Array[1].indexOf("bkgrnd") !== -1)  {
        url_hash_data_array_value = 3;
      } else {
        url_hash_data_array_value = 1;
      }
    }
    
    url_hash_values_Array = url_hash_data_Array[url_hash_data_array_value].split(",");

    $(wndow_elements).each(
      function () {
        wndow_element = this;
        
        if ($(wndow_element).attr("id") !== "wndow-sctn_main") {
          copy_selector = $(wndow_element).attr("id") + " > .copy:nth-child(" + url_hash_values_Array[inc] + ")";
          
          $(copy_selector).css("display", "block");

          inc++;
        }
      }
    );

    url_hash_data_Array = url_hash.split("copyValues");
    
    window.location.hash = url_hash_data_Array[0].substring(0, (url_hash_data_Array[0].length - 1));
  }
}

function interSectionNav(inter_nav_element)  {
  var url_hash = new String();

  var section_search_string = new String();
  var current_section_string = new String();
  var replace_section_string = new String();

  var section_value = new String();

  var sub_nav_selector = new String();

  var wndow_selector = new String();
  var wndow_elements = new Array();
  var num_of_wndow_elements = new Number();
  
  var scroll_to_num = new Number();

  var complete_called = false;

  url_hash = window.location.hash;

  section_search_string = "sctn_";

  section_value = url_hash.charAt(url_hash.indexOf(section_search_string) + section_search_string.length);

  current_section_string = "sctn_" + section_value;

  sub_nav_selector = $(inter_nav_element).attr("id");
  
  wndow_selector = ".wndow";
  wndow_elements = $(wndow_selector);
  num_of_wndow_elements = wndow_elements.length;

  if (sub_nav_selector === "prev-sctn") {
    if (section_value === "1")  {
      section_value = "main";
    } else  {
      section_value = parseInt(section_value) - 1;
    }
    
  } else  {
    if (section_value === "" || section_value === "main" || section_value === "m") {
      section_value = 1;
    } else  {
      section_value = parseInt(section_value);
      
      if (section_value < num_of_wndow_elements - 1)  {
        section_value = parseInt(section_value) + 1;
      } else {
        section_value = "none";
      }
    }
  }

  if (section_value !== "none") {
    if (url_hash.indexOf(section_search_string) === -1) {
      url_hash = "sctn_1?pos=0";
    } else {
      if (section_value === "" || section_value === "main") {
        url_hash = "sctn_main";
      } else  {
        replace_section_string = "sctn_" + section_value;

        url_hash.replace(section_search_string, replace_section_string);
      }
    }
  }
  

  if (section_value === "main") {
    scroll_to_num = 0;
  } else  {
    scroll_to_num = parseInt(section_value) * $(wndow_selector).height();
  }
  
  window.location.hash = url_hash;

  
  $("html, body").animate(
      { scrollTop: scroll_to_num },
      {
        complete : function(){
          if (!complete_called) {
              complete_called = true;
          }
        }
      }
  );
  
  setTimeout(function() {displayVerticalNav();}, nav_transition_time);
}

function interSectionNavHoverState(inter_section_nav_element) {
  var backgroundPosition = new String();

  if ($(inter_section_nav_element).attr("id") === "prev-sctn")  {
    background_position = "0px -111px";
  } else  {
    background_position = "0px -253px";
  }
  $(inter_section_nav_element).css("backgroundPosition", background_position);
}