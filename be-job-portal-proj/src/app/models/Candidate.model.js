const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CandidateSchema = new Schema({
  googleId: { type: String },
  facebookId: { type: String },
  linkedinId: { type: String },
  defaultResume: { type: String },
  education: { type: String },
  address: { type: String },
  member: { 
    type: Schema.Types.ObjectId, 
    ref: "Member",
    unique: true,
    require: true,
  }
});

module.exports = mongoose.model("Candidate", CandidateSchema, "tblCandidate");