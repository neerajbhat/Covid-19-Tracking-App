const express = require("express");
const app = express();

const router = require("express").Router();
const fetch = require("node-fetch");

app.use(express.urlencoded({ extended: true }));
  
app.use(express.json())

const covid = require("../controllers/covid");

router.get("/", covid.getCovidData);

module.exports = router;