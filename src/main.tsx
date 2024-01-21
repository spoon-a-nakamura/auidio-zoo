import 'regenerator-runtime';
import 'ress';
import './styles/global.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CustomVhProvider from './components/CustomVhProvider';

ReactDOM.render(
  <React.StrictMode>
    <CustomVhProvider>
      <App />
    </CustomVhProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
