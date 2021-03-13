
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
function next(vidclass){
		var currentvideo=$(vidclass+'.current');
		var currentvideoindex=$(vidclass+'.current').index();
		var nextvideoindex=currentvideoindex+1;
		var nextvideo=$(vidclass).eq(nextvideoindex);
		currentvideo.fadeOut(1000);
		currentvideo.removeClass('current');
		if(nextvideoindex==($(vidclass+':last').index)){
			$(vidclass).eq(0).fadeIn(1000);
			$(vidclass).eq(0).addClass('current');
		}
		else{
			nextvideo.fadeIn(1000);
			nextvideo.addClass('current');
		}
		currentvideo.pause();
		nextvideo.play();
	};
function prev(vidclass){
		var currentvideo=$(vidclass+'.current');
		var currentvideoindex=$(vidclass+'.current').index();
		var prevvideoindex=currentvideoindex-1;
		var prevvideo=$(vidclass).eq(prevvideoindex);
		currentvideo.fadeOut(1000);
		currentvideo.removeClass('current');
		prevvideo.fadeIn(1000);
		prevvideo.addClass('current');
		currentvideo.pause();
		prevvideo.play();
	};

