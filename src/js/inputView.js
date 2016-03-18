var InputView = Backbone.View.extend({
    tagName: 'input',

    events:{ 'keydown': 'onKeyDown'},

    onKeyDown: function (e) {
        if (e.keyCode === 13) {
            app.trigger ('forecast', this.$el.val());
        }
    }
}) 