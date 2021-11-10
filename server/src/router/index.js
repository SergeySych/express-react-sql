const Router = require('express').Router
const UserController = require('../controllers/userController')

const router = Router()

router.get('/api/users/:page?', UserController.getUsersList)
router.get('/api/stats/:id', UserController.getStatsById)

module.exports = router