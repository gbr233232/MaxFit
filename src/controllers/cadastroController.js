const Cadastro = require('../models/CadastroModel');

exports.exibirPlanoCadastro = async (req,res) => {
    const plano = req.query.plan;
    res.render('cadastro', { plano, req});

    
};

exports.index = async function (req,res) {
    res.render('areaCliente')
}


exports.registrarCadastro = async(req,res) => {

    try{
        const cadastro = new Cadastro(req.body);
        await cadastro.registrar();

        if(cadastro.errors.length > 0){
        req.flash('errors', cadastro.errors);
        req.session.save(() => res.redirect('back'));
        return;
        }

        req.flash('success', 'Cadastrado com sucesso');
        req.session.user = cadastro.user;
        req.session.save(() => res.redirect('/cadastro/index'));
        return;
    }catch(e){
        console.log(e)
        return res.render('404')
    }
}

exports.login = async function(req, res) {
    try{
        const cadastro = new Cadastro(req.body);
        await cadastro.login();

        if (cadastro.errors.length > 0) {
            req.flash('errors', cadastro.errors);
            console.log(cadastro.errors)
            req.session.save(function() {
                // Redireciona para o referrer ou para a raiz caso não exista referrer
                return res.redirect(req.get('Referrer') || '/');
            });
            return;
        }
        


        req.flash('success', 'Você entrou no sistema.');
        req.session.user = cadastro.user;
        req.session.save(() => res.redirect('/cadastro/index'));
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
    
}


//LOGOUT
exports.logout = async function(req, res) {
    req.session.destroy();
    res.redirect('/');
}

