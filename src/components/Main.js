import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../style/css/main.css';
import Login from './forms/Login';

class Main extends Component {
    render() {
    	return (
    		<div className="content">
    			<Route path="/forms/login" render={() => <Login/>}/>
    		</div>
		);
    }
}

export default Main;