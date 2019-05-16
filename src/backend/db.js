const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
require('dotenv').config();

const url = process.env.NODE_ENV === 'production' ?
    process.env.DB_URL_PRD :
    process.env.DB_URL_DEV;
   const dbName = url.substring(url.lastIndexOf('/') + 1, url.lastIndexOf('?'));

   module.exports = { connect };

function connect() {
    return new Promise((resolve, reject) => {
         MongoClient.connect(url, { useNewUrlParser: true }, function (err, client) {
            assert.equal(null, err);
            console.log('connected succesfully to server');
            const dbo = client.db(dbName);
            resolve(dbo);
        });
    });
}
