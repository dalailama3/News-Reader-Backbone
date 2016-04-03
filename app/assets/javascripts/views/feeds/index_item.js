window.NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST["feeds/index_item"],
  render: function () {
    var content = this.template({feed: this.model});
    this.$el.html(content);

    return this;
  }

});
