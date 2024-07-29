import React from 'react';
import Home from "src/screens/home";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Education from "src/screens/education";
import Experience from "src/screens/experience";
import ContactMe from "src/screens/contactme";


function App() {
    return (
        <Router>
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
