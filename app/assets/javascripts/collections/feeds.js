window.NewsReader.Collections.Feeds = Backbone.Collection.extend({
  url: "/api/feeds",
  model: NewsReader.Models.Feed
});

window.NewsReader.Collections.feeds = new NewsReader.Collections.Feeds();
