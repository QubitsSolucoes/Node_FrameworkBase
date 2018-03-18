// Dependências
const rules = require('./rules.js')()

const Validator = () => {
  let errors = []

  /**
   * Método: validate:
   * Descrição: Faz uma validação em massa do campo html
   * @nomeCampo nome do campo html
   * @value conteúdo a ser validado
   * @validacoes array de validacoes a serem testadas
   */
  const validate = (nomeCampo, value, validacoes) => {
    validacoes.forEach(function (item) {
      // recebe parâmetros adicionais na validação atual
      let parametros = []
      let itemValidacao = item

      if (item.includes(':')) {
        parametros = itemValidacao.split(':')
        itemValidacao = parametros[0]
      }

      // verifica validação
      let testarValidacao = rules[itemValidacao](value, nomeCampo, parametros[1])
      if (testarValidacao) {
        // armazena erros caso existam
        errors.push(testarValidacao)
      }
    })
  }

  /**
   * Método: getErrors:
   * Descrição: Retorna um objeto com todos os erros armazenados
   */
  const getErrors = () => {
    return errors
  }

  /**
   * Método: getErrors:
   * Descrição: Verifica se existem erros armazenados e retorna um boolean
   */
  const verifyErrors = () => {
    return errors.length === 0
  }

  /**
   * Método: cleanErrors:
   * Descrição: Limpa a array de erros
   */
  const cleanErrors = () => {
    errors = []
  }

  return {
    validate: validate,
    getErrors: getErrors,
    verifyErrors: verifyErrors,
    cleanErrors: cleanErrors
  }
}

module.exports = Validator
