const io = require("socket.io-client");

// Replace with your actual backend WebSocket URL
const socket = io("https://trafficmonitorbackend.onrender.com");

socket.on("updateCount", (count) => {
    console.log("Current Active Visitors:", count);
});
