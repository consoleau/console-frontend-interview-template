const chai = require('chai');
const Foo = require('./Foo');

describe("Foo Test", function() {
  it("fn1 returns 'BAR'", function() {
    const foo = new Foo();
    chai.expect(foo.fn1()).to.equal('BAR');
  })
});
