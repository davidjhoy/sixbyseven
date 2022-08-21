import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import './css/index.css';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider-with-history';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 
    <Router>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </Router>
 
);


