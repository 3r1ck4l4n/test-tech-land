const bcrypt = require('bcrypt');

const hashPass={
    hash: (password)=>{
        return bcrypt.hashSync(password, 10);
    },
    compare: (password, hash)=>{
        return bcrypt.compareSync(password, hash);
    }
}

module.exports = hashPass;