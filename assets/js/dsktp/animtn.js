function fadeSectionBlocks(sectionBlockElements, transitionTimeValue) {
	$(sectionBlockElements).each(
		function () {
			$(this).fadeTo(transitionTimeValue, 1).delay(transitionTimeValue * 2);
		}
	);
}

function animateElements(sectionNum) {
	$(document).ready(
		function () {
			if (sectionNum !== "main")	{
				var headerClassString = "div.headr.sctn_" + sectionNum;
				var sectionDescElementsString = "div.sctn_" + sectionNum + "-blok";
				var transitionValue = 1000;
			
				fadeSectionBlocks(headerClassString, transitionValue);
				
				switch (sectionNum) {
					case 1:
						fadeSectionBlocks(sectionDescElementsString, transitionValue);
					break;
					
					case 2:
						var sectionDescElementsString_2 = sectionDescElementsString + ", div.sctn_2-blok_2";
						
						fadeSectionBlocks(sectionDescElementsString_2, transitionValue);
					break;
					
					case 3:
						var sectionDescElementsString_3 = sectionDescElementsString + ", #menu-sctn_3";
						
						fadeSectionBlocks(sectionDescElementsString_3, transitionValue);
					break;
					
					case 4:
						var sectionDescElementsString_4 = sectionDescElementsString + ", #menu-sctn_4";
						
						fadeSectionBlocks(sectionDescElementsString_4, transitionValue);
					break;
					
					case 5:
						fadeSectionBlocks(sectionDescElementsString, transitionValue);
					break;
					
					case 6:
						var sectionDescElementsString_5 = "#sctn_6-desc-1";
						
						if (location.href.charAt(location.href.length - 5) === "b")	{
							sectionDescElementsString_5 = "#sctn_6-cntainr"
						}
							
						fadeSectionBlocks(sectionDescElementsString_5, transitionValue);
						
						var sectionDescElementsString_6 = "#menu-sctn_6";
						
						fadeSectionBlocks(sectionDescElementsString_6, transitionValue);
					break;
				}
			}	else	{
				var logoCSS_1 = {
					display: "block"
				};
				
				var logoCSS_2 = {
					display: "list-item",
					opacity: 1
				};
				
				var logoCSS_3 = {
					display: "block",
					opacity: 1
				};
				
				$("#info").show("drop", "linear", 1000);
				$("#spcr").css(logoCSS_1).delay(500).fadeTo(500, 1); 
				$("#logo").css(logoCSS_1).delay(500).fadeTo(500, 1, 
					function () {
						$("#info ul").css(logoCSS_3);
						$("#info ul li").css(logoCSS_2);
						
						$("#info ul span").show("drop").delay(250).fadeTo(375, 1);
					}
				);			
			}
		}
	);
	
}

function resizeBackground (sectionNumValue) {
	var backgroundElementString = "#bkgrnd-sctn_" + sectionNumValue;
	var windowWidth = $(window).width();
	var windowHeight = $(window).height();
	
	var backgroundImageString = new String();
	var backgroundPositionString = new String();
	var backgroundSizeWidthNum = new String();
	var backgroundSizeHeightNum = new String();
	var backgroundSectionValueString = new String();
	var backgroundWidthValueString = new String();
	
	var backgroundPositionValueNum = new Number();
	var backgroundWidthValueNum = new Number();
	
	if (windowWidth > 1100 && windowWidth <= 1280)	{
		if (sectionNumValue.charAt(0) === "1" || sectionNumValue.charAt(0) === "3" || 
				sectionNumValue.charAt(0) === "4" || sectionNumValue.charAt(0) === "6") {
			backgroundSizeWidthNum = "5120";
		}	else {
			if (sectionNumValue.charAt(0) === "2" || sectionNumValue === "main")	{
				backgroundSizeWidthNum = "1280";
			} else {
					backgroundSizeWidthNum = "3840";
				}
			}	
		
		if (windowHeight < 900)	{
			backgroundSizeHeightNum = "800";
		}	else	{
			backgroundSizeHeightNum = "1024";
		}
		
		backgroundPositionValueNum = -1280;
	}
	
	if (windowWidth > 1280 && windowWidth <= 1366)	{
		if (sectionNumValue.charAt(0) === "1" || sectionNumValue.charAt(0) === "3" || 
				sectionNumValue.charAt(0) === "4" || sectionNumValue.charAt(0) === "6")	{
			backgroundSizeWidthNum = "5464";
		}	else {
				if (sectionNumValue.charAt(0) === "2" || sectionNumValue === "main")	{
				backgroundSizeWidthNum = "1366";
				} else {
					backgroundSizeWidthNum = "4098";
				}
			}
		
		backgroundSizeHeightNum = "766";
		
		backgroundPositionValueNum = -1366;
	}
	
	if (windowWidth > 1366)	{
		if (sectionNumValue.charAt(0) === "1" || sectionNumValue.charAt(0) === "3" || 
				sectionNumValue.charAt(0) === "4" || sectionNumValue.charAt(0) === "6")	{
			backgroundSizeWidthNum = "7680";
		}	else {
				if (sectionNumValue.charAt(0) === "2" || sectionNumValue === "main")	{
					backgroundSizeWidthNum = "1920";
				} else {
						backgroundSizeWidthNum = "5760";
					}
			}

		backgroundSizeHeightNum = "1200";
		
		backgroundPositionValueNum = -1920;
	}
	
	if (sectionNumValue.charAt(0) === "m")	{
		backgroundSectionValueString = "main"	
	}	else {
		backgroundSectionValueString = sectionNumValue.charAt(0);
	}
	
	
	backgroundImageString = "url('/amelia/assets/img/sctn/" + backgroundSectionValueString + 
													"/" + backgroundSizeWidthNum + 
													"x" + backgroundSizeHeightNum +	".jpg')";
	
	backgroundWidthValueNum = -(backgroundPositionValueNum) + 260;
	backgroundWidthValueString = backgroundWidthValueNum + "px";
									
	switch (sectionNumValue.length) {
		case 2:
			switch (sectionNumValue.charAt(1))	{
				case "b" :
					backgroundPositionValueNum = backgroundPositionValueNum * 2;
				break;
				
				case "c":
					backgroundPositionValueNum = backgroundPositionValueNum * 3;
				break;
				
				default:
					backgroundPositionValueNum = backgroundPositionValueNum * 1;
				break;
			}
		break;
		
		default: 
			backgroundPositionValueNum = 0;
		break;	 
	}
	
	backgroundPositionString = backgroundPositionValueNum + "px";
	
	$(backgroundElementString).css("backgroundImage", backgroundImageString);		
	$(backgroundElementString).css("width", backgroundSizeWidthNum);
	$(backgroundElementString).css("height", windowHeight);
	$(backgroundElementString).css("backgroundPositionX", backgroundPositionString);
	$("#bkgrnd").css("width", backgroundWidthValueString);
	
}

