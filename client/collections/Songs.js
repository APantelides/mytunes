// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    this.fetch();
  },

  fetch: function () {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      'Content-Type': 'application/json',
      success: function(data) {
        var results = [];
        data.results.forEach(function(obj) {
          results.push({artist: obj.artist, title: obj.title, url: obj.url});
        }.bind(this));
        this.add(results);
      }.bind(this),
      error: function(error) {
        console.log('There was an error: ', error);
      }
    });
  }

});
