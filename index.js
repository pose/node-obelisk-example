var fs = require('fs');

var obelisk = require('./obelisk.wrapper');

var itermDraw = require('iterm2-image');
var lego = require('lego-colors');
var Canvas = require('canvas');

var canvas = new Canvas(600,450);
var ctx = canvas.getContext('2d');

var content = fs.readFileSync('./figure');
var figure = content.toString().split('---\n');

figure = figure.map(function (layer) {
  return layer.split('\n').map(function (row) {
    return row.split('');
  });
});

var point = new obelisk.Point(250, 300);

var pixelView = new obelisk.PixelView(canvas, point);

function toColor(x) {
  return new obelisk.CubeColor().getByHorizontalColor(x.rgbHexAsNumber);
}

var colors = {
  R: toColor(lego.colors.BRIGHT_RED),
  Y: toColor(lego.colors.BRIGHT_YELLOW),
  K: toColor(lego.colors.BLACK),
  G: toColor(lego.colors.DARK_GREEN),
  B: toColor(lego.colors.BRIGHT_BLUE),
};

// build cubes
for (var i = 0; i < figure.length; i++) {
  var figureSquare = figure[i].reverse();
  for (var j = 0; j < figureSquare.length; j++) {
    var figureRow = figureSquare[j].reverse();
    for (var k = 0; k < figureRow.length; k++) {
      var p3d = new obelisk.Point3D(20 * j, 20 * k, (32 + 1) * i);
      var cubeDms = new obelisk.CubeDimension(20, 20, 32);
      var figureCell = figureRow[k];
      if (colors[figureCell]) {
        var cubeColor = colors[figureCell];
      } else {
        var cubeColor = new obelisk.CubeColor().getByHorizontalColor(0xF2F3F2);
      }
      if (figureCell !== ' ') {
        var cube = new obelisk.Cube(cubeDms, cubeColor, false);
        pixelView.renderObject(cube, p3d);
      }
    }
  }
}

if (process.env.TERM_PROGRAM === 'iTerm.app') {
  itermDraw(canvas.createPNGStream());
} else {
  canvas.createPNGStream().pipe(fs.createWriteStream('./figure.png'));
}
