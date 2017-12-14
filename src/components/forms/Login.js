import React, { Component } from 'react';
import { ReactInput, templateFormatter, templateParser, parseDigit } from 'input-format';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			registrationNumber: ""
		}
		this.templateRegistrationNumber = 'xx.xx.xx-xxx.xx'
	}
    render() {

    	return (
    		<form className="chatbot fullscreen_form login">
    			<label>Rijkregister nummer</label>
    			<ReactInput
    				autoFocus
    				placeholder={this.templateRegistrationNumber}
					value={this.state.registrationNumber}
					onChange={registrationNumber => this.setState({ registrationNumber })}
					format={templateFormatter(this.templateRegistrationNumber)}
					parse={templateParser(this.templateRegistrationNumber, parseDigit)}
				/>
    			<p className="guidance_text">Vul jouw Rijkregister nummer bovenaan in. Deze wordt automatisch gecheckt</p>
    		</form>
		);
    }
}

export default Main;