require("dotenv").config();
const mongoose = require("mongoose");
let PORT;

const URL_DB = process.env.URL_DB;
console.log('URL_BD', URL_DB);

if (process.env.NODE_ENV === 'test') {
    PORT = process.env.DB_TEST_PORT;
    console.log('Using the Test port ', PORT);
}
else {
    PORT = process.env.PORT;
}

const uri = `mongodb://${URL_DB}:${PORT}/supermarket`;
console.log('uri', uri);

const connection = mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

module.exports = connection;
