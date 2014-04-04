# Obelisk.js in Node.js

This example does the following:

  * Loads obelisk.js inside node using `vm` module (it's not strutured as a node module yet).
  * Loads a file named `figure` that contains a 3d figure represented as layers: Each layer is separated by the `---` string.
  * Draws that figure inside a [node-canvas](https://github.com/learnboost/node-canvas).
  * If the script is run inside [iTerm2](iterm2.com) it draws the image in the console. If not it's saved in a file named `figure.png`
