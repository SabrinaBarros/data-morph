const internationalToSimple = (pattern, data) => {

  if (pattern.indexOf('.') === -1) {
    return data.replace(/\./g, '');
  }

  let textData = String(data);

  const hasNumbersBeforeComa = textData.split(',')[0].length;

  if (!hasNumbersBeforeComa) {
    textData = '0' + textData;
  }

  const patternDecimalsSize = pattern.split('.')[1].length;

  if (textData.indexOf(',') === -1) {
    textData = textData + ',';
  }

  const dataDecimalsSize = textData.split(',')[1].length;

  if (dataDecimalsSize > patternDecimalsSize) {

    const dataDecimals = textData.split(',')[1];

    const newDecimals = dataDecimals.substr(0, patternDecimalsSize);

    textData = textData.split(',')[0] + ',' + newDecimals;

  }

  if (dataDecimalsSize < patternDecimalsSize) {

    const missingDecimal = patternDecimalsSize - dataDecimalsSize;

    for (let index = 0; index < missingDecimal; index++) {
      textData = textData + '0';
    }

  }

  return textData.replace(/\./g, '');
  
};

export default internationalToSimple;