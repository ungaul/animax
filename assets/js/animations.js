// Meta tags
var DocTitle = "Animax";

document.title = DocTitle;
$('meta[name="twitter:title"]').attr("content", DocTitle);
$('meta[name="description"]').attr("content", "Streaming d'Animes VOSTFR Gratuit Sans Pub");
$('meta[itemprop="description"]').attr("content", "Streaming d'Animes VOSTFR Gratuit Sans Pub");
$('meta[name="twitter:description"]').attr("content", "Streaming d'Animes VOSTFR Gratuit Sans Pub");
$('meta[property="og:url"]').attr("content", document.URL);

$(document).ready(function () {
  if ($(".freeprivacypolicy-com---palette-dark.freeprivacypolicy-com---nb").length) {
    $(".cc-nb-okagree")[0].addEventListener("click", (event) => {
      $(".freeprivacypolicy-com---palette-dark.freeprivacypolicy-com---nb")[0].style.transform = "translateY(-110px)";
      $(".freeprivacypolicy-com---palette-dark.freeprivacypolicy-com---nb").fadeOut();
      localStorage.setItem("consentedCookies", "enabled");

      if (localStorage.consentedCookies === "enabled") {
        $("#left")[0].classList.add("full");
        $("#right")[0].classList.add("full");
      }
    });
  }

  if (localStorage.consentedCookies === "enabled") {
    $("#left")[0].classList.add("full");
    $("#right")[0].classList.add("full");
  }
});

function delayImageLoading() {
  $(document).ready(function () {
    var figureBackgrounds = [];
    $("#sagas figure").each(function () {
      figureBackgrounds.push($(this).css("background"));
      $(this).css("background", "none");
    });
    setTimeout(function () {
      for (var i = 0; i < figureBackgrounds.length; i++) {
        $("#sagas figure").eq(i).css("background", figureBackgrounds[i]);
      }
      $("#continue figure").css("background", "url('assets/img/poster/" + OnePiece[currentEpisodeCookie]["Saga"] + ".jpg')");
    }, 5000);
  });
}

delayImageLoading();

$(document).ready(function () {
  localStorage.removeItem("paused");
});

// Player
function openPlayer() {
  $("#player").removeClass("hidden");
  window.scrollTo(0, 0);
  document.body.style.overflowY = "hidden";
  // $(".home-button").removeClass("hidden");
}

localStorage.getItem("paused");

function episodeList() {
  $("#episode-list").removeClass("fadeOut");

  if (!player.paused) {
    player.pause();
    localStorage.setItem("paused", "enabled");
  }
}

$("#episode-list").on("click", function (event) {
  $("#episode-list").addClass("fadeOut");

  if (localStorage.paused === "enabled") {
    player.play();
    localStorage.setItem("paused", "disabled");
  }
});

$(document).on("contextmenu", function (e) {
  $(".context-menu").css({
    top: e.pageY,
    left: e.pageX,
    display: "flex",
  });

  return false;
});

$(document).click(function (e) {
  if (e.which == 1) {
    $(".context-menu").hide();
  }
});

$(document).keydown(function (e) {
  if (e.which == 27) {
    $(".context-menu").hide();
  }
});
