// first Image slow scroll
$.fn.moveIt = function(){
  var $window = $(window);
  var instances = [];

  $(this).each(function(){
    instances.push(new moveItItem($(this)));
  });

  window.onscroll = function(){
    var scrollTop = $window.scrollTop();
    instances.forEach(function(inst){
      inst.update(scrollTop);
    });
  }
}

var moveItItem = function(el){
  this.el = $(el);
  this.speed = parseInt(this.el.attr('data-scroll-speed'));
};

moveItItem.prototype.update = function(scrollTop){
  var pos = scrollTop / this.speed;
  this.el.css('transform', 'translateY(' + pos + 'px)');
};

$(function(){
  $('[data-scroll-speed]').moveIt();
});



//  Video hover edit
$('.video_container').hover(function(){
  $(this).css('opacity','0.8');
  $(this.children).css('opacity', '1');
},function(){
  $(this).css('opacity','0.6');
  $('.overlay').css('opacity', '0')
})



// full screen video on click
function goFullscreen(id) {
  playPause(id)
  var element = document.getElementById(id);
  if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullScreen) {
    element.webkitRequestFullScreen();
  }
  if (document.fullscreen) {
    document.exitFullscreen();
  }
}



// Play Pause controls on click
function playPause(id){
  var video = document.getElementById(id)
  console.log(video);
  video.paused?video.play():video.pause();
}


// Auto Pause on press od esc from fullScreen
$(document).bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
    var state = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    var event = state ? 'FullscreenOn' : 'FullscreenOff';

   if(event === 'FullscreenOff') {
     $('.video_player').each(function() {
       $(this).get(0).pause();
     })
   }
});




// onload function
function fullVideoBuild(){
  setFrontImgHeight()
  isOverlayVisable();
  buildVideo()
  resumeFontSize()
  setButtonFontSize()
}

function setFrontImgHeight(){
  var height = $('#frontImg')[0].offsetHeight + screen.availHeight*.05;
  $('.top').css('height', `${height}px`)
}

function isOverlayVisable(){
  if (window.innerWidth < 775) {
    $('.video_container').hover(function(){
      $(this).css('opacity','0.8');
      $('.overlay').css('opacity', '0');
      $('.overlay').css('left', '0');
    },function(){
      $(this).css('opacity','0.6');
      $('.overlay').css('opacity', '0')
    })
  }
}


function buildVideo(){
  var vcHeight = setVidContHieght();
  var videoCont = $('.sampleVideo')
  videoCont.css('height', vcHeight)
  var contHeight = videoCont[0].offsetHeight;
  var contWidth = videoCont[0].offsetWidth;
  setOverlay(contHeight, contWidth);
}

function setVidContHieght() {
  var vidHieght = $('#player1')[0].offsetHeight;
  var height = (vidHieght*.2)+vidHieght+$('button').height()+$('#reel').height();
  return height;
}

function setOverlay(height, width) {
  $('.player_one').css('top', height/3.2)
  $('.player_one').css('left', width/2.2)
}

function setButtonFontSize(){
  var vidHieght = $('#player1')[0].offsetHeight;
  if (vidHieght/430 > .8) {
    $('#video-play').css('font-size', `${vidHieght/430}em`)
  } else {
    $('#video-play').css('font-size', `.8em`)
  }
}

function resumeFontSize(){
  var screenWidth = window.innerWidth;
  if (screenWidth >= 750) {
    $('.resume').css('font-size', '1.5em')
  }
  if (screenWidth <= 750) {
    $('.resume').css('font-size', '1.2em')
  }
  if (screenWidth <= 425) {
    $('.resume').css('font-size', '.8em')
  }
}

window.onresize = function() {
  fullVideoBuild()
}

// Voice Over Pasuse other while current plays.
document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for(var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
    checkPlayButton();
}, true);

function checkPlayButton(){
  var buttons = document.getElementsByClassName('wrap')
  for (var i = 0; i < buttons.length; i++) {
    if (!buttons[i].children[0].paused) {
      buttons[i].children[1].children[1].children[0].style.backgroundImage = 'url("./data/img/pause.png")'
    } else {
      buttons[i].children[1].children[1].children[0].style.backgroundImage = 'url("./data/img/play.png")'
    }
  }
}
