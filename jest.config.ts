import 'reflect-metadata';
import type { JestConfigWithTsJest } from "ts-jest";
import { resolve } from "path";
const root = resolve(__dirname);

const jestConfig: JestConfigWithTsJest = {
    rootDir: root,
    displayName: "unit-tests",
    preset: "ts-jest",
    testEnvironment: "node",
    verbose: true,
    clearMocks: true,
    setupFilesAfterEnv: ['<rootDir>/test/jest-setup.ts'],
    testMatch: ["<rootDir>/src/**/*.test.ts"],
    moduleNameMapper: {
        //'@src/(.*)': '<rootDir>/src/$1',
        //'@test/(.*)': '<rootDir>/test/$1',
        '@entities/(.*)': '<rootDir>/src/entities/$1',
        '@providers/(.*)': '<rootDir>/src/providers/$1',
        '@repositories/(.*)': '<rootDir>/src/repositories/$1',
        '@controllers/(.*)': '<rootDir>/src/controllers/$1',
        '@services/(.*)': '<rootDir>/src/services/$1'
    },
    //automock: false,
    //coverageDirectory: "./coverage",
    //coverageReporters: ["text", "html", "json"],
};

export default jestConfig;
