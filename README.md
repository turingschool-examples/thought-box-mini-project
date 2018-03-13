## ThoughtBox

### Install

First things first => `npm install`

To run your server => `npm start`

To run your test suite => `npm test`

This application was built with `create-react-app`

### Goals

The goal of this mini-project is to TDD a simple react application from the ground up. At the end of the day you will have a fully tested version of Ideabox.

We will be using the testing frameworks `Jest` and `Enyzme` to test each component.  


### Get Started  

Start off with the `CreateThought.test.js`. Your first task is to get the first test to pass.  

Once those tests are passing, work through following two files:  
* `thoughtList.test.js`  
* `thoughtCard.test.js`  

Once those are also passing, continue to build out the app, testing each component as you go.  Once your `App` component is completely built, finish by writing a full acceptance test that verifies that the user flow is fully functional.

**Hint**: A user story would look something like this:

- As a user, when I am on the root page, I should see a form.
- And I should be able to enter in a title
- And I should be able to enter in a body
- And I can click the Submit button
- And then I should see a new thought with the expected title and body

**Then, in a TDD way:**  

* Add a delete button to your `ThoughtCard` component  
* Add a edit button to your `ThoughtCard` component

