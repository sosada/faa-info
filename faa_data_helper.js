/**
 * Created by sosada on 5/16/16.
 */
'use strict';

var _ = require('lodash');

var rp = require('request-promise');

var ENDPOINT = 'http://services.faa.gov/airport/status/';

function FAADataHelper() {}

FAADataHelper.prototype.requestAirportStatus = function(airportCode) {

    return this.getAirportStatus(airportCode).then(
        function(response) {
            console.log('success - received airport info for ' + airportCode);
        }
    )
};

module.exports = FAADataHelper;

