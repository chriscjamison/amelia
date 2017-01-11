function loadFormContent(question_data_Array) {	
	var link_string = new String();
  
  link_string = "<a href=\"javascript:formData('start')\">Please click here to restart the quiz</a>"
  
  $.ajax(
		{
			url: question_data_Array[1],
			statusCode: {
				404: function () {
					$(question_data_Array[2]).html(link_string);
				}
			}
		}
	).done(
    function (html) {
      $(question_data_Array[2]).html("Loading...");
      $(question_data_Array[2]).empty();
      $(question_data_Array[2]).append(html);
      
      $.ajax(
        {
          url: question_data_Array[3],
          statusCode: {
            404: function () {
              $(question_data_Array[4]).html(link_string);
            }
          }
        }
      ).done(
          function (html) {
            $(question_data_Array[4]).html("Loading...");
            $(question_data_Array[4]).empty();
            $(question_data_Array[4]).append(html);
          }
      );
    }
	);
}

function formData(question_value) {
  var question_num = new Number();
  var question_path = new String();
  var question_suffix = new String();
  
  var question_data_Array = new Array();
  
  var inc = new Number();

  var url_pathname = new String();
  var section_value = new String();
  var base_url_value = new String();

  var section_value_position = new Number();
  var section_search_string = new String();

  
  url_pathname = window.location.pathname;
  section_search_string = "page";
  base_url_value = "http://localhost/amelia/sc/sctn/";

  if (question_value === "start") {
    section_value_position = url_pathname.length - 2;
  } else  {
   section_value_position = (url_pathname.indexOf(section_search_string)) - 2;
  }
  
  section_value = url_pathname.charAt(section_value_position);

  
  if (question_value === "start")  {
    window.location.href = base_url_value + section_value + "/page_1.htm";
  } 
  // window.alert("section_value = " + section_value);
  if (question_value === "set_1") {
    question_num = 1;
  } else {
    question_num = 3;
  } // END OF switch statement
    
  question_path = "/amelia/assets/ajax/" + section_value + "/no_";
  question_suffix = ".htm";
  
  question_data_Array[1] = question_path + question_num + question_suffix;  
  question_data_Array[3] = question_path + (question_num + 1) + question_suffix;
  
  question_data_Array[2] = "#clmn_1";
  question_data_Array[4] = "#clmn_2";
  
  loadFormContent(question_data_Array);
  
  animateFormPanes();  
}

 