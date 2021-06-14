const express   = require("express")
const app = express();
const path = require('path')
const axios = require('axios')
const fs = require('fs')
const session = require('express-session')
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(__dirname + "/public"))
app.use(session({ secret: 'grootan', resave: true, saveUninitialized: true}))

const isLoggedIn = function (req, res, next) {
    if (req.session.user)
        next()
    else
        res.redirect('/login')
}

app.use((req, res, next)=>{
    res.locals.curuser = req.session.user;
    next();
})


app.get("/", isLoggedIn, (req, res) => {
    res.render('home')
})

//mock API, which will return a list of users.
app.get('/users', isLoggedIn, async (req, res) => {
    
    const users = await axios.get('https://grootan-users1.free.beeceptor.com/users')
    // var users = fs.readFileSync(__dirname + '/temp.json');
    // users = JSON.parse(users)
    res.json(users.data.data)
})

//Session managing simple login and registration page.
app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', (req, res) => {
    req.session.user = req.body.email;
    res.redirect('/')
})

app.get('/register', (req, res) => {
    res.render('reg');
})

app.get('/logout', (req, res) => {
    req.session.user = undefined
    res.redirect('/login')
})

//When a user clicks on a particular record, he should be able to see more details of that user.
app.get('/show/:mailid/', isLoggedIn, async (req, res) => {
    const users = await axios.get('https://grootan-users1.free.beeceptor.com/users')
    // var users = fs.readFileSync(__dirname + '/temp.json');
    // users = JSON.parse(users)
    var index = users.data.data.map(u => u.email)
    res.render('show', {user: users.data.data[index.indexOf(req.params.mailid)]})
})

app.listen(process.env.PORT || 4000, () => {
    console.log("Server Started....!");
})


