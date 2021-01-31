const {getUserByUserName} = require("../components/users/dao");
const {body} = require("express-validator");
module.exports.validateContentDataUser = () => {
    return [
        body("username").isString().withMessage("Ingrese un usuario valido"),
        body("password").isString().withMessage("Ingrese una contraseña valida"),
    ];
};
module.exports.validateExistsUser = async (req, res, next) => {
    const user = await getUserByUserName(req.body.username)
    if (user) {
        return res.status(409).json({
            message: "Ya hay un usuario registrado con este usuario",
        });
    }
    next();
};
module.exports.validateSessionUser = async (req, res, next) => {
    if (!req.session.data) {
        return res.status(401).json({
            status: "Error",
            message: "Unauthorized",
        });
    }
    next();
};
module.exports.validateLoginUser = async (req, res, next) => {
    const user = await getUserByUserName(req.body.username)
    if (!user) {
        return res.status(409).json({
            message: 'Este usuario no esta registrado.'
        })
    }
    const matchPassword = await bcrypt.compare(req.body.password, user.password);
    if (!matchPassword) {
        return res.status(409).json({
            message: 'Las contraseñas no coinciden.'
        })
    }
    next();
}