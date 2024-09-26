function home() {
  $("#player").addClass("hidden");
  player.pause();
  $("body").css("overflowY", "scroll");
  $(".home-button").addClass("hidden");
  currentEpisodeCookiecheck();
  var intervalBackgroundPause = setInterval(() => {
    player.pause();
    if (player.paused === true) {
      clearInterval(intervalBackgroundPause);
    }
  }, 1500);
  location.reload();
}

// Initialization
let video = $("#video")[0];
const player = new Plyr("video", {
  controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "download", "pip", "airplay", "fullscreen"],
  captions: {
    active: true,
    update: true,
  },
  tooltips: {
    controls: true,
    seek: true,
  },
});

let currentEpisodeCookie = localStorage.getItem("currentEpisodeCookie");

function currentEpisodeCookiecheck() {
  if (currentEpisodeCookie) {
    $("#continue").show();
    $("#continue .type").html("Épisode " + currentEpisodeCookie);
    $("#continue .title").html(OnePiece[Number(currentEpisodeCookie)]["Saga"]);
    $("#continue figure").css("background", "url(assets/img/poster/" + OnePiece[currentEpisodeCookie]["Saga"] + ".jpg)");
  } else {
    $("#continue").hide();
  }
}

$(document).ready(function () {
  currentEpisodeCookiecheck();
  localStorage.setItem("language", "fr");
  var intervalHidePoster = setInterval(() => {
    $(".plyr__poster").fadeIn();
    if (player.currentTime > 0) {
      $(".plyr__poster").css("z-index", -1);
      clearInterval(intervalHidePoster);
    }
  }, 500);
});

function togglePlay() {
  player.currentTime > 0 || !player.paused || !player.ended || player.readyState > 2 ? player.play() : player.pause();
}

$(document).on("keydown", function (e) {
  if (e.key === "f") toggleFullScreen();
  if (e.key === "k") player.togglePlay();
  if (e.key === "m") $("video").attr("muted", $(this).attr("contenteditable") === "true" ? "false" : "true");
});

$("video").on("click", (event) => {
  player.paused ? player.play() : player.pause();
});

// Episode Quick List
let episodeQuickListMin = 1,
  episodeQuickListMax = 1051;
let episodeQuickListSelect = $("#episode-quick-list");
episodeQuickListSelect.html("");

for (let i = episodeQuickListMin; i <= episodeQuickListMax; i++) {
  $("<option>")
    .val(i)
    .html("Épisode " + i + " - " + OnePiece[i - 1]["Titre"])
    .appendTo(episodeQuickListSelect);
}

// Fullscreen
// player.on("enterfullscreen", (event) => {
//   if (window.mobileAndTabletCheck()) screen.orientation.lock("landscape");
// });

// player.on("exitfullscreen", (event) => {
//   if (window.mobileAndTabletCheck()) screen.orientation.lock("portrait");
// });

function toggleFullScreen() {
  document.fullscreenElement ? player.fullscreen.exit() : player.fullscreen.enter();
}

// Episode changing => Épisode Précédent
let currentEpisode = 0;
let currentEpisodeText = currentEpisode + 1;

