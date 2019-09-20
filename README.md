# About

Rock Paper Scissors Spock Lizard is a game developed as code challenge to communicate with a server and display the results.  

A server was built using Node Express (see below), but not fully developed due to time.  A scoreboard was added but disabled, also due to time.  The plan was to save, retrieve and clear the scoreboard using Redux, but ultimately time ran out.

The game is available on [Github](https://github.com/glennpeters/rpssl-game).


## Instructions
```
> git clone https://github.com/glennpeters/rpssl-game
> cd rpssl-game
> npm install
> gatsby develop
```

The server should now be available at `http://localhost:8000/` (If the port is busy, it will ask if you would like a different one.)

*Note*: This should be something like `gatsby build` or `gatsby serve`, but there's an error with the default build missing a 404 page and there wasn't time to debug.


## Used Resources

 * Using the Gatsby Universal starter pack [on GitHub](https://github.com/fabe/gatsby-universal).
 * Star Trek color palette: https://www.color-hex.com/color-palette/6450
 * Animation Styles borrowed and adapted from [Animista](http://animista.net/play/entrances/roll-in-blurred)


## To Do
 * "Waiting for server" animation -- start on server request, close on the "finally" condition.
 * Finish scoreboard using Redux
 * Clean up unused modules
 * Nice to have: Starfield, parallax buttons
 * Nice to have: Design, responsive
 * Nice to have: Flavor win text with adapted labels replacing server text ("Scissors cuts paper")


## Server Side App (Dropped for Time)

The server side application is built using from Node Express, which was the best at handling CORS:

 * [expressjs.com](https://github.com/troygoode/node-cors-server/blob/master/server.js)
 * [cors npm package](https://expressjs.com/en/resources/middleware/cors.html)
