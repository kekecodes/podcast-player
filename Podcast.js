const randomIcon = document.getElementById("randomIcon");
let isBlue = false;

randomIcon.addEventListener("click", () => {
  if (isBlue) {
    randomIcon.style.color = "#ff3131";
    isBlue = false;
  } else {
    randomIcon.style.color = "blue";
    isBlue = true;
  }
});
$(document).ready(function () {
  let volume = 0;

  $("#volumeIcon").click(function () {
    $("#volumeProgress").toggle();
  });

  $("#volumeProgress").click(function (e) {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = $(this).width();
    volume = (clickX / width) * 100;
    $(this)
      .children(".progress-bar")
      .css("width", volume + "%");
    $("#volumeLabel").text(volume.toFixed(0) + "%");
    $("#volumeIcon i").removeClass("fa-volume-mute");
    if (volume === 0) {
      $("#volumeIcon i").addClass("fa-volume-mute");
    }
  });
});

document
  .querySelector(".btn-toggle-play")
  .addEventListener("click", function () {
    const iconPlay = document.querySelector(".icon-play");
    const iconPause = document.querySelector(".icon-pause");

    if (iconPlay.style.display === "none") {
      iconPlay.style.display = "inline";
      iconPause.style.display = "none";
    } else {
      iconPlay.style.display = "none";
      iconPause.style.display = "inline";
    }
  });
