const BookModel = require('./model');
const BookDto = require('./dto');
const limitPagination = 10;
module.exports = {
    async postBook(req, res) {
        try {
            const book = await BookModel.postBook({
                name: req.body.name,
                description: req.body.description,
                author:req.body.author
            })
            return res.status(200).json(BookDto.single(book, req.session.data));
        }catch (e) {
            console.log(e)
            return res.status(400).json({
                message:'Error al tratar de registrar el libro, valida tus datos.'
            })
        }
    },
    async getBookById(req, res) {
        try {
            const idBook = req.params.id;
            const book = await BookModel.getBookById(idBook);
            return res.status(200).json(BookDto.single(book));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos del libro'})
        }
    },
    async getBooks(req, res) {
        try {
            const page = parseInt((req.query.page || 1).toString(), 10);
            const limit = parseInt((req.query.limit || limitPagination).toString(), 10);
            const books = await BookModel.getBooks(page, limit);
            return res.status(200).json(BookDto.multiple(books, req.session.data));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos de los libros'})
        }

    },
    async updateBook(req, res) {
        try {
            const findBook = await BookModel.getBookById(req.params.id)
            const book = {
                name: req.body.name ? req.body.name:findBook.name,
                description:req.body.description ? req.body.description:findBook.description,
                author:req.body.author ? req.body.author:findBook.author,
            }
            const update = await BookModel.updateBook(req.params.id, book);
            return res.status(200).json(BookDto.single(update));
        }catch (e) {
            return res.status(500).json({message:'No se pudo actualizar el libro'})
        }

    },
    async getPagination(req, res) {
        try {
            const pagination = await BookModel.getPagination();
            return res.status(200).json({
                currentPage: 1,
                maxPage: pagination,
                limit: limitPagination
            })
        }catch (e) {
            return res.status(400).json({message:'No se ha obtenido la paginación'})
        }
    },
    async deleteBook(req,res){
        try {
            await BookModel.deleteBook(req.params.id);
            return res.status(200).json({message:"Libro eliminado"})
        }catch (e) {
            return res.status(500).json({message:'No se ha podido eliminar el libro'})
        }
    }
}