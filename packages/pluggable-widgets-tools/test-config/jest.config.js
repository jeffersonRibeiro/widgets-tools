const { join } = require("path");

const projectDir = process.cwd();

module.exports = {
    clearMocks: true,
    testRunner: "jest-jasmine2",
    rootDir: join(projectDir, "src"),
    setupFilesAfterEnv: [join(__dirname, "test-index.js")],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    testEnvironment: "jsdom",
    testMatch: ["<rootDir>/**/*.spec.{js,jsx,ts,tsx}"],
    transform: {
        "^.+\\.tsx?$": ["ts-jest", { tsconfig: { module: "commonjs" } }],
        "^.+\\.jsx?$": join(__dirname, "transform.js"),
        "^.+\\.svg$": join(__dirname, "jest-svg-transformer")
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "mendix/components/web/Icon": join(__dirname, "__mocks__/WebIcon"),
        "mendix/filters/builders": join(__dirname, "__mocks__/FilterBuilders"),
        "\\.png$": join(__dirname, "assetsTransformer.js")
    },
    moduleDirectories: ["node_modules", join(projectDir, "node_modules"), join(__dirname, "../../../")],
    collectCoverage: !process.env.CI,
    coverageDirectory: join(projectDir, "dist/coverage")
    testEnvironment: "jsdom"
};
