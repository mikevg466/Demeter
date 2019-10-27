# Demeter

An app to help come up with names.  Names will compete against each other resulting in a ranked set of names.

To learn more about the process and how to contribute, see the [Contribution Guide](https://github.com/mikevg466/demeter/blob/master/CONTRIBUTING.md)

## Table of Contents
1. [Available Scripts](#available-scripts)
  1. [yarn start](#yarn-start)
  2. [yarn test](#yarn-test)
  3. [yarn build](#yarn-build)
  4. [yarn run eject](#yarn-run-eject)
2. [Learn More](#learn-more)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Folder Structure
The two main folder structures within the project are /src and /server.

### src
The src folder contains the front-end source code.  It has the below structure
```
src/
  __mocks__/
  __tests__/
  actions/
  assets/
  components/
  containers/
  reducers/
  store/
  utils/
```

#### __mocks__
Contains mock data or implementations to be used within tests

#### __tests__
Contains the unit tests for the application.  All files should end with the extension .test.js.  The __tests__ folder structure follows the same format as the src folder which can look something like:
```
__tests__/
  components/
    ExampleComponent.test.js
  containers/
    ExampleContainer.test.js
```

#### actions
Contains the action types, action creators, and thunk functions for processing actions.

#### assets
Contains the static assets used within the project such as images

#### components
Each component builds it's own folder structure:
```
components/
  ExampleComponent/
    index.js
    ExampleComponent.jsx
```

Contains presentational React components.  These components should not have local state and are not directly connected to the redux store.  The state and functional logic can be found in an associated container which allows us to decouple our logic from our views.
```
// ExampleComponent.jsx
import React, { PureComponent } from 'react';

class ExampleComponent extends PureComponent{
  render(){
    return (
      <p>Example</p>
    );
  }
}

export default ExampleComponent;
```

#### containers
Each container builds it's own folder structure:
```
containers/
  ExampleContainer/
    index.js
    ExampleContainer.jsx
```

Contains stateful React components.  These components house the functional logic that is tied to a presentation component.  This can include local state and connecting to the redux store.
```
// ExampleContainer.jsx
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ExampleComponent } from '../../components/ExampleComponent';

export class ExampleContainer extends Component{
  constructor(props){
    super(props);

    this.state = {
      example: 'exampleState',
    };
  }

  render(){
    return (
      <ExampleComponent
        example={this.state.example}
        connectedExample={this.props.connectedProp}
        callback={this.props.dispatcherProp}
      />
    );
  }
}

export mapStateToProps = ....
export mapDispatchToProps = ....

export default connect(mapStateToProps, mapDispatchToProps)(ExampleContainer);
```

#### reducers
Redux reducer logic that processes actions to change the store state.  The index file returns the combined reducers.

#### store
Holds folders for enhancers and middleware to use within the redux store.  A different file for configuring a development store and a production store are also within this folder.  The index.js will configure the correct store based on the environment it is being built for.

#### utils
Holds the common utility functions and constants to be used across the entire app.

## Tests
The front-end tests are processed using Jest.

## Code Styles
The files are pre-processed using prettier during a commit to ensure a consistent coding style.  I also use eslint with the google linter as a base.  Special rules can be found within the .eslintrc file.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment
