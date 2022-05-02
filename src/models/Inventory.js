import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { News} from './News.js'
import { History } from './History.js'

export const Inventory = sequelize.define(
    'inventory', {
        'id_inventory': {
            type: DataTypes.STRING, 
            primaryKey: true
        },
        'issn': {
            type: DataTypes.STRING
        },
        'language': {
            type: DataTypes.STRING
        },
        'state': {
            type: DataTypes.INTEGER
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
);

Inventory.hasOne(News);
News.belongsTo(Inventory);

Inventory.hasOne(History);
History.belongsTo(Inventory);