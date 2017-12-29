import React, { Component } from 'react';
import axios from "axios";
import querystring from "querystring";
import GlobalVar from "../GlobalVar";
import {
	ReactInput,
	templateFormatter,
	templateParser,
	parseDigit
} from 'input-format';

class Main extends Component {
	constructor(props){
		super(props);
		this.state = {
			registration_number: "",
			saving: false,
			guidance_text: "Vul jouw Rijkregister nummer bovenaan in. Deze wordt automatisch gecheckt"
		}
		this.template_registration_number = 'xx.xx.xx-xxx.xx'
		this.saving = false;
	}

	changeValue(registration_number){
		this.setState({
			registration_number
		}, () => {
			if(this.state.registration_number.length === 11){
				this.saveValue(this.state.registration_number);
			}
		});
	}

	saveValue(registration_number){
		this.setState({
			saving: true,
			guidance_text: "Rijkregister wordt gecheckt..."
		})
		axios.post(`${GlobalVar.serverURL}/browserAction/postRegisterNumber`, querystring.stringify({
			registration_number,
			facebook_id: this.props.match.params.facebook_id
	  })).then((response) => {
	    if(response.data.status === "succes"){
				this.setState({guidance_text: "Alles in orde"})
				
			}
	  });
	}

	render() {
		return (
    		<form className="chatbot fullscreen_form login">
    			<label>Rijkregister nummer</label>
    			<ReactInput
    				autoFocus
						disabled={this.state.saving}
    				placeholder={this.template_registration_number}
						value={this.state.registration_number}
						onChange={(value) => this.changeValue(value)}
						format={templateFormatter(this.template_registration_number)}
						parse={templateParser(this.template_registration_number, parseDigit)}
					/>
    			<p className="guidance_text">{this.state.guidance_text}</p>
    		</form>
		);
	}
}

export default Main;
