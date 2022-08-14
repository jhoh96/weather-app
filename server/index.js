const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");
const PORT = process.env.PORT || 3001;

// API KEY VALUES & STUFF HERE INITIALLY
const API_KEY = `4a1af68827fd827f35c78243b5813c37`;

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Check if server is running
app.listen(PORT, () => {
  console.log("server is running on PORT: " + PORT);
});

// Initial server API get page
app.get("/", (req, res) => {
  const sampleValue = { title: "title", value: "value" };
  res.send(sampleValue);
});

app.get("/weather", async (req, res) => {
  const lat = 33.44;
  const lon = 94.04;
  try {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        res.json(response.data)
      });
  } catch (err) {
    console.log(err);
    return
  }
});
