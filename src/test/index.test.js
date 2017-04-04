import chai from 'chai';
import add from '../../dist/index';

const expect = chai.expect;

describe('Main index', () => {
  it('Return the addition of two valiables', (done) => {
    expect(add(4, 5)).to.equal(9);
    done();
  });
});
