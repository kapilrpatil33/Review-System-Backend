<script src="https://cdn.socket.io/4.7.2/socket.io.min.js"></script>
<script>
    // Connect to your backend WebSocket server
    const socket = io("https://trafficmonitorbackend.onrender.com");

    // Log active visitors when updated
    socket.on("updateCount", (count) => {
        console.log("Current Active Visitors:", count);
    });

    // Automatically disconnect the user when they leave the page
    window.addEventListener("beforeunload", () => {
        socket.disconnect();
    });
</script>
