const express = require('express');
const webpush = require('web-push');
const router = express.Router();

const publicVapidKey = 'BCn_mZb-w2qKoY1Y3wY8SKuStGofPl4YmNxTzJOiWw7t8Io0cyWgqBktXh1kkQqlHS0y6NimCwN-lnHipGHtBwc';
const privateVapidKey = 'wzvF44RH6TBsoXD4TEBcAmGMmk4KQSLCPgCqBWdwfck';

router.post('/', async(req, res) => {
    const subscription = req.body;
    console.log('subscription', subscription);
    res.status(201).json({ message: 'subscription received'});

    webpush.setVapidDetails('mailto:eda.guengoer@student_htw-berlin.de', publicVapidKey, privateVapidKey);
});

module.exports = router;