# Project with Node Express Backend

Install [nodemon](https://github.com/remy/nodemon) globally

```
npm i nodemon -g
```

Install yarn globally
```
npm install -g yarn
```

Install server and client dependencies

```
yarn
cd client
yarn
```

Install concurrently
```
npm install concurrently

To start the server and client at the same time (from the root of the project)

```
yarn dev
```

Running the production build on localhost. This will create a production build, then Node will serve the app on http://localhost:5000

```
NODE_ENV=production yarn dev:server
```

## How this works

The key to use an Express backend with a project created with `react-express` is on using a **proxy**. We have a _proxy_ entry in `client/package.json`

```
"proxy": "http://localhost:5000/"
```

This tells Webpack development server to proxy our API requests to our API server, given that our Express server is running on **localhost:5000**
