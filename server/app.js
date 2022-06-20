const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const port = 8001;

const chartRouter = require("./routes/chart");

app.use(cors());

app.use("/api", [chartRouter]);

http.createServer(app).listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
});
