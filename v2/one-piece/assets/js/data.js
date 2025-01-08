var episodeQuickListMin = 1,
  episodeQuickListMax = 1051,
  selectors = ["#number", "#date", "#title", "#rating", "#description", "#saga"];

for (var i = episodeQuickListMin; i <= episodeQuickListMax; i++) {
  selectors.forEach(function (selector, index) {
    var episodeQuickListOption = $("<div>").html(index === 0 ? "Épisode " + i : OnePiece[i][Object.keys(OnePiece[i])[index - 1]]);
    $(selector).append(episodeQuickListOption);
  });
}
