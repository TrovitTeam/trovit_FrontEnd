import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing_page from './components/Landing_page';
import Product_info from './components/Product_info';
import Profile from './components/Profile';
import Log_in from './components/Log_in';
import Sign_in from './components/Sign_in';
import Contact from './components/Contact';
import Search_result from './components/Search_result';
import Send_email from './components/Send_email';
import Setting from './components/Setting';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path = '/' component = {Landing_page}/>
            <Route path = '/Contact' component = {Contact}/>
            <Route path = '/Log_in' component = {Log_in}/>
            <Route path = '/Sign_in' component = {Sign_in}/>
            <Route path = '/Product_Info' component = {Product_info}/>
            <Route path = '/Profile' component = {Profile}/>
            <Route path = '/Search_result' component = {Search_result}/>
            <Route path = '/Send_email' component = {Send_email}/>
            <Route path = '/Setting' component = {Setting}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));
            
registerServiceWorker();