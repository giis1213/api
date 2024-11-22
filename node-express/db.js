const mysql = require ('mysql/promise');

async function connect (){
    try {
        const host = 'localhost';
        const port = 3306;
        const user = 'root';
        const password = 't00r';
        const DATABASE = 'BANCA_MOVIL';

        const conn = await mysql.createConnection({
            'host': host,
            'port': port,
            'user': user,
            'password': password,
            'BANCA_MOVIL': DATABASE

        });
        console.log('Conexion creada')
        return conn;


    }catch (err){
        console.log('Ocurrio un error al intentar realizar la conexion'+ err);
        throw err; 

    }
}

modelu.exports = connect;