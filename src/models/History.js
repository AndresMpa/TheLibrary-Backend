import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const History = sequelize.define(
    'history', {
        'issn': {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)