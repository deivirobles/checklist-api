import http from "http";

import { configuration } from "./app/config.js";

const {port} = configuration.server;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at port : ${port}`);
});