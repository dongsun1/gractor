const http = require("http");
const express = require("express");

const app = express();

const port = 8000; //인스턴스 생성시 만들었던 포트번호 기입

http.createServer(app).listen(port, () => {
  console.log(`app listening at ${port}`);
});
