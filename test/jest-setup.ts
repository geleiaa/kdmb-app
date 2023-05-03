import 'reflect-metadata';
import { AppInstance, ServerEnvironment } from '@expressots/core';
import { ServerProvider } from '../src/providers/server/serverProvider';
import container from '../src/app-container';

beforeAll(async () => {
    const app = AppInstance.create(container)
    ServerProvider.PostServerInit();
    app.listen(1234, ServerEnvironment.Development);
});

afterAll(async () => {
    setTimeout(() =>
        ServerProvider.ServerShutdown(),
        1000
    )
});
