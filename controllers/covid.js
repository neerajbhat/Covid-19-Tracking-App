const fetch = require("node-fetch");    
exports.getCovidData = async (req, res, next) => {
    try {
        // const request = require('request');

        const response = await fetch('https://api.covid19india.org/data.json');
        const covidData = await response.json();

        var covidReport = [];
        for (let i = 0; i < covidData.statewise.length; i++) {
            covidReport.push({
                "State": covidData.statewise[i].state,
  
                "Confirmed": covidData.statewise[i].confirmed,
  
                "Active": covidData.statewise[i].active,
  
                "Recovered": covidData.statewise[i].recovered,
  
                "Death": covidData.statewise[i].deaths
            });
        }

        res.render("index", {covidReport: covidReport, covidSummary: covidData.statewise[0]});
    }
    catch (err) {
        console.log(err);
    }
}