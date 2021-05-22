This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the frontend React application for the car database Spring Boot backend application. The backend Spring Boot application is at: https://github.com/bvader/cardatabase and https://github.com/bvader/car-value-estimator

Follow steps below to build and run the application. Make sure your backend Spring Boot cardatabase  and car-value-estimator applications are built and running.

After it is up and running Add, Delete and Edit cars and you will see the traces in the Kibana APM Application.

The defaults are all set up to run on `localhost`. If you want to run on other servers you will need to update

`src/constants.js`

`SERVER_URL` is the host of the backend `cardatabase` service

 and `src/rum.js`

 Set custom APM Server URL (default: http://localhost:8200)

`serverUrl: 'http://localhost:8200',`

For distributed tracing to different origin (CORS) for the cardatabase backend

`distributedTracingOrigins: ['http://localhost:8080'],`

Clone the repository:

`git clone https://github.com/bvader/carfront.git`

Install dependencies:

`npm install react-table --save`

`npm install react-confirm-alert --save`

`npm install react-skylight --save`

`npm install react-csv --save`

`npm install @material-ui/core --save`

`npm install elastic-apm-js-base --save`

Start the application:

`npm start`

To run the production build, follow these steps:

`npm run build`

`npm install -g serve`

`serve -s build`

## To Deploy to Cloud foundry

`npm run build`

`cd build`

`cf push -b staticfile_buildpack cardatabase-front-end`

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
