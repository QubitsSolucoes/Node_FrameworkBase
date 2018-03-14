const Validator = () => {

    let errors = [];

    /**
     * -----------------------------------------------------------------------------------
     */

    const validate = (nomeCampo, value, validacoes) => {

        validacoes.forEach(function (item) {

            let arg;
            let validacao = item;

            if (validacao.includes(":")) {
                arg = validacao.split(':');
                validacao = arg[0];
            }

            switch (validacao) {
                case 'required':
                    required(value, nomeCampo); break;
                case 'numeric':
                    numeric(value, nomeCampo); break;
                case 'string':
                    string(value, nomeCampo); break;
                case 'boolean':
                    boolean(value, nomeCampo); break;
                case 'object':
                    object(value, nomeCampo); break;

                case 'min_length':
                    min_length(value, arg[1], nomeCampo); break;
                case 'max_length':
                    max_length(value, arg[1], nomeCampo); break;
                case 'exact_length':
                    exact_length(value, arg[1], nomeCampo); break;

                case 'greater_than':
                    greater_than(value, arg[1], nomeCampo); break;
                case 'less_than':
                    less_than(value, arg[1], nomeCampo); break;

                case 'alpha':
                    alpha(value, nomeCampo); break;
                case 'alpha_numeric':
                    alpha_numeric(value, nomeCampo); break;

                case 'valid_email':
                    valid_email(value, nomeCampo); break;
                case 'valid_date':
                    valid_date(value, nomeCampo); break;
                case 'valid_cpf':
                    valid_cpf(value, nomeCampo); break;
            }
        });
    };

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
     * Método: required:
     * Descrição: Verifica se variável está definida
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const required = (value, nomeCampo) => {

        if (!value || value.length <= 0) {
            errors.push({message: `O campo ${nomeCampo} é obrigatório`});
        }
    };

    /**
     * Método: numeric:
     * Descrição: Verifica tipo númerico
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const numeric = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (typeof value !== "number") {
            errors.push({message: `O campo ${nomeCampo} deve ser um número`});
        }
    };

    /**
     * Método: string:
     * Descrição: Verifica tipo texto
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const string = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (typeof value !== "string") {
            errors.push({message: `O campo ${nomeCampo} deve ser um texto`});
        }
    };

    /**
     * Método: boolean:
     * Descrição: Verifica tipo lógico
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const boolean = (value, nomeCampo) => {

        /// pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (typeof value !== "boolean") {
            errors.push({message: `O campo ${nomeCampo} deve ser lógico`});
        }
    };

    /**
     * Método: object:
     * Descrição: Verifica tipo objeto
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const object = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (typeof value !== "object") {
            errors.push({message: `O campo ${nomeCampo} deve ser um objeto`});
        }
    };

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
     * Método: min_length:
     * Descrição: Valida tamanho mínimo de uma variável
     * @value conteúdo a ser validado
     * @min: número mínimo de caracteres
     * @nomeCampo nome do campo html
     */
    const min_length = (value, min, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (value.length <= min) {
            errors.push({message: `O campo ${nomeCampo} deve ter no mínimo ${min} caracteres`});
        }
    };

    /**
     * Método: max_length:
     * Descrição: Valida tamanho máximo de uma variável
     * @value conteúdo a ser validado
     * @max: número máximo de caracteres
     * @nomeCampo nome do campo html
     */
    const max_length = (value, max, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (value.length >= max) {
            errors.push({message: `O campo ${nomeCampo} deve ter no máximo ${max} caracteres`});
        }
    };

    /**
     * Método: exact_length:
     * Descrição: Valida tamanho de uma variável
     * @value conteúdo a ser validado
     * @len: número de caracteres
     * @nomeCampo nome do campo html
     */
    const exact_length = (value, len, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (value.length !== len) {
            errors.push({message: `O campo ${nomeCampo} deve ter exatos ${len} caracteres`});
        }
    };

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
     * Método: greater_than:
     * Descrição: Valida valor maior que mínimo
     * @value conteúdo a ser validado
     * @min: valor mínimo
     * @nomeCampo nome do campo html
     */
    const greater_than = (value, min, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (Number(value) <= min) {
            errors.push({message: `O campo ${nomeCampo} deve ser maior que ${min}`});
        }
    };

    /**
     * Método: less_than:
     * Descrição: Valida valor menor que máximo
     * @value conteúdo a ser validado
     * @max: valor máximo
     * @nomeCampo nome do campo html
     */
    const less_than = (value, max, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        if (Number(value) >= max) {
            errors.push({message: `O campo ${nomeCampo} deve ser menor que ${max}`});
        }
    };

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
     * Método: alpha:
     * Descrição: Verifica se variável utiliza apenas caracteres
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const alpha = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        value = String(value);
        let Exp = /^[A-z]+$/;

        if (!value.match(Exp)) {
            errors.push({message: `O campo ${nomeCampo} deve conter apenas letras`});
        }
    };

    /**
     * Método: alpha_numeric:
     * Descrição: Verifica se variável utiliza apenas caracteres e números
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const alpha_numeric = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        value = String(value);
        let Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

        if (!value.match(Exp)) {
            errors.push({message: `O campo ${nomeCampo} deve conter números e letras`});
        }
    };

    /**
     * -----------------------------------------------------------------------------------
     */

    /**
     * Método: valid_email:
     * Descrição: Verifica se email é válido
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const valid_email = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        let Exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!value.match(Exp)) {
            errors.push({message: `O campo ${nomeCampo} deve ser um email válido`});
        }
    };

    /**
     * Método: valid_date:
     * Descrição: Verifica se data é válida
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const valid_date = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        value = String(value);
        let Exp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

        if (!value.match(Exp)) {
            errors.push({message: `O campo ${nomeCampo} deve ser uma data válida`});
        }
    };

    /**
     * Método: valid_cpf:
     * Descrição: Verifica se cpf é válido
     * @value conteúdo a ser validado
     * @nomeCampo nome do campo html
     */
    const valid_cpf = (value, nomeCampo) => {

        // pula variáveis quebradas
        if (value === null || value === undefined || value === '' || value.length <= 0) {
            return;
        }

        // elimina formatação
        value = value.replace(/\.|-/g, '');

        if (value === "00000000000" || value === "11111111111" ||
            value === "22222222222" || value === "33333333333" ||
            value === "44444444444" || value === "55555555555" ||
            value === "66666666666" || value === "77777777777" ||
            value === "88888888888" || value === "99999999999") {

            errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
            return;
        }


        let r;
        let s = 0;

        for (let i = 1; i <= 9; i++) {
            s = s + parseInt(value[i - 1]) * (11 - i);
        }

        r = (s * 10) % 11;

        if ((r === 10) || (r === 11)) {
            r = 0;
        }

        if (r !== parseInt(value[9])) {
            errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
            return;
        }

        s = 0;

        for (let i = 1; i <= 10; i++) {
            s = s + parseInt(value[i - 1]) * (12 - i);
        }

        r = (s * 10) % 11;

        if ((r === 10) || (r === 11)) {
            r = 0;
        }

        if (r !== parseInt(value[10])) {
            errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
        }
    };


    /**
     * -----------------------------------------------------------------------------------
     */

    const _getErrors = () => {
        return errors;
    };

    const _verifyErrors = () => {
        return errors.length === 0;
    };

    const _cleanErrors = () => {
        errors = [];
    };

    return {
        validate: validate,
        _getErrors: _getErrors,
        _verifyErrors: _verifyErrors,
        _cleanErrors: _cleanErrors
    };

};

module.exports = Validator;