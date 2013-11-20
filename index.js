/***/
// [node-event-drive] index.js
var Emitter = require('events').EventEmitter, micropipe = require('micro-pipe');
module.exports = eventDrive;

function eventDrive(emitter, line, callback) {

  if(typeof emitter == 'function' || Array.isArray(emitter))
    callback = line, line = emitter, emitter = null;

  var ee = emitter || new Emitter();
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
