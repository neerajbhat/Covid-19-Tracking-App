const express = require("express");
const app = express();

const router = express.Router();

const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});