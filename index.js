/*jshint esversion: 6 */

import express from 'express';
import path from 'path';

const PORT = 5555,
app = express();

app
    .use(express.static(path.join(__dirname, 'public')))
    .use((req, res, next) => next())
    .get('/', (req, res) => {
        res
            .send('<h1>Welcome to Express!</h1>');
    })
    .get('/name', (req, res) => {
        res
            .send('<h1>Ann Volkova</h1>');
    })
    .get('/api', (req, res) => {
        res
            .set({'Access-Control-Allow-Origin': '*', 'elias': 'goss'})
            .json({'gossApi': 'started ok!'});
    })
    .get('/math/add/:num1/:num2', (req, res) => {
        let number1 = parseFloat(req.params.num1);
        let number2 = parseFloat(req.params.num2);
        let add = number1 + number2;
        res
            .json({'Сумма': add});
    })
    .get('/math/subtract/:num1/:num2', (req, res) => {
        let number1 = parseFloat(req.params.num1);
        let number2 = parseFloat(req.params.num2);
        let subtract = number1 - number2;
        res
            .json({'Разность': subtract});
    })
    .get('/math/multiply/:num1/:num2', (req, res) => {
        let number1 = parseFloat(req.params.num1);
        let number2 = parseFloat(req.params.num2);
        let multiply = number1 * number2;
        res
            .json({'Произведение': multiply});
    })
    .get('/math/divide/:num1/:num2', (req, res) => {
        let number1 = parseFloat(req.params.num1);
        let number2 = parseFloat(req.params.num2);
        let divide = (number1 / number2);
        res
            .json({'Частное': divide});
    })
    .get('/client', (req, res) => {
        res
            .sendFile(__dirname + '/public/client.html');
    })

    .set('port', process.env.port || PORT)
    .listen(app.get('port'), () => console.log(`--> Port ${ app.get('port') } listening!!!`));



