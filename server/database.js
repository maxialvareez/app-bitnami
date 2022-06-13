const mongoose = require('mongoose');
const URI = 'mongodb://mequi:mequi@localhost:27017/test'


mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;