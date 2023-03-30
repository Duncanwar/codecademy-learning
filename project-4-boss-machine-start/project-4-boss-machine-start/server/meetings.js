const meetingsRouter = require('express').Router();
const {getAllFromDatabase,addToDatabase,deleteAllFromDatabase, createMeeting} = require('./db')

module.exports = meetingsRouter

meetingsRouter.get('/',(req,res,next)=>{
    const data= getAllFromDatabase('meetings')
    return res.status(200).send(data) 
})

meetingsRouter.post('/',(req,res,next)=>{
return res.status(200).send(addToDatabase('meetings',createMeeting()))
})

meetingsRouter.delete('/',(req,res,next)=>{
deleteAllFromDatabase('meetings')
return res.status(204).send()
})