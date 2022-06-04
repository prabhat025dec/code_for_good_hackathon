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
    type: String,
    required: true,
  },
  supportProvidedMonth: {
    type: String,
    required: true,
  },
  foodAmount: {
    type: String,
    required: true,
  },
  under18: { type: String, required: true },
  above60: { type: String, required: true },
  femaleBeneficiariesReached: { type: String, required: true },

  numberOfBeneficiariesReached: {
    type: String,
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
