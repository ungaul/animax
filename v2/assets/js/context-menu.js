$(".context-menu")[0].innerHTML = "<div onclick='transitionToPage(&quot;/one-piece/&quot;)'>One Piece</div><div onclick='transitionToPage(&quot;/spy-family/&quot;)'>Spy × Family</div><div onclick='transitionToPage(&quot;/vinland-saga/&quot;)'>Vinland Saga</div><div class='horizontal-bar'></div><div onclick='transitionToPage(&quot;/animax.html&quot;)' target='_blank'>Accueil</div>";

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

// function nodroit() {
//   return false;
// }

// document.oncontextmenu = nodroit;
