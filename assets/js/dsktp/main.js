/// <reference path="../../typings/jquery/jquery.d.ts"/>

var windowWidth = new Number;
var windowHeight = new Number;
var divHeight = new Number;
var divValue = new Number;

var backgroundDim = new String;

var divValues = new Object;

$(document).ready( 
		function ()	{
			windowWidth = ($(document).width());
			windowHeight = ($(document).height());
			
			console.log("windowWidth = " + windowWidth);
			console.log("windowHeight = " + windowHeight);
			
			divHeight = windowHeight / 4;
			console.log("windowHeight / 4 = " + Math.round(windowHeight / 4));
			
			divValues = {
				width: windowWidth,
				height: divHeight,
				backgroundSize: "contain"
			}
			
			//backgroundDim = windowWidth + "px";
			$("#land DIV").css(divValues);
			
			console.log(divValues);
		}
);

