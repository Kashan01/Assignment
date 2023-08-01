const express = require("express");
const total = require("./math");
const app = express();
const fs = require("fs").promises;
const path = require("path");

const port = 3000;

async function readFileAsync() {
  const filePath = path.join(__dirname, ".", "data.txt");

  try {
    const data = await fs.readFile(filePath, "utf8");

    console.log(data.split(" ").length);
  } catch (err) {
    console.error(`Error reading file: ${err.message}`);
  }
}

app.use((req, res) => {
  res.send("<h1>Hello World!</h1>");
});
readFileAsync();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
