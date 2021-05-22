import { init as initApm } from 'elastic-apm-js-base'
//import { init as initApm } from '@elastic/apm-rum'

const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'car-front-end',
  // Set the version of your application
  // Used on the APM Server to find the right sourcemap
  serviceVersion: '0.90',
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',
  // For distributed tracing to different origin (CORS)
  distributedTracingOrigins: ['http://localhost:8080'],
  debug: true
})

export default apm;