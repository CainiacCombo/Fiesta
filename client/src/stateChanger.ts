(function (window) {
  set(window, 'match.game', get(window, 'match.game') || {});
  const game = window.match.game;
  game.init = function () {
    let _state;

    const states = {
      incept: Object.assign(aState('incept'), {
        play() {
          setState(states.lobby);
        }
      }),
      lobby: Object.assign(aState('lobby'), {
        play() {
          setTimeout(function () {
            setState(states.playing);
          }, 1000);
        },
      }),
      playing: _.assign(aState('playing'), {
        pause() {
        },
        end() {
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
      toLobby() {
      },
      play() {
      },
      pause() {
      },
      end() {
      }
    };
  }
  function setState(toState) {
    const fromState = _state;

    _state.exit(toState);
    _state = toState;
    _state.enter(fromState);
  }
  _state = states.incept;

  return {
    toLobby() {
      _state.toLobby();
    },
    play() {
      _state.play();
    },
    pause() {
      _state.pause();
    },
    end() {
      _state.end();
    }
  };
}
})(window);