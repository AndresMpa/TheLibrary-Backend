import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const News = sequelize.define(
    'news', {
        id_inventory: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        news_title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        removed_at: {
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)