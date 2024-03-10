// Example 'HELLO WORLD' Express app... 
const express = require('express');
const app = express();
const port = 3000;

// middlewares in express.js
const middleWares = (req, res, next)=>{
    console.log('Logged');
    next();
}

app.use(middleWares)

// basic routes in express.js
app.get('/', (req, res)=>{
    res.send("Hello World, This is an example express app!");
});

app.get('/about', (req, res)=>{
    res.send('This is the about page');
})

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})