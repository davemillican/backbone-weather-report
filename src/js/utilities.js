

/**********************************************
            Averages Logic
***********************************************/




   function toFahrenheit (tempKelvin) {
        return Math.floor ((tempKelvin - 273.15 ) * 1.8 + 32);

    };

    function degreesToDirection ( degrees ) {
        console.log ("degrees: " + degrees)
        if ((degrees > 340) || (degrees <= 25)) {
            return "N";
        };

        if (degrees < 70) {
            return "NE";
        };

        if (degrees < 115) {
            return "E";
        };

        if (degrees < 160) {
            return "SE";
        };

        if (degrees < 205) {
            return "S";
        };

        if (degrees < 250) {
            return "SW";
        };

        if (degrees < 295) {
            return "W";
        };

        return "NW";    
}
