const mongoose = require("mongoose");

const ngoDataRegistrationSchema = new mongoose.Schema({
  organizationName: {
    type: String,
    required: true,
  },
  enrolledProgram: {
    type: String,
    required: true,
  },
  representerName: {
    type: String,
    required: true,
  },
  representerDesignation: {
    type: String,
    required: true,
  },
  registeredId: {
    type: Number,
    required: true,
  },
  supportProvidedMonth: {
    type: String,
    required: true,
  },
  foodAmount: {
    type: Number,
    required: true,
  },
  ageGroup: [
    {
      under18: { type: Number, required: true },
      above60: { type: Number, required: true },
      femaleBeneficiariesReached: { type: Number, required: true },
    },
  ],
  numberOfBeneficiariesReached: {
    type: Number,
    required: true,
  },
  locationCovered: {
    type: String,
    required: true,
  },
  foodDistributedToAnyOtherCharity: {
    type: String,
    required: true,
  },
  programDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model(
  "NgoDataRegistration",
  ngoDataRegistrationSchema
);
