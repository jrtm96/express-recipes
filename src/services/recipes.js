const fs = require("fs").promises;
const path = require("path");

const recipesFilePath = path.join(__dirname, "../../db/recipes.json"); // Contruct the path to the recipes data

const getAll = async () => JSON.parse(await fs.readFile(recipesFilePath));

module.exports = {
 getAll,
};