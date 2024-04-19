import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with varied patterns pattern', () => {

  it('Should format 200,678', () => {

    const result = patternFormater.internationalToSimple('#,##0.000', '200,678');

    expect(result).to.equal('200,678');

  });

  it('Should format 1.000,000', () => {

    const result = patternFormater.internationalToSimple('#,##0.000', '1.000,000');

    expect(result).to.equal('1000,000');

  });

  it('Should format 1.000,8975', () => {

    const result = patternFormater.internationalToSimple('#,##0.0000', '1.000,8975');

    expect(result).to.equal('1000,8975');

  });

  it('Should format 1.000,50000', () => {

    const result = patternFormater.internationalToSimple('#,##0.00000', '1.000,50000');

    expect(result).to.equal('1000,50000');

  });

  it('Should format 0,365760', () => {

    const result = patternFormater.internationalToSimple('#,##0.000000', '0,365760');

    expect(result).to.equal('0,365760');

  });

  it('Should format 0', () => {

    const result = patternFormater.internationalToSimple('#,##0.00', '0');

    expect(result).to.equal('0,00');

  });

  it('Should format 1.000.000.000,89', () => {

    const result = patternFormater.internationalToSimple('#,##0.000000', '1.000.000.000,89');

    expect(result).to.equal('1000000000,890000');

  });

});