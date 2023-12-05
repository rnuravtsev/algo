import type {Config} from 'jest';
import {defaults} from 'jest-config';

const config: Config = {
    testEnvironment: "node",
    roots: ["<rootDir>"],
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts',],
    preset: "ts-jest"
};

export default config;
