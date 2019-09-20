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

  getChoiceName(status, id) {
    let name = '';
    let index = id - 1;

    try {
        name = status.choices[index].name;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    return name;
  }

  displayGameStatus(status) {
    let gameStatus = null;
    let header = '';
    let playerChoiceStr = '';
    let computerChoiceStr = '';
    
    try {
        playerChoiceStr = this.getChoiceName(status, status.player);
        computerChoiceStr = this.getChoiceName(status, status.computer);

        switch (status.results) {
            case HUMAN: {
                header = 'You win!  Yay!';
                break;
            }
            case COMPUTER: {
                header = 'The computer wins.';
                break;
            }
            case DRAW: {
                header = 'It\'s a tie!';
                break;
            }
        }
    
        if (header) {
            gameStatus = (
                <GameStatus className="slit-in-vertical">
                    <p>
                        You picked <strong>{playerChoiceStr}</strong>.  
                    </p>
                    <p>
                        The computer picked <strong>{computerChoiceStr}</strong>.
                    </p>

                    <h2>{header}</h2>

                    <button onClick={this.initGame.bind(this)}>Play Again</button>
                </GameStatus>
            );
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    return gameStatus;
  }

  postPlay(id) {
    // Post the player's choice and process response
    api.post(paths.PLAY, { player: id })
        .then(function(response) {
            let data = getData(response);
            // handle success
            // eslint-disable-next-line no-console
            console.log(response);
            // TODO: More Error checking
            if (data.results && data.computer && data.player) {
                this.setState({
                    results: data.results,
                    computer: parseInt(data.computer),
                    player: parseInt(data.player),
                });
            } else {
                throw('Unexpected server response on play request.')
            }
        }.bind(this))
        .catch(function(error) {
            // handle error
            // eslint-disable-next-line no-console
            console.log(error);
        })
        .finally(function() {
            // always executed
        });
  }

  setPlayChoice(id) {
    return (() => {
      this.postPlay(id);
    }).bind(this);
  }

  choiceButtons(state) {
    let buttons = null;
    let groupState = {};

    try {
        if (state.player) {
            // TODO: Animation not working
            groupState = 'slit-in-vertical';
        }

        if (!state.results) {
            buttons = (
                <div className={groupState}>
                    {state.choices.map(choice => {
                        return (
                        <GameButton
                            key={choice.id}
                            name={choice.name}
                            playChoice={this.setPlayChoice(choice.id)}
                        />
                        );
                    })}
                </div>
            );
        }
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
    }

    return buttons;
  }

  componentDidMount() {
    this.initGame();
  }

  render() {
    return (
      <>
        <Container>
            {this.displayGameStatus(this.state)}

            {this.choiceButtons(this.state)}
        </Container>
      </>
    );
  }
}

export default RPSSL;
