
## Cooper Challenge in ReactJS

 This is a scaffold used to write course documentation for Craft Academy Bootcamp

## Running tests

Feature files

```bash
$ npm run features
// or
$ npm run features --runInBand
```
You can find more commands at https://jestjs.io/docs/en/cli.html


## Troubleshooting
Sometimes Jest is not properly closing down the server. To manually shut down the process (in this example it is running on port 3001), you can execute the following commands:

```bash

$ netstat -vanp tcp | grep 3001

$ kill -kill $(lsof -t -i :3001)
```

