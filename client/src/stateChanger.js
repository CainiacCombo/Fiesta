(function (window) {
  set(window, 'match.game', get(window, 'match.game') || {});
  const game = window.match.game;
  game.init = function () {
    let _state;

    const states = {
      incept: Object.assign(aState('incept'), {
        play() {
          // get user's high scores, then go to lobby //

          setState(states.lobby);
        }
      }),
  },
}
})(window);