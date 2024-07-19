const mongoose = require("mongoose");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;

const MemberSchema = new Schema({
  password: { 
    type: String, 
    default: null,
    min: [6, 'Pasword must be at least 6, got {VALUE}'],
    max: [25, 'Pasword must be at most 25, got {VALUE}'],
  },
  role: { 
    type: String, 
    required: true, 
    enum: {
      values: ["user", "employer", "admin"],
      message: "Role <{VALUE}> is not supported",
    } 
  },
  fullName: { type: String, default: null },
  tel: { 
    type: String, 
    default: null, 
    unique: true,
    min: [7, 'Minimum phone number 7 numbers, got {VALUE}'],
    max: [15, 'Maximum phone number 15 numbers, got {VALUE}'], 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true,
    index: true, 
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  dob: { type: Date, default: null },
  gender: { 
    type: String,
    enum: {
      values: ["male", "female"],
      message: "Gender <{VALUE} is not supported>",
    },
    get: (value) => value.toLowerCase(),
    set: (value) => value.toLowerCase(),
  },
  avatar: { type: String, default: null },
  verifiedAt: { 
    type: Date, 
    default: null,  
  }
}, {
  timestamps: true,
});

MemberSchema.plugin(mongooseDelete, {
  deletedAt : true,
  deletedBy: true,
  overrideMethods: true,
});

MemberSchema.pre("remove", async function(next) {
  await mongoose.model("User").deleteOne({ member: this._id });
  await mongoose.model("Employer").deleteOne({ member: this._id });
  await mongoose.model("Admin").deleteOne({ member: this._id });

  next();
});

module.exports = mongoose.model("Member", MemberSchema, "tblMember");