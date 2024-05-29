# Start the project

## Step 1: Setup dependencies

Project uses a package manager Npm

- Clone the repo
- Run next commands
  `npm i` - install common dependencies and packages

## Step 2: Start the project

```bash
npm start
```

## Project structure:

- ./src/index.tsx - main entry point for the application;
- ./src/modules/app.tsx - application navigator and base URL structure;
- ./src/modules/api/ - api requests for fetching data;
- ./src/modules/components/ - UI components, reusable parts;
- ./src/modules/configs/ - configs for colors, fonts, images, constants;
- ./src/modules/containers/ - pages wrapper and main layout container for each page;
- ./src/modules/stores/ - configs for redux-toolkit stores;
- ./src/modules/styles/ - reset styles for the app, styles shared across different components;
- ./src/modules/utils/ - helper functions for application, reusable functions;
- ./src/modules/types/ - types of the components

## Styles rules:

It is not allowed to use inline styles for containers, all styles must be in separate files.
For components: if styles less then height of your screen it allowed to insert them to the same file.

## Import rules:

1. React modules
2. Third-party libraries
3. Custom modules (reducers, sagas, components, helpers)
4. Constants/configs
5. Types
6. Styles

## GIT Flow:

1. Each feature must be implemented in separate branch.
2. When you create PullRequest target branch is 'dev'.
3. When you implemented a part of the feature you should create a pull request (PR) with comment "in progress" | "draft" and send a link
   on that PR to another developer.
4. When you completed implementing some feature you should change status/comment of your PR from 'in progress' | "draft" to 'completed'
   and update another developer about it.

## Naming convention:

1. Features/containers/components/store folders - PascalCase
2. General folders - camelCase
3. Files - camelCase
4. Constants - camelCase
5. Function - camelCase
6. Props - camelCase
   Tutorial: https://github.com/airbnb/javascript/tree/master/react
