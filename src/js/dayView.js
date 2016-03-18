var DayView = Backbone.View.extend({

    tagName: 'ul',

    className: 'day',

    template: _.template($("#weather-template").html()),
     

    render: function () {
        this.$el.html(this.template(this.model));
    }
});
