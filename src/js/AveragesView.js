var average = function ( collection, base, property) {
    var total = 0;
    total = collection.reduce (function (a, b) {
        if(base === 0) {
            return a + b.get(property);
        } else {
            return a + b.get(base)[property];
        }
    }, 0);

    return Math.floor(total/collection.length);

};

var modeOfWeather = function (collection) {
    //This is where I will calculate the mode.
    var modeCount = 0;
    var modeValue;


    collection.forEach (function (x) {
        var total = 0;

        collection.forEach ( function (y) {
            if (x.get('weather')[0].description === y.get('weather')[0].description) {
                total++;
            }

        });

        if(total > modeCount) {
            //  We found a new mode
            modeCount = total;
            modeValue = x.get('weather')[0].description;

        }

    });

    return modeValue;
}

var calcAverages = function ( collection ) {
    var avgBlock = {};

    avgBlock.description = modeOfWeather(collection);
    avgBlock.min = average (collection, "temp", "min");
    avgBlock.max = average (collection, "temp", "max");
    avgBlock.humidity = average (collection, 0,"humidity");
    avgBlock.speed =   average (collection, 0,"speed");
    avgBlock.deg =     average (collection, 0,"deg");

    return avgBlock;
};

var AveragesView = Backbone.View.extend({
    className: 'AveragesClass',

    template: _.template($('#averages-template').html()),

    initialize: function () {
        this.listenTo (this.collection, 'add', this.render);       
    },

    render: function () {
        this.$el.html(this.template(calcAverages( this.collection )));

    }
});