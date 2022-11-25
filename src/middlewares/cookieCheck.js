module.exports = (req,res,next) => {
    if(req.cookies.recordar){
        req.session.usuario = req.cookies.recordar
    }
    next()
}