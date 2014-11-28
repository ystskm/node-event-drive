/***/
// [node-event-drive] index.js
var Emitter = require('events').EventEmitter, micropipe = require('micro-pipe');
var processor = typeof setImmediate == 'function' ? setImmediate: function(fn) {
  process.nextTick(fn);
};

module.exports = eventDrive;
function eventDrive(emitter, line, callback) {

  if(!(emitter instanceof Emitter) && typeof callback == 'undefined')
    callback = line, line = emitter, emitter = null;

  var ee = emitter || new Emitter();
  callback = typeof callback == 'function' ? callback: null;

  var careLeak = function() {
    setImmediate(function() {
      ee.removeAllListeners(), ee = null;
    });
  };

  ee.once('error', function(e) {

    careLeak();
    if(callback == null)
      return;

    callback(e);
  }).once('end', function() {

    careLeak();
    if(callback == null)
      return;

    var args = Array.prototype.slice.call(arguments);
    callback.apply(null, [null].concat(args));
  });

  line == null ? ee.once('trigger', asyncTrigger): asyncTrigger(line);
  return ee;

  function asyncTrigger(line) {
    processor(function() {
      micropipe(line);
    });
  };

}
