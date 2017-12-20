**Serverless function to parse LadBible RSS**

How to build:
* Install serverless globally
`npm install -g serverless`
* Install all dependencies
`npm install`

How to run:
1. Run function Locally:
`sls invoke local -f getImages -p event.json [--watch]`
2. Run using Emulator:
* Login to serverless by running:
`sls login`
* Run the emulator:
`sls run`
* Be default you can access your function via:
http://localhost:4000/getImages
3. Deploy:
* Setup your AWS configs in serverless.yml
* Run command:
`sls deploy`