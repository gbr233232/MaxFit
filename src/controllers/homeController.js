exports.index = async (req, res) =>{
    res.render('index');
}

exports.login = async (req, res) =>{
    res.render('login')
}
exports.planos = async (req, res) =>{
    res.render('planos')
}

exports.cadastro = async (req, res) =>{
    req.session.save(function() {
        // Redireciona para o referrer ou para a raiz caso não exista referrer
        return res.redirect('cadastro');
    });
    return;
}