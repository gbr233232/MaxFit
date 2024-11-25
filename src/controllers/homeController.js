exports.index = async (req, res) =>{
    res.render('index',{req});
}

exports.login = async (req, res) =>{
    res.render('login')
}

exports.planos = async (req, res) =>{
    res.render('planos',{req})
}

