function loadQuestion(questionData_Array) {	
	$.ajax(
		{
			url: questionData_Array[0],
			statusCode: {
				404: function () {
					$(questionData_Array[1]).html("<a href=\"javascript:loadQuiz('initial')\">Please click here to restart the quiz</a>");
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
								$(questionData_Array[3]).html("<a href=\"javascript:loadQuiz('initial')\">Please click here to restart the quiz</a>");
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

function loadInfo(infoData_Array) {	
	$.ajax(
		{
			url: infoData_Array[0],
			statusCode: {
				404: function () {
					$(infoData_Array[1]).html("<a href=\"javascript:loadContactForm('initial')\">Please click here to restart the quiz</a>");
				}
			}
		}
	).done(
			function (html) {
				$(infoData_Array[1]).empty();
				$(infoData_Array[1]).append(html);
				
				$.ajax(
					{
						url: infoData_Array[2],
						statusCode: {
							404: function () {
								$(infoData_Array[3]).html("<a href=\"javascript:loadContactForm('initial')\">Please click here to restart the quiz</a>");
							}
						}
					}
				).done(
						function (html) {
							$(infoData_Array[3]).empty();
							$(infoData_Array[3]).append(html);
						}
				);
			}
	);
}

function loadQuiz(questionSet) {
	var questionNum;

	var questionPath = "/amelia/assets/ajax/quiz/qstn_";
	var questionSuffix = ".htm";
	
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

function loadContactForm(infoSet) {
	var infoNum;

	var infoPath = "/amelia/assets/ajax/cntct/info_";
	var infoSuffix = ".htm";
	
	var columnDivElement_Array = new Array();

	var infoData_Array = new Array();

	switch (infoSet) {
		case "initial":
			infoNum = 1;
		break;

		case "set_1":
			infoNum = 3;
		break;
	} // END OF switch statement
	
	columnDivElement_Array = [
		"#cntct-clmn-1",
		"#cntct-clmn-2"
	];
	
	infoData_Array[0] = infoPath + infoNum + infoSuffix;
	
	infoData_Array[1] = columnDivElement_Array[0];
	
	infoData_Array[2] = infoPath + (infoNum + 1) + infoSuffix;
		
	infoData_Array[3] = columnDivElement_Array[1];
	
	loadInfo(infoData_Array);
}