import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { DataProvider } from './DataProvider';

ReactDOM.render(
    <React.StrictMode>
        <DataProvider>
            <App/>
        </DataProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
