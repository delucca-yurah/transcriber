# Yurah Transcriber

Service dedicated to transcribe video and audio using our desired translating tool. This worker receives the data from a RabbitMQ queue alongside with it's language, and returns the transcription.

## 🧐 What's inside

`indexing.TRANSCRIBE`

Parameters

* **content**: URL to the content to be transcribed `REQUIRED`
* **language**: Language of the content `REQUIRED`

Response

* **transcription**: The transcription result

## 🤖 Installation Instructions

This service is based on Node. To run it you just need to install any version above Node 11.2. We use Docker to build and deploy our services, so you just need to keep the Docker's and CI files, this will trigger the CI automatically.

To install the package, just run:

```
npm i
```

And then, to start the server:

```
npm start
```

Or, you can start the server as development mode:

```
npm run dev
```

After that the server will be up and running, waiting for any API calls.

## 💀 Testing

We use Jest to test our file. Every test file should follow this pattern:

```
<nome>.test.js
```

To test it, just run:
```
npm test
```

## 💅 Versioning

We use [SemVer](https://semver.org/) for versioning.
