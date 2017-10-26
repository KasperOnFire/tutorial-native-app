import React from "react";
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView, ScrollView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import Basics from "./JS/Basics";
import WhatToDo from "./JS/WhatToDo";
import Props from "./JS/Props";
import State from "./JS/State";
import Styles from "./JS/Styles";
import HeightWidth from "./JS/HeightWidth";
import FlexBox from "./JS/FlexBox";
import TextInput from "./JS/TextInput";
import Touches from "./JS/Touches";
import ViewScroll from "./JS/ViewScroll";
import ListView from "./JS/ListViews";
import Networking from "./JS/Networking";

const Touchable = (props) => (
  <TouchableOpacity style={styles.button} onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>)



class HomeScreen extends React.Component {
  static navigationOptions = { title: 'Day1 Tutorial' };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView >
        <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by</Text>
        <Text style={{ textAlign: "center", fontSize: 20 }}>Kasper Ravn Breindal</Text>
        <Text style={{ textAlign: "center", fontSize: 16 }}>http://github.com/kasperonfire/tutorial-native-app</Text>
        <Touchable onPress={() => navigate('web')} title="What I have to do" />
        <Touchable onPress={() => navigate('basics')} title="Basics" />
        <Touchable onPress={() => navigate('props')} title="Props" />
        <Touchable onPress={() => navigate('state')} title="State" />
		<Touchable onPress={() => navigate('styles')} title="Styles" />
        <Touchable onPress={() => navigate('heightwidth')} title="HeightWidth" />
		<Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
		<Touchable onPress={() => navigate('textinput')} title="TextInput" />
		<Touchable onPress={() => navigate('Touches')} title="Touches" />
		<Touchable onPress={() => navigate('ViewScroll')} title="ViewScroll" />
        <Touchable onPress={() => navigate('listview')} title="ListView" />
        <Touchable onPress={() => navigate('networking')} title="Networking" />
      </ScrollView>
    )
  }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
  Home: { screen: HomeScreen },
  basics: { screen: Basics },
  props: { screen: Props },
  web: { screen: WhatToDo },
  state: { screen: State },
  styles: { screen: Styles },
  heightwidth: { screen: HeightWidth },
  flexbox: { screen: FlexBox },
  listview: { screen: ListView },
  ViewScroll: { screen: ViewScroll },
  networking: { screen: Networking },
  textinput: {screen: TextInput },
  Touches: {screen: Touches }
});

const styles = StyleSheet.create({
  button: {
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 7,
    fontSize: 18,
    fontWeight: "bold",
    color: 'white'
  }
})