'use strict'

const add = require('../src/kata.5.add');
const { expect } = require('chai');

describe('kata module 5', () => {
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

    it('should be equal to 0 without parameter', () =>{
      let zeroResult = add();
      expect(zeroResult).to.deep.equal(0);
    });

    it('should be equal to their sum with more then 2 parameters', () =>{
      let result = add('2,4,6,8');
      expect(result).to.deep.equal(20);
    });

    it('should be equal to their sum when new line separator', () =>{
      let result = add('2\n4,6\n8');
      expect(result).to.deep.equal(20);
    });

    it('should equal to their sum when use custom separator', () =>{
      let result = add('//;\n1;3;5;7');
      expect(result).to.deep.equal(16);
    });

    it('should equal to zero when use custom separator without numbers and new line', () =>{
      let result = add('//;');
      expect(result).to.deep.equal(0);
    });

    it('should equal to zero when use custom separator without numbers', () =>{
      let result = add('//;\n');
      expect(result).to.deep.equal(0);
    });

    it('should throw an exception with the negative number', () =>{
      expect(() => { add('1,4,-1') }).to.throw("negatives not allowed: -1");
    });

    it('should throw an exception with all the negative numbers', () =>{
      expect(() => { add("1,4,-1,-2") }).to.throw('negatives not allowed: -1,-2');
    });
  });
});
