function loadQuestion(questionData_Array) {	
	$.ajax(
		{
			url: questionData_Array[0],
			statusCode: {
				404: function () {
					$(questionData_Array[1]).html("<a href=\"/amelia/sc/sctn/1/index.htm\">Please click here to restart the quiz</a>");
				}
			}
		}
	).done(
			function (html) {
				$(questionData_Array[1]).empty();
				$(questionData_Array[1]).append(html);
				
				$.ajax(
					{
						url: questionData_Array[2],
						statusCode: {
							404: function () {
								$(questionData_Array[3]).html("<a href=\"/amelia/sc/sctn/1/index.htm\">Please click here to restart the quiz</a>");
							}
						}
					}
				).done(
						function (html) {
							$(questionData_Array[3]).empty();
							$(questionData_Array[3]).append(html);
						}
				);
			}
	);
	
}

function loadQuiz(questionSet) {
	var i;
	var questionNum;

	var questionPath = "/amelia/assets/ajax/quiz/qstn_";
	var questionSuffix = ".htm";
	var questionFilename;
	
	var columnDivElement_Array = new Array();

	var questionData_Array = new Array();

	switch (questionSet) {
		case "initial":
			questionNum = 1;
		break;

		case "set_1":
			questionNum = 3;
		break;
	} // END OF switch statement
	
	columnDivElement_Array = [
		"#clmn_1",
		"#clmn_2"
	];
	
	questionData_Array[0] = questionPath + questionNum + questionSuffix;
	
	questionData_Array[1] = columnDivElement_Array[0];
	
	questionData_Array[2] = questionPath + (questionNum + 1) + questionSuffix;
		
	questionData_Array[3] = columnDivElement_Array[1];
	
	loadQuestion(questionData_Array);
}