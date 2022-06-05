import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./Register.css";
import { useNavigate } from "react-router-dom";

import axios from "../axios";

function Register() {
  let navigate = useNavigate();

  let initVals = {
    userName: "",
    userEmail: "",
    userPhone: "",
    userPassword: "",
    userAddress: "",
    userSecurityQuestion: "",
    userSecurityQuestionAns: "",
    userType: "",
  };
  const [vals, setVal] = useState(initVals);
  const [userImage, setuserImage] = useState("");
  const [agree, setagree] = useState(false);
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChangeType = (e) => {
    setVal({ ...vals, userType: e.target.value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setuserImage(e.target.files[0]);
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

    if (!agree) {
      console.log("Please Agree terms & conditons");
    } else {
      const fd = new FormData();
      fd.append("userImage", userImage);
      fd.append("userName", vals.userName);
      fd.append("userEmail", vals.userEmail);
      fd.append("userPhone", vals.userPhone);
      fd.append("userPassword", vals.userPassword);
      fd.append("userAddress", vals.userAddress);
      fd.append("userSecurityQuestion", vals.userSecurityQuestion);
      fd.append("userSecurityQuestionAns", vals.userSecurityQuestionAns);
      fd.append("userType", vals.userType);
      console.log(fd);
      await axios.post(`/${vals.userType}/register`, fd).then((res) => {
        console.log(res);
        localStorage.setItem("token", res.headers["x-auth-token"]);
        // history("/owner");
        // navigate("/");
      });
    }
  };
  return (
    <div className="register-owner">
      <div className="register_head">
        <p>Register</p>
      </div>
      <div className="">
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
            type={show}
            margin="normal"
            required
            fullWidth
            id="userPassword"
            label="Password"
            name="userPassword"
            autoComplete="userPassword"
            onChange={handleChange}
          />
          <TextField
            type="text"
            margin="normal"
            required
            fullWidth
            id="userAddress"
            label="User Address"
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
              onChange={handleChange}
            />
            <div className="eye">
              {eyeicon === "VisibilityOffIcon" ? (
                <VisibilityOffIcon onClick={changeVisibilityOff} />
              ) : (
                <VisibilityIcon onClick={changeVisibility} />
              )}
            </div>
          </div>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={userType}
              label="Type of User"
              onChange={handleChangeType}
            >
              <MenuItem value="ngo">NGO</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
          </FormControl>
          <div className="up_img" style={{ display: "flex" }}>
            <p>Upload Image :</p>

            <input
              type="file"
              name="userImage"
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
    </div>
  );
}

export default Register;
