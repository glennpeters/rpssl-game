import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/* <li>
        <Link to="/scores">Scoreboard</Link>
      </li> */}
      <li>
        <a
          href="http://www.samkass.com/theories/RPSSL.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          Rules
        </a>
      </li>
    </ul>
  </Container>
);

export default Nav;
