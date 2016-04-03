window.NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],
  tagName: "ul",
  initialize: function (options) {
      this.listenTo(this.collection,"sync", this.render)
  },

  render: function () {
  
    var that = this;

    this.collection.each(function (feed) {
      var indexItem = new NewsReader.Views.FeedsIndexItem({
        model: feed
      });
      that.$el.append(indexItem.render().$el);
    });
    return this;
  }

});
