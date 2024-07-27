const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CompanySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  logo: { type: String },
  companySize: { type: Number },
  field: { type: String },
  introduction: { type: String },
  website: { type: String },
  taxCode: { type: String },
  license: { type: String },
  address: {
    province: {
      type: String,
      require: true,
    },
    district: {
      type: String,
      require: true,
    },
    ward: {
      type: String,
      require: true,
    },
    detail: {
      type: String,
      default: "",
    }
  }
});

module.exports = mongoose.model("Company", CompanySchema, "tblCompany");