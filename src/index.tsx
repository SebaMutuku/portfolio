import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/index.css';
import App from 'src/App';
import reportWebVitals from 'src/reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>
    <BrowserRouter basename="/portfolio">
        <App/>
    </BrowserRouter>
</React.StrictMode>);
reportWebVitals();