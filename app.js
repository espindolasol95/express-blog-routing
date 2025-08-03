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


const posts =[
    
    {
        titolo:'Mandalorian',
        contenuto:'lorem ipsum dolor',
        immagine:'img/mando.webp',
        tags:['forza']
    },
    {
        titolo:'Mando e grogu',
        contenuto:'lorem ipsum dolor',
        immagine:'img/a.jpg',
        tags:['forza','tenerezza']
    },
    {
        titolo:'Boba fet',
        contenuto:'lorem ipsum dolor',
        immagine:'img/s-l1200.jpg',
        tags:['cacciatore, abilità']
    },
    {
        titolo:'Elmo',
        contenuto:'lorem ipsum dolor',
        immagine:'img/elmo-png.png',
        tags:['simpatico']
    },
    {
        titolo:'Messi',
        contenuto:'lorem ipsum dolor',
        immagine:'img/Leo-messi-PNG.png',
        tags:['forza, talento, umiltà']
    }
];




//bacheca che restituisce i post
 app.get ('/bacheca', (req, res) => {
    res.json(posts);
 });