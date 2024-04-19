import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.00 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '100');

    expect(result).to.equal('100,00');

  });

  it('Should format 1000', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '1000');

    expect(result).to.equal('1.000,00');

  });

  it('Should format 10000', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '10000');

    expect(result).to.equal('10.000,00');

  });

  it('Should format 100000', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '100000');

    expect(result).to.equal('100.000,00');

  });

  it('Should format 1000000', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '1000000');

    expect(result).to.equal('1.000.000,00');

  });

  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '1000,5');

    expect(result).to.equal('1.000,50');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '1000,897564');

    expect(result).to.equal('1.000,89');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('#,##0.00', ',3');

    expect(result).to.equal('0,30');

  });

  it('Should format ,03', () => {

    const result = patternFormater.draftToInternational('#,##0.00', ',03');

    expect(result).to.equal('0,03');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('#,##0.00', ',3657');

    expect(result).to.equal('0,36');

  });

  it('Should format 3,', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '3,');

    expect(result).to.equal('3,00');

  });

  it('Should format 03,', () => {

    const result = patternFormater.draftToInternational('#,##0.00', '03,');

    expect(result).to.equal('03,00');

  });

});