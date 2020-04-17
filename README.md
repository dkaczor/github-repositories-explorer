# GitHub Repositories Explorer

React application which integrates with github.com API and allows user to search for up to 5 users with a username similar to the value entered in text input and then on click, display repositories for selected GitHub user.

## Stack

- Frontend: [React](https://reactjs.org)
- Frontend Tools:
  - [Redux-Toolkit](https://redux-toolkit.js.org)
  - [Typescript](https://www.typescriptlang.org/)
  - [Redux-Devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
  - [Reselect](https://github.com/reduxjs/reselect)
  - [Redux-Thunk](https://github.com/reduxjs/redux-thunk)
  - [Redux-Mock-Store](https://www.npmjs.com/package/redux-mock-store)
- UI:
  - [Semantic-ui](https://react.semantic-ui.com/)
  - [Emotion](https://emotion.sh/)

## Code quality

Testing utility is [React-Testing-Library](https://github.com/testing-library/react-testing-library), not 100% coverage, just sample meaningful tests.

## Requirements:

- Node 8.10.0
- npm 5.6.0

## Launching application:

1. Get your own GitHubToken. If you do not have one, please follow [this instruction](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). __Please take into consideration that this solution is used only for this task usage. Token is private and cannot be publicied.__
2. In root folder of application you will find `.env.template`. Fill `REACT_APP_API_TOKEN` with your token. Then save file as: `.env`.
3. Run `npm install` to install required node_modules.
4. After instalation run `npm start` to run application.
