const minionsRouter= require('express').Router();
const db = require('./db')

module.exports = minionsRouter

minionsRouter.param('minionId',(req,res,next,id) => {
const minion = db.getFromDatabaseById('minions',id)
if (minion){
    req.minion  = minion    
    next()
}else{
    res.status(404).send();
}
})

minionsRouter.get('/',(req,res,next)=>{
    const data= db.getAllFromDatabase('minions')
    if(data)
return res.status(200).send(data) 
else
return null;
}) 

minionsRouter.post('/',(req,res,next)=>{
const {name,title,salary} = req.body
if(!name || !title || !salary)
return res.status(404).send('Enter name or title or salary');
const data= db.addToDatabase('minions',{name:name,title:title,salary:salary})
if(data)
return res.status(200).send(data)
else return null;
}) 

minionsRouter.get('/:minionId',(req,res,next)=>{
        return res.status(200).send(req.minion) 
})

 minionsRouter.put('/:minionId',(req,res,next)=>{
const data = db.updateInstanceInDatabase("minions", req.body)
if(data){
    return res.status(200).send(data) 
}else return null
}) 

minionsRouter.delete('/:minionId',(req,res,next)=>{
const deleted= db.deleteFromDatabasebyId('minions',req.params.minionId)
if(deleted){
    res.status(204);
}else res.status(500)
res.send()
}) 
