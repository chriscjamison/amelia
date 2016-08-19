function loadFormContent(questionData_Array) {	
	var linkString = new String();
  
  linkString = "<a href=\"javascript:formData('" + questionData_Array[0] + "', 'initial')\">Please click here to restart the quiz</a>"
  
  $.ajax(
		{
			url: questionData_Array[1],
			statusCode: {
				404: function () {
					$(questionData_Array[2]).html(linkString);
				}
			}
		}
	).done(
			function (html) {
				$(questionData_Array[2]).html("Loading...");
        $(questionData_Array[2]).empty();
				$(questionData_Array[2]).append(html);
				
				$.ajax(
					{
						url: questionData_Array[3],
						statusCode: {
							404: function () {
								$(questionData_Array[4]).html(linkString);
							}
						}
					}
				).done(
						function (html) {
              $(questionData_Array[4]).html("Loading...");
							$(questionData_Array[4]).empty();
							$(questionData_Array[4]).append(html);
						}
				);
			}
	);
}

function formData(sectionValue, questionValue) {
  var questionNum = new Number();
  var questionPath = new String();
  var questionSuffix = new String();
  
  var columnDivIDString = new String();
      
  var columnDivElement_Array = new Array();
  var questionData_Array = new Array();
  
  var i = new Number();

  if (questionValue === "start")  {
    var URLString = new String();
    
    URLString = "#" + sectionValue + "?pos=1";
    
    window.location.hash = URLString;
  } else {
    switch (questionValue) {
      case "initial":
        questionNum = 1;
      break;
      
      case "set_1":
        questionNum = 3;
      break;
    } // END OF switch statement
    
    for (i = 2; i <= 4; i = i * 2)  {
      questionData_Array[i] = "#" + sectionValue + "-clmn-" + (i / 2);
    }
    
    questionPath = "/amelia/assets/ajax/" + sectionValue + "/no_";
    
    questionSuffix = ".htm";
    
    questionData_Array[0] = sectionValue;
    
    questionData_Array[1] = questionPath + questionNum + questionSuffix;
    
    questionData_Array[3] = questionPath + (questionNum + 1) + questionSuffix;
    
    loadFormContent(questionData_Array);
    
    if (questionValue === "submit")  {
      URLString = "#" + sectionValue + "?pos=2";
      
      window.location.hash = URLString;  
    } 
  }

  $(document).ready(
    function () {
       if (window.location.href.indexOf("rateValue") != -1) {
        urlValue = window.location.href;
        
        $("#sctn_5-desc-6 > span > span > sup + span").text(urlValue.slice((urlValue.indexOf("rateValue") + 10), urlValue.length));
      }
    }
  );
}