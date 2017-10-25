import React from "react";
import { Text, View } from 'react-native';

class FlexBox extends React.Component{
	static navigationOptions = {title:"learn about FlexBox"};
	render(){
		return(
			<View>
				<Text>FlexBox - column</Text>
				<View style={{flex: 1, flexDirection: 'column'}}/>
				<View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'green'}} />
				<View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
			</View>
		)
	}
}

export default FlexBox;