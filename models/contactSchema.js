const mongoose = require("mongoose")

const {
    Schema
} = mongoose;
//or const Schema = mongoose.Schema
const AddressSchema = require("./addressSchema")


//u take out the schema from mongoose with the new constructor and u store into this variable n which data
const contactSchema = new Schema({
    //check mongodb data types
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        required: true
    },
    address: AddressSchema

}, {
    toObject: {
        virtuals: true
    },
    toJSON: {
        virtuals: true
    }
})

contactSchema.virtual("fullName").get(function(name) {
    return `${this.firstName} ${this.lastName}`
})

module.exports = mongoose.model("Contact", contactSchema)
    //export data "userSchema" it in the "user" collection.