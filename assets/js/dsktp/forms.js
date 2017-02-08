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

function validateQuestionField(validation_type, question_value)  {
  var input_selector = new String();
  var input_element = new Object();

  var css_1 = new Object();
  var css_2 = new Object();

  input_selector = "#" + question_value;
  input_element = $(input_selector);

  css_1 = {
    border: "2px solid #bbb", 
    color: "#000"
  };
  
  css_2 = {
    border: "2px solid #971b1e", 
    color: "#971b1e"
  };

  switch (question_value) {
    case "sctn_6-name": 
      if ($(input_element).val() === "Please enter your first name")  {
        $(input_element).css(css_1);
        $(input_element).val("");
      } else if (validation_type === "reset" && 
                 $(input_element).val().length <= 2)  {
        $(input_element).css(css_2);
        $(input_element).val("Please enter your first name");
      }
    break;

    case "sctn_6-email":
      var radio_selector_1 = new String();
      var radio_element_1 = new Object();
      
      var phone_number_nums_Array = new Array();

      radio_selector_1 = "input:checked";
      
      radio_element_1 = $(radio_selector_1);
      // window.alert("validation_type = " + validation_type);
      // window.alert("$(input_element).val() = " + $(input_element).val());

      if ($(radio_element_1).attr("id") === "sctn_6-field-email") {
        if ($(input_element).val() === "Please enter a valid email address") {
          $(input_element).css(css_1);
          $(input_element).val("");
        } else {
          if (validation_type === "reset" && 
              $(radio_element_1).attr("id") === "sctn_6-field-email" && 
              ($(input_element).val().indexOf("@") === -1 || 
              ($(input_element).val().indexOf(".com") === -1 && 
               $(input_element).val().indexOf(".net") === -1 && 
               $(input_element).val().indexOf(".org") === -1 && 
               $(input_element).val().indexOf(".edu") === -1 && 
               $(input_element).val().indexOf(".mil") === -1)))  {
            $(input_element).css(css_2);
            $(input_element).val("Please enter a valid email address");
          }
        }
      } else if ($(radio_element_1).attr("id") === "sctn_6-field-phone") {
        var phone_number_val = new String();
        var search_char_index_num = new Number();
        var phone_number_search_vals_Array = new Array();

        var inc = new Number();
        var inc_2 = new Number();

        phone_number_val = $(input_element).val();
window.alert("phone_number_val = " + phone_number_val);
        phone_number_search_vals_Array = [
          "(", 
          ")", 
          "-", 
          " "
        ];

        while (inc < phone_number_search_vals_Array.length)  {
          search_char_index_num = phone_number_val.indexOf(phone_number_search_vals_Array[inc], search_char_index_num);

          phone_number_val = phone_number_val.replace(phone_number_search_vals_Array[inc], "");

          if (search_char_index_num === -1) {
            inc++;
          }
        }

        /*phone_number_val = phone_number_val.replace("(", "");
        phone_number_val = phone_number_val.replace(")", "");
        phone_number_val = phone_number_val.replace("-", "");
        phone_number_val = phone_number_val.replace(" ", "");*/
        /*if (phone_number_val.indexOf("(") > -1) {
          search_char_index_num = phone_number_val.indexOf("(");

          if (search_char_index_num !== 0)  {
            phone_number_val = phone_number_val.slice(0, search_char_index_num);

            if (search_char_index_num !== phone_number_val.length - 1)  {
              phone_number_val = phone_number_val + phone_number_val.slice((search_char_index + 1), (phone_number_val.length - 1))
            }
          } else {
            phone_number_val = phone_number_val.slice(1, (phone_number_val.length - 1))
          }
          
          if (phone_number_val.indexOf(")") > -1) {
            search_char_index_num = phone_number_val.indexOf("(");
            phone_number_nums_Array[0] = phone_number_nums_Array[0]
          }
        }*/

        /*if (phone_number_val.indexOf("-") > -1) {
          var inc = new Number();

          phone_number_nums_Array = phone_number_val.split("-");

          phone_number_val = phone_number_nums_Array[0];

          for (inc = 1; inc < phone_number_nums_Array.length; inc++)  {
            phone_number_val = phone_number_val + phone_number_nums_Array[inc];
          }
        }
        */window.alert("phone_number_val = " + phone_number_val);
        if (validation_type === "reset" && 
            $(input_element).val() === "Please enter your phone number again") {
          $(input_element).css(css_1);
          $(input_element).val(""); 
        } else if ($(input_element).val() !== "" && 
                   phone_number_val.length !== 10) {
          $(input_element).css(css_2);
          $(input_element).val("Please enter your phone number again");
        }
      }
    break;
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

 