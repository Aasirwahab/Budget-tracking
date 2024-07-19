const express = require('express');
const { addExpense, getExpenses } = require('../controllers/expenseController');
const authMiddleware = require('../middleware/auth');
const router = express.Router();

router.post('/add', authMiddleware, addExpense);
router.get('/', authMiddleware, getExpenses);

module.exports = router;
