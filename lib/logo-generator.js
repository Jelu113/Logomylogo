 // lib/logo-generator.js

const { Shape, Circle, Triangle, Square } = require('./shapes');

class LogoGenerator {
  constructor(text, textColor, shapeType, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeType = shapeType;
    this.shapeColor = shapeColor;
  }

  generate() {
    const shape = this.createShape();
    shape.setColor(this.shapeColor);

    const svgContent = `
      <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shape.render()}
        <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-size="40" fill="${this.textColor}">
          ${this.text}
        </text>
      </svg>
    `;

    return svgContent;
  }

  createShape() {
    switch (this.shapeType) {
      case 'circle':
        return new Circle();
      case 'triangle':
        return new Triangle();
      case 'square':
        return new Square();
      default:
        throw new Error('Invalid shape type');
    }
  }
}

module.exports = LogoGenerator;
