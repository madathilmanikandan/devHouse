import App from './app/app'
import React, { StrictMode } from 'react'
import './styles.scss'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<StrictMode><App/></StrictMode>);