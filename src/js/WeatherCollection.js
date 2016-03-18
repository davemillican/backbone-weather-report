    var WeatherModel = Backbone.Model.extend ({
        fTempLow: function () {
            return toFahrenheit (this.get('temp').min);
        },

        fTempHigh: function () {
            return toFahrenheit (this.get('temp').max);

        },

        windDirection: function () {
            return degreesToDirection (this.get('deg'));
        }
    });

    var WeatherCollection = Backbone.Collection.extend({
        model: WeatherModel
    });
