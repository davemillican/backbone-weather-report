
var city = new CityModel();
var weatherCollection = new WeatherCollection();

var app = {
    el: $('#plug')
};

_.extend(app, Backbone.Events);



function updateData (data) {
    // destroy all the models

    city.set('name', data.city.name);
    city.set('country', data.city.country);
    city.set('lat', data.city.coord.lat);
    city.set('lon', data.city.coord.lon);

    weatherCollection.reset();
    weatherCollection.add(data.list);
}

/***********************************************
Views of the Data
************************************************/



function getWeatherForecast (cityId, callback) {
 
    var appKey = '51113235aad3a0c997bf5da2f067ea19';

    $.ajax ({
       url:'http://api.openweathermap.org/data/2.5/forecast/daily?count=7&id=' + cityId,
        data:{appid:appKey},
        method:'GET',
        success: callback
    });
};

app.on ('forecast', function (cityId) {
    getWeatherForecast (cityId, updateData);
});

appView = new AppView({
    city: city,
    collection: weatherCollection
});

app.trigger('forecast','524901')

app.el.append( appView.$el);
appView.render();



//}//) ();
