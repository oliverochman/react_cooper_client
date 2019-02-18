const MockResponses = require('./mockResponses')
beforeAll(async () => {

  const createResponse = (path, params, request) => {
    let response
    switch (path) {
      case 'sign_in':
        let user
        user = MockResponses.mockedUserResponses.find(user => {
          return user.headers.uid === JSON.parse(params).email
        })
        response = user || MockResponses.missingUserResponse
        return response
      case 'performance_data':
        if ((request.method()) === 'POST') {
          response = MockResponses.savingEntryResponse
        }
        return response
    }
    
  }

  const requests = {
    'sign_in': {},
    'performance_data': {}
  }

  await page.setRequestInterception(true);

  await page.on('request', interceptedRequest => {
    const requestedEndpoint = interceptedRequest.url().split("/").pop();
    if (requests[requestedEndpoint]) {
      params = interceptedRequest.postData()
      interceptedRequest.respond(createResponse(requestedEndpoint, params, interceptedRequest));
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