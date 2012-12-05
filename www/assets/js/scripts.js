var v65 = {
	global : {
		mainMenuHover : function(){
			$(".mainMenu ul li:last-child").css("margin-right", "0");
			$(".mainMenu ul li ul li").hover(function(){
				$(this).parent().parent().children("a").toggleClass("hover");
			});
		}
	},
	home : {
		initPhotoGallery : function(){
			if($("#slider").length){
				$("#slider").v65PhotoGallery({
					galleryHeight : 350, // This changes the height of the homepage photogallery
					galleryWidth : 950, // This changes the width of the homepage photogallery
					galleryId : "faeca5fe-2264-112b-b112-de10559a1183"	//	This is where you add the homepage photogallery id
				});
			}
		}
	},
	page : {
		initPhotoGallery : function(){
			if($("#pagePhotoGallery").length){
				$("#pagePhotoGallery").v65PhotoGallery({
					/*
						Uncomment the code below if you want to change how the photo gallery is displayed.

						galleryHeight : 420, // This value is translated to 420px and will change the photogallery height
						galleryWidth : 630, // This value is translated to 630px and will change the photogallery width
						pauseTime : 5000, // Adjust how long the image is displayed for. Value is in milliseconds
						animSpeed : 1000, // Adjust the transition speed between images. Value is in milliseconds
						controlNav : false, // hide the 1,2,3 navigation
						directionNav : false // hide the arrow navigation
					*/
				});
			}
		}
	}
}

$(document).ready(function() {
	v65.global.mainMenuHover();
	v65.home.initPhotoGallery();
	v65.page.initPhotoGallery();
});

;(function($,undefined){
	$.fn.v65PhotoGallery = function(options){
		var defaults = {
			galleryId : $("#pagePhotoGallery").attr("v65jsphotogalleryid"),
			galleryHeight : $("#pagePhotoGallery").attr("v65jsphotogalleryheight"),
			galleryWidth : $("#pagePhotoGallery").attr("v65jsphotogallerywidth"),
			timestamp : "&timestamp="+ new Date().getTime(),
			effect:'fade', // Specify sets like: 'fold,fade,sliceDown'
			slices:15, // For slice animations
			animSpeed:500, // Slide transition speed
			pauseTime:5000, // How long each slide will show
			startSlide:0, // Set starting Slide (0 index)
			directionNav:true, // Next & Prev navigation
			directionNavHide:true, // Only show on hover
			controlNav:true // 1,2,3... navigation
		},
		gallery = $(this),
		settings = $.extend(defaults, options);
		gallery.html("").css({
			"height":settings.galleryHeight,
			"width":settings.galleryWidth,
			"overflow":"hidden"
		});
		$.ajax({
	    		type: "GET",
			url: "/index.cfm?method=pages.showPhotoGalleryXML&photogalleryid="+settings.galleryId+defaults.timestamp,
			dataType: "xml",
			success: function(xml) {
				var images = "";
				$(xml).find('img').each(function() {
					var location = '/assets/images/photogallery/images/large/',
						photo = $(this).attr('src'),
						alt = $(this).attr('caption'),
						url = $(this).attr('link');
					if (url === undefined) {
						images += '<img src="'+location+''+photo+'" alt="'+alt+'"/>';
					} else{
						images += '<a href="'+url+'"><img src="'+location+''+photo+'" alt="'+alt+'"/></a>';
					}
				});
				gallery.append(images);
			},
			complete: function(){
	   			gallery.nivoSlider({
					effect:settings.effect, // Specify sets like: 'fold,fade,sliceDown'
					slices:settings.slices, // For slice animations
					animSpeed:settings.animSpeed, // Slide transition speed
					pauseTime:settings.pauseTime, // How long each slide will show
					startSlide:settings.startSlide, // Set starting Slide (0 index)
					directionNav:settings.directionNav, // Next & Prev navigation
					directionNavHide:settings.directionNavHide, // Only show on hover
					controlNav:settings.controlNav // 1,2,3... navigation
				});
	   		}
	   	});
	}
})(jQuery);