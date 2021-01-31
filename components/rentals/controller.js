const RentalModel = require('./model');
const RentalDto = require('./dto');
const limitPagination = 10;
module.exports = {
    async postRental(req, res) {
        try {
            const rental = await RentalModel.postUser({
                idBook: req.body.idBook,
                idUser:req.body.idUser
            })
            return res.status(200).json( RentalDto.single(rental, req.session.data));
        }catch (e) {
            return res.status(400).json({
                message:'Error al tratar de registrar el prestamo, valida tus datos.'
            })
        }
    },
    async getRentalById(req, res) {
        try {
            const id = req.params.id;
            const rental = await RentalModel.getRentalById(id);
            return res.status(200).json(RentalDto.single(rental));
        }catch (e) {
            console.log(e)
            return res.status(500).json({message:'No se pudieron obtener los datos del prestamo'})
        }
    },
    async getRentalByBook(req, res) {
        try {
            const idBook = req.params.id;
            const rental = await RentalModel.getRentalByBook(idBook);
            return res.status(200).json(RentalDto.single(rental));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos del prestamo'})
        }
    },
    async getRentals(req, res) {
        try {
            const page = parseInt((req.query.page || 1).toString(), 10);
            const limit = parseInt((req.query.limit || limitPagination).toString(), 10);
            const rentals = await RentalModel.getRentals(page, limit);
            return res.status(200).json(RentalDto.multiple(rentals, req.session.data));
        }catch (e) {
            return res.status(500).json({message:'No se pudieron obtener los datos de los prestamos'})
        }

    },
    async getPagination(req, res) {
        try {
            const pagination = await RentalModel.getPagination();
            return res.status(200).json({
                currentPage: 1,
                maxPage: pagination,
                limit: limitPagination
            })
        }catch (e) {
            return res.status(400).json({message:'No se ha obtenido la paginación'})
        }
    },
    async deleteRental(req,res){
        try {
            await RentalModel.deleteRental(req.params.id);
            return res.status(200).json({message:'Prestamo Eliminado'})
        }catch (e) {
            return res.status(400).json({message:'No se ha podido eliminar el prestamo.'})
        }
    }
}