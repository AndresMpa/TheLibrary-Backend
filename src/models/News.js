import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const news = sequelize.define(
    'new', {
        'issn': {
            type: DataTypes.STRING,
            primaryKey: true
        },
        'news_title': {
            type: DataTypes.STRING
        },
        'description': {
            type: Sequelize.STRING
        },
        'removed_at': {
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)