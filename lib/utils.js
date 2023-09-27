const fs = require('fs');

function saveSVGToFile(fileName, svgContent) {
  try {
    fs.writeFileSync(fileName, svgContent, 'utf-8');
    console.log(`Generated ${fileName}`);
  } catch (error) {
    throw new Error(`Error while saving ${fileName}: ${error.message}`);
  }
}

module.exports = {
  saveSVGToFile,
};
