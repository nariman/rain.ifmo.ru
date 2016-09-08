(function() {
  avatar = document.getElementById("avatar");
  parallax = new Parallax(document.getElementById("scene"));

  media = document.getElementById("media");
  volume_down = document.getElementById("volume_down");
  volume_up = document.getElementById("volume_up");
  music_copy = document.getElementById("music_copy");

  media.addEventListener("play", function() {
    music_copy.style.opacity = 1;
  });

  media.addEventListener("pause", function() {
    music_copy.style.opacity = 0;
  });

  media.addEventListener("ended", function() {
    music_copy.style.opacity = 0;
    media.currentTime = 0;
  });

  volume_down.addEventListener("click", function() {
    media.volume = Math.max(0, media.volume - 0.1);
  });

  volume_up.addEventListener("click", function() {
    media.volume = Math.min(1, media.volume + 0.1);
  });

  avatar.addEventListener("click", function() {
    if (media.paused) {
      media.play();
    } else {
      media.pause();
    }
  });
})();
