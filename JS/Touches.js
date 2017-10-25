import React from "react";
import { Text, View, Button, Alert } from 'react-native';

class Touches extends React.Component{
	static navigationOptions = {title:"learn about Touches"};
	_onPressButton() {
		Alert.alert('You tapped the button!');
	  }

	render(){
		return(
			<View>
				<Text>This is about the buttons</Text>
				<Button
				onPress={this._onPressButton}
				title="Press me! im button 1"
				/>
			</View>
		)
	}
}

export default Touches;