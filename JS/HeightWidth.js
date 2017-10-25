import React from "react";
import { Text, View } from 'react-native';

class HeightWidth extends React.Component{
	static navigationOptions = {title:"learn about Height and Width"};
	render(){
		return(
			<View>
				<Text>This is about the Height and the Width of the view</Text>
				<View style={{width: 150, height: 150, backgroundColor:"red"}}/>
				<View style={{width: 100, height: 100, backgroundColor:"yellow"}}/>
				<View style={{width: 50, height: 50, backgroundColor:"green"}}/>
			</View>
		)
	}
}

export default HeightWidth;