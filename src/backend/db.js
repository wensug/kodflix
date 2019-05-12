const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const db = {
    host: 'localhost',
    port: '27017',
    name: 'kodflix',
    user: 'kodflix',
    pwd: 'kodflix',
};
const url = `mongodb://${db.user}:${db.pwd}@${db.host}:${db.port}/${db.name}`;

module.exports = { connect };

function connect() {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);
            console.log('connected succesfully to server');
            const dbo = client.db(db.name);
            resolve(dbo);
        });
    });
}