function customEp(episodeNumber) {
  openPlayer();
  currentEpisodeText = episodeNumber;
  currentEpisode = currentEpisodeText - 1;
  $("video").attr("src", OnePiece[currentEpisode]["Source"] + currentEpisodeText + ".mkv?wrap=0");
  player.play();
  $("track").attr("src", "assets/sub/" + currentEpisodeText + ".vtt");
  $(".plyr__poster").css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/" + currentEpisodeText + ".jpg)");
  $("#episode-title").html("Épisode " + currentEpisodeText + " - " + OnePiece[currentEpisode]["Titre"]);
  $("#description").html(OnePiece[currentEpisode]["Description"]);
  $(".mode").html("VOSTFR - " + OnePiece[currentEpisode]["DateDeParution"]);
  $(".rating").html(OnePiece[currentEpisode]["Rating"] + " <ion-icon name='star'></ion-icon> - 475");

  try {
    $(".episode-preview-title").html("Épisode " + (parseFloat(currentEpisodeText) - 1) + " - " + OnePiece[Number(currentEpisode) - 1]["Titre"]);
  } catch (e) {}

  try {
    $(".episode-preview-title")
      .eq(1)
      .html("Épisode " + (parseFloat(currentEpisodeText) + 1) + " - " + OnePiece[Number(currentEpisode) + 1]["Titre"]);
  } catch (e) {}

  $(".episode-preview-thumbnail")
    .eq(0)
    .css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/" + (currentEpisodeText - 1) + ".jpg)")
    .attr("data-src", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/" + (currentEpisodeText - 1) + ".jpg)");
  $(".episode-preview-thumbnail")
    .eq(1)
    .css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/" + (Number(currentEpisodeText) + 1) + ".jpg)")
    .attr("data-src", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/" + (Number(currentEpisodeText) + 1) + ".jpg)");

  $("#episode-quick-list").val(currentEpisodeText);

  localStorage.setItem("currentEpisodeCookie", currentEpisodeText);

  player.toggleCaptions();
}

$(".episode-preview")
  .eq(0)
  .on("click", () => {
    customEp(Number(currentEpisodeText) - 1);
  });

// Episode changing => Épisode Suivant
$(".episode-preview")
  .eq(1)
  .on("click", () => {
    customEp(Number(currentEpisodeText) + 1);
  });

// Episode changing => Automatiquement passer au prochain épisode
$("video").on("ended", () => {
  customEp(Number(currentEpisodeCookie) + 1);
});

// Reprendre là où on en était
$("#continue article").on("click", () => {
  customEp(currentEpisodeCookie);
});

// Custom Film
function customFilm(episodeNumber) {
  openPlayer();
  currentEpisodeText = episodeNumber;
  currentEpisode = currentEpisodeText - 1;
  $("video").attr("src", OnePieceFilms[currentEpisode]["Source"] + currentEpisodeText + ".mkv?wrap=0");
  player.play();
  $("track").attr("src", "assets/sub/film-" + currentEpisodeText + ".vtt");
  $(".plyr__poster").css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/film-" + currentEpisode + ".jpg)");
  $("#episode-title").html("Film " + currentEpisodeText + " - " + OnePieceFilms[currentEpisode]["Titre"]);
  $("#description").html(OnePieceFilms[currentEpisode]["Description"]);
  $(".mode").html("VOSTFR - " + OnePieceFilms[currentEpisode]["DateDeParution"]);
  $(".rating").html(OnePieceFilms[currentEpisode]["Rating"] + " <ion-icon name='star'></ion-icon> - 475");

  try {
    $(".episode-preview-title").html("Film " + (parseFloat(currentEpisode) - 1) + " - " + OnePieceFilms[Number(currentEpisode) - 1]["Titre"]);
  } catch (e) {}

  try {
    $(".episode-preview-title")
      .eq(1)
      .html("Film " + (parseFloat(currentEpisode) + 1) + " - " + OnePieceFilms[Number(currentEpisode) + 1]["Titre"]);
  } catch (e) {}

  $(".episode-preview-thumbnail")
    .eq(0)
    .css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/film-" + (currentEpisode - 1) + ".jpg)")
    .attr("data-src", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/film-" + (currentEpisode - 1) + ".jpg)");
  $(".episode-preview-thumbnail")
    .eq(1)
    .css("background", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/film-" + (Number(currentEpisode) + 1) + ".jpg)")
    .attr("data-src", "url(https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/thumbnails/film-" + (Number(currentEpisode) + 1) + ".jpg)");

  let episodeQuickListMin = 1,
    episodeQuickListMax = 14;
  let episodeQuickListSelect = $("#episode-quick-list")[0];
  episodeQuickListSelect.html("");

  for (let i = episodeQuickListMin; i <= episodeQuickListMax; i++) {
    $("<option>")
      .val(i)
      .html("Film " + i + " - " + OnePieceFilms[i - 1]["Titre"])
      .appendTo(episodeQuickListSelect);
  }

  $("#episode-quick-list").val(currentEpisodeText);
}
