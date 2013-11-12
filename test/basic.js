var nodeunit = require('nodeunit');
var ed = require('../index');

module.exports = nodeunit.testCase({
  'function': function(t) {
    var ee = ed(function() {
      ee.emit('end', 1);
    }).on('end', function(r) {
      t.equal(r, 1), t.done();
    });
  },
  'array': function(t) {
    var ee = ed([function() {
      ee.emit('end', 1);
    }]).on('end', function(r) {
      t.equal(r, 1), t.done();
    });
  },
  'function-callback': function(t) {
    var ee = ed(function() {
      ee.emit('end', 1);
    }, function(e, r) {
      t.equal(r, 1), t.done();
    });
  },
  'array-callback': function(t) {
    var ee = ed([function() {
      ee.emit('end', 1);
    }], function(e, r) {
      t.equal(r, 1), t.done();
    });
  }
});
