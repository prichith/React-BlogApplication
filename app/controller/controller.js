let services = require('../services/services')

exports.add = async (req,res)=>{
    let result = await services.add(req.body);
     result ? res.send("Post added succesfully") : res.send("Post added failed");
}
exports.getAll = async (req,res)=>{
    let result = await services.getAll(req.body);
    res.send(result);
}