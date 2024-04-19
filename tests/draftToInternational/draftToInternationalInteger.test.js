import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format integer numbers with ##,#00 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('##,#00', '100');

    expect(result).to.equal('100');

  });

  it('Should format 1000', () => {

    const result = patternFormater.draftToInternational('##,#00', '1000');

    expect(result).to.equal('1.000');

  });

  it('Should format 10000', () => {

    const result = patternFormater.draftToInternational('##,#00', '10000');

    expect(result).to.equal('10.000');

  });

  it('Should format 100000', () => {

    const result = patternFormater.draftToInternational('##,#00', '100000');

    expect(result).to.equal('100.000');

  });

  it('Should format 1000000', () => {

    const result = patternFormater.draftToInternational('##,#00', '1000000');

    expect(result).to.equal('1.000.000');

  });

  it('Should format 1000000000', () => {

    const result = patternFormater.draftToInternational('##,#00', '1000000000');

    expect(result).to.equal('1.000.000.000');

  });

  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('##,#00', '1000,5');

    expect(result).to.equal('1.000');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('##,#00', '1000,897564');

    expect(result).to.equal('1.000');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('##,#00', ',3');

    expect(result).to.equal('0');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('##,#00', ',3657');

    expect(result).to.equal('0');

  });

  it('Should format 89756465', () => {

    const result = patternFormater.draftToInternational('##,#00', '89756465');

    expect(result).to.equal('89.756.465');

  });

});