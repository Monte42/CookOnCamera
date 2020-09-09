$( document ).ready(function() {
    console.log( "ready!" );
// ============
//  PLAYER ONE
// ============
    //  VARIABLES
    var track1 = document.getElementById('track1');
    var playbutt1 = document.getElementById('playButton1');
    var mutebutt1 = document.getElementById('muteButton1');
    var duration1 = document.getElementById('fullDuration1');
    var time1 = document.getElementById('currentTime1');
    var defaultBar1 = document.getElementById('defaultBar1');
    var offSet1 = defaultBar1.offsetLeft


    // SETTING TRACK LENGTH
    setTimeout(function(){
      var min = Math.floor(track1.duration/60);
      var sec = checkSec(parseInt(track1.duration%60));
      duration1.innerText = `${min}:${sec}`
    },500)

    //  EVENT LISENERS
    playbutt1.addEventListener('click', playPause1,false)
    mutebutt1.addEventListener('click', muteUnmute1,false)
    defaultBar1.addEventListener('click', clickedBar1, false)

    //  FUNCTIONS
    function playPause1() {
      if (!track1.paused && !track1.eneded) {
        track1.pause();
        playbutt1.style.backgroundImage = 'url("./data/img/play.png")'
        window.clearInterval(updateTime1)
      } else {
        track1.play();
        playbutt1.style.backgroundImage = 'url("./data/img/pause.png")'
        updateTime1 = setInterval(setTime1,500)
      };
    };

    function muteUnmute1(){
      if (!track1.paused && track1.volume === 1) {
        track1.volume = 0;
        mutebutt1.style.backgroundImage = 'url("./data/img/unmute.png")';
      } else {
        track1.volume = 1;
        mutebutt1.style.backgroundImage = 'url("./data/img/mute.png")';
      }
    }

    function checkSec(num){
      if (num < 10) {
        return `0${num}`
      }else {
        return `${num}`
      }
    }

    function setTime1(){
      var currentMin = Math.floor(track1.currentTime/60)
      var currentSec = checkSec(parseInt(track1.currentTime%60))
      if (!track1.ended) {
        time1.innerText = `${currentMin}:${currentSec}`
        document.getElementById('progressBar1').style.width = `${(track1.currentTime / track1.duration) * 100}%`
      } else {
        time1.innerText = `0:00`;
        playbutt1.style.backgroundImage = 'url("./data/img/play.png")'
        document.getElementById('progressBar1').style.width = `0%`
        window.clearInterval(updateTime1)
      }
    }

    function clickedBar1 (e) {
      if (!track1.ended) {
        var mouseX = e.pageX - offSet1;
        var newTime = mouseX*track1.duration/defaultBar1.offsetWidth

        track1.currentTime = newTime;
        document.getElementById('progressBar1').style.width = `${(track1.currentTime / track1.duration) * 100}%`
      }
    }




// ============
//  PLAYER TWO
// ============
    //  VARIABLES
    var track2 = document.getElementById('track2');
    var playbutt2 = document.getElementById('playButton2');
    var mutebutt2 = document.getElementById('muteButton2');
    var duration2 = document.getElementById('fullDuration2');
    var time2 = document.getElementById('currentTime2');
    var defaultBar2 = document.getElementById('defaultBar2');
    var offSet2 = defaultBar2.offsetLeft


    // SETTING TRACK LENGTH
    setTimeout(function(){
      var min = Math.floor(track2.duration/60);
      var sec = checkSec(parseInt(track2.duration%60));
      duration2.innerText = `${min}:${sec}`
    },500)

    //  EVENT LISENERS
    playbutt2.addEventListener('click', playPause2,false)
    mutebutt2.addEventListener('click', muteUnmute2,false)
    defaultBar2.addEventListener('click', clickedBar2, false)

    //  FUNCTIONS
    function playPause2() {
      if (!track2.paused && !track2.eneded) {
        track2.pause();
        playbutt2.style.backgroundImage = 'url("./data/img/play.png")'
        window.clearInterval(updateTime2)
      } else {
        track2.play();
        playbutt2.style.backgroundImage = 'url("./data/img/pause.png")'
        updateTime2 = setInterval(setTime2,500)
      };
    };

    function muteUnmute2(){
      if (!track2.paused && track2.volume === 1) {
        track2.volume = 0;
        mutebutt2.style.backgroundImage = 'url("./data/img/unmute.png")';
      } else {
        track2.volume = 1;
        mutebutt2.style.backgroundImage = 'url("./data/img/mute.png")';
      }
    }

    function setTime2(){
      var currentMin = Math.floor(track2.currentTime/60)
      var currentSec = checkSec(parseInt(track2.currentTime%60))
      if (!track2.ended) {
        time2.innerText = `${currentMin}:${currentSec}`
        document.getElementById('progressBar2').style.width = `${(track2.currentTime / track2.duration) * 100}%`
      } else {
        time2.innerText = `0:00`;
        playbutt2.style.backgroundImage = 'url("./data/img/play.png")'
        document.getElementById('progressBar2').style.width = `0%`
        window.clearInterval(updateTime2)
      }
    }

    function clickedBar2 (e) {
      if (!track2.ended) {
        var mouseX = e.pageX - offSet2;
        var newTime = mouseX*track2.duration/defaultBar2.offsetWidth

        track2.currentTime = newTime;
        document.getElementById('progressBar2').style.width = `${(track2.currentTime / track2.duration) * 100}%`
      }
    }
// =============
//  PLAYER THREE
// =============
  //  VARIABLES
  var track3 = document.getElementById('track3');
  var playbutt3 = document.getElementById('playButton3');
  var mutebutt3 = document.getElementById('muteButton3');
  var duration3 = document.getElementById('fullDuration3');
  var time3 = document.getElementById('currentTime3');
  var defaultBar3 = document.getElementById('defaultBar3');
  var offSet3 = defaultBar3.offsetLeft


  // SETTING TRACK LENGTH
  setTimeout(function(){
    var min = Math.floor(track3.duration/60);
    var sec = checkSec(parseInt(track3.duration%60));
    duration3.innerText = `${min}:${sec}`
  },500)

  //  EVENT LISENERS
  playbutt3.addEventListener('click', playPause3,false)
  mutebutt3.addEventListener('click', muteUnmute3,false)
  defaultBar3.addEventListener('click', clickedBar3, false)

  //  FUNCTIONS
  function playPause3() {
    if (!track3.paused && !track3.eneded) {
      track3.pause();
      playbutt3.style.backgroundImage = 'url("./data/img/play.png")'
      window.clearInterval(updateTime3)
    } else {
      track3.play();
      playbutt3.style.backgroundImage = 'url("./data/img/pause.png")'
      updateTime3 = setInterval(setTime3,500)
    };
  };

  function muteUnmute3(){
    if (!track3.paused && track3.volume === 1) {
      track3.volume = 0;
      mutebutt3.style.backgroundImage = 'url("./data/img/unmute.png")';
    } else {
      track3.volume = 1;
      mutebutt3.style.backgroundImage = 'url("./data/img/mute.png")';
    }
  }

  function setTime3(){
    var currentMin = Math.floor(track3.currentTime/60)
    var currentSec = checkSec(parseInt(track3.currentTime%60))
    if (!track3.ended) {
      time3.innerText = `${currentMin}:${currentSec}`
      document.getElementById('progressBar3').style.width = `${(track3.currentTime / track3.duration) * 100}%`
    } else {
      time3.innerText = `0:00`;
      playbutt3.style.backgroundImage = 'url("./data/img/play.png")'
      document.getElementById('progressBar3').style.width = `0%`
      window.clearInterval(updateTime3)
    }
  }

  function clickedBar3 (e) {
    if (!track3.ended) {
      var mouseX = e.pageX - offSet3;
      var newTime = mouseX*track3.duration/defaultBar3.offsetWidth

      track3.currentTime = newTime;
      document.getElementById('progressBar3').style.width = `${(track3.currentTime / track3.duration) * 100}%`
    }
  }




// =============
//  PLAYER FOUR
// =============
  //  VARIABLES
  var track4 = document.getElementById('track4');
  var playbutt4 = document.getElementById('playButton4');
  var mutebutt4 = document.getElementById('muteButton4');
  var duration4 = document.getElementById('fullDuration4');
  var time4 = document.getElementById('currentTime4');
  var defaultBar4 = document.getElementById('defaultBar4');
  var offSet4 = defaultBar4.offsetLeft


  // SETTING TRACK LENGTH
  setTimeout(function(){
    var min = Math.floor(track4.duration/60);
    var sec = checkSec(parseInt(track4.duration%60));
    duration4.innerText = `${min}:${sec}`
  },500)

  //  EVENT LISENERS
  playbutt4.addEventListener('click', playPause4,false)
  mutebutt4.addEventListener('click', muteUnmute4,false)
  defaultBar4.addEventListener('click', clickedBar4, false)

  //  FUNCTIONS
  function playPause4() {
    if (!track4.paused && !track4.eneded) {
      track4.pause();
      playbutt4.style.backgroundImage = 'url("./data/img/play.png")'
      window.clearInterval(updateTime4)
    } else {
      track4.play();
      playbutt4.style.backgroundImage = 'url("./data/img/pause.png")'
      updateTime4 = setInterval(setTime4,500)
    };
  };

  function muteUnmute4(){
    if (!track4.paused && track4.volume === 1) {
      track4.volume = 0;
      mutebutt4.style.backgroundImage = 'url("./data/img/unmute.png")';
    } else {
      track4.volume = 1;
      mutebutt4.style.backgroundImage = 'url("./data/img/mute.png")';
    }
  }

  function setTime4(){
    var currentMin = Math.floor(track4.currentTime/60)
    var currentSec = checkSec(parseInt(track4.currentTime%60))
    if (!track4.ended) {
      time4.innerText = `${currentMin}:${currentSec}`
      document.getElementById('progressBar4').style.width = `${(track4.currentTime / track4.duration) * 100}%`
    } else {
      time4.innerText = `0:00`;
      playbutt4.style.backgroundImage = 'url("./data/img/play.png")'
      document.getElementById('progressBar4').style.width = `0%`
      window.clearInterval(updateTime4)
    }
  }

  function clickedBar4 (e) {
    if (!track4.ended) {
      var mouseX = e.pageX - offSet4;
      var newTime = mouseX*track4.duration/defaultBar4.offsetWidth

      track4.currentTime = newTime;
      document.getElementById('progressBar4').style.width = `${(track4.currentTime / track4.duration) * 100}%`
    }
  }


// ===========
//  ADDITON
// ===========

// ============
//  PLAYER FIVE
// ============
    //  VARIABLES
    var track5 = document.getElementById('track5');
    var playbutt5 = document.getElementById('playButton5');
    var mutebutt5 = document.getElementById('muteButton5');
    var duration5 = document.getElementById('fullDuration5');
    var time5 = document.getElementById('currentTime5');
    var defaultBar5 = document.getElementById('defaultBar5');
    var offSet5 = defaultBar5.offsetLeft


    // SETTING TRACK LENGTH
    setTimeout(function(){
      var min = Math.floor(track5.duration/60);
      var sec = checkSec(parseInt(track5.duration%60));
      duration5.innerText = `${min}:${sec}`
    },500)

    //  EVENT LISENERS
    playbutt5.addEventListener('click', playPause5,false)
    mutebutt5.addEventListener('click', muteUnmute5,false)
    defaultBar5.addEventListener('click', clickedBar5, false)

    //  FUNCTIONS
    function playPause5() {
      if (!track5.paused && !track5.eneded) {
        track5.pause();
        playbutt5.style.backgroundImage = 'url("./data/img/play.png")'
        window.clearInterval(updateTime5)
      } else {
        track5.play();
        playbutt5.style.backgroundImage = 'url("./data/img/pause.png")'
        updateTime5 = setInterval(setTime5,500)
      };
    };

    function muteUnmute5(){
      if (!track5.paused && track5.volume === 1) {
        track5.volume = 0;
        mutebutt5.style.backgroundImage = 'url("./data/img/unmute.png")';
      } else {
        track5.volume = 1;
        mutebutt5.style.backgroundImage = 'url("./data/img/mute.png")';
      }
    }

    function checkSec(num){
      if (num < 10) {
        return `0${num}`
      }else {
        return `${num}`
      }
    }

    function setTime5(){
      var currentMin = Math.floor(track5.currentTime/60)
      var currentSec = checkSec(parseInt(track5.currentTime%60))
      if (!track5.ended) {
        time5.innerText = `${currentMin}:${currentSec}`
        document.getElementById('progressBar5').style.width = `${(track5.currentTime / track5.duration) * 100}%`
      } else {
        time5.innerText = `0:00`;
        playbutt5.style.backgroundImage = 'url("./data/img/play.png")'
        document.getElementById('progressBar5').style.width = `0%`
        window.clearInterval(updateTime5)
      }
    }

    function clickedBar5 (e) {
      if (!track5.ended) {
        var mouseX = e.pageX - offSet5;
        var newTime = mouseX*track5.duration/defaultBar5.offsetWidth

        track5.currentTime = newTime;
        document.getElementById('progressBar5').style.width = `${(track5.currentTime / track5.duration) * 100}%`
      }
    }




// ============
//  PLAYER SIX
// ============
    //  VARIABLES
    var track6 = document.getElementById('track6');
    var playbutt6 = document.getElementById('playButton6');
    var mutebutt6 = document.getElementById('muteButton6');
    var duration6 = document.getElementById('fullDuration6');
    var time6 = document.getElementById('currentTime6');
    var defaultBar6 = document.getElementById('defaultBar6');
    var offSet6 = defaultBar6.offsetLeft


    // SETTING TRACK LENGTH
    setTimeout(function(){
      var min = Math.floor(track6.duration/60);
      var sec = checkSec(parseInt(track6.duration%60));
      duration6.innerText = `${min}:${sec}`
    },500)

    //  EVENT LISENERS
    playbutt6.addEventListener('click', playPause6,false)
    mutebutt6.addEventListener('click', muteUnmute6,false)
    defaultBar6.addEventListener('click', clickedBar6, false)

    //  FUNCTIONS
    function playPause6() {
      if (!track6.paused && !track6.eneded) {
        track6.pause();
        playbutt6.style.backgroundImage = 'url("./data/img/play.png")'
        window.clearInterval(updateTime6)
      } else {
        track6.play();
        playbutt6.style.backgroundImage = 'url("./data/img/pause.png")'
        updateTime6 = setInterval(setTime6,500)
      };
    };

    function muteUnmute6(){
      if (!track6.paused && track6.volume === 1) {
        track6.volume = 0;
        mutebutt6.style.backgroundImage = 'url("./data/img/unmute.png")';
      } else {
        track6.volume = 1;
        mutebutt6.style.backgroundImage = 'url("./data/img/mute.png")';
      }
    }

    function setTime6(){
      var currentMin = Math.floor(track6.currentTime/60)
      var currentSec = checkSec(parseInt(track6.currentTime%60))
      if (!track6.ended) {
        time6.innerText = `${currentMin}:${currentSec}`
        document.getElementById('progressBar6').style.width = `${(track6.currentTime / track6.duration) * 100}%`
      } else {
        time6.innerText = `0:00`;
        playbutt6.style.backgroundImage = 'url("./data/img/play.png")'
        document.getElementById('progressBar6').style.width = `0%`
        window.clearInterval(updateTime6)
      }
    }

    function clickedBar6 (e) {
      if (!track6.ended) {
        var mouseX = e.pageX - offSet6;
        var newTime = mouseX*track6.duration/defaultBar6.offsetWidth

        track6.currentTime = newTime;
        document.getElementById('progressBar6').style.width = `${(track6.currentTime / track6.duration) * 100}%`
      }
    }
// =============
//  PLAYER SEVEN
// =============
  //  VARIABLES
  var track7 = document.getElementById('track7');
  var playbutt7 = document.getElementById('playButton7');
  var mutebutt7 = document.getElementById('muteButton7');
  var duration7 = document.getElementById('fullDuration7');
  var time7 = document.getElementById('currentTime7');
  var defaultBar7 = document.getElementById('defaultBar7');
  var offSet7 = defaultBar7.offsetLeft


  // SETTING TRACK LENGTH
  setTimeout(function(){
    var min = Math.floor(track7.duration/60);
    var sec = checkSec(parseInt(track7.duration%60));
    duration7.innerText = `${min}:${sec}`
  },500)

  //  EVENT LISENERS
  playbutt7.addEventListener('click', playPause7,false)
  mutebutt7.addEventListener('click', muteUnmute7,false)
  defaultBar7.addEventListener('click', clickedBar7, false)

  //  FUNCTIONS
  function playPause7() {
    if (!track7.paused && !track7.eneded) {
      track7.pause();
      playbutt7.style.backgroundImage = 'url("./data/img/play.png")'
      window.clearInterval(updateTime7)
    } else {
      track7.play();
      playbutt7.style.backgroundImage = 'url("./data/img/pause.png")'
      updateTime7 = setInterval(setTime7,500)
    };
  };

  function muteUnmute7(){
    if (!track7.paused && track7.volume === 1) {
      track7.volume = 0;
      mutebutt7.style.backgroundImage = 'url("./data/img/unmute.png")';
    } else {
      track7.volume = 1;
      mutebutt7.style.backgroundImage = 'url("./data/img/mute.png")';
    }
  }

  function setTime7(){
    var currentMin = Math.floor(track7.currentTime/60)
    var currentSec = checkSec(parseInt(track7.currentTime%60))
    if (!track7.ended) {
      time7.innerText = `${currentMin}:${currentSec}`
      document.getElementById('progressBar7').style.width = `${(track7.currentTime / track7.duration) * 100}%`
    } else {
      time7.innerText = `0:00`;
      playbutt7.style.backgroundImage = 'url("./data/img/play.png")'
      document.getElementById('progressBar7').style.width = `0%`
      window.clearInterval(updateTime7)
    }
  }

  function clickedBar7 (e) {
    if (!track7.ended) {
      var mouseX = e.pageX - offSet7;
      var newTime = mouseX*track7.duration/defaultBar7.offsetWidth
      track7.currentTime = newTime;
      document.getElementById('progressBar7').style.width = `${(track7.currentTime / track7.duration) * 100}%`
    }
  }




// =============
//  PLAYER EIGHT
// =============
  //  VARIABLES
  var track8 = document.getElementById('track8');
  var playbutt8 = document.getElementById('playButton8');
  var mutebutt8 = document.getElementById('muteButton8');
  var duration8 = document.getElementById('fullDuration8');
  var time8 = document.getElementById('currentTime8');
  var defaultBar8 = document.getElementById('defaultBar8');
  var offSet8 = defaultBar8.offsetLeft


  // SETTING TRACK LENGTH
  setTimeout(function(){
    var min = Math.floor(track8.duration/60);
    var sec = checkSec(parseInt(track8.duration%60));
    duration8.innerText = `${min}:${sec}`
  },500)

  //  EVENT LISENERS
  playbutt8.addEventListener('click', playPause8,false)
  mutebutt8.addEventListener('click', muteUnmute8,false)
  defaultBar8.addEventListener('click', clickedBar8, false)

  //  FUNCTIONS
  function playPause8() {
    if (!track8.paused && !track8.eneded) {
      track8.pause();
      playbutt8.style.backgroundImage = 'url("./data/img/play.png")'
      window.clearInterval(updateTime8)
    } else {
      track8.play();
      playbutt8.style.backgroundImage = 'url("./data/img/pause.png")'
      updateTime8 = setInterval(setTime8,500)
    };
  };

  function muteUnmute8(){
    if (!track8.paused && track8.volume === 1) {
      track8.volume = 0;
      mutebutt8.style.backgroundImage = 'url("./data/img/unmute.png")';
    } else {
      track8.volume = 1;
      mutebutt8.style.backgroundImage = 'url("./data/img/mute.png")';
    }
  }

  function setTime8(){
    var currentMin = Math.floor(track8.currentTime/60)
    var currentSec = checkSec(parseInt(track8.currentTime%60))
    if (!track8.ended) {
      time8.innerText = `${currentMin}:${currentSec}`
      document.getElementById('progressBar8').style.width = `${(track8.currentTime / track8.duration) * 100}%`
    } else {
      time8.innerText = `0:00`;
      playbutt8.style.backgroundImage = 'url("./data/img/play.png")'
      document.getElementById('progressBar8').style.width = `0%`
      window.clearInterval(updateTime8)
    }
  }

  function clickedBar8 (e) {
    if (!track8.ended) {
      var mouseX = e.pageX - offSet8;
      var newTime = mouseX*track8.duration/defaultBar8.offsetWidth
      track8.currentTime = newTime;
      document.getElementById('progressBar8').style.width = `${(track8.currentTime / track8.duration) * 100}%`
    }
  }



});
