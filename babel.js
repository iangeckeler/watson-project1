//babel compiles all of my code
require('babel-register')({
    presets: [ 'env' ]
})

// Import the rest of our application.
module.exports = require('./app.js')
