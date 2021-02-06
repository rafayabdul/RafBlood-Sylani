
// import 'react-native-gesture-handler';
// import * as React from 'react';
import  React,{useState} from 'react';
import {Text,Alert,View,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';






const Home =(props)=>{
  const [logemail,setLogemail]=useState("");
  const [logpassword,setLogpassword]=useState("");
  var message=''
  const success='Congrats!'
  const failure='Sorry!'

  const Alertfunc = (errorMess,title) =>
      Alert.alert(
        title,
        errorMess,
        [
          {
            text: "OK",
            // onPress: () => console.log("Cancel Pressed"),
            // style: "cancel"
          }
          
        ],
        { cancelable: false }
      );



  const sign_in =()=>{

 
  
    auth()
    .signInWithEmailAndPassword(logemail, logpassword)
    .then(() => {
     props.navigation.navigate("Options")
      // console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/wrong-password') {
        message='Wrong Password!'
        Alertfunc(message,failure);
      }
  
      if (error.code === 'auth/invalid-email') {
        message='That email address is invalid!'
        Alertfunc(message,failure);
      }

      if (error.code === 'auth/user-not-found') {
        message='Not registerd email ! please enter registered email OR signUp Now if new user'
        Alertfunc(message,failure);
      }
      if (error.code === 'auth/unknown') {
        message='No Internet Connection'
        Alertfunc(message,failure);
      }
  
      console.error(error);
    });
  }


    return(
        
        <View style={{flex:1}}>
            <View style={{flex:1,}}>
            <ImageBackground source={require('../assets/cover.jpg')} resizeMode={'stretch'} style={{flex:1,width:null,height:null,}}>
      <Text  style={{fontSize:30,fontWeight:'bold',color:'#EA0404',textAlign:'right',marginTop:40}} >  Raf's Foundation </Text>
    </ImageBackground>
               
            </View>
            
            <View style={{flex:4,backgroundColor:'#FFF2F2',alignItems:'center',flexDirection:'column'}}>
            
                <Text style={{fontSize:35,fontWeight:'bold',marginTop:55 }}>
                    Virtual Blood Bank!
                </Text>

               

                <TextInput
           value={logemail}
           onChangeText={text=>setLogemail(text)}
            placeholderTextColor="#817f81"
            placeholder="Enter Email"
            keyboardType="email-address"
            style={{
              alignSelf: 'center',
              width:'80%',
              marginTop: 50,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: 'bold',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />


<TextInput
          value={logpassword}
          onChangeText={text=>setLogpassword(text)}
            placeholderTextColor="#817f81"
            placeholder="Enter Password"
            secureTextEntry={true}
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 20,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
              fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />


<TouchableOpacity
          onPress={sign_in}
         
            style={{
              height: 60,
              width: '40%',
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
                fontWeight: '500',
              }}>
              Login
            </Text>
          </TouchableOpacity>

              <Text style={{fontSize:18,fontStyle:'italic',
              textDecorationLine:'underline',color:'blue',marginTop:10}}
              onPress={() =>props.navigation.navigate('SignUp')}
              >
                  New Member? SignUp Now!
              </Text>
            </View>
            
            
        </View>
        
    )

};



export default Home;