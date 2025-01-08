function home() {
  $("#manga-player").addClass("hidden");
  document.body.style.overflowY = "scroll";
  $(".home-button").addClass("hidden");
  location.reload();
}

function openViewer() {
  $("#manga-player").removeClass("hidden");
  document.body.style.overflowY = "hidden";
  window.scrollTo(0, 0);
}

let mangaNumberChosen = 1;
let currentMangaCookie = localStorage.getItem("currentMangaCookie");

function currentMangaCookieCheck() {
  const continueElement = $("#continue")[0];
  if (!currentMangaCookie || currentMangaCookie === 0) {
    continueElement.style.display = "none";
  } else {
    continueElement.style.display = "flex";
    $("#continue img")[0].src = `https://domainedelarochethulon.fr/config/assets/streaming-files/one-piece/img/covers/${OnePieceManga[currentMangaCookie]["Source"]}.jpg`;
  }
}

$(window).on("load", function () {
  currentMangaCookieCheck();
});

function mangaQuickList(mangaNumberChosen) {
  const mangaQuickListSelect = $("#viewer")[0];
  mangaQuickListSelect.innerHTML = "";

  for (let i = 1; i <= 500; i++) {
    const mangaQuickListOption = $("<div>", { class: "viewer-frame", style: `background: url(https://link.storjshare.io/ju7h46j4lodcokuc6k6jkvrpjsja/manga/one-piece/${Number(mangaNumberChosen)}/${i}.jpg?wrap=0)` });
    mangaQuickListSelect.append(mangaQuickListOption);
  }
}

function customManga(mangaNumber) {
  openViewer();
  mangaNumberChosen = mangaNumber;
  mangaQuickList(mangaNumberChosen);
  localStorage.setItem("currentMangaCookie", mangaNumberChosen);

  $("#episode-quick-list").val(mangaNumber);
}

const mangaQuickListSelect = $("#viewer-volume-selector")[0];
mangaQuickListSelect.innerHTML = "";

for (let i = 1; i <= 102; i++) {
  const mangaQuickList2Option = $("<option>", { value: i, html: `Tome ${i}` });
  mangaQuickListSelect.append(mangaQuickList2Option);
}

$("#autoplay").on("click", () => {
  const autoplayElement = $("#autoplay");
  autoplayElement.innerHTML = autoplayElement.html(`"<ion-icon name='pause-circle-outline'></ion-icon>" ? "<ion-icon name='play-circle-outline'></ion-icon>" : "<ion-icon name='pause-circle-outline'></ion-icon>";`)
  pageScroll();
});

$("#viewer-prev-volume")
  .add("#viewer-next-volume")
  .on("click", function () {
    mangaNumberChosen += $(this).is("#viewer-next-volume") ? 1 : -1;
    customManga(mangaNumberChosen);
  });

function pageScroll() {
  $("#manga-player")[0].scrollBy({
    left: 0,
    top: 500,
    behavior: "smooth",
  });
  setTimeout(pageScroll, 7000);
}
