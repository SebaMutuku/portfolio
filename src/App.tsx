import React from 'react';
import Home from "src/screens/home";
import {Route, Routes} from 'react-router-dom'
import Education from "src/screens/education";
import Experience from "src/screens/experience";
import ContactMe from "src/screens/contactme";


function App() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="/education" element={<Education/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/contactme" element={<ContactMe/>}/>
        </Routes>

    )
        ;
}

export default App;
