const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const CadastroSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    sobrenome: {type: String, require: true},
    email: {type: String, require: true},
    cpf: {type: String, require: true},
    dataNasc: {type: String, require: true},
    telefone: {type: String, require: true},
    password: {type: String, require: true}
});

const CadastroModel = mongoose.model('Cadastro', CadastroSchema)

class  Cadastro {
    constructor(body){
        this.body = body;
        this.errors = [];
        this.cadastro = null;
    }
    async login() {
        // Verifica se existem erros anteriores
        if (this.errors.length > 0) return;
    
        // Remove espaços do e-mail enviado
        this.body.email = this.body.email.trim().toLowerCase();
        console.log("E-mail enviado: ", this.body.email); 
        // Busca o usuário pelo e-mail
        this.user = await CadastroModel.findOne({ email: this.body.email });
        console.log(this.user)
        // Verifica se o usuário existe
        if (!this.user) {
            this.errors.push('Usuário inválido');
            return;
        }
    
        // Valida a senha
        if (!bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Senha inválida');
            this.user = null;
            return;
        }
    }
    
    async registrar() {
        this.cleanUp();
        this.valida();

        if (this.errors.length > 0) return;

        await this.userExist();

        if (this.errors.length > 0) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);

        this.user = await CadastroModel.create(this.body);    
    }

    async userExist(){
        this.user = await CadastroModel.findOne({ email: this.body.email });
        this.cpf = await CadastroModel.findOne({cpf: this.body.cpf});
        this.telefone = await CadastroModel.findOne({telefone: this.body.telefone});
        if(this.user) this.errors.push('Usuário já existe.');
        if(this.cpf) this.errors.push('CPF já cadastrado.');
        if(this.cpf) this.errors.push('Telefone já cadastrado.');


    }
    
    valida() {
        // Validação de e-mail
        if (this.body.email && !validator.isEmail(this.body.email)) {
            this.errors.push('E-mail inválido');
        }
    
        if (!this.body.nome || typeof this.body.nome !== 'string') {
            this.errors.push('Nome é obrigatório.');
        }
    
        if (!this.body.sobrenome || typeof this.body.sobrenome !== 'string') {
            this.errors.push('Sobrenome é obrigatório.');
        }
    
        if (!this.body.cpf || typeof this.body.cpf !== 'string') {
            this.errors.push('CPF é obrigatório.');
        }
    
        if (!this.body.dataNasc || typeof this.body.dataNasc !== 'string') {
            this.errors.push('Data de nascimento é obrigatória.');
        }
    
        if (!this.body.telefone || typeof this.body.telefone !== 'string') {
            this.errors.push('Telefone é obrigatório.');
        }
    
        if (!this.body.password || this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
        }
    }
    
    cleanUp () {
        // Garante que `body` sempre tenha `email` e `password` como strings
        this.body = {
            nome: typeof this.body.nome === 'string' ? this.body.nome : '',
            sobrenome: typeof this.body.sobrenome === 'string' ? this.body.sobrenome : '',
            email: typeof this.body.email === 'string' ? this.body.email : '',
            cpf: typeof this.body.cpf === 'string' ? this.body.cpf : '',
            dataNasc: typeof this.body.dataNasc === 'string' ? this.body.dataNasc : '',
            telefone: typeof this.body.telefone === 'string' ? this.body.telefone : '',
            password: typeof this.body.password === 'string' ? this.body.password : '',
        };
    }
    
}

module.exports = Cadastro