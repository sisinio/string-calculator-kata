'use strict'

const add = require('../src/kata.1.add');
const { expect } = require('chai');

describe('kata module 1', () => {
  describe('"add" function', () => {
    it('should export a function', () => {
      expect(add).to.be.a('function')
    });

    it('should be equal to 0 with empty parameter', () =>{
      let zeroResult = add('');
      expect(zeroResult).to.deep.equal(0);
    });

    it('should be equal to the input', () =>{
      let result = add('5');
      expect(result).to.deep.equal(5);
    });

    it('should be equal to their sum with 2 parameters', () =>{
      let result = add('4,6');
      expect(result).to.deep.equal(10);
    });
  });
});