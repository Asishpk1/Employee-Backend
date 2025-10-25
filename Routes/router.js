const express = require('express')
const { addEmployeeController, getAllEmployeesController, editEmployeeController, deleteEmployeeController } = require('../Controllers/employeeController')

const router = new express.Router()

module.exports = router
router.post('/add',addEmployeeController)
router.get('/get/employees',getAllEmployeesController)
router.put('/edit/employee/:id',editEmployeeController)
router.delete('/delete/employee/:id',deleteEmployeeController)