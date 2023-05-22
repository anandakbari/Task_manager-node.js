const Task=require('../models/task')
const asyncWrapper=require('../middleware/async')
const {createCustomError}=require('../errors/custom_error')

const getAllTasks=asyncWrapper(async(req,res)=>{
    
        const tasks=await Task.find({})
        
        res.status(200).json({tasks})
        //res.status(200).json({tasks,amount:tasks.length})
        //res.status(200).json({status:"success",data:{taks,nbHits:tasks.length}})
        
})

const createTask=asyncWrapper( async(req,res)=>{
    
    const task=await Task.create(req.body)
    res.status(201).json({task})
    
})

const getTask=asyncWrapper (async (req,res)=>{

        const {id:taskid}=req.params
        const task=await Task.findOne({_id:taskid})

        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({task})

})

const updateTask=asyncWrapper (async (req,res)=>{
    
        const {id:taskid}=req.params
        const task=await Task.findOneAndUpdate({_id:taskid},req.body,{
            new:true,
            runValidators:true,
        })

        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({task})
    
})
const deleteTask=asyncWrapper (async (req,res)=>{
    
        const {id:taskid}=req.params
        const task=await Task.findOneAndDelete({_id:taskid})

        if(!task){
            return next(createCustomError(`No task with id : ${taskID}`, 404))
        }
        res.status(200).json({task})
    
})

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}