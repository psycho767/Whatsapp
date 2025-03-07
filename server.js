const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = require('./src/app');
const { baseWebhookURL } = require('./src/config');
require('dotenv').config();

const port = process.env.PORT || 3000;

// Ensure BASE_WEBHOOK_URL is set
if (!baseWebhookURL) {
  console.error('BASE_WEBHOOK_URL environment variable is missing. Exiting...');
  process.exit(1);
}

// Serve Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Swagger UI available at http://localhost:${port}/`);
});
