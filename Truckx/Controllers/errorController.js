exports.get404 = (req, res) =>{
    res.status(404).send("Page Not Found 404");
}