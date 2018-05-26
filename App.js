import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, Image, ImageBackground, FlatList, Button, TouchableOpacity, TouchableHighlight, Linking, WebView } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json 
import Modal from 'react-native-modal';
import newsModal from './modals/newsModal.js';

const politicalImg = 'https://www.archives.gov/files/research/military/american-revolution/pictures/images/revolutionary-war-007.jpg';
const usaImg = 'https://thumbs.dreamstime.com/z/usa-flag-3536091.jpg';
const usaImg2 = 'https://www.phcorner.net/data/attachment-files/2018/02/433393_B-PA-USFLAG---HIGH__42765.1477602952.380.380.jpg';

const uk = 'http://mysafeinfo.com/api/data?list=englishmonarchs&format=json';
const muck = 'https://www.muckrock.com/api_v1/news';
const breitbart = 'https://newsapi.org/v2/top-headlines?sources=breitbart-news&apiKey=8e78d3fb179c4f219bb0f4d4145bb303';

const alphaAPI = 'https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=MSFT,FB,AAPL&apikey=demo';
const newsAPI = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8e78d3fb179c4f219bb0f4d4145bb303';
const dividendAPI = 'https://newsapi.org/v2/everything?q=dividends&apiKey=8e78d3fb179c4f219bb0f4d4145bb303';

export default class App extends React.Component {
	 	 
	constructor(props){
		console.disableYellowBox = true; 
			super(props);
			this.state = { 
				isLoading: true,
				isModalVisible: false,
				modalVisible: false,
			}
		}
			
	
	componentDidMount (){ 
		this.fetchData();
    }
	 
	fetchData = async () => {
		const response = await fetch(alphaAPI);
		const newsResp = await fetch(newsAPI);
		const dividendResp = await fetch(dividendAPI);
		////////////////////////////////////////////////////
		const json = await response.json();
		const newsJson = await newsResp.json();
		const dividendJson = await dividendResp.json();
		this.setState({
			isLoading: false,
			dataSource: json['Stock Quotes'],
			dataNewsUS: newsJson.articles,
			dataDividend: dividendJson.articles
        });
    }		
	
	setModalVisible(visible){this.setState({modalVisible: visible});}
	 _showModal = () => this.setState({ isModalVisible: true })
	 _hideModal = () => this.setState({ isModalVisible: false })
	 
	render() {
		const resizeMode = 'cover';
		 
		return (
		<View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
        }}
      > 
      <ImageBackground
        style={{ flex: 1}}
        source={{ uri: politicalImg }}> 

			/// APP TITLE ON MAIN PAGE ///

			<Text style={{backgroundColor: 'black', color: 'white', fontSize: 28, fontWeight: 'bold', padding: 10, textAlign: 'center' }}>
			THE CRACKED EGG </Text> 
        
