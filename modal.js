import 'react-native-gesture-handler';
import React,{useState,useEffect}  from 'react';
import {Text,Alert,View,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
// import DropDown from './dropdown'
import {Picker} from '@react-native-picker/picker';

const Modal_Screen=(props)=>{
  return(   
  < View style={{
    flex:1,
    justifyContent:'center',
    backgroundColor:"FFF2F2"
  }}>
  <Image
    resizeMode={'stretch'}
        style={{
          alignSelf:'center',
          width: '100%',
          height:'60%'

        }}
        source={require('../assets/capture.png')}
      />
  </View>

    
)


}
export default Modal_Screen;