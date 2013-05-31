// index.js - bootup the game

var GameEngine = require('./engine');
var game = new GameEngine({
    autoBackup: false // for now omit
});

game.on('tick', function(elapsed) {
    //console.log('test tick: ' + elapsed);
});

game.start();

// provide reference to the main app
module.exports = game;