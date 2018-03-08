const md5 = require('md5');

var KEY;

function Criptografia () {
    KEY = 'XJZQ-2CSP-VS5F-OVGW-FAD2-34RP';
}

/*
#--------------------------
#  Método: criptografar:
#  Descrição: Criptografa utilizando MD5 Custom
#  Parâmetros:
#    value: variável a ser criptografada
#--------------------------
*/

Criptografia.prototype.criptografar = (value) => {

    let criptografado = md5(value + KEY);
    return criptografado;
};

/*
#--------------------------
#  Método: comparar:
#  Descrição: Verifica se a variável hash é a descriptografia exata do value
#  Parâmetros:
#    value: variável não criptografada
#    hash:  variável criptografa
#--------------------------
*/

Criptografia.prototype.comparar = (value, hash) => {

    let criptografado = md5(value + KEY);

    if (criptografado === hash) {return true;}
    else {return false;}

};

module.exports = Criptografia;