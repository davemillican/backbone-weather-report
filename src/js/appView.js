
var AppView = Backbone.View.extend({
    tagName: 'div',
    initialize: function (options) {
        this.cityModel = options.city;
        this.collection = options.collection;
        this.cityView = new CityView ({model: this.cityModel});
        this.inputView = new InputView();
        this.averagesView = new AveragesView({collection: this.collection});
        this.weatherView = new WeatherView ({collection: this.collection});
    },

    render: function () {
        this.$el.empty();
        this.cityView.render();
        this.inputView.render();
        this.weatherView.render();
        this.$el.append ( 
            this.inputView.$el,
            this.cityView.$el,
            this.weatherView.$el,
            this.averagesView.$el);

    }

});