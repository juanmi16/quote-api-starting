const express = require('express');
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');



expressionsRouter = express.Router();

expressionsRouter.get('/random',(req, res, next) => {
    var quote1 = getRandomElement(quotes);

    res.status(200).send({
        quote: quote1
    })
})

expressionsRouter.get('/:person',(req, res, next) => {
    var filter =quotes.filter(quote => quote.person=== req.params.person)

    res.status(200).send(filter);
})

expressionsRouter.get('/',(req, res, next) => {
    

    res.status(200).send(quotes);
})
 
module.exports = expressionsRouter;
