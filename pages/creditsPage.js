import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
	  <Text style={styles.headerContainer}>The below API engines were used to power The Cracked Egg application.
	  </Text>
	  
      <Text style={styles.txtContainer} nPress={ ()=> Linking.openURL('https://www.alphavantage.co/documentation/')>
	  Alpha Vantage {"\n"}
	  </Text>
	  
	 <Text style={styles.txtContainer} nPress={ ()=> Linking.openURL('http://www.nasdaqtrader.com/rss.aspx?feed=tradehalts')>
	  NASDAQ Trader {"\n"}
	  </Text>
	  
	   <Text style={styles.txtContainer} nPress={ ()=> Linking.openURL('https://iextrading.com/developer/docs/#system-event')>
	  The Investors Exchange {"\n"}
	  </Text>
	  
	   <Text style={styles.txtContainer} nPress={ ()=> Linking.openURL('https://newsapi.org/docs/endpoints/everything')>
	   News API {"\n"}
	  </Text>

    );
  }
}


/// STYLESHEET ///
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	padding: 15,
  },
   headerContainer: {
	margin: 10,
	padding: 10,  
   },
   txtContainer: {
      backgroundColor: 'lightgray',
      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 15    
	  color: 'black',
   }
});
