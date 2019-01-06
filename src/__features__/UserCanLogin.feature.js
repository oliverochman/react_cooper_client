describe('User attempts to login',  () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000');
    });

    beforeEach(async () => {
        await page.reload();
    })

    describe('with', async () => {
        it('valid credentials', async () => {
            await page.click('#login')
            await page.type('input[id="email"]', 'johndoe@mail.com')
            await page.type('input[id="password"]', 'password')
            await page.click('button[id="submit')
            await expect(page).toMatch('Welcome johndoe@mail.com')
        })

        it('invalid credentials', async () => {
            await page.click('#login')
            await page.type('input[id="email"]', 'johndoe@mail.com')
            await page.type('input[id="password"]', 'wronpassword')
            await page.click('button[id="submit')
            await expect(page).toMatch('Wrong password')
        })
    })


    //   it('is running another test', async () =>{
    //       expect(2 + 2).toEqual(4)
    //   })
})
