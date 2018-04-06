const hasher = require('wordpress-hash-node');

let hash;

const getHash = (text) => {
    hash = hasher.HashPassword(text);
    if (typeof text === 'string' && text) {
        return console.log('This is the hash => ' + hash);
    } else {
        return console.log('Please insert a string to be hashing.');
    }
}

const checkHash = (text) => {
    const checked = hasher.CheckPassword(text, hash);
    if (checked) {
        console.log('Check a hash => true');
    } else {
        console.log('Check a hash => false');
    }
}

module.exports = { getHash, checkHash };