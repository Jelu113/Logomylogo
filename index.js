const { getUserInput } = require('./lib/user-input');
const { saveSVGToFile } = require('./lib/utils');
const LogoGenerator = require('./lib/logo-generator');
const inquirer = require('inquirer');

async function generateLogo() {
  try {
    const userInput = await getUserInput();

    const logoGenerator = new LogoGenerator(
      userInput.text,
      userInput.textColor,
      userInput.shape,
      userInput.shapeColor
    );

    const svgContent = logoGenerator.generate();
    const fileName = 'logo.svg';

    saveSVGToFile(fileName, svgContent);

    console.log(`Generated ${fileName}`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

generateLogo();



