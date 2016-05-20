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

  // window.alert("formData");
  
  if (questionValue === "start")  {
    var URLString = new String();
    
    URLString = "#" + sectionValue + "?pos=1";
    
    window.location.hash = URLString;
    // window.alert(URLString);
  } else {
    
    // window.alert("sectionValue = " + sectionValue);
    
    // window.alert("questionPath = " + questionPath);
    
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
      
      // window.alert("i = " + i);
    }
    
    questionPath = "/amelia/assets/ajax/" + sectionValue + "/no_";
    
    questionSuffix = ".htm";
    
    questionData_Array[0] = sectionValue;
    
    questionData_Array[1] = questionPath + questionNum + questionSuffix;
      
    // window.alert("questionData_Array[2] = " + questionData_Array[2]);
    
    questionData_Array[3] = questionPath + (questionNum + 1) + questionSuffix;
    
    // window.alert("questionData_Array[1] = " + questionData_Array[1]);
    // window.alert("questionData_Array[3] = " + questionData_Array[3]);
    
    // window.alert("questionData_Array[4] = " + questionData_Array[4]);
    
    loadFormContent(questionData_Array);
    
    if (questionValue === "submit")  {
      URLString = "#" + sectionValue + "?pos=2";
      
      window.location.hash = URLString;  
    } 
  }
}