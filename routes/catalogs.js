module.exports = {
    getCatalog(req, res){
        if(req.query.catalogId) {
            res.status(200).send(req.bookStore.catalog[req.query.catalogId])
        }
        res.status(200).send(req.bookStore.catalog)
    },
    addCatalog(req, res){
        req.bookStore.catalog.push(req.body)
        res.status(201).send('A new '+req.body.catalogName+' catalog added')
    },
    updateCatalog(req, res){
        req.bookStore.catalog[req.params.catalogId] = req.body
        res.status(200).send('A catalog with an ID of '+req.params.catalogId+' has been updated')
    },
    deleteCatalog(req, res){
        req.bookStore.catalog.splice(req.params.catalogId, 1)
        res.status(204).send('A catalog with an ID of '+req.params.catalogId+' has been removed')
    }
}