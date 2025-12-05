const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;

const url = process.env.PING_URL || "https://shopsphereapi.azurewebsites.net/WeatherForecast";
const interval = parseInt(process.env.PING_INTERVAL || "600000", 10);

async function ping() {
  try {
    const res = await axios.get(url);
    console.log(`[${new Date().toISOString()}] Ping success: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Ping failed: ${err.message}`);
  }
}

ping();
setInterval(ping, interval);

app.get("/status", (req, res) => {
  res.send("✅ Keep-alive pinger is running.");
});

app.listen(port, () => {
  console.log(`Status endpoint listening on port ${port}`);
});