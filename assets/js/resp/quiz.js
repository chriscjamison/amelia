function loadQuiz(questionSet) {
	var questionNum;

	var questionPath = "/amelia/assets/ajax/quiz/qstn_";
	var questionSuffix = ".htm?" + Math.round(Math.random() * 100 );
	window.alert("questionSuffix = " + questionSuffix);
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
	var infoSuffix = ".htm" + Math.round(Math.random() * 100 );
	
	window.alert("infoSuffix = " + infoSuffix);
	
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