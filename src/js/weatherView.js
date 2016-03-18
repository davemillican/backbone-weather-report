var WeatherView = Backbone.View.extend ({
    tagName: 'div',

    initialize: function () {
        this.childViews = [];
        this.listenTo (this.collection, 'add', this.render);
        console.log ("in init " + this.$el);
    },

    render: function () {
        var _this = this;
        this.$el.empty();

        this.childViews.forEach( function (view) {
            view.remove();
        });

        this.childViews = this.collection.map (function (model) {
            return new DayView({model: model});
        });

        console.log ("Weather View: " + this.$el);
        this.childViews.forEach( function (view) {

            view.render();
            _this.$el.append(view.$el);
        });
    }

})




