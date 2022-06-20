const express = require("express");
const app = express();
const cors = require("cors");
const port = 8001;

const chartRouter = require("./routes/chart");

app.use("/api", [chartRouter]);

app.use(cors());

app.listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
});
