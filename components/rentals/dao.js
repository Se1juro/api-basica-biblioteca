const RentalSchema = require('./schema');
module.exports = {
    async postRental(user) {
        return new Promise((resolve, reject) => {
            const newRental = new RentalSchema(user);
            newRental.save((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            });
        })
    },
    async getRentalById(id) {
        return new Promise((resolve, reject) => {
            RentalSchema.findById(id).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getRentalByBook(idBook) {
        return new Promise((resolve, reject) => {
            RentalSchema.findOne({idBook}).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getRentals(page, limit) {
        return new Promise((resolve, reject) => {
            RentalSchema.find({}).skip((page - 1) * limit).limit(limit).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc)
            })
        })
    },
    async getPagination() {
        return new Promise((resolve, reject) => {
            RentalSchema.countDocuments({}, (err, count) => {
                if (err) reject(err);
                return resolve(count);
            })
        })
    },
    async deleteRental(id){
        return new Promise((resolve, reject) => {
            RentalSchema.findByIdAndDelete(id,{},((err, doc) => {
                if (err)reject(err)
                return resolve(doc)
            }))
        })
    }
}