import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const History = sequelize.define(
    'history', {
        id_inventory: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        cc: {
            type: DataTypes.STRING
        },
        purshased: {
            type: DataTypes.BOOLEAN
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)