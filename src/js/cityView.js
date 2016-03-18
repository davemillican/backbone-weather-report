var CityView = Backbone.View.extend({

    className: 'city',
    template: _.template($("#city-template").html()),

    initialize: function () {
        this.listenTo (this.model, 'change', this.render );
    },

    render: function () {
        
        this.$el.html(this.template(this.model));

    }

});
