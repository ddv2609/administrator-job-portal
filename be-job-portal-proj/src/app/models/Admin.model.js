const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
  member: { 
    type: Schema.Types.ObjectId, 
    ref: "Member",
    unique: true,
    require: true,
  }
});

module.exports = mongoose.model("Admin", AdminSchema, "tblAdmin");