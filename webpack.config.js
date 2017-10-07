var path = require("path");
module.exports = {
    entry:{
    myappp:["./public/javascripts/main.js"]
    },
    output:{
    path:path.resolve(__dirname,"build"),
    publicPath:"/assets/",
    filename:"bundle.js"
}
}
