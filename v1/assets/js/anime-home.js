function openOverlay() {
  $("#epselect-overlay")[0].style.opacity = "100";
  $("#epselect-overlay")[0].style.zIndex = "12";
  setTimeout(() => {
    document.body.classList.add("no-overflow");
  }, 333);
}

function closeOverlay() {
  $("#epselect-overlay")[0].style.opacity = "0";
  $("#epselect-overlay")[0].style.zIndex = "-1";
  setTimeout(() => {
    document.body.classList.remove("no-overflow");
  }, 333);
}

$("#epselect-overlay-close")[0].addEventListener("click", () => {
  closeOverlay();
});

// if (window.location.pathname === "/v1/assassination-classroom/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchAss"));
// }

// if (window.location.pathname === "/v1/berserk/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchBer"));
// }

// if (window.location.pathname === "/v1/black-clover/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchBla"));
// }

// if (window.location.pathname === "/v1/blend-s/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchBle"));
// }

// if (window.location.pathname === "/v1/demon-slayer/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchDem"));
// }

// if (window.location.pathname === "/v1/dr-stone/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchDrS"));
// }

// if (window.location.pathname === "/v1/great-teacher-onizuka/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchGTO"));
// }

// if (window.location.pathname === "/v1/haikyuu/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHai"));
// }

// if (window.location.pathname === "/v1/horimiya/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHor"));
// }

// if (window.location.pathname === "/v1/hunter-x-hunter/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchHxH"));
// }

// if (window.location.pathname === "/v1/initial-d/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchIni"));
// }

// if (window.location.pathname === "/v1/jojos-bizarre-adventure/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchJBA"));
// }

// if (window.location.pathname === "/v1/jujutsu-kaisen/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchJJK"));
// }

// if (window.location.pathname === "/v1/my-dress-up-darling/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchMDD"));
// }

// if (window.location.pathname === "/v1/my-hero-academia/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchMHA"));
// }

// if (window.location.pathname === "/v1/naruto/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchNar"));
// }

// if (window.location.pathname === "/v1/neon-genesis-evangelion/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchNGE"));
// }

// if (window.location.pathname === "/v1/one-piece/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchOP"));
// }

// if (window.location.pathname === "/v1/one-piece-kai/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchOPK"));
// }

// if (window.location.pathname === "/v1/shingeki-no-kyojin/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchSNK"));
// }

// if (window.location.pathname === "/v1/spy-x-family/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchSxF"));
// }

// if (window.location.pathname === "/v1/vinland-saga/") {
//   $(".lastSessionSeek")[0].setAttribute("href", localStorage.getItem("PathWatchVin"));
// }
