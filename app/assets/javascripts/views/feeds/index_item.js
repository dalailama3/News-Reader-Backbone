window.NewsReader.Views.FeedsIndexItem = Backbone.View.extend({
  template: JST["feeds/index_item"],
  events: {
    "click button.delete": "deleteFeed"
  },

  deleteFeed: function (event) {
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("", {trigger: true});
      }
    });

  },
  render: function () {

    var content = this.template({feed: this.model});
    this.$el.html(content);

    return this;
  }

});
