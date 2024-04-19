import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.000 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '100');

    expect(result).to.equal('100,000');

  });

  it('Should format 1000', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '1000');

    expect(result).to.equal('1.000,000');

  });

  it('Should format 10000', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '10000');

    expect(result).to.equal('10.000,000');

  });

  it('Should format 100000', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '100000');

    expect(result).to.equal('100.000,000');

  });

  it('Should format 1000000', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '1000000');

    expect(result).to.equal('1.000.000,000');

  });


  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '1000,5');

    expect(result).to.equal('1.000,500');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '1000,897564');

    expect(result).to.equal('1.000,897');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('#,##0.000', ',3657');

    expect(result).to.equal('0,365');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('#,##0.000', ',3');

    expect(result).to.equal('0,300');

  });

  it('Should format 3,', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '3,');

    expect(result).to.equal('3,000');

  });

  it('Should format 03,', () => {

    const result = patternFormater.draftToInternational('#,##0.000', '03,');

    expect(result).to.equal('03,000');

  });

});
