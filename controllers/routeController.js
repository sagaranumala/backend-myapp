const asyncHandler =require('express-async-handler')
const Scenario = require('../model/scenarioModel')

//Get Data
const getData1 = asyncHandler(async (req, res) => {
    const scenarios= await Scenario.find();

    res.status(200).json(scenarios)
})

const setData1 = asyncHandler(async (req, res) => {
    let body=req.body
    //console.log(body);
    
    const nameScenario= await Scenario.create(body)

    res.status(200).json(nameScenario)
})

const updateData1 = asyncHandler(async (req, res) => {
    const data=await Scenario.findById(req.params.id)
    if(!data){
        res.status(400)
        throw new Error("Not find")
    }
    const update = await Scenario.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(req.params.id)
})

const deleteData1 = asyncHandler(async (req, res) => {
    const data=await Scenario.findById(req.params.id)
    if(!data){
        res.status(400)
        throw new Error("Not find")
    }
     await data.deleteOne({_id:req.params.id})

    res.status(200).json(req.params.id)
})

module.exports={
    getData1,
    setData1,
    updateData1,
    deleteData1
}