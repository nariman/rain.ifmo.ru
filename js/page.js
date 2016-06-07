(function() {
  avatar = document.getElementById("avatar");
  // coub = document.getElementById("coub");
  name_div = document.getElementById("name");
  info_div = document.getElementById("info");
  parallax = new Parallax(document.getElementById("scene"));

  // avatar.addEventListener("click", function() {
  //   coub.style.display = "inline-block";
  //   this.style.display = "none";
  //   name_div.style.display = "none";
  //   info_div.style.display = "none";
  // });

  media = document.getElementById("media");
  voldown = document.getElementById("voldown");
  volup = document.getElementById("volup");
  copy_music = document.getElementById("music");

  media.addEventListener("play", function() {
    copy_music.style.opacity = 1;
  });
  media.addEventListener("pause", function() {
    copy_music.style.opacity = 0;
  });
  media.addEventListener("ended", function() {
    copy_music.style.opacity = 0;
    media.currentTime = 0;
  });
  voldown.addEventListener("click", function() {
    media.volume = Math.max(0, media.volume - 0.1);
  });
  volup.addEventListener("click", function() {
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
