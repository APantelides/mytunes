// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // var state = false;
    this.on('add', function() {
      if (this.length === 1 ) {
        this.playFirst();
        // this.remove(this.at(0));
        // state = true;&& state === false
      }
    }, this);

    this.on('ended', function () { 
      this.remove(this.at(0)); 
      // console.log('song just ended', this);
      if (this.length) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function () {
      this.remove(this.at(0));
    }, this);

    this.on('demove', function (e) {
      this.remove(e);
    }, this);
  },

  playFirst: function () {
    this.at(0).play();
  }

});