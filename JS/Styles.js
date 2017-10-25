import React from "react";
import { Text, View, StyleSheet } from 'react-native';

class Styles extends React.Component {
	static navigationOptions = { title: "Learn about Styles" }
	render() {
	  return (
		<View>
		  <Text style={styles.blue}>This is all about styles</Text>
		  <Text style={styles.red}>This is all about styles, but in red, and smaller</Text>
		</View>
	  )
	}
  }

const styles = StyleSheet.create({
blue: {
	color: "blue",
	fontSize: 30
},
red: {
	color:"red",
	fontSize:20
}
});

  export default Styles;