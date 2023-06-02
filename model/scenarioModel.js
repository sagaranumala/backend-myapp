const mongoose = require('mongoose')

const vehicleSchema =  mongoose.Schema({
     vehicleName: {
      type: "String",
      unique:true,
      required: [true,'Please add a VehicleName']
     },
     vehicleSpeed:{
      type: "Number",
      required: [true,'Please add a VehicleSpeed']
     },
     positionX:{
      type: "Number",
      required: [true,'Please add a Position X']
     },
     positionY:{
      type: "Number",
      required: [true,'Please add a Position Y']
     },
     vehicleDirection:{
      type: "String",
      required: [true,'Please add a VehicleDirection']
     }
  })
const scenarioSchema = mongoose.Schema({
      scenarioName: {
        type: "String",
        required: [true,'Please add a ScnarioName']
      },
      scenarioTime: {
        type: "Number",
        required: [true,'Please add a ScnarioTime']
      },
      vehicleList:[vehicleSchema]
})
module.exports = mongoose.model('scenario',scenarioSchema)