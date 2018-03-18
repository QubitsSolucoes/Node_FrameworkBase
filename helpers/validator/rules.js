const Rules = () => {
  /**
   * Método: isRequired:
   * Descrição: Verifica se variável está definida
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isRequired = (value, nomeCampo) => {
    if (!value || value.length <= 0) {
      return ({message: `O campo ${nomeCampo} é obrigatório`})
    }
  }

  /**
   * Método: isNumeric:
   * Descrição: Verifica tipo númerico
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isNumeric = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (typeof value !== 'number') {
      return ({message: `O campo ${nomeCampo} deve ser um número`})
    }
  }

  /**
   * Método: isString:
   * Descrição: Verifica tipo texto
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isString = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (typeof value !== 'string') {
      return ({message: `O campo ${nomeCampo} deve ser um texto`})
    }
  }

  /**
   * Método: isBoolean:
   * Descrição: Verifica tipo lógico
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isBoolean = (value, nomeCampo) => {
    /// pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (typeof value !== 'boolean') {
      return ({message: `O campo ${nomeCampo} deve ser lógico`})
    }
  }

  /**
   * Método: isObject:
   * Descrição: Verifica tipo objeto
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isObject = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (typeof value !== 'object') {
      return ({message: `O campo ${nomeCampo} deve ser um objeto`})
    }
  }

  /**
   * -----------------------------------------------------------------------------------
   */

  /**
   * Método: isMinLength:
   * Descrição: Valida tamanho mínimo de uma variável
   * @value conteúdo a ser validado
   * @min: número mínimo de caracteres
   * @nomeCampo nome do campo html
   */
  const isMinLength = (value, nomeCampo, min) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (value.length <= min) {
      return ({message: `O campo ${nomeCampo} deve ter no mínimo ${min} caracteres`})
    }
  }

  /**
   * Método: isMaxLength:
   * Descrição: Valida tamanho máximo de uma variável
   * @value conteúdo a ser validado
   * @max: número máximo de caracteres
   * @nomeCampo nome do campo html
   */
  const isMaxLength = (value, nomeCampo, max) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (value.length >= max) {
      return ({message: `O campo ${nomeCampo} deve ter no máximo ${max} caracteres`})
    }
  }

  /**
   * Método: isExactLength:
   * Descrição: Valida tamanho de uma variável
   * @value conteúdo a ser validado
   * @len: número de caracteres
   * @nomeCampo nome do campo html
   */
  const isExactLength = (value, nomeCampo, len) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (value.length !== len) {
      return ({message: `O campo ${nomeCampo} deve ter exatos ${len} caracteres`})
    }
  }

  /**
   * -----------------------------------------------------------------------------------
   */

  /**
   * Método: isGreaterThan:
   * Descrição: Valida valor maior que mínimo
   * @value conteúdo a ser validado
   * @min: valor mínimo
   * @nomeCampo nome do campo html
   */
  const isGreaterThan = (value, nomeCampo, min) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (Number(value) <= min) {
      return ({message: `O campo ${nomeCampo} deve ser maior que ${min}`})
    }
  }

  /**
   * Método: isLessThan:
   * Descrição: Valida valor menor que máximo
   * @value conteúdo a ser validado
   * @max: valor máximo
   * @nomeCampo nome do campo html
   */
  const isLessThan = (value, nomeCampo, max) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    if (Number(value) >= max) {
      return ({message: `O campo ${nomeCampo} deve ser menor que ${max}`})
    }
  }

  /**
   * -----------------------------------------------------------------------------------
   */

  /**
   * Método: isAlpha:
   * Descrição: Verifica se variável utiliza apenas caracteres
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isAlpha = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    value = String(value)
    let Exp = /^[A-z]+$/

    if (!value.match(Exp)) {
      return ({message: `O campo ${nomeCampo} deve conter apenas letras`})
    }
  }

  /**
   * Método: isAlphaNumeric:
   * Descrição: Verifica se variável utiliza apenas caracteres e números
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isAlphaNumeric = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    value = String(value)
    let Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i

    if (!value.match(Exp)) {
      return ({message: `O campo ${nomeCampo} deve conter números e letras`})
    }
  }

  /**
   * -----------------------------------------------------------------------------------
   */

  /**
   * Método: isEmail:
   * Descrição: Verifica se email é válido
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isEmail = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    let Exp = /^(([^<>()\][\\.,:\s@"]+(\.[^<>()\][\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!value.match(Exp)) {
      return ({message: `O campo ${nomeCampo} deve ser um email válido`})
    }
  }

  /**
   * Método: isDate:
   * Descrição: Verifica se data é válida
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isDate = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    value = String(value)
    let Exp = /^\d{1,2}\/\d{1,2}\/\d{4}$/

    if (!value.match(Exp)) {
      return ({message: `O campo ${nomeCampo} deve ser uma data válida`})
    }
  }

  /**
   * Método: isCpf:
   * Descrição: Verifica se cpf é válido
   * @value conteúdo a ser validado
   * @nomeCampo nome do campo html
   */
  const isCpf = (value, nomeCampo) => {
    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {
      return
    }

    // elimina formatação
    value = value.replace(/\.|-/g, '')

    if (value === '00000000000' || value === '11111111111' ||
      value === '22222222222' || value === '33333333333' ||
      value === '44444444444' || value === '55555555555' ||
      value === '66666666666' || value === '77777777777' ||
      value === '88888888888' || value === '99999999999') {
      return ({message: `O campo ${nomeCampo} deve ser um cpf válido`})
    }

    let r
    let s = 0

    for (let i = 1; i <= 9; i++) {
      s = s + parseInt(value[i - 1]) * (11 - i)
    }

    r = (s * 10) % 11

    if ((r === 10) || (r === 11)) {
      r = 0
    }

    if (r !== parseInt(value[9])) {
      return ({message: `O campo ${nomeCampo} deve ser um cpf válido`})
    }

    s = 0

    for (let i = 1; i <= 10; i++) {
      s = s + parseInt(value[i - 1]) * (12 - i)
    }

    r = (s * 10) % 11

    if ((r === 10) || (r === 11)) {
      r = 0
    }

    if (r !== parseInt(value[10])) {
      return ({message: `O campo ${nomeCampo} deve ser um cpf válido`})
    }
  }

  return {
    isRequired,
    isNumeric,
    isString,
    isBoolean,
    isObject,
    isMinLength,
    isMaxLength,
    isExactLength,
    isGreaterThan,
    isLessThan,
    isAlpha,
    isAlphaNumeric,
    isEmail,
    isDate,
    isCpf
  }
}

module.exports = Rules
