const UserDao = require('./dao');
module.exports = {
    async postUser(user) {
        return UserDao.postUser(user);
    },
    async loginUser(id) {
        return UserDao.getUserById(id);
    },
    async getUserById(id) {
        return UserDao.getUserById(id);
    },
    async getUsers(page, limit) {
        return UserDao.getUsers(page, limit);
    },
    async updateUser(id, user) {
        return UserDao.updateUser(id, user);
    },
    async getPagination() {
        return UserDao.getPagination();
    },
    async deleteUser(id){
        return UserDao.deleteUser(id);
    }
}