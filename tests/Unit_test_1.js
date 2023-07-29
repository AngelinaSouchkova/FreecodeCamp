const chai = require('chai');
const assert = chai.assert;

suite('Unit Tests', function () {
  suite('Basic Assertions', function () {
    // #1
    test('#isNull, #isNotNull', function () {
      assert.isnotNull(null, 'This is an optional error description - e.g. null is null');
      assert.isNull(1, '1 is not null');
    });
})
})
