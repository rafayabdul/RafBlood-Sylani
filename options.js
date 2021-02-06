import 'react-native-gesture-handler';
import React from 'react';
import {Text,View,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
import { useLinkProps } from '@react-navigation/native';


const Options=(props)=>{
    return(
        <View style={{flex:1,backgroundColor:"FFF2F2",}}>

        <View style={{flex:1,}}>
            <ImageBackground source={require('../assets/cover.jpg')} resizeMode={'stretch'} style={{flex:1,width:'100%',height:'100%',}}>
            <Text  style={{fontSize:30,fontWeight:'bold',color:'#EA0404',textAlign:'right',marginTop:40}} >  Raf's Foundation </Text>
        </ImageBackground>
               
        </View>
        <View style={{flex:4,backgroundColor:'#FFF2F2',alignItems:'center', justifyContent:'center'}}>
            
        <TouchableOpacity
            onPress={() =>props.navigation.navigate('Dform')}
         
            style={{
            
              height: 60,
              width: '70%',
              backgroundColor: '#2ac4c1',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop:-80,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                // fontWeight: '500',
              }}>
              BECOME a Donor
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={()=>h}
            onPress={() =>props.navigation.navigate('List_Print')}
            style={{
              height: 60,
              width: '70%',
              backgroundColor: '#2ac4c1',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop:20,
              
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                // fontWeight: '500',
              }}>
              SEARCH a Donor
            </Text>
          </TouchableOpacity>



        </View>

        </View>
    )
};
export default Options;