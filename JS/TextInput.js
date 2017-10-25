import React from "react";
import { Text, View, TextInput } from 'react-native';

export default class InputText extends React.Component{

	constructor(props){
		super(props);
		this.state={text:""};
	}
	static navigationOptions = {title:"learn about textinput"};
	render(){
		return(
			<View style={{padding: 10}}>
			<TextInput
			  style={{height: 40}}
			  placeholder="Translate to pizza here! I do NOT like emojis in my code"
			  onChangeText={(text) => this.setState({text})}
			/>
			<Text style={{padding: 10, fontSize: 42}}>
			  {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
			</Text>
		  </View>
		)
	}
}
