const http = require("http");
const moment = require("moment");
const PORT = 8080;

const server = http.createServer((req, res) => {
  let response = "Mensaje por defecto";
  let hora_actual = moment().format("HH");
  if (6 > hora_actual < 12) {
    response = "Buenos días";
  } else if (13 > hora_actual < 19) {
    response = "Buenas tardes";
  } else {
    response = "Buenas noches";
  }
  res.end(`${response}`);
});

server.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
