```
$ mkdir src/__mocks__
$ touch mocks.js
```

add beforeAll block to mocks.js that looks like this:

```
beforeAll(async () => {

})
```
now we need to decalare an request varaibale that is gonna store an object

within that object we are gonna set another obejct with the name of the route that yuo want to mock out

We are now gonna mock out the response we get when we hit this mocked out route. That includes status, headers and body.

Witihin the headers object we are gonna set the headers that we need to use in the client, like access token etc

In the body we should add the response data like the uid and name of the user etc

We need to add a puppeteer setting to intercept all requests in the test enviroment called `setRequestInterception`

No we need to add an eventlistener taht is intercepting the requests and grab the the last part of the requested path. We will use it to know what to mock out.

If the endpoint is one of those included in the request varaiable we created above, then we will deal with it, otherwise we let the request continue. If the path is defin ed in the variable, we will tell it to respond with the values we set and control.

In all feature tests that we are sending requests and where we want to mock them out, we need to to require this file.

`require('../__mocks__/mocks')`




