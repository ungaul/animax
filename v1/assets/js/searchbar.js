let searchBar = $("#searchbar")[0];
let animeListContentX = document.getElementsByClassName("anime-list");
let eraseSearchbar = $("#eraseSearchbar")[0];

searchBar.addEventListener("keyup", () => {
  let searchbarContent = searchBar.value;
  searchbarContent = searchbarContent.toLowerCase();

  for (i = 0; i < animeListContentX.length; i++) {
    if (!animeListContentX[i].innerHTML.toLowerCase().includes(searchbarContent)) {
      animeListContentX[i].style.display = "none";
    } else {
      animeListContentX[i].style.display = "flex";
      // $(".anime-list-hidden").addClass("anime-list-hidden-display");
    }
  }
});

let animeListContainer = $("#anime-list")[0];

animeListContainer.innerHTML =
  "<a href='/v1/ao-no-exorcist/'><li class='anime-list'>Ao No Exorcist</li></a><a href='/v1/assassination-classroom/'><li class='anime-list'>Assassination Classroom</li></a><a href='/v1/berserk/'><li class='anime-list'>Berserk</li></a><a href='/v1/black-clover/'><li class='anime-list'>Black Clover</li></a><a href='/v1/blend-s/'><li class='anime-list'>Blend S</li></a><a href='/v1/demon-slayer/'><li class='anime-list'>Demon Slayer</li></a><a href='/v1/dr-stone/'><li class='anime-list'>Dr. Stone</li></a><a href='/v1/fire-force/'><li class='anime-list'>Fire Force</li></a><a href='/v1/great-teacher-onizuka/'><li class='anime-list'>Great Teacher Onizuka</li></a><a href='/v1/haikyuu/'><li class='anime-list'>Haikyuu!!</li></a><a href='/v1/horimiya/'><li class='anime-list'>Horimiya</li></a><a href='/v1/hunter-x-hunter/'><li class='anime-list'>Hunter × Hunter</li></a><a href='/v1/initial-d/'><li class='anime-list'>Initial D</li></a><a href='/v1/jojos-bizarre-adventure/'><li class='anime-list'>Jojo's Bizarre Adventure</li></a><a href='/v1/jujutsu-kaisen/'><li class='anime-list'>Jujutsu Kaisen</li></a><a href='/v1/my-dress-up-darling/'><li class='anime-list'>My Dress-Up Darling</li></a><a href='/v1/my-hero-academia/'><li class='anime-list'>My Hero Academia</li></a><a href='/v1/neon-genesis-evangelion/'><li class='anime-list'>Neon Genesis Evangelion</li></a><a href='/v1/naruto/'><li class='anime-list'>Naruto</li></a><a href='/v1/one-piece/'><li class='anime-list'>One Piece</li></a><a href='/v1/one-piece-kai/'><li class='anime-list'>One Piece Kai</li></a><a href='/v1/shingeki-no-kyojin/'><li class='anime-list'>Shingeki No Kyojin</li></a><a href='/v1/spy-x-family/'><li class='anime-list'>Spy × Family</li></a><a href='/v1/vinland-saga/'><li class='anime-list'>Vinland Saga</li></a><a href='/v1/legals.html'><li class='anime-list'>Mentions Légales</li></a>";

searchBar.addEventListener("click", () => {
  animeListContainer.style.display = "block";
  $(".anime-list").css("display", "flex");
});

document.addEventListener("click", function (event) {
  var isClickInsideElement = searchBar.contains(event.target);
  if (!isClickInsideElement) {
    animeListContainer.style.display = "none";
    eraseSearchbar.style.opacity = "0";
    eraseSearchbar.style.zIndex = "-1";
  }
});

searchBar.addEventListener("click", () => {
  eraseSearchbar.style.opacity = "100";
  eraseSearchbar.style.zIndex = "1";
});

eraseSearchbar.addEventListener("click", () => {
  searchBar.value = "";
});
