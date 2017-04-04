# node-es6-template

A template to write node modules in ES6 and support publishing for ES5/ES6.

## Features

- Linting: npm run lint
- Publishing: npm publish
- Testing: npm test

## Importing

Once published this node module can imported either via require or using ES6.

```var myModule = require('myModule');```

or

```import myModule from 'myModule'```

## Testing

Mocha and Chai has been added as the testing framework.

## Publishing

In order to publish, you can run ```npm publish``` which will run ```npm run prepublish```.

This will publish the dist directory in the npm repository.