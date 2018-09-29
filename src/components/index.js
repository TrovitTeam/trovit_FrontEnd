import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from '../registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import Landing_page from './Landing_page';
import Product_info from './Product_info';
import Profile from './Profile';
import Log_in from './Log_in';
import Sign_in from './Sign_in';
import Contact from './Contact';
import Search_result from './Search_result';
import Send_email from './Send_email';
import Setting from './Setting';

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