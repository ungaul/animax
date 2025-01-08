var path = window.location.pathname;
var page = path.split("/").pop();
pageNumber = page.slice(0, page.length - 5);

shortUrl = pageNumber + ".html";
length = shortUrl.length *= -1;
var url = window.location.pathname + window.location.search;
season = url.slice(27, length);

$(".epnumber")[0].innerHTML = "Ep. " + pageNumber;

animeName = "Fire Force";
$(".title")[0].innerHTML = animeName;
document.title = animeName + " - VoirAnimes";

$('a[href="/v1/dr-stone/"]')[2].innerHTML = "<div class='object active'> Dr. Stone </div>";

$("#previous-ep")[0].href = Number(pageNumber) - 1 + ".html";
$("#next-ep")[0].href = Number(pageNumber) + 1 + ".html";

$("#en-sub")[0].src = "/assets/streaming-files/voir-animes/fire-force/sub/" + season + pageNumber + "-en.vtt";
$("#fr-sub")[0].src = "/assets/streaming-files/voir-animes/fire-force/sub/" + season + pageNumber + "-fr.vtt";

localStorage.setItem("watchFrF", pageNumber);
localStorage.setItem("PathWatchFrF", path);

const episodesS1 = {
  1: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/1.mp4",
  2: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/2.mp4",
  3: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/3.mp4",
  4: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/4.mp4",
  5: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/5.mp4",
  6: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/6.mp4",
  7: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/7.mp4",
  8: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/8.mp4",
  9: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/9.mp4",
  10: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/10.mp4",
  11: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/11.mp4",
  12: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/12.mp4",
  13: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/13.mp4",
  14: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/14.mp4",
  15: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/15.mp4",
  16: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/16.mp4",
  17: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/17.mp4",
  18: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/18.mp4",
  19: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/19.mp4",
  20: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/20.mp4",
  21: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/21.mp4",
  22: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/22.mp4",
  23: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/23.mp4",
  24: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s1/24.mp4",
};

const episodesS2 = {
  1: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/1.mp4",
  2: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/2.mp4",
  3: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/3.mp4",
  4: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/4.mp4",
  5: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/5.mp4",
  6: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/6.mp4",
  7: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/7.mp4",
  8: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/8.mp4",
  9: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/9.mp4",
  10: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/10.mp4",
  11: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/11.mp4",
  12: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/12.mp4",
  13: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/13.mp4",
  14: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/14.mp4",
  15: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/15.mp4",
  16: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/16.mp4",
  17: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/17.mp4",
  18: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/18.mp4",
  19: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/19.mp4",
  20: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/20.mp4",
  21: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/21.mp4",
  22: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/22.mp4",
  23: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/23.mp4",
  24: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/24.mp4",
  24: "https://link.storjshare.io/jvzzkfae3imjlec2uu5odef7rlxq/anime/fire-force/s2/25.mp4",
};

seasonLessSlash = season.slice(0, -1);

if (seasonLessSlash === "s1") {
  $(".epnumber")[0].innerHTML = "Fire Force - Ep. " + pageNumber;
  document.title = "Fire Force - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS1[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].href = "javascript:void(0)";
  }

  if (pageNumber === "26") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "../stone-wars/";
  }
}

if (seasonLessSlash === "s2") {
  $(".epnumber")[0].innerHTML = "Stone Wars - Ep. " + pageNumber;
  document.title = "Fire Force - " + animeName + " - VoirAnimes";
  $("video")[0].src = episodesS2[window["pageNumber"]] + "?wrap=0";
  if (pageNumber === "1") {
    $("#previous-ep")[0].innerHTML = "<button><ion-icon name='chevron-back-outline'></ion-icon> Saison Précédente</button>";
    $("#previous-ep")[0].href = "../stone-world/24.html";
  }

  if (pageNumber === "48") {
    $("#next-ep")[0].innerHTML = "<button>Saison Suivante <ion-icon name='chevron-forward-outline'></ion-icon></button>";
    $("#next-ep")[0].href = "javascript:void(0)";
  }
}
