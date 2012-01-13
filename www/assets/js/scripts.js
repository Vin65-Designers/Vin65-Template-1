// JavaScript Document

$(document).ready(function() {
	$("#topMenu ul li:last-child").css("margin-right", "0");
	$("#footerLegal ul li:last-child").css("margin-right", "0").css("border-right", "0");
	
	$("#topMenu ul li ul li").hover(
	  function () {
		  //alert("here");
		$(this).parent().parent().children("a").addClass("hover");
	  }, 
	  function () {
		$(this).parent().parent().children("a").removeClass("hover");
	  }
	);
	
});