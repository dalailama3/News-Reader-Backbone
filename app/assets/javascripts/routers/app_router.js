window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedIndex",
    "feeds/new": "feedNew",
    "feeds/:id": "feedShow",
  },

  currentView: null,

  feedNew: function () {
    var newView = new NewsReader.Views.FeedsNew();

    this._swapView(newView);
  },

  feedIndex: function () {

    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });

    NewsReader.Collections.feeds.fetch({reset: true});
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
