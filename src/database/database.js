import Sequelize from 'sequelize';

const LOCAL_ENV = true

let dbName      = '';
let user        = '';
let password    = '';
let dbHost      = '';

if (LOCAL_ENV) {
    dbName      = 'db_library';
    user        = 'root';
    password    = '';
    dbHost      = 'localhost';
} else {
    dbName      = '';
    user        = '';
    password    = '';
    dbHost      = '';
}

export const sequelize = new Sequelize(
    dbName,
    user,
    password,
    {
        host: dbHost,
        dialect: 'mysql'
    }
)