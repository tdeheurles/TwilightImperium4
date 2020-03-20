const proxy = require("http-proxy-middleware");
const morgan = require("morgan");

module.exports = app => {
    app.use(
        "",
        proxy({
            target: "http://localhost:8000/",
            changeOrigin: true
        })
    );

    app.use(morgan('combined'));
};
