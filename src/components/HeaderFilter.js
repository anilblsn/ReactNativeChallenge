import React from 'react'
import { View, Text ,Image,TouchableOpacity, StyleSheet} from 'react-native'

const HeaderFilter = ({onPress}) => {
  return (
    <View style={{backgroundColor:'#fff', flexDirection:'row', justifyContent:'space-between', alignItems:'center',height:50}}>
      <View style={{width:'50%',flexDirection:'row',alignItems:'center',justifyContent:'center',margin:10}}>
        <Image style={{height:15,width:15}} source={require('../assets/sirala.png')}/>
        <Text style={styles.headerText}>Sırala</Text>
      </View>
      <TouchableOpacity onPress={onPress}  style={{width:'50%',flexDirection:'row',alignItems:'center',justifyContent:'center',}}>
        <Image style={{height:15,width:15}} source={require('../assets/sirala.png')}/>
        <Text style={styles.headerText}>Filtrele</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  headerText:{
    color:'#53a8db',
    fontWeight:'bold',
    fontSize:16,marginLeft:5
  },
  
})


export default HeaderFilter