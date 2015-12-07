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
				var sectionDescElementsString_2 = "div.sctn_2-blok, div.sctn_2-blok-desc, div.sctn_2-blok_2";
				fadeSectionBlocks(sectionDescElementsString_2, transitionValue);
			break;
			case 3:
				var sectionDescELementsString_3 = sectionDescElementsString + ", #menu-sctn_3";
				fadeSectionBlocks(sectionDescELementsString_3, transitionValue);
			break;
			case 4:
				fadeSectionBlocks(sectionDescElementsString, transitionValue);
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
				
				if (browserPositionNum > 1780 && browserPositionNum < 2180) {
					animateElements(2);
				}	
				
				if (browserPositionNum > 3060 && browserPositionNum < 3360)	{
					animateElements(3);
				}	
				
				if (browserPositionNum > 4140 && browserPositionNum < 4540)	{
					animateElements(4);
				}
						
				// window.alert("$(window).scrollTop() = " + $(window).scrollTop());
			});
	}
);

