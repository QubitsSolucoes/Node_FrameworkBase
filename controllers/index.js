const Validator = require('../helpers/validator.js');

// GET
exports.get = (req, res, next) => {

    //Limpa os Erros
    Validator._reset();

    //Todas as Validações aqui:
    Validator.validacao('estado', 'SP', ['required', 'string', 'exact_length:2', 'alpha']);
    Validator.validacao('cidade', 'Guarujá', ['required', 'string'] );
    //Validator.validacao('bairro', 'Encruzilhada', ['required', 'string'] );
    //Validator.validacao('rua', 'Dr. Guedes Coelho', ['required', 'string'] );

    //Caso contrário...Continua com a Lógica


    res.status(200).send({
        title: 'Express',
        erro: Validator._errors()
    });

    //.....

};