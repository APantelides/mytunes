describe('SongQueueEntryView', function() {
  var view, model;

  beforeEach(function() {
    model = new SongModel({
      artist: 'Fakey McFakerson',
      title: 'Never Gonna Mock You Up',
      url: 'example/url',
    });
    view = new SongQueueEntryView({model: model});
    view.render();
  });

  // This spec passes already, but it's mutually exclusive with the one below.
  // Comment it out when implementing the song queue.
  // it ('plays clicked songs', function() {
  //   sinon.spy(SongModel.prototype, 'play');

  //   view.$el.children().first().click();
  //   expect(model.play).to.have.been.called;

  //   SongModel.prototype.play.restore();
  // });

  it('remove clicked songs', function() {
    sinon.spy(SongModel.prototype, 'demove');

    view.$el.children().first().click();
    expect(model.demove).to.have.been.called;

    SongModel.prototype.demove.restore();
  });

});