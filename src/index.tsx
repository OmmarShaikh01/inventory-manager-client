import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider}  from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {appTheme} from "./theme";
import App from "./App"
import './index.css';


ReactDOM.render(
    <React.StrictMode>        
        <ThemeProvider theme={appTheme}>
            <CssBaseline enableColorScheme/>
            <App />
        </ThemeProvider> 
    </React.StrictMode>,
    document.getElementById('root')
);


