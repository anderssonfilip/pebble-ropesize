
var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();
var rope;
var text;

var index = 0;
var displayInches = false;
var ropeSizes = [[4, "5/32"], [5, "3/16"], [6, "7/32"], [7, "1/4"], [8, "5/16"], [10, "13/32"], [12, "1/2"], [14, "9/16"], [16, "5/8"], [18, "23/32"], [20, "13/16"], [22, "7/8"], [24, "1"], [26, "1 1/32"]];

drawVerticalRope(index);
drawSizeLabel(index);

function drawVerticalRope(index) {
  window.remove(rope);
  rope = new UI.Rect({
    position: new Vector2(72 - (ropeSizes[index][0] * 5) / 2, 0),
    size: new Vector2(ropeSizes[index][0] * 5, 168),
    backgroundColor: 'white',
  });

  window.add(rope);
  window.show(rope);
}

function drawSizeLabel(index) {
  window.remove(text);
  text = new UI.Text({
    text: displayInches ? ropeSizes[index][1] + '"' : ropeSizes[index][0].toString() + " mm",
    position: new Vector2(0, 0),
    size: new Vector2(72, 15),
    color: 'red',
    textAlign: "left"
  });

  window.add(text);
  window.show(text);
}

window.on('click', 'up', function (e) {
  if (index < ropeSizes.length-1) {
    index++;
    drawVerticalRope(index);
    drawSizeLabel(index);
  }
});

window.on('click', 'select', function (e) {
  displayInches = !displayInches;
  drawSizeLabel(index);
});

window.on('click', 'down', function (e) {
  if (index > 0) {
    index--;
    drawVerticalRope(index);
    drawSizeLabel(index);
  }
});
