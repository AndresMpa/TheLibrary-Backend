import { sequelize } from './database/database.js';
import { Book } from './models/Book.js'
import { History } from './models/History.js'
import { Inventory } from './models/Inventory.js'
import { News } from './models/News.js'
import { User } from './models/User.js'
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

async function syncDb() {
    await sequelize.sync({force: false});
}

if (process.env.NODE_ENV !== 'test') {
    syncDb();
    app.listen(app.get('port'), () => {
        console.log('Server on port ' + app.get('port') + ' on dev');
    });
}

export default app;