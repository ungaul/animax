$(document).ready(function () {
  let searchBar = $("#searchbar");
  let eraseSearchbar = $("#eraseSearchbar");
  let animeListContainer = $("#anime-list");
  let searchbarContainer = $("#searchbar-container");

  $("#searchbar-button").on("click", function () {
    searchbarContainer.css({
      opacity: 1,
      zIndex: 2,
      transform: "none",
    });
  });

  searchBar.on("keyup", function () {
    let searchbarContent = searchBar.val().toLowerCase();

    $(".anime-list-item").each(function () {
      let currentContent = $(this).html().toLowerCase();
      $(this).toggle(currentContent.includes(searchbarContent));
    });
  });

  $(document).on("click", function (event) {
    if (!searchBar.is(event.target) && !$("#searchbar-button").is(event.target)) {
      animeListContainer.css({ opacity: 0, visibility: "hidden" });
      searchbarContainer.css({
        opacity: 0,
        zIndex: -1,
        transform: "translateY(-100%)",
      });
      $("body").css("overflowY", "hidden");
    }
  });

  searchBar.on("click", function (event) {
    event.stopPropagation();
    eraseSearchbar.css("opacity", 1);
    animeListContainer.css({ opacity: 1, visibility: "visible" });
  });

  eraseSearchbar.on("click", function () {
    searchBar.val("");
  });
});
