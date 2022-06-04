const NgoDataRegistration = require("../models/NgoDataRegistration");

// Creating new Ngo Data R
exports.addNgoRegistration = async (req, res) => {
  const {
    organizationName,
    enrolledProgram,
    representerName,
    representerDesignation,
    registeredId,
    supportProvidedMonth,
    foodAmount,
    under18,
    above60,
    femaleBeneficiariesReached,
    numberOfBeneficiariesReached,
    locationCovered,
    foodDistributedToAnyOtherCharity,
    programDate,
  } = req.body;

  let newNgoData;

  try {
    newNgoData = new NgoDataRegistration({
      organizationName,
      enrolledProgram,
      representerName,
      representerDesignation,
      registeredId,
      supportProvidedMonth,
      foodAmount,
      under18,
      above60,
      femaleBeneficiariesReached,
      numberOfBeneficiariesReached,
      locationCovered,
      foodDistributedToAnyOtherCharity,
      programDate,
    });
    let ngosdata = await NgoDataRegistration.find({
      locationCovered: newNgoData.locationCovered,
      supportProvidedMonth: newNgoData.supportProvidedMonth,
      numberOfBeneficiariesReached: newNgoData.numberOfBeneficiariesReached,
      programDate: newNgoData.programDate,
      representerName: newNgoData.representerName,
      representerDesignation: newNgoData.representerDesignation,
      enrolledProgram: newNgoData.enrolledProgram,
    });
    if (ngosdata.length) {
      return res.status(406).json({ message: "Duplicate Data Found" });
    }
    await newNgoData.save();
  } catch (err) {
    console.log(err);
  }

  if (!newNgoData) {
    return res.status(500).json({ message: "Failed To Create the User" });
  }
  return res.status(201).json({ newNgoData });
};

exports.getAllNgosData = async (req, res) => {
  let ngosdata;
  try {
    ngosdata = await NgoDataRegistration.find();
  } catch (err) {
    console.log(err);
  }

  if (!ngosdata) {
    return res.status(404).json({ message: "No Ngo Data found" });
  }
  return res.status(200).json({ ngosdata });
};

exports.getNgoData = async (req, res) => {
  const id = req.params.id;
  let ngodata;
  try {
    ngodata = await NgoDataRegistration.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!ngodata) {
    return res.status(404).json({ message: "No Ngo found" });
  }
  return res.status(200).json({ ngodata });
};

exports.updateNgoData = async (req, res, next) => {
  const id = req.params.id;
  const {
    organizationName,
    enrolledProgram,
    representerName,
    representerDesignation,
    registeredId,
    supportProvidedMonth,
    foodAmount,
    under18,
    above60,
    femaleBeneficiariesReached,
    numberOfBeneficiariesReached,
    locationCovered,
    foodDistributedToAnyOtherCharity,
    programDate,
  } = req.body;
  let ngodata;
  try {
    ngodata = await NgoDataRegistration.findByIdAndUpdate(id, {
      organizationName,
      enrolledProgram,
      representerName,
      representerDesignation,
      registeredId,
      supportProvidedMonth,
      foodAmount,
      under18,
      above60,
      femaleBeneficiariesReached,
      numberOfBeneficiariesReached,
      locationCovered,
      foodDistributedToAnyOtherCharity,
      programDate,
    });
    ngodata = await ngodata.save();
  } catch (err) {
    console.log(err);
  }
  if (!ngodata) {
    return res.status(404).json({ message: "Unable To Update Ngo Data" });
  }
  return res.status(200).json({ message: "Ngo Data Updated Successfully" });
};

exports.deleteNgoData = async (req, res) => {
  const id = req.params.id;
  let ngodata;
  try {
    ngodata = await NgoDataRegistration.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!ngodata) {
    return res.status(404).json({ message: "Unable To Delete Ngo Details" });
  }
  return res.status(200).json({ message: "Ngo Data Successfully Deleted" });
};
