const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const errorHandler = require('errorhandler')

const routes = require('./routes')

let app = express()

let bookStore = {
        catalog: [
            {
                catalogName: 'Novel',
                noOfBooks: 2,
                books: [
                    {
                        bookName: 'No Longer at Ease',
                        author: 'Chinua Achebe',
                        bookSummary: 'A book about a colission between African culture and western lifestyle'
                    },
                    {
                        bookName: 'The River Between',
                        author: 'Ngungi wa Thiongo',
                        bookSummary: 'The story of the separation of two neighbouring Kenyan villages caused by differences in faith'
                    }
                ]
            }
        ]
    }

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorHandler())

app.use((req, res, next) => {
    req.bookStore = bookStore
    next()
})

app.get('/catalogs', routes.catalogs.getCatalog)
app.get('/catalogs/:catalogId/books', routes.books.getBook)

app.listen(3000)