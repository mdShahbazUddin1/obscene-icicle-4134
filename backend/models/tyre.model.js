

const mongoose = require("mongoose")

const tyreSchema = mongoose.Schema({
  image: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  brandImage: {
    type: String,
    require: true,
  },
  performance: {
    type: String,
    require: true,
  },
  stability: {
    type: String,
    require: true,
  },
  traction: {
    type: String,
    require: true,
  },
},{
  versionKey:false
});


const tyreModel = mongoose.model("tire",tyreSchema)


module.exports = {
    tyreModel
}