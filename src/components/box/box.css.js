import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 700px;

  // RPSSL (GBP)

  .about {
    padding: 0.4em 1.4em 2em;
    background-color: #f2c300
    line-height: 1.6;
  }

  .about h1,
  .about h2 {
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 140%;
    margin: 1em 0 0.2em;
  }

  .about h2 {
    font-size: 120%;
    margin-left: 1em;
  }

  .about h1.title {
    font-size: 150%;
    margin-bottom: 2em;
  }

  pre {
    color: #333;
    margin: 1em 1.2em 1.4em;
    background: #000;
    color: #fff;
  }

  h2 + pre {
    margin-top: 0.2em;
  }

  ul {
    list-style: circle;
    line-height: 1.6;
    padding-left: 2.6em;
    margin-left: 1em;
    margin-right: 1em;
  }

  p {
    margin-left: 1em;
    margin-right: 1em;
  }

  .about a:link {
    color: #0099f6;
  }

  .about a:visited {
    color: #0099f6;
  }

  .about a:hover {
    color: #0000FF;
  }

  .scoreBoard {
    background-color: #f2c300
    margin: 2rem auto;
    width: 70%;
    padding: 1.2em 0.8em;

    h2 {
      font-size: 140%;
    }

    ul {
      list-style: circle;
      line-height: 1.6;
      font-size: 120%;
      padding-left: 2em;
      margin: 0.6em 0 1em;
    }
  }

  button.green {
    font-family: Rambla, sans-serif;
    background-color: rgba(0, 184, 68, 1);
    color: #fff;
    border: none;
    border-radius: 0.4em;
    box-shadow: 2px 2px 3px 1px rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    padding: 0.5em 0.8em;
    margin: 1.6em auto 0;
    display: block;
    cursor: pointer;
  }

  button.green:hover {
    background-color: rgba(0, 164, 48, 1);
  }

`;
