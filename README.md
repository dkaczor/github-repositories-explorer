# GitHub Repositories Explorer

GitHub repositories explorer uses the GitHub Rest API for browsing users according to searching in browser.

## Stack
* Frontend: [React](https://reactjs.org)
* Frontend Tools: 
  * [Redux-Toolkit](https://redux-toolkit.js.org)
  * [Typescript](https://www.typescriptlang.org/)
  * [Redux-Devtools-extension](https://www.npmjs.com/package/redux-devtools-extension)
  * [Redux-Mock-Store](https://www.npmjs.com/package/redux-mock-store)
* UI: 
  * [Semantic-ui](https://react.semantic-ui.com/)
  * [Emotion](https://emotion.sh/)

## Code quality
Testing utility is [React-Testing-Library](https://github.com/testing-library/react-testing-library), not 100% coverage, just sample meaningful tests.

## Requirements:
 * Node 8.10.0
 * npm 5.6.0

## Launching application:

1. Get your own GitHubToken. If you do not have one, please follow [this instruction](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). Please take into consideration that this solution is used only for this task usage.
2. In root folder of application you will find ```.env.template```. Fill ```REACT_APP_API_TOKEN``` with your token. Then save file as: ```.env```. Remove ```.env.template```.
3. Run ```npm install``` to install required node_modules.
4. After instalation run ```npm start``` to run application.
