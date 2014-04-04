# Obelisk.js in Node.js

This example does the following:

  * Loads [obelisk.js](https://github.com/nosir/obelisk.js) using the `vm` module (unfortunately, obelisk.js not strutured as a Node module yet).
  * Loads a file named `figure` that contains a 3d figure represented as layers: Each layer is separated by the `---` string and the cells of the layer may contain a letter that represents its color. If no letter is present nothing is drawn in that place.
  * Draws that figure inside a [node-canvas](https://github.com/learnboost/node-canvas).
  * If the script is run inside [iTerm2](iterm2.com) draws the image in the console. If not it's saved in a file named `figure.png`

Take a look yourslef, an image is worth a thousand words!
 
![https://cloud.githubusercontent.com/assets/419703/2586880/6caee458-ba0d-11e3-9c87-e6013a7d0175.gif](https://cloud.githubusercontent.com/assets/419703/2586880/6caee458-ba0d-11e3-9c87-e6013a7d0175.gif)

## License
(The MIT License)

Copyright (c) 2014 Alberto Pose < albertopose at gmail.com >

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
