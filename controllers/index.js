//const Validator = require('../helpers/validator.js');
//const Criptografia = require('../helpers/criptografia.js');

// GET
exports.get = (req, res, next) => {

/*
    Parametro
    let variavel = '01/01/2012';
*/

/*
    Validações
    let validator = new Validator();
    validator.required(variavel, 'Nome');
    validator.valid_date(variavel, 'Nome');
*/

/*
    Criptografia
    let criptografia = new Criptografia();
    let criptografado = criptografia.criptografar(123);
    let senhaCorreta = criptografia.comparar(1234, '2aa74c978a0f7a1d1adf7f9016d3a7c3');
*/

    res.status(200).send({
        title: 'Express'
    });
};