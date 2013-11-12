/***/
// [node-event-drive] index.js
var Emitter = require('events').EventEmitter, micropipe = require('micro-pipe');
module.exports = eventDrive;

function eventDrive(line, callback) {
  var ee = new Emitter();
  if(typeof callback == 'function')
    ee.once('error', callback).once('end', function() {
      var args = Array.prototype.slice.call(arguments);
      callback.apply(null, [null].concat(args));
    });
  setImmediate(function() {
    micropipe(line);
  });
  return ee;
}
