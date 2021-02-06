import 'react-native-gesture-handler';
import React,{useState,useEffect}  from 'react';
import {Text,Alert,View,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView} from 'react-native';
// import DropDown from './dropdown'
import {Picker} from '@react-native-picker/picker';
import database, { firebase } from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import SignUp from './signup'



const Dform=(props)=>{
  const [selectedValue, setSelectedValue] = useState();
  const [fullName,setFullName]=useState("");
  const [weight,setWeight]=useState('');
  const [age,setAge]=useState('');
  const [number,setNumber]=useState('');
  const [email,setEmail]=useState('');
  const [data , setData] = useState([])
  const [userEmail, setUserEmail]=useState('')
  var message=''
  var bloodGroup=''
  const success='Congrats!'
  const failure='OOPS!'
  
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
          fullName,
          age,
          email,
          weight,
          number,
          bloodGroup,
          
        }
        database().ref('Donors').push(User)
      }
  
auth().onAuthStateChanged((user) => {
  if (user !==undefined) {
  setUserEmail(user.email)
  //  console.log(user.uid)
  // });
  }
})




const Verify=()=>{
  if(fullName!=''){
    if(email!=''){ 
    if(email==userEmail){
      if(weight!=''){
        if(age!=''){ 
        if(age>17){
          if(number!=''){
            if(number.length==11){ 
            if(selectedValue!=undefined && selectedValue!='null'){
              bloodGroup=selectedValue
              Save_Data()
              
              props.navigation.navigate('List_Print')
              message='Welcome to Rafs Doner Family! Progressing Towards A Good Cause!'
              Alertfunc(message,success)
            }else{
              message='BloodGroup not Selected!'
            Alertfunc(message,failure)
            }
          }else{
            message='Not Valid Number(must have 11 digits)'
            Alertfunc(message,failure)
          }
          }else{
            message='Number not written'
            Alertfunc(message,failure)
          }
        }else{
          message='You are under aged'
          Alertfunc(message,failure)
        }
      }else{
        message='Age not written'
            Alertfunc(message,failure)
      }
      }else{
        message='weight not written'
        Alertfunc(message,failure)
      }
    }else{
      message='Email Address must be registered'
      Alertfunc(message,failure)
    }
  }else{
    setEmail(userEmail)
  }

  }else{
    message='Full Name not written'
    Alertfunc(message,failure)
  }

}








    return(
        <View style={{flex:1,backgroundColor:"FFF2F2"}}>

        <View style={{flex:1,}}>
            <ImageBackground source={require('../assets/cover.jpg')} resizeMode={'stretch'} style={{flex:1,width:null,height:null,}}>
        <Text  style={{fontSize:30,fontWeight:'bold',color:'#EA0404',textAlign:'right',marginTop:40}} >  Raf's Foundation </Text>
        </ImageBackground>
               
        </View>
        
        <View style={{flex:4,backgroundColor:'#FFF2F2',alignItems:'center'}}>
        <ScrollView style={{width:'100%'}}>

        <TextInput
              onChangeText={(text)=>setFullName(text)}
              keyboardType="default"
              placeholderTextColor="#817f81"
              placeholder="Full Name"
              style={{
                alignSelf: 'center',
                width: '80%',
                margin: 5,
                paddingLeft: 10,
                height: 60,
                borderColor: '#252525',
                borderRadius: 10,
                fontWeight: '500',
                fontSize: 20,
                padding: 5,
                backgroundColor: 'white',
                borderWidth: 1,
                marginTop:50
              }}
            />
  
            
            <TextInput

            onChangeText={(text)=>setEmail(text)}
            defaultValue={userEmail}
              placeholderTextColor="#817f81"
              placeholder="Enter Email"
              keyboardType="email-address"
              style={{
                alignSelf: 'center',
                width: '80%',
                margin: 5,
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
            <TextInput
              onChangeText={(text)=>setWeight(text)}
              placeholderTextColor="#817f81"
              placeholder="wieght in KGs"
              keyboardType={'decimal-pad'}
              style={{
                alignSelf: 'center',
                width: '80%',
                margin: 5,
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
            <TextInput
            onChangeText={(text)=>setAge(text)}
              placeholderTextColor="#817f81"
              placeholder="Age(must be above 17)"
              keyboardType={'number-pad'}
              
              style={{
                alignSelf: 'center',
                width: '80%',
                margin: 5,
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
            <TextInput
            onChangeText={(text)=>setNumber(text)}
              placeholderTextColor="#817f81"
              placeholder="Number"
              keyboardType={'number-pad'}
              style={{
                alignSelf: 'center',
                width: '80%',
                margin: 5,
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



<Picker
        selectedValue={selectedValue}
        
        prompt={'Choose Blood Group'}
        // mode={'dropdown'}        
        style={{ height: 50, width: 150, color:'red',alignSelf:'center' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="null" value="null"/>
        <Picker.Item label="A+" value="A+"  />
        <Picker.Item label="A-" value="A-" />
        <Picker.Item label="B+" value="B+" />
        <Picker.Item label="B-" value="B-" />
        <Picker.Item label="AB+" value="AB+" />
        <Picker.Item label="AB-" value="AB-" />
        <Picker.Item label="O+" value="O+" />
        <Picker.Item label="O-" value="O-" />
      </Picker>

  
            <TouchableOpacity
            
            onPress={Verify}
              style={{
                height: 60,
                width: '40%',
                backgroundColor: '#2ac4c1',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginTop:5,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '500',
                }}>
                Submit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={()=>props.navigation.navigate("Options")}
              style={{
                height: 60,
                width: '40%',
                backgroundColor: '#2ac4c1',
                justifyContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                borderRadius: 8,
                marginTop:5,
                marginBottom:35
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 22,
                  fontWeight: '500',
                  
                }}>
                Back
              </Text>
            </TouchableOpacity>
            </ScrollView>
        </View>

        </View>
    )
}
export default Dform;