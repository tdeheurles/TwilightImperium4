const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
    app.use(
        "/data",
        proxy({
            target: "http://localhost:8000/data",
            changeOrigin: true
        })
    );

    app.use(morgan('combined'));
};
