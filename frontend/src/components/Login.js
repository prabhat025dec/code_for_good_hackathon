import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Login.css";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import axios from "../axios";
import { Navigate } from "react-router-dom";

function Login() {
  let initVals = {
    userEmail: "",
    userPhone: "",
    userPassword: "",
    userType: "",
  };
  const [vals, setVal] = useState(initVals);
  const [err, seterr] = useState("");
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChangeType = (e) => {
    setVal({ ...vals, userType: e.target.value });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
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
    console.log(vals);
    await axios
      .post(`/${vals.userType}/login`, vals)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        <Navigate to="/" replace={true} />;
      })
      .catch((err) => {
        seterr("Invalid Email-Id or Password");
      });
  };

  return (
    <div className="login-owner">
      <div className="login_head">
        <p>Log-In</p>
      </div>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="userEmail"
          label="Email"
          name="userEmail"
          autoComplete="name"
          autoFocus
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
            <MenuItem value="NGO">NGO</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          size="large"
          type="submit"
          fullWidth
          style={{ marginTop: "10px" }}
        >
          Log In
        </Button>
      </form>
    </div>
  );
}

export default Login;
