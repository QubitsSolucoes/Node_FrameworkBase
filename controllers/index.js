const Validator = require('../helpers/validator.js');

// GET
exports.post = (req, res, next) => {

    //Limpa os Erros
    Validator._reset();

    //Todas as Validações aqui:
    Validator.validacao('estado', req.body.estado, ['required', 'string', 'exact_length:2', 'alpha']);
    Validator.validacao('cidade', req.body.cidade, ['required', 'string'] );
    Validator.validacao('bairro', req.body.bairro, ['required', 'string'] );
    Validator.validacao('rua', req.body.rua, ['required', 'string'] );

    //Caso contrário...Continua com a Lógica


    res.status(201).send({
        title: 'Express',
        erro: Validator._errors()
    });

    //.....

};