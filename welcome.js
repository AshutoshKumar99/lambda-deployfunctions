// Lambda function to return a JSON response with a "Welcome from Test Demo API" message.
// Exporting the Lambda function's handler
module.exports.handler = async (event) => {
    
    // Returning the response object for the API call
    return {
        // HTTP status code for successful request
        statusCode: 200,
        
        // Headers to define the response type
        Headers: {
            "Content-Type": "application/json",  // Specifies the content type as JSON
        },
        
        // The body of the response, converted to a JSON string
        body: JSON.stringify({ 
            message: "Welcome from Test Demo API"  // The message sent back in the response body
        }),
    };
};
