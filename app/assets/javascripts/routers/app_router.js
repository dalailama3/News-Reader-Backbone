window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/:id": "feedShow"
  },

  currentView: null,

  feedIndex: function () {

    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });

    NewsReader.Collections.feeds.fetch();
    this._swapView(indexView);
  },

  feedShow: function (id) {
    var feed = NewsReader.Collections.feeds.getOrFetch(id);

    feed.fetch();
    var showView = new NewsReader.Views.FeedsShow({
      model: feed
    });



    this._swapView(showView);

  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove()
    }
    this.currentView = view;

    $("body").append(view.render().$el);
  }
});
