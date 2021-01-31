const {getbookByName} = require("../components/books/dao");
const {body} = require("express-validator");
module.exports.validateContentDataBook = () => {
    return [
        body("name").isString().withMessage("Ingrese un nombre valido"),
        body("description").isString().withMessage("Ingrese una descripción valida"),
        body("author").isString().withMessage("Ingrese un autor valido"),
    ];
};
module.exports.validateExistsBook = async (req, res, next) => {
    const book = await getbookByName(req.body.name)
    if (book) {
        return res.status(409).json({
            message: "Ya hay un libro registrado con este nombre",
        });
    }
    next();
};