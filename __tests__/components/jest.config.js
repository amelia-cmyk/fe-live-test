/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": ["ts-jest", { tsconfig: "tsconfig.json" }],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1", // supaya import @/app/... bisa jalan
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};
export default config;
