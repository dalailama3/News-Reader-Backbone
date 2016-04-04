window.NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: NewsReader.Models.Feed,

  getOrFetch: function (id) {
    var feeds = this;
    var feed = this.get(id);

    if (typeof feed === "undefined") {
      feed = new NewsReader.Models.Feed({id: id});
      feed.fetch({
        success: function () {
          feeds.add(feed);
        }
      });
    }
    return feed;
  }
});

window.NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
