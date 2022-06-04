import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import ReportPage from "./pages/ReportPage";
import NavBar from "./components/Navbar";
import NGODataRegistration from "./pages/NGODataRegistration"
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Router>      
<NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/report" element={<ReportPage></ReportPage>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/form" element = {<NGODataRegistration></NGODataRegistration>}/>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element = {<Register></Register>}></Route> 
            
          </Routes>
        </div>
      </Router>
    </>
  );
}

    

export default App;