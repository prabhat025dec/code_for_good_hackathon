import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@mui/material";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Alert from "@mui/material/Alert";

import "./Register.css";

// import axios from "../../../axios";

function Register() {
//   const history = useNavigate();

  let initVals = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
    userAddress: "",
    userSecurityQuestion: "",
    userSecurityQuestionAns:"",
    userType:""
  };
  const [vals, setVal] = useState(initVals);
  const [owner_image, setowner_image] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [agree, setagree] = useState(false);
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChangeType = (e) => {
    setVal({ ...vals, "userType": e.target.value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setowner_image(e.target.files[0]);
  };
  const changeVisibility = () => {
    setshow("password");
    seteyeicon("VisibilityOffIcon");
  };
  const changeVisibilityOff = () => {
    setshow("text");
    seteyeicon("VisibilityIcon");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vals)

  };

  return (
    <div className="register-owner">
      {errmsg && <Alert severity="error">{errmsg}</Alert>}
      <div className="register_head">
        <p>Register</p>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userName"
          label="Name"
          name="userName"
          autoComplete="userName"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          type="number"
          margin="normal"
          required
          fullWidth
          id="userPhone"
          label="Phone"
          name="userPhone"
          autoComplete="userPhone"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userEmail"
          label="Email"
          name="userEmail"
          autoComplete="userEmail"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userAddress"
          label="Address"
          name="userAddress"
          autoComplete="userAddress"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userSecurityQuestion"
          label="User Security Question"
          name="userSecurityQuestion"
          autoComplete="userSecurityQuestion"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userSecurityQuestionAns"
          label="User Security Question Answer"
          name="userSecurityQuestionAns"
          autoComplete="userSecurityQuestionAns"
          onChange={handleChange}
        />
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={userType}
          label="Type of User"
          onChange={handleChange}
        >
          <MenuItem value="NGO">NGO</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
        <div className="passwordfield">
          <TextField
            type={show}
            margin="normal"
            required
            fullWidth
            id="userPassword"
            label="Password"
            name="userPassword"
            autoComplete="userPassword"
            onChange={handleChangeType}
          />
          <div className="eye">
            {eyeicon === "VisibilityOffIcon" ? (
              <VisibilityOffIcon onClick={changeVisibilityOff} />
            ) : (
              <VisibilityIcon onClick={changeVisibility} />
            )}
          </div>
        </div>
        <div className="up_img" style={{ display: "flex" }}>
          <p>Upload Image :</p>

          <input
            type="file"
            name="owner_image"
            onChange={handleChangeImage}
            style={{ marginTop: "15px", paddingLeft: "10px" }}
          />
        </div>
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              onChange={() => {
                setagree(!agree);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Agree Terms &amp; Conditions"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ justifyContent: "left" }}
        >
          Register
          <ArrowRightAltIcon
            style={{
              position: "absolute",
              right: "10px",
              fontSize: "30px",
            }}
          />
        </Button>
      </form>
    </div>
  );
}

export default Register;
