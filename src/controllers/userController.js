const { validationResult } = require('express-validator')
const path = require('path')

let lenguajes = ['C', 'Java', 'Python', 'PHP', 'SQL', 'Ruby', 'VisualBasicNET', 'R', 'TypeScript', 'Swift', 'Rust', 'Go', 'Kotlin', 'Postscript', 'Scheme', 'Erlang', 'Elixir', 'Pascal', 'Scala', 'Objective-C']
let lenguajesNav = ['Lenguaje de programación C, C++ y C#', 'Java', 'Python', 'PHP', 'SQL', 'Ruby', 'Visual Basic. NET', 'Lenguaje de programación R', 'TypeScript', 'Swift', 'Rust', 'Go', 'Kotlin', 'Postscript', 'Scheme', 'Erlang', 'Elixir', 'Pascal', 'Scala', 'Objective-C']

module.exports = {
    register: (req, res) => {
        res.render('register', { lenguajes, lenguajesNav })
    },
    store: (req, res) => {
        let errors = validationResult(req)
        //return res.send(errors.mapped())
        if (errors.isEmpty()) {

            const {name, color, edad,email, recordar} = req.body
            req.session.usuario = {
                name: name,
                color: color,
                email:email,
                edad: edad
            }
            if (recordar){
                res.cookie('recordar',req.session.usuario,{maxAge: 1000*60*60*60})
            }
            return res.redirect('/user/register')
            
        } else {
            res.render('register',{
                errors: errors.mapped(),
                old: req.body,
                lenguajes,
                lenguajesNav
            })
        }
    },
    destroy: (req,res) => {
        req.session.destroy()
        if (req.cookies.recordar){
            res.cookies('recordar','',{maxAge: +1})
        }
        return res.redirect('/')
    },
    login: (req, res) => {
        res.render('login', { lenguajes, lenguajesNav })
    }
}