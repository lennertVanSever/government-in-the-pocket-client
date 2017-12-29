import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../style/css/main.css';
import Login from './forms/Login';

class Main extends Component {
  componentWillMount(){
    const script = document.createElement("script");
    const scriptText = document.createTextNode(`(function(d, s, id){var js, fjs=d.getElementsByTagName(s)[0]; if (d.getElementById(id)){return;}js=d.createElement(s); js.id=id; js.src="//connect.facebook.com/en_US/messenger.Extensions.js"; fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'Messenger'));`);
    script.appendChild(scriptText);
    document.head.appendChild(script);
  }
  render() {
  	return (
  		<div className="content">
  			<Route path="/forms/login/:facebook_id" component={Login} />
  		</div>
	  );
  }
}

export default Main;
