module.exports = {
    verbose: true,
    preset: "jest-puppeteer",
    testRegex: ".feature|e2e\\.js$",
    globals: {
        appURL: "http://localhost:3001"
    }
};