module.exports = {
    getBook(req, res){
        if(req.query.bookId) {
            res.status(200).send(req.bookStore.catalog[req.params.catalogId].books[req.query.bookId])
        }
        res.status(200).send(req.bookStore.catalog[req.params.catalogId].books)
    }
}