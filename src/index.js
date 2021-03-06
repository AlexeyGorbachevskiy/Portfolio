import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, HashRouter} from "react-router-dom";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {fab, faGitSquare, faJs, faQuora, faReact} from '@fortawesome/free-brands-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBars, faCode, faLanguage, fas} from "@fortawesome/free-solid-svg-icons";


library.add(fab, faReact, faCode, faJs, faLanguage, faGitSquare, faQuora);
library.add(fas, faBars);

ReactDOM.render(
    // <React.StrictMode>
        <HashRouter>
            <App/>
        </HashRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
