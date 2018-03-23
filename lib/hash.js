const hash = require('wordpress-hash-node');

const getHash = (text) => {
    const hashString = hash.HashPassword(text);
    console.log('This is the hash => ' + hashString);
}

module.exports = { getHash };