import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path = '/' component = {App}/>
            <Route path = '/' component = {DogsList}/>
            <Route path = '/' component = {AuthorCreation}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
            
registerServiceWorker();