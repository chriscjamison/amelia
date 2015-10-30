function loadQuiz (questionSet) {
	var i;
	var questionNum;

	var questionPath = "/amelia/assets/ajax/quiz/qstn_";
	var questionSuffix = ".htm";
	var questionFilename;

	var formDivHolderElement;

	switch (questionSet) {
		case "initial":
			questionNum = 1;
		break;

		case "set_1":
			questionNum = 3;
		break;
	} // END OF switch statement
	
	
	

	$("form > div").load("/amelia/assets/ajax/quiz/qstn_1.htm");
	$("form > div + div").load("/amelia/assets/ajax/quiz/qstn_2.htm");
		/*
		window.alert("questionNum = " + questionNum);
		window.alert("questionFilename = " + questionFilename);
		window.alert("$(\"form > div)\").html() = " + $("form > div").html());*/
		
}