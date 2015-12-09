function fadeSectionBlocks(sectionBlockElements, transitionTimeValue) {
	$(sectionBlockElements).each(
		function () {
			$(this).fadeTo(transitionTimeValue, 1);
		}
	);
}

function animateElements(sectionNum) {
	if (sectionNum !== "main")	{
		var headerClassString = "div.headr.sctn_" + sectionNum;
		var sectionDescElementsString = "div.sctn_" + sectionNum + "-blok";
		var transitionValue = 500;
	
		fadeSectionBlocks(headerClassString, transitionValue);
		
		switch (sectionNum) {
			case 1:
				fadeSectionBlocks(sectionDescElementsString, transitionValue);
			break;
			
			case 2:
				var sectionDescElementsString_2 = sectionDescElementsString + ", div.sctn_2-blok-desc, div.sctn_2-blok_2";
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
		
		$("div.sctn-main").show("drop", "linear", 1000);
		$("#spcr").css(logoCSS_1).delay(1250).fadeTo(375, 1, 
			function () {
				$("#logo").css(logoCSS_1).delay(500).fadeTo(750, 1, 
				
				function () {
					$("#info ul").css(logoCSS_3);
					$("#info ul li").css(logoCSS_2);
					
					$("#info ul span").show("drop").delay(100).fadeTo(500, 1);
				}
				);		
			}
		);		
	}
}

$(document).ready(
	function () {
		$(window).on("scroll",
			function () {
				var browserPositionNum = $(window).scrollTop();
				
				if (browserPositionNum > 500 && browserPositionNum < 800) {
					animateElements(1);
				} 
				
				if (browserPositionNum > 1280 && browserPositionNum < 1580) {
					animateElements(2);
				}	
				
				if (browserPositionNum > 2000 && browserPositionNum < 2500)	{
					animateElements(3);
				}	
				
				if (browserPositionNum > 2800 && browserPositionNum < 3300)	{
					animateElements(4);
				}
				
				if (browserPositionNum > 3600 && browserPositionNum < 4100)	{
					animateElements(5);
				}	
				
				if (browserPositionNum > 4400 && browserPositionNum < 4500)	{
					animateElements(6);
				}		
			});
	}
);

