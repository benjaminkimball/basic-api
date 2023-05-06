/* eslint-disable no-undef */
/** @type {import("ts-jest").JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  modulePathIgnorePatterns: [
    "<rootDir>/dist/",
    "<rootDir>/generated/",
    "<rootDir>/scripts/",
  ],
};
/* eslint-enable no-undef */
