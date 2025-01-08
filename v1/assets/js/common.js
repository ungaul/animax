if ($(".otherscontainer")[0].innerHTML === "") {
  $(".otherscontainer")[0].innerHTML =
    "<a href='/v1/ao-no-exorcist/'><div class='object'>Ao No Exorcist</div></a><a href='/v1/assassination-classroom/'><div class='object'>Assassination Classroom</div></a><a href='/v1/berserk/'><div class='object'>Berserk</div></a><a href='/v1/black-clover/'><div class='object'>Black Clover</div></a><a href='/v1/blend-s/'><div class='object'>Blend S</div></a><a href='/v1/demon-slayer/'><div class='object'>Demon Slayer</div></a><a href='/v1/dr-stone/'><div class='object'>Dr. Stone</div></a><a href='/v1/fire-force/'><div class='object'>Fire Force</div></a><a href='/v1/great-teacher-onizuka/'><div class='object'>Great Teacher Onizuka</div></a><a href='/v1/haikyuu/'><div class='object'>Haikyuu!!</div></a><a href='/v1/horimiya/'><div class='object'>Horimiya</div></a><a href='/v1/hunter-x-hunter/'><div class='object'>Hunter × Hunter</div></a><a href='/v1/initial-d/'><div class='object'>Initial D</div></a><a href='/v1/jojos-bizarre-adventure/'><div class='object'>Jojo's Bizarre Adventure</div></a><a href='/v1/jujutsu-kaisen/'><div class='object'>Jujutsu Kaisen</div></a><a href='/v1/my-dress-up-darling/'><div class='object'>My Dress-Up Darling</div></a><a href='/v1/my-hero-academia/'><div class='object'> My Hero Academia</div></a><a href='/v1/neon-genesis-evangelion/'><div class='object'>Neon Genesis Evangelion</div></a><a href='/v1/naruto/'><div class='object'>Naruto</div></a><a href='/v1/one-piece/'><div class='object'>One Piece</div></a><a href='/v1/one-piece-kai/'><div class='object'>One Piece Kai</div></a><a href='/v1/shingeki-no-kyojin/'><div class='object'>Shingeki No Kyojin</div></a><a href='/v1/spy-x-family/'><div class='object'>Spy × Family</div></a><a href='/v1/vinland-saga/'><div class='object'>Vinland Saga</div></a>";
}

$("header")[0].innerHTML =
  "<div class='left'><ion-icon name='menu-outline' id='open-leftmenu'></ion-icon><a href='/v1/' class='logo-container'><div class='logo'><img src='/v1/assets/images/favicon.svg' alt='Logo' /></div><p>VoirAnimes</p></a></div><div class='middle'><div class='barcontainer'> <input id='searchbar' type='text' name='search' placeholder='Rechercher' autocomplete='off' /><ion-icon id='eraseSearchbar' name='close-outline'></ion-icon><div class='barconfirm'><ion-icon name='search-outline'></ion-icon></div></div></div><nav><ion-icon id='apps' name='add-outline'></ion-icon><label class='switch'><input type='checkbox'><span class='slider round'></span></label><ion-icon id='buttondarkmode' name='contrast-outline' title='Dark Mode Button'></ion-icon><ion-icon id='settings' name='settings-outline'></ion-icon></nav>";

$("#apps-container")[0].innerHTML =
  "<a href='https://mega.nz/folder/XZ8n0QSA#hTTi6m3xdE6_rkRNpkxSdQ' target='_blank' rel='nofollow'>Openings</a><a href='https://mega.nz/folder/QsYEGLKC#PxSU43LJ_ddAb2KhgET5OQ' target='_blank' rel='nofollow'>Mangas</a>";

document.addEventListener("click", function handleClickOutsideBox(event) {
  if ($("#apps")[0].contains(event.target)) {
    $("#apps-container")[0].classList.toggle("opened-panel");
    $("#apps")[0].classList.toggle("opened-panel-button");
  } else if (!$("#apps")[0].contains(event.target)) {
    $("#apps-container")[0].classList.remove("opened-panel");
    $("#apps")[0].classList.remove("opened-panel-button");
  }
});

document.addEventListener("click", function handleClickOutsideBox(event) {
  if ($("#settings")[0].contains(event.target)) {
    $("#settings-container")[0].classList.toggle("opened-panel");
    $("#settings")[0].classList.toggle("opened-panel-button");
  } else if (!$("#settings")[0].contains(event.target)) {
    $("#settings-container")[0].classList.remove("opened-panel");
    $("#settings")[0].classList.remove("opened-panel-button");
  }
});
