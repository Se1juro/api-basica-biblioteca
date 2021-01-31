const UserModel = require('./model');
const UserDto = require('./dto');
const {createSessionUser} = require('../../services/sessions');
const limitPagination = 10;
const bcrypt = require("bcryptjs");
const BCRYPT_SALT_ROUNDS = 12;
module.exports = {
    async postUser(req, res) {
        try {
            const user = await UserModel.postUser({
                username: req.body.username,
                password: await bcrypt.hash(
                    req.body.password,
                    BCRYPT_SALT_ROUNDS
                )
            })
            const returnUser = UserDto.single(user, req.session.data);
            createSessionUser(req, res, returnUser);
            return res.status(200).json(returnUser);
        }catch (e) {
            return res.status(400).json({
                message:'Error al tratar de registrar el usuario, valida tus datos.'
            })
        }
    },
    async loginUser(req, res) {
        try {
            const identification = req.body.identification;
            const user = await UserModel.loginUser(identification);
            const returnUser = UserDto.single(user);
            createSessionUser(req, res, returnUser);
            return res.status(200).json(returnUser);
        }catch (e) {
            return res.status(400).json({
                message:'No se ha podido iniciar sesión, verifica tus credenciales'
            })
        }

    },
    async authMe(req, res) {
        return res.status(200).json(req.session.data);
    },
    async getUserById(req, res) {
        try {
            const idUser = req.params.id;
            const user = await UserModel.getUserById(idUser);
            return res.status(200).json(UserDto.single(user));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos del usuario'})
        }
    },
    async getUsers(req, res) {
        try {
            const page = parseInt((req.query.page || 1).toString(), 10);
            const limit = parseInt((req.query.limit || limitPagination).toString(), 10);
            const users = await UserModel.getUsers(page, limit);
            return res.status(200).json(UserDto.multiple(users, req.session.data));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos de los usaurios'})
        }

    },
    async updateUser(req, res) {
        try {
            const user = {
                username: req.body.username,
            }
            const update = await UserModel.updateUser(req.params.id, user);
            return res.status(200).json(UserDto.single(update));
        }catch (e) {
            return res.status(500).json({message:'No se pudo actualizar el usuario'})
        }

    },
    async getPagination(req, res) {
        try {
            const pagination = await UserModel.getPagination();
            return res.status(200).json({
                currentPage: 1,
                maxPage: pagination,
                limit: limitPagination
            })
        }catch (e) {
            return res.status(400).json({message:'No se ha obtenido la paginación'})
        }
    },
    async deleteUser(req,res){
        try {
            await UserModel.deleteUser(req.params.id);
            return res.status(200).json({message:'Usuario Eliminado'})
        }catch (e) {
            return res.status(400).json({message:'No se ha podido eliminar el usuario.'})
        }
    }
}