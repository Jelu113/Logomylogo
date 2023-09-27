

class Shape {
    constructor() {
      this.color = 'black'; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      // Implement render logic for the base shape
      return '';
    }
  }
  
  class Circle extends Shape {
    render() {
      // Implement render logic for a circle
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      // Implement render logic for a triangle
      return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      // Implement render logic for a square
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Circle,
    Triangle,
    Square,
  };
  

