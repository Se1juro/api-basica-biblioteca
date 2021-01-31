const UserSchema = require('./schema');
module.exports = {
    async postUser(user) {
        return new Promise((resolve, reject) => {
            const newUser = new UserSchema(user);
            newUser.save((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            });
        })
    },
    async getUserById(id) {
        return new Promise((resolve, reject) => {
            UserSchema.findById(id).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getUserByUserName(username) {
        return new Promise((resolve, reject) => {
            UserSchema.findOne({username}).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc);
            })
        })
    },
    async getUsers(page, limit) {
        return new Promise((resolve, reject) => {
            UserSchema.find({}).skip((page - 1) * limit).limit(limit).exec((err, doc) => {
                if (err) reject(err);
                return resolve(doc)
            })
        })
    },
    async updateUser(id, user) {
        return new Promise((resolve, reject) => {
            UserSchema.findByIdAndUpdate(id, user, {new: true}, (err, doc) => {
                if (err) reject(reject)
                return resolve(doc);
            })
        })
    },
    async getPagination() {
        return new Promise((resolve, reject) => {
            UserSchema.countDocuments({}, (err, count) => {
                if (err) reject(err);
                return resolve(count);
            })
        })
    },
    async deleteUser(idUser){
        return new Promise((resolve, reject) => {
            UserSchema.findByIdAndDelete(idUser,{},((err, doc) => {
                if (err)reject(err)
                return resolve(doc)
            }))
        })
    }
}