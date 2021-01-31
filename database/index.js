const mongoose = require("mongoose");
//En estos casos suelo usar dotenv, pero para agilizar el desarrollo, no lo hare
const DB_URI = 'mongodb://superAdmin:#kagenciasas#@162.214.162.222:27017:27017/biblioteca?authSource=admin'
mongoose
    .connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then(() => console.log("DataBase Connect Succesfull"))
    .catch((err) => console.log(err + " Error en la conexion a la BD"));

module.exports = mongoose;
