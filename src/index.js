import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'
import App from './App';
import SWTTheme from "./theme";
import {BrowserRouter} from "react-router-dom";
import {I18nextProvider} from "react-i18next";
import i18n from "./locales/index";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
       <SWTTheme>
          <I18nextProvider i18n={i18n}>
             <App/>
          </I18nextProvider>
       </SWTTheme>
    </BrowserRouter>
);