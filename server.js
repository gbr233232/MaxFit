require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
const app = express();


//conexão mongoDB

async function connectDB() {
    try{
        await mongoose.connect(process.env.CONNECTIONSTRING);
        console.log('Conectado á base de dados')
        app.emit('pronto');
    }catch(err) {
        console.error('Error ao conectar ao MongoDB', err)
    }
}

connectDB();

//middleware de parsing
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

//sessões e flash
const sessionOptions = session({
    secret: process.env.SESSION_SECRET,
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

//middlewares
const routes = require('./routes')



//configurações de views e EJS
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');



app.use(routes)
app.on('pronto', () =>{
    app.listen(2424, () => {
        console.log('Servidor executando porta 3333')
    })
})