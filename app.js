const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello from Node.js app created by Jarvis" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/about", (req, res) => {
  res.json({ message: "CI/CD Demo Application" });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;            