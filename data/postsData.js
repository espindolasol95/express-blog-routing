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

//creazione delle rotte (CRUD)

const express = require('express')
const router = express.Router()

// index
 router.get('/', (req, res) => {
    resizeTo.send('lista dei post')

 })

// show
router.get ('/:id', (req, re) => {
    res.send(`Dettagli del post ${id}`)
})

//create 
 router.post('/',(req,res) => {
    res.send('creazione di un nuovo post')
 })

//update
router.put('/:id', (req,res) => {
    res.send(`Aggiornamento del post ${id}`)


})

//delete
 router.delete('/:id',(req,res) => {
    res.send(`Cancellazione del post ${id}`)
 })