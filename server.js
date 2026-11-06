
const express = require("express");
const os = require("os");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static("public"));

// Hello API
app.get("/api/hello", (req, res) => {
    const name = req.query.name || "World";
    res.json({ message: `Hello, ${name}!` });
});

// Health API
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        server: os.hostname(),
        node: process.version
    });
});

app.listen(PORT, "127.0.0.1", () => {
    console.log(`App listening on port ${PORT}`);
});
