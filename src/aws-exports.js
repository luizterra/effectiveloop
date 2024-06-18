// src/aws-exports.js
const awsmobile = {
    "aws_project_region": "us-east-1",
    "aws_content_delivery_bucket": "effectiveloopapp-20240526171103-hostingbucket-dev",
    "aws_content_delivery_bucket_region": "us-east-1",
    "aws_content_delivery_url": "https://d2vdjpemqewaag.cloudfront.net"
};

const awsconfig = {
    Auth: {
        region: 'us-east-1', // Update with your actual region
        userPoolId: 'us-east-1_jIwriFhzI',
        userPoolWebClientId: '36m9cugohkav94hrn2hq8c3lqv',
        oauth: {
            domain: 'effectiveloopuserpool.auth.us-east-1.amazoncognito.com',
            scope: ['email', 'openid'],
            redirectSignIn: 'http://localhost:3000/',
            redirectSignOut: 'http://localhost:3000/signed-out',
            responseType: 'code' // or 'token'
        }
    }
};

// Merge the two configurations into one
const mergedConfig = {
    ...awsmobile,
    ...awsconfig,
};

export default mergedConfig;
