(function (window) {
  set(window, 'match.game', get(window, 'match.game') || {});
  const game = window.match.game;
  game.init = function () {
    let _state;
  }
})(window);