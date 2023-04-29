import "reflect-metadata";
import 'dotenv/config';

import { AppInstance, ServerEnvironment } from "@expressots/core";
import { container } from "./app-container";
import { ServerProvider } from '@providers/server/serverProvider';

export async function bootstrap() {
    const app = AppInstance.create(container);
    ServerProvider.PostServerInit();
    app.listen(Number(process.env.APP_PORT), ServerEnvironment.Development);
}

bootstrap();
