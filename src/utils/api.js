import axios from 'axios';

// TODO/Nice to have: process.env
// TODO/Nice to have: process.env
const CHALLENGE_SERVER = 'https://codechallenge.boohma.com/';

const paths = {
  CHOICES: 'choices', // GET
  CHOICE: 'choice', // GET
  PLAY: 'play', //POST
};

// GET: https://codechallenge.boohma.com/choices
// GET: https://codechallenge.boohma.com/choice
// POST: https://codechallenge.boohma.com/play

const api = axios.create({
  baseURL: CHALLENGE_SERVER,
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost',
  },
});

const getData = response => {
  if (response && response.status && response.status === 200 && response.data) {
    return response.data;
  } else {
    throw 'Misconfigured server data';
  }
};

export { api, paths, getData };
