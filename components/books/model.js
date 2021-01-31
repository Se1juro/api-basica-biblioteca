const BookDao = require('./dao');
module.exports = {
    async postBook(Book) {
        return BookDao.postBook(Book);
    },
    async getBookById(id) {
        return BookDao.getBookById(id);
    },
    async getBookByName(name){
        return BookDao.getBookById(name);
    },
    async getBooks(page, limit) {
        return BookDao.getBooks(page, limit);
    },
    async updateBook(id, Book) {
        return BookDao.updateBook(id, Book);
    },
    async getPagination() {
        return BookDao.getPagination();
    },
    async deleteBook(id){
        return BookDao.deleteBook(id)
    }
}