const {getBookById} = require("../components/books/dao");
const {getRentalByBook} = require("../components/rentals/dao")
const {body} = require("express-validator");
module.exports.validateContentDataRental = () => {
    return [
        body("idBook").isString().withMessage("Ingrese un nombre valido"),
        body("idUser").isString().withMessage("Ingrese una descripción valida"),
    ];
};
module.exports.validateBookRentado = async(req,res,next)=>{
    const book = await getRentalByBook(req.body.idBook)
    if (book) {
        return res.status(409).json({
            message: "El libro ya se encuentra rentado.",
        });
    }
    next();
}
module.exports.validateExistsBook = async (req, res, next) => {
    const book = await getBookById(req.body.idBook)
    if (!book) {
        return res.status(409).json({
            message: "El libro no se encuentra en nuestra biblioteca",
        });
    }
    next();
};