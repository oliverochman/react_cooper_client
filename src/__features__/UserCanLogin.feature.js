describe('User can login', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
      });
    
      beforeEach(async () => {
        await page.reload();
      })

      describe('with valid credentials', () => {
          // click login link
          // display form
          // fill in form
          // press submit
          // expect "Welcome thomas@craft.com"
          // expect <App /> to have state authenticated: true (component test)
      })
})