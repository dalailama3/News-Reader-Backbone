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
    var showView = new NewsReader.Views.FeedsShow();

  },

  _swapView: function (view) {
    if (this.currentView) {
      this.currentView.remove()
    }
    this.currentView = view;

    $("body").append(view.render().$el);
  }
});
