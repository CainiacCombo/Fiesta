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
      lobby: _.assign(aState('lobby'), {
        play() {
          // async...
          // do all game start shit, then when everything is init,
          // set state to playing
          setTimeout(function () {
            setState(states.playing);
          }, 1000);
        },
      }),
      playing: _.assign(aState('playing'), {
        pause() {
          // pause all animation, show stats?
        },
        end() {
          // pause all aniation, transition to lobby
        },
      }),
  };
  function aState(name) {
    return {
      exit(toState) {
        console.log(`${this.getName()} transitioning to ${toState.getName()}`);
      },
      enter(fromState) {
        console.log(`Entered ${this.getName()} from to ${fromState.getName()}`);
      },
      getName() {
        return name;
      },
      // transition methods: override per state as needed //
      toLobby() {
        // do nothing //
      },
      play() {
        // do nothing //
      },
      pause() {
        // do nothing //
      },
      end() {
        // do nothing //
      }
    };
  }
  function setState(toState) {
    const fromState = _state;

    _state.exit(toState);
    _state = toState;
    _state.enter(fromState);
  }
}
})(window);