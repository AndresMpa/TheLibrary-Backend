import Sequelize from 'sequelize';

const LOCAL_ENV = true

if (LOCAL_ENV) {
    dbName      = '';
    user        = '';
    password    = '';
    dbHost      = '';
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