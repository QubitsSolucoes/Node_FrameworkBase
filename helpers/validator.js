let errors = [];

function Validador() {
    errors = [];
}

/*
#--------------------------
#  Método: required:
#  Descrição: Verifica se variável está definida
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.required = (value, nomeCampo) => {

    if (!value || value.length <= 0) {
        errors.push({message: `O campo ${nomeCampo} é obrigatório`});
    }
};

/*
#--------------------------
#  Método: numeric:
#  Descrição: Verifica tipo númerico
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.numeric = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (typeof value !== "number") {
        errors.push({message: `O campo ${nomeCampo} deve ser um número`});
    }
};

/*
#--------------------------
#  Método: string:
#  Descrição: Verifica tipo texto
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.string = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (typeof value !== "string") {
        errors.push({message: `O campo ${nomeCampo} deve ser um texto`});
    }
};

/*
#--------------------------
#  Método: boolean:
#  Descrição: Verifica tipo lógico
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.boolean = (value, nomeCampo) => {

    /// pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (typeof value !== "boolean") {
        errors.push({message: `O campo ${nomeCampo} deve ser lógico`});
    }
};

/*
#--------------------------
#  Método: object:
#  Descrição: Verifica tipo objeto
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.object = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (typeof value !== "object") {
        errors.push({message: `O campo ${nomeCampo} deve ser um objeto`});
    }
};

/*-----------------------------------------------------------------------------------*/


/*
#--------------------------
#  Método: min_length:
#  Descrição: Valida tamanho mínimo de uma variável
#  Parâmetros:
#    value: variável a ser validada
#    min: número mínimo de caracteres
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.min_length = (value, min, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (value.length < min) {
        errors.push({message: `O campo ${nomeCampo} deve ter no mínimo ${min} caracteres`});
    }
};

/*
#--------------------------
#  Método: max_length:
#  Descrição: Valida tamanho máximo de uma variável
#  Parâmetros:
#    value: variável a ser validada
#    min: número máximo de caracteres
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.max_length = (value, max, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (value.length > max) {
        errors.push({message: `O campo ${nomeCampo} deve ter no máximo ${max} caracteres`});
    }
};

/*
#--------------------------
#  Método: exact_length:
#  Descrição: Valida tamanho de uma variável
#  Parâmetros:
#    value: variável a ser validada
#    len: número de caracteres
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.exact_length = (value, len, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (value.length != len) {
        errors.push({message: `O campo ${nomeCampo} deve ter exatos ${len} caracteres`});
    }
};

/*-----------------------------------------------------------------------------------*/


/*
#--------------------------
#  Método: greater_than:
#  Descrição: Valida valor maior que mínimo
#  Parâmetros:
#    value: variável a ser validada
#    min: valor mínimo
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.greater_than = (value, min, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (Number(value) <= min) {
        errors.push({message: `O campo ${nomeCampo} deve ser maior que ${min}`});
    }
};

/*
#--------------------------
#  Método: less_than:
#  Descrição: Valida valor menor que máximo
#  Parâmetros:
#    value: variável a ser validada
#    max: valor máximo
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.less_than = (value, max, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    if (Number(value) >= max) {
        errors.push({message: `O campo ${nomeCampo} deve ser menor que ${max}`});
    }
};

/*-----------------------------------------------------------------------------------*/


/*
#--------------------------
#  Método: alpha:
#  Descrição: Verifica se variável utiliza apenas caracteres
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.alpha = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    value = String(value);
    let Exp = /^[A-z]+$/;

    if (!value.match(Exp)) {
        errors.push({message: `O campo ${nomeCampo} deve conter apenas letras`});
    }
};

/*
#--------------------------
#  Método: alpha_numeric:
#  Descrição: Verifica se variável utiliza apenas caracteres e números
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.alpha_numeric = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    value = String(value);
    let Exp = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i;

    if (!value.match(Exp)) {
        errors.push({message: `O campo ${nomeCampo} deve conter números e letras`});
    }
};

/*-----------------------------------------------------------------------------------*/

/*
#--------------------------
#  Método: valid_email:
#  Descrição: Verifica se email é válido
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.valid_email = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    let Exp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.match(Exp)) {
        errors.push({message: `O campo ${nomeCampo} deve ser um email válido`});
    }
};

/*
#--------------------------
#  Método: valid_date:
#  Descrição: Verifica se data é válida
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.valid_date = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    value = String(value);
    let Exp = /^\d{1,2}\/\d{1,2}\/\d{4}$/;

    if (!value.match(Exp)) {
        errors.push({message: `O campo ${nomeCampo} deve ser uma data válida`});
    }
};

/*
#--------------------------
#  Método: valid_email:
#  Descrição: Verifica se email é válido
#  Parâmetros:
#    value: variável a ser validada
#    nomeCampo: nome do campo
#--------------------------
*/

Validador.prototype.valid_cpf = (value, nomeCampo) => {

    // pula variáveis quebradas
    if (value === null || value === undefined || value === '' || value.length <= 0) {return;}

    // elimina formatação
    value = value.replace(/\.|-/g, '');

    if (value == "00000000000" || value == "11111111111" ||
        value == "22222222222" || value == "33333333333" ||
        value == "44444444444" || value == "55555555555" ||
        value == "66666666666" || value == "77777777777" ||
        value == "88888888888" || value == "99999999999") {

        errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
        return;
    }


    var r;
    var s = 0;

    for (i=1; i<=9; i++) {
        s = s + parseInt(value[i-1]) * (11 - i);
    }

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11)) {
        r = 0;
    }

    if (r != parseInt(value[9])) {
        errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
        return;
    }

    s = 0;

    for (i = 1; i <= 10; i++) {
        s = s + parseInt(value[i - 1]) * (12 - i);
    }

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11)) {
        r = 0;
    }

    if (r != parseInt(value[10])) {
        errors.push({message: `O campo ${nomeCampo} deve ser um cpf válido`});
        return;
    }
};

/*
######
#
#  Funções Internas ----------------------------------------
#
######
*/

Validador.prototype._errors = () => {
    return errors;
};

Validador.prototype._reset = () => {
    errors = [];
};

Validador.prototype._validate = () => {
    return errors.length == 0;
};

module.exports = Validador;
