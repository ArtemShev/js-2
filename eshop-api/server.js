const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const { json } = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/deleteFromCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {

            let cart = JSON.parse(data);
            const item = req.body;

            cart = cart.filter((cartItem) => cartItem.id_product !== item.id_product);

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send('{"result": 1}')
                }

            })
        }
    })
});


app.post('/addToCart', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        if (err) {
            res.send('{"result": 0}')
        } else {
            const cart = JSON.parse(data);
            const item = req.body;

            cart.push(item);

            fs.writeFile('./database/cart.json', JSON.stringify(cart), (err) => {
                if (err) {
                    res.send('{"result": 0}')
                } else {
                    res.send('{"result": 1}')
                }

            })
        }
    })
});

app.get('/catalogData', (req, res) => {
    fs.readFile('./database/catalog.json', 'utf8', (err, data) => {
        console.log(err, data);
        res.send(data);
    })
})


app.get('/cartData', (req, res) => {
    fs.readFile('./database/cart.json', 'utf8', (err, data) => {
        res.send(data);
    })
})
app.listen(3000, () => {
    console.log('start')
})