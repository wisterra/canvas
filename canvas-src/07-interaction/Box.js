class Box {
  constructor(info) {
    this.index = info.index;
    this.x = info.x;
    this.y = info.y;
    this.width = info.width;
    this.height = info.height;
    this.speed = info.speed;
    this.draw();
  }

  draw() {
    context.fillStyle = 'rgba(0,120,120,0.7)';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.fillStyle = '#fff';
    context.font = '30px bold san-serif';
    context.fillText(this.index, this.x + 30, this.y + 30);
  }


}



