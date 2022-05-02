import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { History } from './History.js'

export const User = sequelize.define(
    'user', {
        cc: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        permission: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        birthday: {
            type: DataTypes.DATE
        },
        gender: {
            type: DataTypes.STRING
        },
        mail: {
            type: DataTypes.STRING
        },
        user_account: {
            type: DataTypes.STRING
        },
        password_account: {
            type: DataTypes.STRING
        },
        news_feed: {
            type: DataTypes.BOOLEAN
        },
        preferences: {
            type: DataTypes.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    }
)

User.hasMany(
    History, {
      foreignKey: 'userId',
      sourceKey: 'cc'
    }
  );
  
History.belongsTo(
    User, {
        foreignKey: 'userId',
        targetId: 'id_inventory'
    }
);