import React from "react";
import { Text, View } from 'react-native';

class Blink extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {showText: true};
  
	  // Toggle the state every second
	  setInterval(() => {
		this.setState(previousState => {
		  return { showText: !previousState.showText };
		});
	  }, 1000);
	}
  
	render() {
	  let display = this.state.showText ? this.props.text : ' ';
	  return (
		<Text>{display}</Text>
	  );
	}
};

class State extends React.Component{
	static navigationOptions = { title:"Learn about state" };
	render(){
		return (
			<Blink text="This text is blinking"/>
		);
	};


};


export default State;