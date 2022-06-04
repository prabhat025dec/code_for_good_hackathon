// import React, { useState } from "react";
// //import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Button from "@mui/material/Button";

// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import "./Register.css";

// import axios from "../axios";

// function Register_owner() {
//   let initVals = {
//     owner_name: "",
//     owner_email: "",
//     owner_phone: "",
//     owner_password: "",
//     shop_address: "",
//     owner_upi: "",
//   };
//   const [vals, setVal] = useState(initVals);
//   const [owner_image, setowner_image] = useState("");
//   const [agree, setagree] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setVal({ ...vals, [name]: value });
//   };
//   const handleChangeImage = (e) => {
//     console.log(e.target.files[0]);
//     setowner_image(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(vals);
//     // if (!agree) {
//     //   console.log("Please Agree terms & conditons");
//     // } else {
//     //   const fd = new FormData();
//     //   fd.append("owner_image", owner_image);
//     //   fd.append("owner_name", vals.owner_name);
//     //   fd.append("owner_email", vals.owner_email);
//     //   fd.append("owner_phone", vals.owner_phone);
//     //   fd.append("owner_password", vals.owner_password);
//     //   fd.append("shop_address", vals.shop_address);
//     //   fd.append("owner_upi", vals.owner_upi);
//     //   console.log(fd);
//     //   await axios
//     //     .post(`/register`, fd)
//     //     .then((res) => {
//     //       console.log(res);
//     //       localStorage.setItem("token", res.headers["x-auth-token"]);
//     //       // history("/owner");
//     //     })
//     //     .catch((err) => {});
//     // }
//   };

//   return (
//     <div className="register-owner">
//       <div className="register_head">
//         <p>Register</p>
//       </div>
//       <div className="">
//         <form onSubmit={handleSubmit}>
//           <TextField
//             type="text"
//             margin="normal"
//             required
//             fullWidth
//             id="owner_name"
//             label="Name"
//             name="owner_name"
//             autoComplete="owner_name"
//             autoFocus
//             onChange={handleChange}
//           />
//           <TextField
//             type="number"
//             margin="normal"
//             required
//             fullWidth
//             id="owner_phone"
//             label="Phone"
//             name="owner_phone"
//             autoComplete="owner_phone"
//             onChange={handleChange}
//           />
//           <TextField
//             type="text"
//             margin="normal"
//             required
//             fullWidth
//             id="owner_email"
//             label="Email"
//             name="owner_email"
//             autoComplete="owner_email"
//             onChange={handleChange}
//           />
//           <TextField
//             type="text"
//             margin="normal"
//             required
//             fullWidth
//             id="shop_address"
//             label="Shop Address"
//             name="shop_address"
//             autoComplete="shop_address"
//             onChange={handleChange}
//           />
//           <TextField
//             type="text"
//             margin="normal"
//             required
//             fullWidth
//             id="owner_upi"
//             label="UPI"
//             name="owner_upi"
//             autoComplete="owner_upi"
//             onChange={handleChange}
//           />
//           <div className="passwordfield">
//             <TextField
//               type="password"
//               margin="normal"
//               required
//               fullWidth
//               id="owner_password"
//               label="Password"
//               name="owner_password"
//               autoComplete="owner_password"
//               onChange={handleChange}
//             />
//           </div>
//           <div className="up_img" style={{ display: "flex" }}>
//             <p>Upload Image :</p>

//             <input
//               type="file"
//               name="owner_image"
//               onChange={handleChangeImage}
//               style={{ marginTop: "15px", paddingLeft: "10px" }}
//             />
//           </div>
//           <FormControlLabel
//             control={
//               <Checkbox
//                 // checked={state.checkedB}
//                 onChange={() => {
//                   setagree(!agree);
//                 }}
//                 name="checkedB"
//                 color="primary"
//               />
//             }
//             label="Agree Terms &amp; Conditions"
//           />
//           <Button
//             type="submit"
//             variant="contained"
//             color="primary"
//             fullWidth
//             style={{ justifyContent: "left" }}
//           >
//             Register
//             <ArrowRightAltIcon
//               style={{
//                 position: "absolute",
//                 right: "10px",
//                 fontSize: "30px",
//               }}
//             />
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register_owner;