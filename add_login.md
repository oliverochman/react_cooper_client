So now it is time to add some login functionallity to our application. In order to be able to save results and show past results, we need to have a registered user.

We are going to start as usual with a feature test for this.

`touch  src/__features__/UserCanLogin.feature.js`

This feature file should look like this:

```js
describe('User attempts to login', () => {

  beforeAll(async () => {
    jest.setTimeout(10000)
    await page.goto(appURL);

  });

  beforeEach(async () => {
    await page.reload();
  })


  it('with valid credentials', async () => {
    await page.click('#login')
    await page.type('input[id="email"]', 'johndoe@mail.com')
    await page.type('input[id="password"]', 'password')
    await page.click('button[id="submit"]')
    await expect(page).toMatch('Hi johndoe@mail.com')
  })

  it('with invalid credentials', async () => {
    await page.click('#login')
    await page.type('input[id="email"]', 'wrongjohndoe@mail.com')
    await page.type('input[id="password"]', 'wronpassword')
    await page.click('button[id="submit"]')
    await expect(page).toMatch('Invalid login credentials. Please try again.')
  })
})

```

This feature is pretty straight forward. We click a login button wich renders a login form. In the first scenario we fill in the correct credentails and in the second one we fill in the wrong ones. Depending on if it is successfull or not we will get a response wich either wolcomes the user or returns an error message.

If run the test now we get an error that states that the test cant find the selector `#login`. So lets start with adding that button to our App component.

```js
// src/App.js

...

 render() {
    return (
      <div className="App">
        <div>
          <label>Distance</label>
          <input id="distance" onChange={this.onChange.bind(this)}></input>
        </div>

        <select id="gender" onChange={this.onChange.bind(this)}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>

        <div>
          <label>Age</label>
          <input id="age" onChange={this.onChange.bind(this)}></input>
        </div>

        <button id="login">Login</button>

        <DisplayCooperResult
          distance={this.state.distance}
          gender={this.state.gender}
          age={this.state.age}
        />
      </div>
    );
  }
}
```
So that takes care of that error. Now we have a different error that is very similiar to the previous one. It cant find the input field for filling in the email.
At this point we want to create a new component for the login form. So what we want is a button that renders the login form. Then when we fill in the credentials the application should either grret the user or giva an error message.

Lets start with adding this second component