		<View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',   
      }}>
	  
		/// ROW 1 /////
		<View style={{ flex: 1, flexDirection: 'row'}}> 
		
			<View style={{width: 150, height: 150, margin: 15, backgroundColor: 'powderblue', borderColor: 'white', borderWidth: '5'}}>
			<TouchableOpacity onPress={ this._showModal }>
				<Text style={{textAlign: 'center', fontSize: 22}} >Breaking Business News</Text>
			</TouchableOpacity>	
			
			      
			<Modal transparent={false} isVisible={ this.state.isModalVisible }>
			  
				/// SHOW MODAL VIEW FOR NEWS
				<View style={{ flex: 1,  backgroundColor: 'lightgrey', padding: 5 }}>
				<ImageBackground style={{ flex: 1}} source={{ uri: usaImg2 }}> 	
				<WebView style="width: 100%; height: 100%;"></WebView>
				 <FlatList
					data={this.state.dataNewsUS}
					keyExtracto={(a,b)=>b}
					renderItem={({ item })=>
					
					<Text style={styles.results} onPress={ ()=> Linking.openURL(item.url) } >
					
						{'\u2022'} {item.title},  
					</Text>
					} 
				/>
				
				<FlatList
					data={this.state.dataDividend}
					keyExtracto={(d,e)=>e}
					renderItem={({ item })=>
						<Text style={{backgroundColor: 'yellow'}}>
						{'\u2022'} {item.title},  
						</Text>
					}
				/>
				</ImageBackground>
					<Button title="Clear Modal" border="black" color="#FF0000" onPress={ this._hideModal } />  
					
				</View>
			</Modal> 
			
			</View>
			
			<View style={{width: 150, height: 150, margin: 15, backgroundColor: 'skyblue', borderColor: 'white', borderWidth: '5'}}>
				<Text style={{textAlign: 'center', fontSize: 22}} onPress={() => console.log('Halts')}>Halts</Text>
			</View>  
		</View>
					
		/// ROW 2 ///
		<View style={{ flex: 1, flexDirection: 'row'}}> 
    
		    <View style={{width: 150, height: 150, margin: 15, backgroundColor: 'steelblue', borderColor: 'white', borderWidth: '5'}}>
				<Text style={{textAlign: 'center', fontSize: 22}} onPress={() => console.log('Bitcoin Updates')}> Bitcoin Updates
				
				
				</Text>
			</View>
      
            <View style={{width: 150, height: 150, margin: 15, backgroundColor: 'powderblue', borderColor: 'white', borderWidth: '5'}}>
				<Text style={{textAlign: 'center', fontSize: 22}} onPress={() => console.log('Long-Term Investments: REIT, ETAs and Dividend Stocks')}>Long-Term Investments</Text> 
			</View> 

		</View> /// END OF 2ND ROW
	
		/// ROW 3 ///
		<View style={{ flex: 1, flexDirection: 'row'}}> 
			
			<View style={{width: 150, height: 150, margin: 15, backgroundColor: 'skyblue', borderColor: 'white', borderWidth: '5'}}>
			<TouchableOpacity onPress={ this._showModal }>
				<Text style={{textAlign: 'center', fontSize: 22}} onPress={() => console.log('Options Call/Puts')}>Options</Text> 
			</TouchableOpacity>		
			</View>
			
			<View style={{width: 150, height: 150, margin: 15, backgroundColor: 'steelblue', borderColor: 'white', borderWidth: '5'}}>
			<TouchableOpacity onPress={ this._showModal }>
				<Text style={{textAlign: 'center', fontSize: 22}}>Intraday Alerts</Text> 
			</TouchableOpacity>	
			
			<Modal transparent={false} isVisible={ this.state.isModalVisible }>
			  
				/// SHOW MODAL VIEW FOR INTRADAY
				<View style={{ flex: 1,  backgroundColor: 'white', padding: 5 }}>
									
					 <FlatList data={this.state.dataSource} keyExtracto={(x,i)=>i} renderItem={({ item })=>
						<Text style={styles.results}>
						{item['1. symbol']}  ,  
						{item['2. price']} - - -  
						{item['4. timestamp']}
						</Text>
					}
				/>
		
				 <FlatList data={this.state.dataNewsUS} keyExtracto={(a,b)=>b} renderItem={({ item })=>
						<Text style={styles.results}>
						{item.author}  ,  
						</Text>
					}
				/>
				
					<Button title="Clear Modal" border="black" color="#FF0000" onPress={ this._hideModal } />  
				</View> /// END OF ALERTS VIEW
			</Modal> /// END OF ALERTS MODAL

			</View> /// END OF ALERTS BOX
			
		</View>	/// END OF 3RD ROW VIEW
			
		</View> /// END OF IMAGE VIEW
		
      </ImageBackground> /// MAIN BACKGROUND IMAGE 
	  
	  </View> /// END OF TOTAL APP VIEW 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
   button: {
      backgroundColor: '#00aeef',
      borderColor: 'red',
      borderWidth: 5,
      borderRadius: 15       
   }
});
