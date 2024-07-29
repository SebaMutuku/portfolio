import React from 'react';
import Home from "src/screens/home";
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import Education from "src/screens/education";
import Experience from "src/screens/experience";
import ContactMe from "src/screens/contactme";


const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/education">Education</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/contactme">Contact Me</Link>
        </div>
    )
}


function App() {
    return (
        <Router basename="/">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/experience" element={<Experience/>}/>
                <Route path="/contactme" element={<ContactMe/>}/>
            </Routes>
        </Router>

    )
        ;
}

export default App;
