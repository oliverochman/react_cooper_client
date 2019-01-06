
module.exports = {
    launch: {
        headless: false,
    },
    browserContext: 'default',
    server: {
        command: `cross-env PORT=3000 react-scripts start`,
        launchTimeout: 10000,
        debug: true
    },
} 