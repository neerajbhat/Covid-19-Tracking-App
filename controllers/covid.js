const fetch = require("node-fetch");    
exports.getCovidData = async (req, res, next) => {
    try {
        const request = require('request');
        // request('https://api.covid19india.org/data.json', { json: true }, (err, res, covidData) => {
        //     if (err) { return console.log(err); }
        //     console.log(covidData.statewise[0]);
        // });
        // console.log(JSON.stringify(xxx));
        // return xxx;
        const response = await fetch('https://api.covid19india.org/data.json');
        const covidData = await response.json();
        // console.log(covidData.statewise[0]);
        // return covidData.statewise[0].active;

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