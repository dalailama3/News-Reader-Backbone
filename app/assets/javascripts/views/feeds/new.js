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

    var newFeed = new NewsReader.Models.Feed();
    var params = $(event.currentTarget).serializeJSON()["feed"];
    newFeed.set(params);

    newFeed.save({}, {
      success: function () {
        NewsReader.Collections.feeds.add(newFeed);
        Backbone.history.navigate("", {trigger: true});
      },
      failure: function (error) {
        console.log(error);

      }
    });
  }
});
