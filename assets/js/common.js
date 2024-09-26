window.transitionToPage = function (href) {
  $("body").css("opacity", 0);
  setTimeout(function () {
    window.location.href = href;
  }, 500);
};

$(document).ready(function () {
  $("body").css("opacity", 1);

  $("#more").html(`
  <p onclick='transitionToPage("/")'>Accueil</p>
  <p onclick='transitionToPage("/voir-animes/")'>VoirAnimes</p>
`);

  $("footer").html(`
  <div id=footer-content>
    <div id=footer-links>
      <ul>
        <li class=footer-links-title>Navigation</li>
        <div onclick='transitionToPage("/")'><li>Domain Home</div>
        <div onclick='transitionToPage("/calendar.html")'><li>Calendar</div>
        <div onclick='transitionToPage("/news.html")'><li>News</div>
      </ul>
      <ul>
        <li class=footer-links-title>Connect</li>
        <div onclick='transitionToPage("https://web.archive.org/save")'><li><ion-icon name=save-outline></ion-icon>WayBack Machine</div>
        <div onclick='transitionToPage("undefined")'><li><ion-icon name=logo-twitter></ion-icon>Twitter</div>
        <div onclick='transitionToPage("https://kngw.xyz/")'><li><ion-icon name=globe-outline></ion-icon>Website</div>
      </ul>
      <ul>
        <li class=footer-links-title>About</li>
        <div onclick='transitionToPage("legals.html#terms")'><li>Terms of Use</div>
        <div onclick='transitionToPage("legals.html#privacy")'><li>Privacy Policy</div>
        <div onclick='transitionToPage("legals.html#cookies")'><li>Cookie Consent</div>
      </ul>
    </div>
    <div class=horizontal-bar style=background:#4a4e58;height:1px></div>
    <div id=footer-end>
      <div id=copyright>© kngw</div>⋯
    </div>
  </div>
`);

  $("#phone-menu-new").html(`
  <div class=phone-menu-new-item><ion-icon name=book-outline></ion-icon><p>Manga</div>
  <div class=phone-menu-new-item><ion-icon name=bookmark-outline></ion-icon><p>Liste</div>
  <div class=phone-menu-new-item><ion-icon name=search-outline></ion-icon><p>Recherche</div>
  <div class=phone-menu-new-item><img alt="Profile Picture"class=pfp src=assets/img/pfp/pfp-1.jpg><p>Compte</div>
`);

  $("nav").html(`
  <div id=nav-content>
    <div id=nav-left>
      <div class=logo onclick='transitionToPage("index.html")'>
        <img alt=Logo src=/geijutsu/animax/assets/img/icon-128x.png>
      </div>
    </div>
    <div id=nav-right>
      <ion-icon name=search-outline id=searchbar-button></ion-icon>
      <ion-icon name=bookmark-outline></ion-icon>
      <ion-icon name=add-outline></ion-icon>
      <div id=profile>
        <img alt="Profile Picture"src=assets/img/pfp/pfp-1.jpg class=pfp>
        <ion-icon name=caret-down-outline></ion-icon>
      </div>
    </div>
  </div>
`);

  $("#searchbar-container").html(`
  <div class=barcontainer>
    <input autocomplete=off id=searchbar name=search placeholder=Rechercher...>
    <ion-icon id=eraseSearchbar name=close-outline></ion-icon>
  </div>
  <div id=dimmed-searching></div>
  <ol id=anime-list>
    <li class=anime-list-item onclick='transitionToPage("/")'>Accueil</li>
    <li class=anime-list-item onclick='transitionToPage("one-piece/")'>One Piece</li>
    <li class=anime-list-item onclick='transitionToPage("vinland-saga/")'>Vinland Saga</li>
    <li class=anime-list-item onclick='transitionToPage("spy-family/")'>Spy × Family</li>
    <li class=anime-list-item onclick='transitionToPage("voir-animes/")'>VoirAnimes</li>
  </ol>
`);
});
