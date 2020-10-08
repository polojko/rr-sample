![](https://highspot.vercel.app/logo.png)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`
or
### `npm test .` (all tests)
or
### `npm test <Component name>` test for single component

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run-script build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Instructions
* There's an arbitrary 2 secs (2000ms) delay on fetch calls, so the Loader component is clearly visible. Should be removed for production.
* Search is performed by entering search term (min 4 chars in length) and pressing "Enter".
* Clicking "X" button while searching, will clear search box and re-fetch cards from the beginning.
* Project is fully responsive, accommodating all form-factors.

## Demo
This site is currently deployed at https://highspot.vercel.app/.

## Used Libraries

This site utilizes [React/REdux](https://react-redux.js.org/). In order to see it in browser, please install [Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension).

Other libraries used:
* [Lodash](https://lodash.com/)
* [Material UI Core](https://material-ui.com/getting-started/installation/)
* [Material UI Icons](https://material-ui.com/components/material-icons/)
* [React Test Renderer](https://reactjs.org/docs/test-renderer.html)
* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)

Third party components utilized in this project:
* [React Infinite Scroll Component](https://www.npmjs.com/package/react-infinite-scroll-component)
* [Material Search Bar](https://www.npmjs.com/package/material-ui-search-bar)


## Optimization
This project is not complete and could be further optimized by:
* Adding data [caching](https://swr.vercel.app/), [memoization](https://dev.to/dinhhuyams/introduction-to-react-memo-usememo-and-usecallback-5ei3), to reduce number of fetch calls, improve performance.
* Using [styled-components](https://styled-components.com/), to encapsulate/isolate components' styling.
* Extrapolate Redux actions into a separate folder/file (e.g. ./actions/index.js), so they can be tested in isolation.
* Improving test coverage.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).