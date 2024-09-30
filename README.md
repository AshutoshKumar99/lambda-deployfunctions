# Test API - Serverless Application

This is a simple Serverless application that deploys two AWS Lambda functions (`testHelloFunction` and `testWelcomeFunction`) using the Serverless Framework. The functions are triggered via HTTP API events.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine. You can download it from [here](https://nodejs.org/).
- **Serverless Framework**: Install the Serverless Framework globally by running the following command:

  ```bash
  npm install -g serverless
  
AWS CLI: You need AWS CLI configured with credentials to deploy the functions. 

**Service Overview**:
Service Name: test-api
Framework Version: 3
Provider: AWS
Runtime: Node.js 18.x
Region: ap-south-1 (Asia Pacific - Mumbai)

**Functions**
1. testHelloFunction
Handler: hello.handler
Trigger: HTTP GET request to the /hello path
Response: Returns a message "Hello from Test Demo API"
2. testWelcomeFunction
Handler: welcome.handler
Trigger: HTTP GET request to the /welcome path
Response: Returns a message "Welcome from Test Demo API"

**Deployment**
To deploy the functions to AWS, run the following command in the directory containing the serverless.yml file, run:
bash:
serverless deploy
This command will package and deploy the Lambda functions along with the necessary API Gateway configuration.

**Removing the Deployment**
If you need to remove the deployed resources, run:
bash:
serverless remove
This will undeploy the Lambda functions and associated resources from AWS.

**Usage**
Once deployed, you can access the API endpoints by sending GET requests to:

/hello: Returns a "Hello from Test Demo API" message.
/welcome: Returns a "Welcome from Test Demo API" message.
You can use tools like Postman or curl to test the API.
