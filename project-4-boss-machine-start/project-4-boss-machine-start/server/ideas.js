const ideasRouters = require('express').Router();
const {getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId} = require('./db')

module.exports=  ideasRouters

ideasRouters.param("ideaId", (req, res, next,id) => {
const idea = getFromDatabaseById('ideas', id)
// console
if(idea) {
    req.idea = idea
    next()
}
else{
    res.status(404).send()
}
})

ideasRouters.get('/',(req,res,next)=>{
    const ideasData= getAllFromDatabase('ideas')
    return res.status(200).send(ideasData) 
}) 
ideasRouters.post('/',(req,res,next)=>{
return res.status(201).send(addToDatabase('ideas',req.body))
}) 

ideasRouters.get('/:ideaId',(req,res,next)=>{
return res.status(200).send(req.idea)
}) 

ideasRouters.put('/:ideaId',(req,res,next)=>{
return res.status(200).send(updateInstanceInDatabase('ideas',req.body))
})

ideasRouters.delete('/:ideaId',(req,res,next)=>{
const deleted = deleteFromDatabasebyId('ideas',req.params.ideaId)
if(deleted){
    res.status(204).send()
}
else{
    res.status(404).send()
}
}) 