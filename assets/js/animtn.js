function animateElements(sectionNum) {
	if (sectionNum !== "main")	{
		var headerClassString = "div.headr.sctn_" + sectionNum;
		var sectionDescElementsString = "div.sctn_" + sectionNum + "-blok";
	
		$(headerClassString).fadeTo(250, 1, 
			function () {
				$(sectionDescElementsString).each(
					function () {
						$(this).fadeTo(250, 1);
					}
				);
			}	
		);
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
				
				if (browserPositionNum > 600) {
					if (browserPositionNum > 601 || browserPositionNum < 1400) {
						animateElements(1);
					}
				}
				// window.alert("$(window).scrollTop() = " + $(window).scrollTop());
			});
	}
);

