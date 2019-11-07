class Panel {
  constructor (){
    //this.draw();
  }
  draw(){
    context.fillStyle = 'rgba(0, 0, 0, 0.7)';
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.translate(oX, oY);
    context.scale(panelScale, panelScale);
    context.rotate(toRadian(panelAngle));
    context.translate(-oX, -oY);
    context.fillRect(oX - 200, oY - 200, 400, 400);
  context.setTransform(1, 0, 0, 1, 0, 0);
  }

  displayContent(){
    context.fillStyle = 'fff';
    context.fillText(selectedBox.index, oX, oY);
  }
}
