function swapQuestions(section_value) {
  var question_selector_base = new String();

  var question_selector_1 = new String();
  var question_selector_2 = new String();

  var question_element_1 = new Object();
  var question_element_2 = new Object();

  var form_cntnt_selector = new String();
  var form_cntnt_elements = new Array();

  var first_question_set_selector = new String();
  var first_question_set_element = new Object();

  var second_question_set_selector = new String();
  var second_question_set_element = new Object();

  var css_1 = new Object();
  var css_2 = new Object();
  
   var inc = new Number();

  var total_questions_num = new Number();

  question_selector_base = "#" + section_value + "-no_";

  first_question_set_selector = question_selector_base + "1";
  first_question_set_element = $(first_question_set_selector);

  second_question_set_selector = question_selector_base + "3";
  second_question_set_element = $(second_question_set_selector);

  form_cntnt_selector = ".form_cntnt";
  form_cntent_element = $(form_cntnt_selector);

  total_questions_num = form_cntent_element.length;

  css_1 = {
    display: "block"
  };

  css_2 = {
    display: "none"
  };

  inc = 1;  

  if ($(first_question_set_element).css("opacity") === "0" && 
      $(second_question_set_element).css("opacity") === "0") {
    question_selector_1 = question_selector_base + inc.toString();
    question_element_1 = $(question_selector_1);

    $(question_element_1).fadeTo(400, 1, 
      function () {
        $(question_element_1).css(css_1);
      }
    );

    question_selector_2 = question_selector_base + (inc + 1).toString();
    question_element_2 = $(question_selector_2);

    if ($(question_element_2))  {
      $(question_element_2).fadeTo(400, 1, 
        function () {
          $(question_element_2).css(css_1);
        }
      );
    }
  } else {
    for (inc = 1; inc <= total_questions_num; inc++)  {
      question_selector_1 = question_selector_base + inc.toString();
      question_element_1 = $(question_selector_1);

      if ($(question_element_1).css("display") === "block") {
        $(question_element_1).fadeTo(400, 0);
        ($(question_element_1).css(css_2)).delay(450);
      } else  {
        $(question_element_1).css(css_1);
        ($(question_element_1).fadeTo(400, 1)).delay(450);   
      }
    }
  }
}

function setRateValue(rate_value_search_string) {
  var rate_value_location = new Number();

  var rate_value_result = new String();

  var url_string = new String();

  url_string = window.location.href;
  
  rate_value_location = url_string.indexOf(rate_value_search_string) + rate_value_search_string.length;

  rate_value_result = url_string.slice(rate_value_location, url_string.length);

  if (rate_value_result === "0")  {
    var blok_selector = new String();
    var blok_element = new Object();

    var css_1 = new Object();
    
    blok_selector = "#sctn_5-desc-6 > span > span:first-of-type";

    blok_element = $(blok_selector);
    
    css_1 = {
      color: "#fff",
      "font-size": "6em", 
      "font-weight": "600", 
    }

    $(blok_element).text("No Cost");

    $(blok_element).css(css_1);
  } else  {
    var span_selector = new String();
    var span_element = new Object();

    span_selector = "#sctn_5-desc-6 > span > span > sup + span";
  
    span_element = $(span_selector);
    
    $(span_element).text(url_string.slice(rate_value_location, url_string.length));
  }
}

 