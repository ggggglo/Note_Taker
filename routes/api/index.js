// Packages required
const router = require('express').Router();
const notesRoute = require('./notesRoute')

// Create path to use the routes in notesRoute.js
router.use(notesRoute);

// Export the route
module.exports = router;