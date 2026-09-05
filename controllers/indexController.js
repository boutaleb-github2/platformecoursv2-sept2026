exports.index = (req,res) =>{
    res.render("index",{ title: "Accueil" })
}
exports.about = (req,res) =>{
    res.render("about",{ title: " A propos" })
}