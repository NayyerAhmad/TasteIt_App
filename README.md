# TasteIT simple

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This skeleton project includes:

- Routing
  - Home
  - Recipes
  - Add new Recipes
- Axios
  - Get data from db.json and the Restcountries API
  - Post date to db.json
- JSON-server
  - to fake local Rest API

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run server`

Start JSON Server on 3001 port.
You can change port in package.json:

`json-server -p3001 --w db.json`
