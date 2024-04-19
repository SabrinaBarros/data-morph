const draftToInternational = (pattern, data) => {

  if (pattern[1] === 'X') {

    const newString = String(data);

    const totalOfDigits = newString.length;
    let totalOfX = 0;

    for (let index = 0; index < pattern.length; ++index) {
      if (pattern[index] === 'X') ++totalOfX;
    }

    let result = '';
    let currentDigit = 0;
    let passX = 0;
    let passDigits = 0;

    for ( let index = 0; index < pattern.length; ++index) {

      if (pattern[index] === 'X') {

        result = result + newString[currentDigit];
        ++currentDigit;
        ++passX;
        ++passDigits;

      } else if (pattern[index] === 'O') {

        const restOfX = totalOfX - passX;
        const restOfDigits = totalOfDigits - passDigits;

        if (restOfDigits > restOfX) {

          result = result + newString[currentDigit];
          ++currentDigit;
          ++passDigits;

        }

      } else {
        result = result + pattern[index];
      }
    
    }

    return result;

  }

  if (pattern[0] === '#') {

    if (pattern.indexOf('.') === -1) {

      if (pattern.indexOf('.')) {
        data = String(data).split(',')[0];
      }

      if (!data) {
        data = '0';
      }

      return String(data).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    }

    const patternDecimals = pattern.split('.')[1].length;

    const dataDigits = String(data).split(',');

    let newValue = '';

    if (dataDigits[0]) {
      newValue = String(dataDigits[0]).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    } else {
      newValue = '0';
    }

    if (dataDigits[1]) {

      newValue = newValue + ',' + dataDigits[1].substr(0, patternDecimals);

      if (dataDigits[1].length < patternDecimals) {

        const total = patternDecimals - dataDigits[1].length;

        for (let index = 0; index < total; index++) {
          newValue = newValue + '0';
        }

      }

    } else {
      newValue = newValue + ',' + pattern.split('.')[1];
    }

    return newValue;

  }
  
};

export default draftToInternational;