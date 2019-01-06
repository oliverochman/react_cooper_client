describe('User can login', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
      });
    
      beforeEach(async () => {
        await page.reload();
      })

      it('with valid credentials', async () => {
        await page.click('#login')
        await page.type('input[id="email"]', 'johndoe@mail.com')
        await page.type('input[id="password"]', 'password')
        await page.click('button[id="submit')
        await expect(page).toMatch('Welcome johndoe@mail.com')
      })
})
