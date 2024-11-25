const Cadastro = require('../models/CadastroModel');

exports.exibirPlanoCadastro = async (req,res) => {
    const plano = req.query.plan;
    res.render('cadastro', { plano, req});

    
};

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
        req.session.save(() => res.redirect('/login/index'));
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
        
        req.session.save(() => res.redirect('/login/index'));
    } catch (e) {
        console.log(e);
        return res.render('404');
    }
    
}

