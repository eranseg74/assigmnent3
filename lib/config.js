/*
 * Create and export configuration variables
 *
 */

// General container for all the environments
let environments = {};

// Staging (default) environment
environments.staging = {
  'httpPort' : 3000, //Usually the normal port for http is port 80
  'httpsPort' : 3001, //Usually the normal port for http is port 443
  'envName' : 'staging',
  'hashingSecret' : 'stagingSecret',
  'stripeToken' : 'tok_visa',
  'stripeSecretKey' : 'AS GIVEN FROM STRIPE',
  'currency' : 'usd',
  'mailgun' : {
    'domain' : 'DOMAIN FROM MAILGUN',
    'api_key' : 'AS GIVEN FROM MAILGUN',
    'from' : 'Mailgun Sandbox <postmaster@"YOUR DOMAIN".mailgun.org>'
  },
  'templateGlobals' : {
    'appName' : 'PizzaDelivery',
    'companyName' : 'Segal\'s Famous Pizzeria, Inc',
    'yearCreated' : '2019',
    'baseUrl' : 'http://localhost:3000/'
  }
};

environments.production = {
  'httpPort' : 4000, //Usually the normal port for http is port 80
  'httpsPort' : 4001, //Usually the normal port for http is port 443
  'envName' : 'production',
  'hashingSecret' : 'productionSecret',
  'stripeToken' : 'tok_visa',
  'stripeSecretKey' : 'AS GIVEN FROM STRIPE',
  'currency' : 'usd',
  'mailgun' : {
    'domain' : 'DOMAIN FROM MAILGUN',
    'api_key' : 'AS GIVEN FROM MAILGUN',
    'from' : 'Mailgun Sandbox <postmaster@"YOUR DOMAIN".mailgun.org>'
  },
  'templateGlobals' : {
    'appName' : 'PizzaDelivery',
    'companyName' : 'Segal\'s Famous Pizzeria, Inc',
    'yearCreated' : '2019',
    'baseUrl' : 'http://localhost:4000/'
  }
};

// Determine which environment was passed as a command-line argument
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not, default to staging
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;
