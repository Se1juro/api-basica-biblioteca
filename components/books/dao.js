const BookSchema = require('./schema');
module.exports = {
    async postBook(book) {
        return new Promise((resolve, reject) => {
            const newbook = new BookSchema(book);
            newbook.save((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            });
        })
    },
    async getBookById(id) {
        return new Promise((resolve, reject) => {
            BookSchema.findById(id).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getbookByName(name) {
        return new Promise((resolve, reject) => {
            BookSchema.findOne({name}).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getBooks(page, limit) {
        return new Promise((resolve, reject) => {
            BookSchema.find({}).skip((page - 1) * limit).limit(limit).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc)
            })
        })
    },
    async updateBook(id, book) {
        return new Promise((resolve, reject) => {
            BookSchema.findByIdAndUpdate(id, book, {new: true}, (err, doc) => {
                if (err) reject(reject)
                return resolve(doc);
            })
        })
    },
    async getPagination() {
        return new Promise((resolve, reject) => {
            BookSchema.countDocuments({}, (err, count) => {
                if (err) reject(err);
                return resolve(count);
            })
        })
    },
    async deleteBook(id){
        return new Promise((resolve, reject) => {
            BookSchema.findByIdAndDelete(id,{},((err, doc) => {
                if (err)reject(err)
                return resolve(doc)
            }))
        })
    }
}