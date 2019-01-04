describe('Cooper Client', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  beforeEach(async () => {
    await page.reload();
  })

  describe('Calculates successfully', async () => {
    beforeEach( async () => {
      await page.type('input[id="distance"]', '1000')
      await page.select('select[id="gender"]', 'female')
      await page.type('input[id="age"]', '23')
    })

    xit('displays age', async () => {
      await expect(page).toMatch('Age: 23')
    })

    xit('displays gender', async () => {
      await expect(page).toMatch('Gender: Female')
    })

    it('displays result', async () => {
      await expect(page).toMatch('Result: Poor')
    })
  })
})