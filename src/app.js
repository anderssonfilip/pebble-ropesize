
var UI = require('ui');
var Vector2 = require('vector2');

var window = new UI.Window();
var rope;
var text;

function drawRope(size){
 rope = new UI.Rect({
  position: new Vector2(72-size/2, 0),
  size: new Vector2(size,168),
  backgroundColor: 'white',
});

window.add(rope);
window.show(rope);

  
    text = new UI.Text({
      text: (size/2).toString() + " mm",
  position: new Vector2(0, 0),
      size: new Vector2(72, 15),
  color: 'red',
      textAlign: "left"
});

window.add(text);
window.show(text);
}

var size = 2;
drawRope(size);

window.on('click', 'up', function(e) {
  if(size < 144){
    window.remove(rope);
    window.remove(text);
    size=size+2;
    drawRope(size);
  }
});

window.on('click', 'select', function(e) {

});

window.on('click', 'down', function(e) {
  if(size > 4){
    window.remove(rope);
    window.remove(text);
    size=size-2;
    drawRope(size);
  }
});
