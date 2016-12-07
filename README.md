# nc-lambda-service

A simple wrapper over AWS Lambda.

## Usage

This library assumes that you deployed Lambda Functions through Serverless.

```javascript
'use strict';

const NcLambda      = require('nc-lambda-service');
const lambdaService = new NcLambda();

lambdaService.configure({
    accessKeyId    : '<accessKeyId>',
    secretAccessKey: '<secretAccessKey>',
    region         : 'us-east-1',
    environment    : 'dev'
});

const userService = ncLambda.getService('service-user');

const params = {
    key: 'value'
};

userService.invoke('create', prams)
    .then(response => {
        console.log(response);
    });
```

* the Lambda function is "service-user-dev-create" and the service is a Serverless Service.
* the NCLambda is Singleton. This means you configure it once in a global config and when requiring it in other sub modules it's still configured. It uses nc-singleton.

Testing will follow.

That's it.
