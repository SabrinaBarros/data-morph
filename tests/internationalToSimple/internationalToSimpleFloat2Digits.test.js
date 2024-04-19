import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.00 pattern', () => {

  it('Should format 100,00', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '100,00');

    expect(result).to.equal('100,00');

  });

  it('Should format 1.000,00', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '1.000,00');

    expect(result).to.equal('1000,00');

  });

  it('Should format 10.000,00', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '10.000,00');

    expect(result).to.equal('10000,00');

  });

  it('Should format 100.000,00', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '100.000,00');

    expect(result).to.equal('100000,00');

  });

  it('Should format 1.000.000,00', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '1.000.000,00');

    expect(result).to.equal('1000000,00');

  });

  it('Should format 1.000,89', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '1.000,89');

    expect(result).to.equal('1000,89');

  });

  it('Should format 0,30', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '0,30');

    expect(result).to.equal('0,30');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', ',3657');

    expect(result).to.equal('0,36');

  });

  it('Should format ,3', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', ',3');

    expect(result).to.equal('0,30');

  });

  it('Should format 3,', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '3,');

    expect(result).to.equal('3,00');

  });

  it('Should format 03,', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '03,');

    expect(result).to.equal('03,00');

  });

});