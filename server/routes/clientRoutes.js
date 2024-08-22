const express = require('express');
const mongoose = require('mongoose');  // Import mongoose
const router = express.Router();
const Client = require('../models/Client');  // Adjust the path if necessary

router.get('/clients/:wealthManagerId', async (req, res) => {
    try {
        const wealthManagerId = req.params.wealthManagerId.trim();
        console.log('Original Wealth Manager ID:', wealthManagerId);
        
        const objectId = new mongoose.Types.ObjectId(wealthManagerId);
        console.log('Converted ObjectId:', objectId);

        const clients = await Client.find({ wealth_manager_id: objectId });
        console.log('Found Clients:', clients);

        if (clients.length === 0) {
            return res.status(404).json({ msg: "No clients found for this wealth manager ID" });
        }

        res.json(clients);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});



module.exports = router;
