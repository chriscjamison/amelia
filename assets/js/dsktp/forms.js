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
  var fieldset_selector = new String();
  var fieldset_element = new Object();  

  var css_1 = new Object();
  var css_2 = new Object();
  var css_3 = new Object();
  var css_4 = new Object();

  fieldset_selector = "#" + question_value + " > fieldset";
  fieldset_element = $(fieldset_selector);

   css_1 = {
      borderColor: "rgb(151, 27, 30)"
    };

    css_2 = {
      borderColor: "#cfd7a3"
    };
      
    css_3 = {
      color: "#000"
    };

    css_4 = {
      color: "rgb(151, 27, 30)"
    };

  switch (question_value) {
    case "sctn_1-no_1":
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = "input:checked";
      checked_element = $(checked_selector);
      
      if (validation_type === "reset" && 
          $(checked_element).attr("name") === undefined) {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
      }
    break;

    case "sctn_1-no_3":
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = fieldset_selector + " > p > input:checked";
      checked_element = $(checked_selector);
       
      if (validation_type === "reset" && 
          $(checked_element).attr("name") === undefined) {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
      }
    break;

    case "sctn_1-no_4":
      var option_selector = new String();
      var option_element = new Object();

      option_selector = fieldset_selector + " > div > select > option:selected";
      option_element = $(option_selector);
            
      if (validation_type === "reset" && 
          $(option_element).val() === "default") {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
      }
    break;

    case "sctn_5-no_1":
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $(checked_selector);
        
      if (validation_type === "reset" && 
          ($(checked_element).attr("name") === undefined ||  
           $(checked_element).attr("name") === "monthly_income")) {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
      }
    break;

    case "sctn_5-no_2":
      var checked_selector = new String();
      var checked_element = new Object(); 
 
      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $(checked_selector);
      
      if (validation_type === "reset" && 
          $(checked_element).attr("name") === undefined) {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
      }
    break;
    
    case "sctn_6-no_1":
      var field_selector = new String();
      var field_element = new Object();

      field_selector = fieldset_selector + " > input";
      field_element = $(field_selector);
      
     if ($(field_element).val() === "Please enter your first name")  {
        $(fieldset_element).css(css_2);
        $(field_element).css(css_3);
        $(field_element).val("");
      } else if (validation_type === "reset" && 
                 $(field_element).val().length <= 2)  {
        $(fieldset_element).css(css_1);
        $(field_element).css(css_4);
        $(field_element).val("Please enter your first name");
      }
    break;

    case "sctn_6-no_2":
      var checked_selector = new String();
      var checked_element = new Object();

      field_selector = "#sctn_6-field-email";
      field_element = $(field_selector);

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $(checked_selector);
      
      if ($(checked_element).attr("id") === "sctn_6-email") {
        if (validation_type === "start" && 
            $(field_element).val() === "Please enter a valid email address") {
          $(fieldset_element).css(css_1);
          $(field_element).css(css_3);
          $(field_element).val("");
        } else {
          if (validation_type === "reset" && 
              ($(field_element).val().length === 0) ||  
              ($(field_element).val().indexOf("@") === -1 || 
              ($(field_element).val().indexOf(".com") === -1 && 
               $(field_element).val().indexOf(".net") === -1 && 
               $(field_element).val().indexOf(".org") === -1 && 
               $(field_element).val().indexOf(".edu") === -1 && 
               $(field_element).val().indexOf(".mil") === -1)))  {
            $(fieldset_element).css(css_2);
            $(field_element).css(css_4);
            $(field_element).val("Please enter a valid email address");
          }
        }
      } else if ($(checked_element).attr("id") === "sctn_6-phone") {
        var phone_number_val = new String();
        var search_char_index_num = new Number();
        var phone_number_search_vals_Array = new Array();

        var inc = new Number();
        var inc_2 = new Number();

        phone_number_val = $(field_element).val();
        
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
        
        if ($(field_element).val() === "Please enter your phone number") {
          $(fieldset_element).css(css_2);
          $(field_element).css(css_3);
          $(field_element).val(""); 
        } else if (validation_type === "reset" && 
                   (phone_number_val.length === 0 ||  
                   (phone_number_val.length < 10 || 
                    phone_number_val.length > 10))) {
          $(fieldset_element).css(css_1);
          $(field_element).css(css_4)
          $(field_element).val("Please enter your phone number");
        }
      }
    break;

    case "sctn_6-no_3":
      var checked_selector = new String();
      var checked_element = new Object(); 

      checked_selector = "#" + question_value + " > span + fieldset > p > input:checked";
      checked_element = $(checked_selector);
      
      if (validation_type === "reset" && 
          $(checked_element).attr("name") === undefined) {
        $(fieldset_element).css(css_1);
      } else if (validation_type === "start" && 
                 $(fieldset_element).css("borderColor") === "rgb(151, 27, 30)") {
        $(fieldset_element).css(css_2);
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

 