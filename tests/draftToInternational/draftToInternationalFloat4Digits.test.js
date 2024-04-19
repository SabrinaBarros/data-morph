import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format float numbers with #,##0.0000 pattern', () => {

  it('Should format 100', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '100');

    expect(result).to.equal('100,0000');

  });

  it('Should format 10000', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '10000');

    expect(result).to.equal('10.000,0000');

  });

  it('Should format 1000,5', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '1000,5');

    expect(result).to.equal('1.000,5000');

  });

  it('Should format 1000,897564', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '1000,897564');

    expect(result).to.equal('1.000,8975');

  });

  it('Should format ,3', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', ',3');

    expect(result).to.equal('0,3000');

  });

  it('Should format 3,', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '3,');

    expect(result).to.equal('3,0000');

  });

  it('Should format ,36576456', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', ',36576456');

    expect(result).to.equal('0,3657');

  });

  it('Should format ,3657', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', ',3657');

    expect(result).to.equal('0,3657');

  });

  it('Should format 03,', () => {

    const result = patternFormater.draftToInternational('#,##0.0000', '03,');

    expect(result).to.equal('03,0000');

  });

});