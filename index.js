import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

import charactersRoute from './controllers/characters.js';
app.use('/breakingBad', charactersRoute);



const port = 3001;
app.listen(port, () => {
    console.log(`${port} is working great`);
});