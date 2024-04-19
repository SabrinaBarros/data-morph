import patternFormater from '../../index.js'
import {expect} from 'chai'

describe('Should format generic Brazilian patterns', () => {

  it('Should format a CPF pattern', () => {

    const result = patternFormater.draftToInternational('XXX.XXX.XXX-XX', '09843476490');

    expect(result).to.equal('098.434.764-90');

  });

  it('Should format a CNPJ pattern', () => {

    const result = patternFormater.draftToInternational('XX.XXX.XXX/XXXX-XX', '29701763000141');

    expect(result).to.equal('29.701.763/0001-41');

  });

  it('Should format a CEP pattern', () => {

    const result = patternFormater.draftToInternational('XXXXX-XXX', '74986290');

    expect(result).to.equal('74986-290');

  });

  it('Should format a short date pattern', () => {

    const result = patternFormater.draftToInternational('XX/XX/XX', '031192');

    expect(result).to.equal('03/11/92');

  });

  it('Should format a complete date pattern', () => {

    const result = patternFormater.draftToInternational('XX/XX/XXXX', '03111992');

    expect(result).to.equal('03/11/1992');

  });

  it('Should format a financial count pattern', () => {

    const result = patternFormater.draftToInternational('XX.XXX', '28167');

    expect(result).to.equal('28.167');

  });

  it('Should format a financial cost center pattern', () => {

    const result = patternFormater.draftToInternational('XX.XXXXX', '2816733');

    expect(result).to.equal('28.16733');

  });

  it('Should format a BR phone number pattern', () => {

    const resultWith9 = patternFormater.draftToInternational('+XX XX OXXXX-XXXX', '5511912345678');
    const resultWithout9 = patternFormater.draftToInternational('+XX XX OXXXX-XXXX', '551112345678');

    expect(resultWith9).to.equal('+55 11 91234-5678');
    expect(resultWithout9).to.equal('+55 11 1234-5678');

  });

  it('Should format a RG pattern', () => {

    const result = patternFormater.draftToInternational('XX.XXX.XXX-X', '472383358');

    expect(result).to.equal('47.238.335-8');

  });

});