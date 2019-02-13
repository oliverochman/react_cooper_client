const MockedUsers = require('./mockedUsers')
beforeAll(async () => {

  // console.log(MockedUsers.mockedUserResponses)
  // console.log(MockedUsers.missingUserResponse)

  const createResponse = (path, uid) => {
    let response
    if (path === 'sign_in') {
      let user
      user = MockedUsers.mockedUserResponses.find(user => {
        return user.headers.uid === JSON.parse(uid).email
      })
      response = user || MockedUsers.missingUserResponse
      return response
    }
  }

  const requests = {
    'sign_in': {}
  }

  await page.setRequestInterception(true);

  await page.on('request', interceptedRequest => {
    const requestedEndpoint = interceptedRequest.url().split("/").pop();
    if (requests[requestedEndpoint]) {
      console.log('Params: ' + interceptedRequest.postData())
      let params = interceptedRequest.postData()
      interceptedRequest.respond(createResponse(requestedEndpoint, params));
    } else {
      interceptedRequest.continue();
    }
  })

  await page.on("response", async response => {
    // We want to identify the endpoint so that we only display relevant info
    const source = response.request().url().split("/").pop();
    // This is an example of endpoints we want to monitor
    // This conditional can of course be removed or edited
    if (source === "sign_in") {
      let json = await response.json()
      let headers = await response.headers()
      let status = await response.status()
      // Toggle the comment to see the response in your terminal
      // console.log("Intecepted responce from: " + source)
      // console.log(json)
      // console.log(headers)
      // console.log('status: ' + status)
    }
  })

})