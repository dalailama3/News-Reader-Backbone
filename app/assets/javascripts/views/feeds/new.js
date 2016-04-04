window.NewsReader.Views.FeedsNew = Backbone.View.extend({
  template: JST["feeds/new"],
  render: function () {
    var content = this.template();
    this.$el.html(content);

    return this;
  },

  events: {
    "submit form": "submit"
  },

  submit: function (event) {
    event.preventDefault();
  }
});
