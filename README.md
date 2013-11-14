# event-drive
  
[![Build status](https://travis-ci.org/ystskm/node-event-drive.png)](https://travis-ci.org/ystskm/node-event-drive)  
  
Support for creating event emitter with reactive callback.  
Callback function is not required.

## Install

Install with [npm](http://npmjs.org/):

    npm install event-drive

## API - Queries

    // first argument should be a *function* or an *Array* of function(s)
    // first function of exec is called asynchronously
    var emitter = require('event-drive')(exec[, callback]);
    
    // event drive now.
    emitter.on( .. 
