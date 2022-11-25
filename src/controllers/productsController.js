
let lenguajes = ['C','Java','Python','PHP','SQL','Ruby','VisualBasicNET','R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']
let lenguajesNav = ['Lenguaje de programación C, C++ y C#','Java','Python','PHP','SQL','Ruby','Visual Basic. NET','Lenguaje de programación R','TypeScript','Swift','Rust','Go','Kotlin','Postscript','Scheme','Erlang','Elixir','Pascal','Scala','Objective-C']
let products = ['1','2','3','4','5','6','7','8']

module.exports = {
    products: (req,res) => {
        res.render('products',{lenguajes,lenguajesNav,products})
    },
    detail: (req,res) => {
        let id = req.params.id
        let productoId = products.indexOf(id)
        let producto = products[productoId]
        res.render('detail',{lenguajes,lenguajesNav,producto})
    }
}