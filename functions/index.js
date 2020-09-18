const functions = require('firebase-functions');

const express = require('express');

const cors = require('cors');

const stripe = require('stripe')(
    'sk_test_51HSMlgI58MB4wPI9txGgGYR5V9UfQUcClMBuQrC1sNy0gPhEI7nkZuvhhzU66jwfXR4E5VIwfCoAildRSdycPOjA005GUwCSRw'
);

// - API

// - App config
const app = express();

// - MiddleWare's
app.use(cors({ origin: true }));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log(
        'Payment requests recieved BOOM!!! for this amount >>> ',
        total
    );

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'inr',
    });

    // OK - created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
// - Listener

exports.api = functions.https.onRequest(app);

// Example end point
// http://localhost:5001/clone-87109/us-central1/api
