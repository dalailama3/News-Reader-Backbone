window.NewsReader.Views.FeedsShow = Backbone.View.extend({
  template: JST["feeds/show"],
  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  }
});
