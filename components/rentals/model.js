const RentalDao = require('./dao');
module.exports = {
    async postUser(rental) {
        return RentalDao.postRental(rental);
    },
    async getRentalById(id) {
        return RentalDao.getRentalById(id);
    },
    async getRentals(page, limit) {
        return RentalDao.getRentals(page, limit);
    },
    async getPagination() {
        return RentalDao.getPagination();
    },
    async deleteRental(id){
        return RentalDao.deleteRental(id);
    },
    async getRentalByBook(id){
        return RentalDao.getRentalByBook(id)
    }
}