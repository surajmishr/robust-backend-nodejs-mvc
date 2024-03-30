

const express = require("express");
const http = require('http');
const bodyParser = require("body-parser");
const constants = require('./config/constants');
const AppRoutes = require("./route/routes");

const app = express();
const server = http.createServer(app);

app.get('/', (req, res) => {
    res.send('Welcome to your application!');
});

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Mount routes directly on the root path
app.use("/", AppRoutes);

const PORT = constants.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
