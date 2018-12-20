const {check, validationResult} = require('express-validator/check')

module.exports = {
    getBook(req, res){
        if(req.query.bookId) {
            res.status(200).send(req.bookStore.catalog[req.params.catalogId].books[req.query.bookId])
        }
        res.status(200).send(req.bookStore.catalog[req.params.catalogId].books)
    },
    addBook(req, res){
        let err = validationResult(req)
        if(!err.isEmpty()){
            return res.status(422).json({ errors: err.array() })
        }

        req.bookStore.catalog[req.params.catalogId].books.push(req.body)
        req.bookStore.catalog[req.params.catalogId].noOfBooks++
        res.status(201).send('A new book with a title "'+req.body.bookName+'" has been added to catalog '+req.bookStore.catalog[req.params.catalogId].catalogName)
    },
    updateBook(req, res){
        let err = validationResult(req)
        if(!err.isEmpty()){
            return res.status(422).json({ errors: err.array() })
        }

        req.bookStore.catalog[req.params.catalogId].books[req.params.bookId] = req.body
        res.status(200).send('A book with an ID of '+req.params.bookId+' has been updated')
    },
    deleteBook(req, res){
        req.bookStore.catalog[req.params.catalogId].books.splice(req.params.bookId, 1)
        req.bookStore.catalog[req.params.catalogId].noOfBooks--
        res.status(204).send('A book with an ID of '+req.params.bookId+' has been removed')
    }
}