
let lenguajes = ['C','Java','Python','PHP','SQL','Ruby','VisualBasicNET','R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']
let lenguajesNav = ['Lenguaje de programación C, C++ y C#','Java','Python','PHP','SQL','Ruby','Visual Basic. NET','Lenguaje de programación R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']

module.exports = {
    home: (req,res) => {
        res.render('index',{lenguajes,lenguajesNav})
    },
    about: (req,res) => {
        res.render('about',{lenguajes,lenguajesNav})
    },
    languages: (req,res) => {
        let id = req.params.id
        let lenguajeId = lenguajes.indexOf(id)

        res.render('languages',{lenguajes,lenguajesNav,lenguajeId})
    }
}