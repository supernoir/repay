// libraries
const assert = require('assert');
const chai = require('chai');

// modules to be tested
const repay = require('./../index');

describe('Repay', function() {
  it('should be of type number', function() {
    chai.expect(() => repay.repay(1337).to.be.a('number'));
  });
  it('should throw an error on wrong type', function() {
    chai.expect(() =>
      repay.repay('1337').to.throw(Error('Wrong Type: String'))
    );
    chai.expect(() =>
      repay.repay(['1337']).to.throw(Error('Wrong Type: Object'))
    );
  });
});

describe('Calculate Rates Left', function() {
  it('should return a single number', function() {
    chai.expect(() => {
      repay.getRatesLeft(200, 400, 2000).to.equal(8);
    });
  });
});
