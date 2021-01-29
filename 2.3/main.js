const routeMap = {
    "/info": "<h1>Info Page</h1>",
    "/contact": "<h1>Contact Us at:</h1>",
    "/about": "<h1>Learn About Us</h1>",
    "/hello": "<h1>Send Us an Email </h1>",
    "/error": "<h1>The page you wanted doesn't exist</h1>"
};
const http = require("http");
const httpStatus = require("http-status-codes");
const hostname = "127.0.0.1";
const port = 3000;
const app = http.createServer();            // server as an obj

app.on("request", function (req, res) {     // eventhandler for "request"
                                            
    res.writeHead(httpStatus.OK, {  // prep response header
        "Content-Type": "text/html; cha// prep response headerrset=utf-8"
    });

    let responseMsg;
    if (routeMap[req.url]) {                // look for route
        responseMsg = routeMap[req.url];    // found, use it
        console.log("You're on page " + routeMap[req.url]);
    } else {
        responseMsg = "<h1>This is my 404, reguested url not found</h1>";   // else show something else
        console.log("Page not found");
    }
    res.write(responseMsg);                 // respond
    res.end();                              // sends response http
});

app.listen(port, hostname, function () {
    console.log(`Server running, and listening at http://${hostname}:${port}/`);
});