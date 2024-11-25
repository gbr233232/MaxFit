const mongoose = require('mongoose');

const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('cadastro', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }


    async login() {
        // Verifica se existem erros anteriores
        if (this.errors.length > 0) return;
    
        // Remove espaços do e-mail enviado
        this.body.email = this.body.email.trim().toLowerCase();
        console.log("E-mail enviado: ", this.body.email); 
        // Busca o usuário pelo e-mail
        this.user = await LoginModel.findOne({ email: this.body.email });
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
    
}

module.exports = Login;
