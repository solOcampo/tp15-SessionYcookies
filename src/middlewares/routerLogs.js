const fs = require('fs')
const { dirname } = require('path')
const path = require('path')

const routerLogs = (req,res,next) => {
    fs.appendFileSync(path.join(__dirname,'../logs/userLogs.txt'),`El usuario ingresó a la ruta: ${req.url}\n`,'utf-8');
    next();
}

module.exports = routerLogs