package org.transversal.Server;

import io.vertx.core.Handler;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServerRequest;

public class Server {
    public static void main(String[] args) {
        new Server().start();
    }

    public void start() {
        Vertx vertx = Vertx.vertx();
        vertx.createHttpServer()
            .requestHandler(getHttpServerRequestHandler())
            .listen(8000);
    }

    private Handler<HttpServerRequest> getHttpServerRequestHandler() {
        return request -> {
            request.response().end("foo-bar-buz");
        };
    }
}
