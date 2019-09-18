import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './game-button.css';

const GameButton = ({ name, playChoice }) => (
  <Button onClick={playChoice}>{name}</Button>
);

GameButton.propTypes = {
  name: PropTypes.string,
  playChoice: PropTypes.func,
};

export default GameButton;
