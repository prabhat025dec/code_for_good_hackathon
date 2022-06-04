const NgoDataRegistration = require("../models/NgoDataRegistration");

// Creating new Ngo Data R
const addNgoRegistration = async (req, res) => {
  const {
    organizationName,
    enrolledProgram,
    representerName,
    representerDesignation,
    registeredId,
    supportProvidedMonth,
    foodAmount,
    ageGroup,
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
      ageGroup,
      numberOfBeneficiariesReached,
      locationCovered,
      foodDistributedToAnyOtherCharity,
      programDate,
    });
    await newNgoData.save();
  } catch (err) {
    console.log(err);
  }

  if (!newNgoData) {
    return res.status(500).json({ message: "Failed To Create the User" });
  }
  return res.status(201).json({ newNgoData });
};

const getAllNgosData = async (req, res) => {
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

const getNgoData = async (req, res) => {
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

const updateNgoData = async (req, res, next) => {
  const id = req.params.id;
  const {
    organizationName,
    enrolledProgram,
    representerName,
    representerDesignation,
    registeredId,
    supportProvidedMonth,
    foodAmount,
    ageGroup,
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
      ageGroup,
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
  return res.status(200).json({message:"Ngo Data Updated Successfully"});
};

const deleteNgoData = async (req, res) => {
  const id = req.params.id;
  let ngodata;
  try {
    ngodata = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!ngodata) {
    return res.status(404).json({ message: "Unable To Delete Ngo Details" });
  }
  return res.status(200).json({ message: "Ngo Data Successfully Deleted" });
};

exports.addNgoRegistration = addNgoRegistration;
exports.getAllNgosData = getAllNgosData;
exports.getNgoData = getNgoData;
exports.deleteNgoData = deleteNgoData;
exports.updateNgoData = updateNgoData;
