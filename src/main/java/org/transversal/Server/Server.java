package org.transversal.Server;

import io.vertx.core.Vertx;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.handler.BodyHandler;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Server {
    private String data = "foo-bar";
    private DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");

    public static void main(String[] args) {
        new Server().start();
    }

    public void start() {
        Vertx vertx = Vertx.vertx();
        Router router = Router.router(vertx);
        router.route().handler(BodyHandler.create());
        String prefix = "/api/v1";
        router.get(prefix + "/data").handler(this::getHttpHandler);
        router.post(prefix + "/data").handler(this::postHandler);

        vertx.createHttpServer()
            .requestHandler(router)
            .listen(8000);
    }

    private void getHttpHandler(RoutingContext routingContext) {
        logGet(routingContext);
        routingContext.response().end(data);
    }

    private void logGet(RoutingContext routingContext) {
        System.out.println(routingContext);
    }

    private void postHandler(RoutingContext routingContext) {
        logPost(routingContext);
        data = routingContext.getBodyAsString();
        routingContext.response().end();
    }

    private void logPost(RoutingContext routingContext) {
        System.out.println(
                "request at: " + dateFormat.format(new Date()) + "\n" +
                "data: " + routingContext.data() + "\n" +
                "body: " + routingContext.getBodyAsString()
        );
    }
}
