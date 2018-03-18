let validator = require('../helpers/validator_new.js')()

// GET
exports.post = (req, res, next) => {
  // Inicializa Validador
  validator._cleanErrors()

  // Todas as Validações aqui:
  validator.validate('estado', req.body.estado, ['required', 'string', 'alpha'])
  validator.validate('cidade', req.body.cidade, ['required', 'string'])
  validator.validate('bairro', req.body.bairro, ['required', 'string'])
  validator.validate('rua', req.body.rua, ['required', 'string'])

  res.status(201).send({
    title: 'Express',
    erro: validator._getErrors()
  })

  // .....
}
