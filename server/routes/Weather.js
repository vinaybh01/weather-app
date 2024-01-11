const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", async (req, res) => {
  const { city } = req.body;
  console.log(city);

  try {
    const response = await axios.get("https://api.api-ninjas.com/v1/weather", {
      params: { city }, // Send the city as a query parameter
      headers: {
        "X-Api-Key": "ZPGWFmYNpz4qkXVz/wBFJw==PNMNZLT88ph4cubF",
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
