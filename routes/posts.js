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

 module.export = router
 