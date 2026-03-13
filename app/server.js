const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

const url = "mongodb://mongo:27017";
const client = new MongoClient(url);

app.get("/", async (req, res) => {
    try {
        await client.connect();
        res.send("Node.js connected to MongoDB successfully!");
    } catch (err) {
        res.send("Database connection failed");
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});