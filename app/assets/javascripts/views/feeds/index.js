window.NewsReader.Views.FeedsIndex = Backbone.View.extend({
  template: JST["feeds/index"],
  tagName: "ul",
  initialize: function (options) {
      this.listenTo(this.collection,"reset sync add remove", this.render)
  },

  render: function () {
    var that = this;
    if (this.$el.html() == "") {
      this.collection.each(function (feed) {
        var indexItem = new NewsReader.Views.FeedsIndexItem({
          model: feed
        });
        that.$el.append(indexItem.render().$el);
      });
      return this;
    }
  }

});
