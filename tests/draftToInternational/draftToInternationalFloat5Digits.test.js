import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.00000 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', '100');

    expect(result).to.equal('100,00000');

  });

  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', '1000,5');

    expect(result).to.equal('1.000,50000');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', '1000,897564');

    expect(result).to.equal('1.000,89756');

  });

  it('Should format ,36576456', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', ',36576456');

    expect(result).to.equal('0,36576');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', ',3657');

    expect(result).to.equal('0,36570');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', ',3');

    expect(result).to.equal('0,30000');

  });

  it('Should format 3,', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', '3,');

    expect(result).to.equal('3,00000');

  });

  it('Should format 03,', () => {

    const result = patternFormater.draftToInternational('#,##0.00000', '03,');

    expect(result).to.equal('03,00000');

  });

});