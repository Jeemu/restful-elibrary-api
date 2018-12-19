module.exports = {
    getCatalog(req, res){
        if(req.query.catalogId) {
            res.status(200).send(req.bookStore.catalog[req.query.catalogId])
        }
        res.status(200).send(req.bookStore.catalog)
    }
}