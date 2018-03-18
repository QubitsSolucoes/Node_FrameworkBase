let validator = require('../helpers/validator/validator.js')()

// GET
exports.post = (req, res, next) => {
  // Inicializa Validador
  validator.cleanErrors()

  // Todas as Validações aqui:
  validator.validate('Estado', 'teste', ['isRequired', 'isString', 'isNumeric'])
  validator.validate('Cidade', 'teste', ['isRequired', 'isString', 'isMinLength:10'])
  validator.validate('Bairro', 'teste', ['isRequired', 'isString'])
  validator.validate('Rua', 'teste', ['isRequired', 'isString'])

  res.status(201).send({
    title: 'Express',
    erro: validator.getErrors()
  })

  // .....
}
