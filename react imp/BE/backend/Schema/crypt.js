var bycrypt =require('bycryptjs');
// const { syncIndexes } = require('../Schema/');
function encryptpwd(pwd)
{
    try{
        var salt =bycrypt.gensaltsyn(10);
        var hash=bycrypt.hashSync(pwd,salt);
        return hash
    }
    catch(error ){
        console.log(error);
    }
}

function decryptpwd(pwd,dbpwd)
{
    try{
        return bycrypt.comparesync(pwd,dbpwd)
    }
    catch(error){
        console.log(error);
    }
    }

module.exports = {encryptpwd,decryptpwd}