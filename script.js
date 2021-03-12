
function mute(elem) {
    		var video = document.getElementById(elem);
		    if (!video.muted) {
			        video.muted = true;
			    } else {
			        video.muted = false;
			    }
			};

SetTimeout($(function() {//ne rabotaet
  var $video = $('.video');
  var $window = $(window);

  $window.scroll(function() {
    if ($video.is(":in-viewport")) {
      $video.play();
    } else {
      $video.pause();
    }
  });
}), 1000); 
function next(){
		var currentvideo=$('.video.current');
		var currentvideoindex=$('.video.current').index();
		var nextvideoindex=currentvideoindex+1;
		var nextvideo=$('.video').eq(nextvideoindex);
		currentvideo.fadeOut(1000);
		currentvideo.removeClass('current');
		if(nextvideoindex==($('.video:last').index)){
			$('.video').eq(0).fadeIn(1000);
			$('.video').eq(0).addClass('current');
		}
		else{
			nextvideo.fadeIn(1000);
			nextvideo.addClass('current');
		}
	};
function prev(){
		var currentvideo=$('.video.current');
		var currentvideoindex=$('.video.current').index();
		var prevvideoindex=currentvideoindex-1;
		var prevvideo=$('.video').eq(prevvideoindex);
		currentvideo.fadeOut(1000);
		currentvideo.removeClass('current');
		prevvideo.fadeIn(1000);
		prevvideo.addClass('current');
	};

