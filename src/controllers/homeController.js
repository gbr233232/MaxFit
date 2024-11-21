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

    res.render('cadastro')
    
}