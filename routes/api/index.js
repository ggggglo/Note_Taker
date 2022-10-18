// Packages required
const router = require('express').Router();
const notesRoutes = require('./noteRoutes')

// Create a route
router.use(notesRoutes);

// Export the route
module.exports = router;