import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.000000 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', '100');

    expect(result).to.equal('100,000000');

  });

  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', '1000,5');

    expect(result).to.equal('1.000,500000');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', '1000,897564');

    expect(result).to.equal('1.000,897564');

  });

  it('Should format ,36576456', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', ',36576456');

    expect(result).to.equal('0,365764');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', ',3657');

    expect(result).to.equal('0,365700');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', ',3');

    expect(result).to.equal('0,300000');

  });

  it('Should format 3,', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', '3,');

    expect(result).to.equal('3,000000');

  });

  it('Should format 03,', () => {

    const result = patternFormater.draftToInternational('#,##0.000000', '03,');

    expect(result).to.equal('03,000000');

  });

});