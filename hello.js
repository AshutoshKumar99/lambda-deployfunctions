// Lambda function to return a JSON response with a "Hello from Test Demo API" message.
// Exporting the Lambda function's handler
module.exports.handler = async (event) => {

    // Returning the response object for the API call
    return {
        // HTTP status code for a successful request
        statusCode: 200,
        
        // Headers to define the response format
        Headers: {
            "Content-Type": "application/json",  // Specifies that the response is in JSON format
        },
        
        // The body of the response, converted to a JSON string
        body: JSON.stringify({
            message: "Hello from Test Demo API"  // The message sent back in the response body
        }),
    };
};
