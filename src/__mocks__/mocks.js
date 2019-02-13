beforeAll(async () => {

  const requests = {
    'sign_in': {
      status: 200,
      headers: {
        "access-token": "AfJSIl6P1CYM0Qc0vmTfXQ",
        client: "aGh-lsYlUZasOM3mcil9cQ",
        expiry: "1550652483",
        uid: "johndoe@mail.com",
        "token-type": "Bearer"
      },
      body: JSON.stringify({
        data:
        {
          id: 1,
          email: "johndoe@mail.com",
          provider: "email",
          uid: "johndoe@mail.com"
        }
      })
    }
  }

  await page.setRequestInterception(true);

  await page.on('request', interceptedRequest => {
    const requestedEndpoint = interceptedRequest.url().split("/").pop();
    if (requests[requestedEndpoint]) {
      interceptedRequest.respond(requests[requestedEndpoint]);
    } else {
      interceptedRequest.continue();
    }
  })

})