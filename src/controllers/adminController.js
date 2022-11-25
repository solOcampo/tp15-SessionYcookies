
let lenguajes = ['C','Java','Python','PHP','SQL','Ruby','VisualBasicNET','R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']
let lenguajesNav = ['Lenguaje de programación C, C++ y C#','Java','Python','PHP','SQL','Ruby','Visual Basic. NET','Lenguaje de programación R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']

module.exports = {
    list: (req,res) => {
        res.render('admin/list',{lenguajes,lenguajesNav})
    },
    create: (req,res) => {
        res.render('admin/create',{lenguajes,lenguajesNav})
    },
    edit: (req,res) => {
        res.render('admin/edit',{lenguajes,lenguajesNav})
    }
}