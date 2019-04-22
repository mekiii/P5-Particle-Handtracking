# Particle Animation meets Hand Interaction

As a generative arts sketch I created a particle animation in combination with a hand 

detection via [handtracking.js](https://hackernoon.com/handtrackjs-677c29c1d585) and [P5](https://p5js.org/). 

A live demo can be seen here 
(please wait a few seconds, until the handtracking model is fully loaded): 
https://mekiii.github.io/particles/

![Particle Animation with handtracking.js](https://i.imgur.com/gX6sLZn.jpg)

## About the particle animation
Inspired by chapter 4 of the book ["Nature of Code"](https://natureofcode.com/) (by Daniel Shiffman) I generated multiple particles, that float randomly on a 2D plane. Whenever each particle detects floating particles around them up to a certain distance, a connecting line will drawn. Hence a beautiful star-like scenery is created. With [tensorflow.js](https://experiments.withgoogle.com/collection/ai/move-mirror/view/mirror) there are multiple possibilities to detect body movement without a depending hardware such as Microsoft's kinect. Hence I was curious to try out this new feature and used the [handtracking.js](https://hackernoon.com/handtrackjs-677c29c1d585) library based on tensorflow.js . My goal is to create a fun particle animation where one can interact with it either with the hand movement or even a full body detection. 

## Future ideas

There are certain ideas I have to improve the application:

[ ] Implementing an interaction between the drawn hand ellipce and the particles

[ ] Improving the performance

[ ] Implementing a mouse-over alternative


Feel free to clone this repository!

