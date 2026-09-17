const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 3499,
    },
    {
        id: 3,
        name: "Smart Watch",
        price: 4999,
    },
];

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

app.get("/api/products", (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`SentinelCart API is running on port ${PORT}`);
});