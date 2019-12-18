import express from 'express';

const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.send('Hola soy el servidor');
});



app.listen(4000, () => {
    console.log('Serve On: http://localhost:4000');
})