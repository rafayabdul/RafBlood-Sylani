import React,{useState} from 'react';
import {Text,View,Alert,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView,} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';



const SignUp=(props)=>{

  const [firstName,setFirstName]=useState("");
  const [lastName,setLastName]=useState("");

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confirmPass,setConfirmPass]=useState("");
  
  
  var pass=''
  var conpas=''
  var message=''
  const success='Congrats!'
  const failure='OOPS!'
  // console.log(password,confirmPass)
  // const [id , setId]=useState("")

  
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


      const Save_Data=()=>{
        let User={
          firstName,
          lastName,
          email,
          
        }
        database().ref('Users').push(User)
      }

    //   const Marking_User=()=>{

      
    //   auth().onAuthStateChanged((user) => {
    //     if (user !==undefined) {
    //     setId(user.uid)
    //     //  console.log(user.uid)
    //     // });
    //     }
    //   })
    //   return(id)
    // }

 


  const CreateUser=()=>{
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    
    Save_Data()
    message='Account Successfully Created! login to continue!'
    Alertfunc(message,success);
    props.navigation.navigate('LogIN')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      message='That email address is already in use!'
      Alertfunc(message,failure);
    }

    if (error.code === 'auth/invalid-email') {
      message='That email address is invalid!'
      Alertfunc(message,failure);
    }

    console.error(error);
  });
  }

  const Match_Pass=()=>{
    pass=password
    conpas=confirmPass
    
    let el=email
    let fn=firstName
    let ln=lastName

    // if(pass===conpas)
    
      
        if(fn!=''){   
          if(ln!=''){       
          if(el!=''){
            if(pass===conpas){
            CreateUser()
            }
            else{
              message='Your Password not matched'
              Alertfunc(message,failure)
            }
          }
          else{
            message='Email Address not written'
            Alertfunc(message,failure)
          }
        }else{
          message='Last Name not written'
          Alertfunc(message,failure)
        }
      }else{
        message='First Name not written'
        Alertfunc(message,failure)
      }
        }
      
     
      
      


    
    
  

    return(
        
        <View style={{flex:1,backgroundColor:"FFF2F2"}}>

        <View style={{flex:1,}}>
            <ImageBackground source={require('../assets/cover.jpg')} resizeMode={'stretch'} style={{flex:1,width:'100%',height:'100%',}}>
            <Text  style={{fontSize:30,fontWeight:'bold',color:'#EA0404',textAlign:'right',marginTop:40}} >  Raf's Foundation </Text>
        </ImageBackground>
               
        </View>
        
        <View style={{flex:4,backgroundColor:'#FFF2F2',alignItems:'center'}}>

        <ScrollView style={{width:'100%'}}>

        <TextInput
          value={firstName}
          onChangeText={text=>setFirstName(text)}
            keyboardType="default"
            placeholderTextColor="#817f81"
            placeholder="First Name"
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 30,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />

          <TextInput
            value={lastName}
            onChangeText={text=>setLastName(text)}
            placeholderTextColor="#817f81"
            placeholder="Last Name"
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 10,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />

          <TextInput
          value={email}
          onChangeText={text=>setEmail(text)}
      
            placeholderTextColor="#817f81"
            placeholder="Enter Email"
            keyboardType="email-address"
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 10,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />
          <TextInput
            value={password}
            onChangeText={(text)=>setPassword(text)}
          
            placeholderTextColor="#817f81"
            placeholder="Enter Password"
            secureTextEntry={true}
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 10,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />
          <TextInput
          value={confirmPass}
          onChangeText={text=>setConfirmPass(text)}
            placeholderTextColor="#817f81"
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={{
              alignSelf: 'center',
              width: '80%',
              marginTop: 10,
              paddingLeft: 10,
              height: 60,
              borderColor: '#252525',
              borderRadius: 10,
            //   fontWeight: '500',
              fontSize: 20,
              padding: 5,
              backgroundColor: 'white',
              borderWidth: 1,
            }}
          />
            
          <TouchableOpacity
            onPress={Match_Pass}
         
            style={{
              height: 60,
              width: '40%',
              backgroundColor: '#2ac4c1',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop:10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                // fontWeight: '500',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>


          <Text style={{fontSize:18,fontStyle:'italic',
              textAlign:'center',color:'blue',marginTop:10}}
              onPress={() =>props.navigation.navigate('LogIN')}
              >
                  Already a Member? LogIn Now!
              </Text>
          
          </ScrollView>

          
        </View>
        
        </View>
        
    )

}

export default SignUp;
