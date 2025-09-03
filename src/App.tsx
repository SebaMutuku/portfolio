import React from 'react';
import Home from './screens/home';
import Education from './screens/education';
import Experience from './screens/experience';
import ContactMe from './screens/contactme';
import Projects from './screens/projects';
import {Route, Routes} from 'react-router-dom';

function App(): JSX.Element {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="education" element={<Education/>}/>
            <Route path="experience" element={<Experience/>}/>
            <Route path="projects" element={<Projects/>}/>
            <Route path="contactme" element={<ContactMe/>}/>
        </Routes>
    );
}

export default App;