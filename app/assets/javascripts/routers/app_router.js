window.NewsReader.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    "": "feedIndex"
  },

  feedIndex: function () {

    var indexView = new NewsReader.Views.FeedsIndex({
      collection: NewsReader.Collections.feeds
    });

    NewsReader.Collections.feeds.fetch();
    $("body").html(indexView.render().$el);


  }
});
