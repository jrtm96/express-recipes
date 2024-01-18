const express = require("express");
const path = require('path');

const app = express();

app.use((req, res, next) => {
    const { method, path } = req;
    console.log(
        `New request to: ${method} ${path} at ${new Date().toISOString()}`
    );
    next();
});

const publicDirectoryPath = path.join(__dirname, './public');
app.use(express.static(publicDirectoryPath));

app.get("/", (req, res) => {
    res.send("Hello Jose, welcome! or whatever");
});

app.get("/:name", (req, res) => {
    res.send(`Welcome to Express Recipes, ${req.params.name}!`);   
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is up on port: ${port}.`);
});