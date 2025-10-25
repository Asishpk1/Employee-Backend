const employees = require("../Models/employeeModel");


exports.addEmployeeController = async (req,res) =>{
    console.log("Inside addEmployeeController");
    const {name,email,position,department,salary} = req.body

    try{
        const existingEmployee = await employees.findOne({email})
        if(existingEmployee){
            res.status(406).json("Email already exists")
        }
        else{
            const newEmployee = new employees({name,email,position,department,salary})
            await newEmployee.save()
            res.status(200).json(newEmployee)
            console.log(newEmployee);
            
        }
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }
    
}

exports.getAllEmployeesController = async (req,res) =>{
    console.log("Inside getAllEmployeesController");
    const {search}= req.query

    try{
        const allEmployees = await employees.find({name:{$regex:search,$options:"i"}})
        res.status(200).json(allEmployees)
        console.log(allEmployees);
        
    }
    catch(err){
        res.status(401).json(err)
    }
    
}

exports.editEmployeeController = async (req,res) =>{
    console.log("Inside editEmployeeController");
    const {id} = req.params
    const{name,email,position,department,salary} = req.body

    try{
        const updatedEmployee = await employees.findByIdAndUpdate({_id:id},{name,email,position,department,salary},{new:true})
        await updatedEmployee.save()
        res.status(200).json(updatedEmployee)
        console.log(updatedEmployee);
        
    }
    catch(err){
        res.status(401).json(err)
        console.log(err);
        
    }
    
}

exports.deleteEmployeeController = async (req,res) =>{
    console.log("Inside deleteEmployeeController");
    const {id} = req.params

    try{
        const deletedProject = await employees.findByIdAndDelete({_id:id})
        res.status(200).json(deletedProject)
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
        
    }
    
}