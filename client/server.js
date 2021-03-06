const http = require("http");
const express = require("express");
const path = require("path");

const app = express();

const port = 8000; //인스턴스 생성시 만들었던 포트번호 기입

app.use(express.static(path.join(__dirname)));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

http.createServer(app).listen(port, () => {
  console.log(port, "포트로 서버가 켜졌어요!");
});
