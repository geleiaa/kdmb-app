import "reflect-metadata";

import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";
import { ServerProvider } from "@providers/server/serverProvider";
import ENV from "env";

export async function bootstrap() {
    const app = AppInstance.create(container);
    ServerProvider.PostServerInit();
    app.listen(ENV.Application.PORT, ServerEnvironment.Development);
}

bootstrap();
