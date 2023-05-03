import "reflect-metadata";
import 'dotenv/config';
import express from 'express';

import { AppInstance, ServerEnvironment } from "@expressots/core";
import container from "./app-container";
import { ServerProvider } from '@providers/server/serverProvider';

export async function bootstrap() {
    const app = AppInstance.create(container, [
        express.json({ limit: "50mb" }),
      ]);
    ServerProvider.PostServerInit();
    app.listen(Number(process.env.APP_PORT), ServerEnvironment.Development);
}

bootstrap();
