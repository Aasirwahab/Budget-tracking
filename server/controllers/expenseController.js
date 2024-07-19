const Expense = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
  try {
    const { amount, currency, category, date, notes } = req.body;
    console.log('Received expense data:', req.body); // Debugging log
    if (!amount || !currency || !category || !date || !notes) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }
    const userId = req.user._id; // Extract user ID from the request
    const newExpense = new Expense({ user_id: userId, amount, currency, category, date, notes });
    await newExpense.save();
    res.status(201).json({ success: true, message: 'Expense added successfully', expense: newExpense });
  } catch (error) {
    console.error('Error adding expense:', error); // Debugging log
    res.status(500).json({ success: false, message: 'Failed to add expense', error });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({ user_id: req.user._id });
    res.status(200).json({ success: true, expenses });
  } catch (error) {
    console.error('Error fetching expenses:', error); // Debugging log
    res.status(500).json({ success: false, message: 'Failed to fetch expenses', error });
  }
};
