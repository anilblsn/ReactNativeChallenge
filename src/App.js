import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet ,TextInput, ActivityIndicator, View} from 'react-native';
import axios from 'axios';
import HeaderFilter from './components/HeaderFilter';
import HotelList from './components/HotelList';

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isLoad, setIsLoad] = useState(false);


  useEffect(() => {
    const fetchHotels = async () => {
      try {
        setIsLoad(true)
        const response = await axios.get('https://gist.githubusercontent.com/yasaricli/de2282f01c739a5c8fcbffbb9116e277/raw/949b2393642747d2f54edf0ce659f27a69c87690/hotels.json');
        setHotels(response.data.resultObject.hotelList);
        setIsLoad(false)
      } catch (error) {
        console.error('Hata oluştu:', error);
        setIsLoad(true)
      }
    };
  
    fetchHotels();
  }, []);

  const filteredHotels = searchText.length === 0
    ? hotels
    : hotels.filter(hotel => 
        hotel.hotelName.toLowerCase().includes(searchText.toLowerCase())
      );

  const toggleInput = () => {
    setShowInput(prevShowInput => !prevShowInput);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderFilter onPress={toggleInput}/>
      {showInput ? (<TextInput 
        style={{padding:5,backgroundColor:'#fff'}}
        placeholder="Hotel ara..."
        value={searchText}
        onChangeText={setSearchText}
      />): null}
      {isLoad ? (
        <View style={{flex:1,alignItems:'center', justifyContent:'center'}}>
          <ActivityIndicator size={'large'}/>
        </View>
      ):(
        <HotelList data={filteredHotels} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: '#e1e6ed' 
  },
  headerText:{
    color:'#53a8db',
    fontWeight:'bold',
    fontSize:16,
    marginLeft:5
  },
  
})

export default App;
