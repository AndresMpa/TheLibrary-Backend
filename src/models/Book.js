import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Book = sequelize.define(
    'book', {
        'issn': {
            type: DataTypes.STRING, 
            primaryKey: true
        },
        'title': {
            type: DataTypes.STRING
        },
        'author': {
            type: DataTypes.STRING
        },
        'year': {
            type: DataTypes.INTEGER
        },
        'genre': {
            type: DataTypes.STRING
        },
        'number_pages': {
            type: DataTypes.INTEGER
        },
        'editorial': {
            type: DataTypes.STRING
        },
        'language': {
            type: DataTypes.STRING
        },
        'published': {
            type: DataTypes.DATE
        },
        'state': {
            type: DataTypes.STRING
        },
        'price': {
            type: DataTypes.FLOAT
        },
        'reserved': {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true
    }
)