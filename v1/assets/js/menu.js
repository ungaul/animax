let leftmenu = $("#leftmenu")[0];

leftmenu.innerHTML =
  "<div class='logo-container'><a href='/' class='logo-container'><div class='logo'><img src='/v1/assets/images/favicon.webp' alt='Logo' /></div><p>VoirAnimes</p></a><ion-icon name='close-outline' id='close-leftmenu'></ion-icon></div><div id='leftmenu-center'><section id='leftmenu-center-1'> <a href='/'> <ion-icon name='home-outline'></ion-icon>Accueil</a><a href='../../'><ion-icon name='arrow-back-outline'></ion-icon>Retour</a></section><section id='leftmenu-center-2'><a href='/v1/ao-no-exorcist/'>Ao No Exorcist</a><a href='/v1/assassination-classroom/'>Assassination Classroom</a><a href='/v1/berserk/'>Berserk</a><a href='/v1/black-clover/'>Black Clover</a><a href='/v1/blend-s/'>Blend S</a><a href='/v1/demon-slayer/'>Demon Slayer</a><a href='/v1/dr-stone/'>Dr. Stone</a><a href='/v1/fire-force/'>Fire Force</a><a href='/v1/great-teacher-onizuka/'>Great Teacher Onizuka</a><a href='/v1/haikyuu/'>Haikyuu!!</a><a href='/v1/horimiya/'>Horimiya </a><a href='/v1/hunter-x-hunter/'>Hunter × Hunter</a><a href='/v1/initial-d/'>Initial D</a><a href='/v1/jojos-bizarre-adventure/'>Jojo's Bizarre Adventure </a><a href='/v1/jujutsu-kaisen/'>Jujutsu Kaisen</a><a href='/v1/my-dress-up-darling/'>My Dress-Up Darling</a><a href='/v1/my-hero-academia/'>My Hero Academia</a><a href='/v1/neon-genesis-evangelion/'>Neon Genesis Evangelion</a><a href='/v1/naruto/'>Naruto</a><a href='/v1/one-piece/'>One Piece </a><a href='/v1/one-piece-kai/'>One Piece Kai</a><a href='/v1/shingeki-no-kyojin/'>Shingeki No Kyojin</a><a href='/v1/spy-x-family/'>Spy × Family</a><a href='/v1/vinland-saga/'>Vinland Saga</a></section><div class='line'></div><section id='leftmenu-center-3'><a href='/legals.html'><ion-icon name='information-circle-outline'></ion-icon>Mentions Légales</a></section></div><div class='line'></div><div id='alternative-sites'><a href='https://mega.nz/folder/QsYEGLKC#PxSU43LJ_ddAb2KhgET5OQ' target='_blank' rel='nofollow'><button>Mangas</button></a><a href='https://mega.nz/folder/XZ8n0QSA#hTTi6m3xdE6_rkRNpkxSdQ' target='_blank' rel='nofollow'><button>Openings</button></a></div></div>";

let leftmenuOpen = $("#open-leftmenu")[0];
let leftmenuClose = $("#close-leftmenu")[0];
let leftmenuEmpty = $("#leftmenu-empty")[0];
let leftmenuContainer = $("#leftmenu-container")[0];

leftmenuClose.addEventListener("click", () => {
  document.body.style.overflowY = "unset";
  leftmenu.style.transform = "translateX(-500px)";
  setTimeout(function () {
    leftmenuContainer.style.opacity = "0";
    leftmenuContainer.style.zIndex = "-1";
  }, 300);
});

leftmenuEmpty.addEventListener("click", () => {
  document.body.style.overflowY = "unset";
  leftmenu.style.transform = "translateX(-500px)";
  setTimeout(function () {
    leftmenuContainer.style.opacity = "0";
    leftmenuContainer.style.zIndex = "-1";
  }, 300);
});

leftmenuOpen.addEventListener("click", () => {
  document.body.style.overflowY = "hidden";
  leftmenuContainer.style.zIndex = "12";
  leftmenuContainer.style.opacity = "100";
  setTimeout(function () {
    leftmenu.style.transform = "translateX(0)";
  }, 100);
});
