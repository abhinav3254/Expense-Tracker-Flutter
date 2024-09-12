const express = require('express');
const router = express.Router();
const expenseModel = require('../model/expense_model');

router.get('', async (req, res) => {
    try {
        const userId = req.user.id;
        if (userId) {
            const expenses = await expenseModel.find({ user: userId });
            return res.json({ data: expenses });
        } else {
            return res.status({ message: 'Unauthenticated User' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.post('/save', async (req, res) => {
    try {
        const { title, amount, category, date } = req.body;
        if (!title || !amount || !category) {
            return res.status(400).json({ message: 'Title,amount and categories are required' });
        }

        const userId = req.user.id;

        if (userId) {
            const newExpense = new expenseModel({ user: userId, title: title, amount: amount, category: category, date: date });

            await newExpense.save();

            return res.status(201).json({ message: 'Record Created' });
        } else {
            return res.status(401).json({ message: 'Unauthenticated user' });
        }

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


router.put('/update/:expenseId', async (req, res) => {
    try {

        const expenseId = req.params.expenseId;

        const existingExpense = expenseModel.findById(expenseId);

        if (!existingExpense) {
            return res.status(404).json({ message: 'Expense not found' });
        }

        const expense = req.body;

        // if (!expense.title || !expense.amount || !expense.category) {
        //     return res.status(400).json({ message: 'Please provide all the required fields' });
        // }

        const filter = { _id: expenseId };

        await expenseModel.findOneAndUpdate(filter, expense);

        return res.status(200).json({ message: 'Expense updated successfully' });

    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
});


router.delete('/delete/:expenseId', async (req, res) => {
    try {
        const expenseId = req.params.expenseId;
        const filter = { _id: expenseId };
        await expenseModel.findOneAndDelete(filter);
        return res.status(200).json({ message: 'Expense deleted' });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});


module.exports = router;