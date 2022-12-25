const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message:
      "Congratulations you've successfully dockerized an express.js api.",
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
