//importo express
const express = require('express');

//chiamo la funzione express e restituisco il valore in una variabile app

const app = express();

//definisco la porta
const port= 3000;

//inserisco il mildware per  i file statici
app.use(express.static ('public'));

//definisco la rotta entry point della nostra app
app.get('/', (req, res)=> {
    rest.send('server del mio blog');
});

//dico alla mia app di restare in ascolto sulla porta 3000 definita sopra 

app.listen(port, () => {
    console.log(`server in ascolto sulla porta ${port}`);
});



//fin qua ho fatto tutti i passaggi gia predeterminati ora crro
// un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)





//bacheca che restituisce i post
 app.get ('/bacheca', (req, res) => {
    res.json(posts);
 });