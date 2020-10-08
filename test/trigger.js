var nodeunit = require('nodeunit');
var ed = require('../index');

module.exports = nodeunit.testCase({
  'function': function(t) {
    var ee = ed().on('end', function(r) {
      t.equal(r, 1), t.done();
    });
    setTimeout(function() {
      ee.emit('trigger', function() {
        ee.emit('end', 1);
      });
    }, 4)
  },
  'array': function(t) {
    var ee = ed().on('end', function(r) {
      t.equal(r, 1), t.done();
    });
    setTimeout(function() {
      ee.emit('trigger', [function() {
        ee.emit('end', 1);
      }]);
    }, 4)
  },
  'function-callback': function(t) {
    var ee = ed(null, function(e, r) {
      t.equal(r, 1), t.done();
    });
    setTimeout(function() {
      ee.emit('trigger', function() {
        ee.emit('end', 1);
      });
    }, 4);
  },
  'array-callback': function(t) {
    var ee = ed(null, function(e, r) {
      t.equal(r, 1), t.done();
    });
    setTimeout(function() {
      ee.emit('trigger', [function() {
        ee.emit('end', 1);
      }]);
    }, 4)
  }
});
