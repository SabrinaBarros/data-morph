import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format integer numbers with ##,#00 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.internationalToSimple('##,#00', '100');

    expect(result).to.equal('100');

  });

  it('Should format 1.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '1.000');

    expect(result).to.equal('1000');

  });

  it('Should format 10.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '10.000');

    expect(result).to.equal('10000');

  });

  it('Should format 100.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '100.000');

    expect(result).to.equal('100000');

  });

  it('Should format 1.000.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '1.000.000');

    expect(result).to.equal('1000000');

  });

  it('Should format 1.000.000.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '1.000.000.000');

    expect(result).to.equal('1000000000');

  });

  it('Should format 1.000', () => {

    const result = patternFormater.internationalToSimple('##,#00', '1.000');

    expect(result).to.equal('1000');

  });

  it('Should format 0', () => {

    const result = patternFormater.internationalToSimple('##,#00', '0');

    expect(result).to.equal('0');

  });

  it('Should format 89.756.465', () => {

    const result = patternFormater.internationalToSimple('##,#00', '89.756.465');

    expect(result).to.equal('89756465');

  });

});