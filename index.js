const axios = require("axios");

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