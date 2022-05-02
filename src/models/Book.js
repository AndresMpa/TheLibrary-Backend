import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Inventory } from './Inventory.js'

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
        'published': {
            type: DataTypes.DATE
        }
    }, {
        freezeTableName: true
    }
)

Book.hasMany(
    Inventory, {
      foreignKey: 'bookId',
      sourceKey: 'issn'
    }
  );
  
Inventory.belongsTo(
    Book, {
        foreignKey: 'bookId',
        targetId: 'id_inventory'
    }
);