const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to SentinelCart API",
        status: "running",
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy",
    });
});

app.listen(PORT, () => {
    console.log(`SentinelCart API is running on port ${PORT}`);
});