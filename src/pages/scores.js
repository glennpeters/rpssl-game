import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

let scores = [
  {
    id: 1,
    text: 'Spock vaporizes Rock',
    date: '72627367626',
  },
  {
    id: 2,
    text: 'Scissors cut paper',
    date: '72627367626',
  },
  {
    id: 3,
    text: 'Rock smashes scissors',
    date: '72627367626',
  },
];

function clearScores() {
  // eslint-disable-next-line no-console
  console.log(
    'clearScores() -- This needs to be handled in state, ideally Redux '
  );

  //q.v. https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux

  scores = []; // see log note
}

// const About = ({ data }) => (
const About = () => (
  <Layout>
    <Head pageTitle="Scores">Scores</Head>
    <Box>
      <div className="scoreBoard">
        <h2>Scores</h2>

        <ul>
          {scores.map(result => {
            return <li key={result.id}>{result.text}</li>;
          })}
        </ul>

        <div>
          <button className="green" onClick={clearScores}>
            Clear Scores
          </button>
        </div>
      </div>
    </Box>
  </Layout>
);

export default About;
