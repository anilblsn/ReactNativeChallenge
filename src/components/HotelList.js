// HotelList.js
import React from 'react';
import { View, Text, FlatList, ImageBackground, StyleSheet } from 'react-native';

const HotelList = ({ data }) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      data={data}
      renderItem={({ item }) => (
        <View style={{ backgroundColor: '#fff', margin: 10 ,borderRadius:15,}}>
          <ImageBackground resizeMode='cover' source={{ uri: item.photoPath }} style={styles.image}>
            
            <View style={{backgroundColor:'green',alignSelf: 'flex-end',width:35,height:35,margin:15,alignItems:'center',justifyContent:'center',borderRadius:10}}>
              <Text style={styles.customerScore}>{item.customerScore}</Text>
            </View>
            {item.hasMinistryOfHealthCertificate && <Text>Sağlık Sertifikalı</Text>}
          </ImageBackground>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
            <View>
              <Text style={styles.hotelName}>{item.hotelName}</Text>
              <Text>{`${item.areaName}, ${item.subAreaName}`}</Text>
              <View style={{borderWidth:1,borderColor:'#5a7d8f',alignSelf: 'flex-start',padding:3,alignItems:'center',justifyContent:'center'}}>
                <Text style={styles.accommodation}>{item.accommodation}</Text>
              </View>
              <Text>{item.campaignName}</Text> 
            </View>
            <View style={{alignItems:'center', justifyContent:'center'}}>
              <Text style={styles.discountPrice}> {`₺${(item.price / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</Text>
              <Text style={styles.price}>{`₺${(item.discountPrice / 100).toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</Text>
              <Text>gecelik kişi başı</Text>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item) => item.hotelId.toString()}
    />
  );
};

const styles = StyleSheet.create({
  hotelName:{
    color:'#26516a',
    fontWeight:'bold',
    fontSize:18
  },
  image:{
    height: 125,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    overflow: 'hidden'
  },
  price:{
    color:'#53a8db',
    fontSize:18
  },
  discountPrice:{
    color:'red',
    fontSize: 15,
    textDecorationLine: 'line-through'
  },
  accommodation:{
    color:'#5a7d8f'
  },
  campaignName:{
    color:'green',
  },
  customerScore:{
    color:'#fff',
    fontSize:16
  }
})


export default HotelList;
