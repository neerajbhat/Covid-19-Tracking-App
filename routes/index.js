const express = require("express");
const app = express();

const router = require("express").Router();
const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true }));
  
app.use(express.json())

const covid = require("../controllers/covid");
// router.get("/", async (req, res, next) => {
//     const covidData = covid.getCovidData();
//     console.log("hi = "+covidData);
//     res.render("index", {covidData: covidData});
// });

router.get("/", covid.getCovidData);

// routers will be here
// router.get("/", (req, res) => {
//     const covid = require("../controllers/covid");
//     console.log(covid.getCovidData);
//     res.render("index", {covidData: covid});
// });

module.exports = router;