/* eslint-disable prettier/prettier */
import React from 'react';
import GameButton from './game-button/game-button';
import { Container, GameStatus } from './rpssl.css';
import { api, paths, getData } from 'utils/api';

const HUMAN = 'win';
const COMPUTER = 'lose';
const DRAW = 'tie';
const INITSTATE = {
    choices: [],
    results: '',
    player: 0,
    computer: 0,
  };

class RPSSL extends React.Component {
  constructor(props) {
    super(props);
    this.state = INITSTATE;
  }

  initGame() {
    // Get available choices
    api.get(paths.CHOICES)
        .then(function(response) {
            let data = getData(response);
            let newState = INITSTATE;
            // handle success
            // eslint-disable-next-line
            console.log(response);

            // TODO: More Error checking
            if (Array.isArray(data)) {
                newState.choices = data;
                this.setState(newState);
            } else {
                throw('Unexpected data response from server (/choices)')
            }
        }.bind(this))
        .catch(function(error) {
            // handle error
            // eslint-disable-next-line
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
  }

  displayGameStatus(status) {
    let gameStatus;

    switch (status) {
        case HUMAN: {
            gameStatus = (
                <GameStatus>
                    You win!  Yay!
                </GameStatus>
            )
           
            break;
        }
        case COMPUTER: {
            gameStatus = (
                <GameStatus>
                    The computer wins.
                </GameStatus>
            )
            
            break;
        }
        case DRAW: {
            gameStatus = (
                <GameStatus>
                    Drat!  It&rsquo;s a draw.
                </GameStatus>
            )

            break;
        }
        default: {
            gameStatus = null;

            break;
        }
    }

    return gameStatus;
  }

  postPlay(id) {
    console.log('postPlay() :: User clicked [curry]: ', id);

    // Get available choices
    api.post(paths.PLAY, { player: id })
        .then(function(response) {
            let data = getData(response);
            // handle success
            // eslint-disable-next-line
            console.log(response);

            // {
            //     "results": string [12] (win, lose, tie),
            //     “player”: choice_id,
            //     “computer”:  choice_id
            // }
            // TODO: More Error checking
            if (data.results && data.computer) {
                this.setState({
                    results: data.results,
                    computer: data.computer,
                });
            } else {
                throw('Unexpected server response on play request.')
            }
        }.bind(this))
        .catch(function(error) {
            // handle error
            // eslint-disable-next-line
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
  }

  setPlayChoice(id) {
    return (() => {
      console.log('playChoice() :: User clicked [curry]: ', id);
      this.postPlay(id);
    }).bind(this);
  }

  componentDidMount() {
    this.initGame();
  }

  render() {

    return (
      <>
        {this.displayGameStatus(this.state.results)}

        <Container>
          {this.state.choices.map(choice => {
            return (
              <GameButton
                key={choice.id}
                name={choice.name}
                playChoice={this.setPlayChoice(choice.id)}
              />
            );
          })}
        </Container>
      </>
    );
  }
}

export default RPSSL;
