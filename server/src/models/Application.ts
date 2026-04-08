import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({

  userId: String,

  company: String,

  role: String,

  location: String,

  seniority: String,

  requiredSkills: [String],

  niceToHaveSkills: [String],

  jdLink: String,

  notes: String,

  salaryRange: String,

  resumeSuggestions: [String],

  status: {

    type: String,

    enum: [

      "Applied",

      "Phone Screen",

      "Interview",

      "Offer",

      "Rejected"

    ],

    default: "Applied"

  },

  dateApplied: {

    type: Date,

    default: Date.now

  }

});

export default mongoose.model(

  "Application",

  applicationSchema

);