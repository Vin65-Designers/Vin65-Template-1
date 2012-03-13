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
	
	//Homepage Photogallery Connector
	$('#slider').html('');
	var galleryId = "faeca5fe-2264-112b-b112-de10559a1183";	//	TEMPLATE ONE PHOTOGALLERY ID	//
	$.ajax({
    	type: "GET",
        url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+galleryId+"&random=1303250264962.93", // replace with absolute URL of your gallery's xml file
        dataType: "xml",
        success: function(xml) {
			$(xml).find('img').each(function() {
			   var location = '/assets/images/photogallery/images/large/';
			   var photo = $(this).attr('src');
			   var alt = $(this).attr('caption');
			   var url = $(this).attr('link');
				//$('<li></li>').html('<a href="'+location+''+url+'"><img src="'+location+''+url+'" alt="'+alt+'"/></a>').appendTo('#photogallery');
				if (url == undefined) 
					{
						$('#slider').append('<img src="'+location+''+photo+'" alt="'+alt+'"/>');
					}
				else
					{
						$('#slider').append('<a href="'+url+'"><img src="'+location+''+photo+'" alt="'+alt+'"/></a>');	
					}
			});

		}

   	});
	
	setTimeout ( "showSlider()", 1000 );
	
});

function showSlider() {
	
	$('#slider').nivoSlider({
		effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
		slices:15, // For slice animations
		animSpeed:500, // Slide transition speed
		pauseTime:5000, // How long each slide will show
		startSlide:0, // Set starting Slide (0 index)
		directionNav:true, // Next & Prev navigation
		directionNavHide:true, // Only show on hover
		controlNav:true // 1,2,3... navigation
	});
	
}


