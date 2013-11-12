# event-drive

Support for creating event emitter with reactive callback
Callback function is not required.

## Install

Install with [npm](http://npmjs.org/):

    npm install event-drive

## API - Queries

    // first argument should be a function or an array of function
    // first function of exec is called asynchronously
    require('event-drive')(exec[, callback]);
    
