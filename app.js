const http = require("http");
const bindate = require("./controller");
const { getReqData } = require("./utils");
const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
  //set the request route
  if (req.url === "/api" && req.method === "GET") {
    //response headers
    res.writeHead(200, { "Content-Type": "application/json" });
    //set the response
    res.write("Hi there, This is a Vanilla Node.js API");
    //end the response
    res.end();
  } else if (req.url === "/api/bindates" && req.method === "GET") {
    // get the todos.
    const todos = await new bindate().getBinDates();
    // set the status code, and content-type
    res.writeHead(200, { "Content-Type": "application/json" });
    // send the data
    res.end(JSON.stringify(todos));
  } else if (req.url === "/api/nextbindate" && req.method === "GET") {
    // get the todos.
    const todos = await new bindate().getNextBindate();
    // set the status code, and content-type
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST",
      "Access-Control-Allow-Credentials": true,
    });

    // send the data
    res.end(JSON.stringify(todos));
  }

  // If no route present
  else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
