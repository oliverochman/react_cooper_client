const port = process.env.TEST_SERVER_PORT
    ? Number(process.env.TEST_SERVER_PORT)
    : 3000

process.env.TEST_SERVER_PORT = port

module.exports = {
    launch: {
        headless: process.env.CI === 'true',
    },
    browserContext: process.env.INCOGNITO ? 'incognito' : 'default',
    server: {
        command: `cross-env PORT=${port} react-scripts start`,
        port,
        launchTimeout: 4000,
    },
} 