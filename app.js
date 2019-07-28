var os = require("os");
const express = require("express");
const app = express();
const hostname = os.hostname();

app.get("/", function(req, res) {
  res.send("Hello Member!" + `\n hostname is ${hostname}`);
});

app.listen(8080, function() {
  console.log("member app listening on port 8080!");
});
