## DEPLOYMENT

This app is continuously deployable to [AWS Amplify](https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d2huc37dtqpzdk) via [this gitHub repo's](https://github.com/SteeleCoale/PP_ToDo/tree/main). Simply push code changes to main and AWS notices the new code, builds the code, and then deploys the code to [this url](https://main.d2huc37dtqpzdk.amplifyapp.com/).

.env file environment variables are gitignored and add to the build in Amplify at https://us-east-1.console.aws.amazon.com/amplify/home?region=us-east-1#/d2huc37dtqpzdk/settings/variables