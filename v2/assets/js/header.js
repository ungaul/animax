$(window).scroll(function () {
  $("nav").css({ top: "0", transform: "0" });
  $("#more").css("opacity", "1");
});

$("ion-icon[name='add-outline']").click(function () {
  $("#more").toggleClass("hidden");
});

$(document).on("click", function (event) {
  if (!$("ion-icon[name='add-outline']").is(event.target)) {
    $("#more").addClass("hidden");
  }
});

$("#searchbar-button").on("click", function () {
  $(".barcontainer, #dimmed-searching, body").toggleClass("searchbar-searching no-overflow dimmed");
});

$(document).on("click", function (event) {
  if (!($("#dimmed-searching, #searchbar-container, #searchbar-button").is(event.target))) {
    $("#dimmed-searching").removeClass("dimmed");
    $(".barcontainer").removeClass("searchbar-searching");
  }
});
