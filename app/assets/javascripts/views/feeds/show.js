window.NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/show"],
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click button.refresh": "refresh"
  },

  refresh: function (event) {
    var feed = NewsReader.Collections.feeds.getOrFetch(this.model.id);
    feed.fetch();

  },

  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);

    return this;
  }
});
