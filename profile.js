// import React,{useState} from 'react';
// import {Text,View,Alert,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView,} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import database from '@react-native-firebase/database';


// const Profile_Data=(props)=>{
//     const [firstName,setFirstName]=useState("");
//     const [lastName,setLastName]=useState("");
//     const [country,setCountry]=useState("");
//     const [city,setCity]=useState("");
//     const [gender,setGender]=useState("");
//     // const [lastName,setLastName]=useState("");
//     var message=''
//     const success='Congrats!'
//     const failure='OOPS!'
//     const [id , setId]=useState("")

//     auth().onAuthStateChanged((user) => {
//         if (user !==undefined) {
//         setId(user.uid)
//         //  console.log(user.uid)
//         // });
//         }
//       })

//     const Alertfunc = (errorMess,title) =>
//       Alert.alert(
//         title,
//         errorMess,
//         [
//           {
//             text: "OK",
//             // onPress: () => console.log("Cancel Pressed"),
//             // style: "cancel"
//           }
          
//         ],
//         { cancelable: false }
//       );

//       const Save_Data=()=>{
//         let User={
//           firstName,
//           lastName,
//           country,
//           city,
//           gender,
          
//         }
//         database().ref('userid').push(User)
//       }



//       const Match_Prof=()=>{
        
//         let fn=firstName
//         let ln=lastName
//         let con=country
//         let cit=city
//         let gen=gender
    
//         // if(pass===conpas)
        
//           if(fn!=''){
//             if(ln!=''){
//               if(con!=''){ 
//                   if(cit!=''){ 
//                       if(gen=!''){ 
//                 Save_Data()
//                 props.navigation.navigate('LogIN')
//                 message='Account Successfully Created'
//                 Alertfunc(message,success)
//                       }
//                       else{
//                         message='Gender not written'
//                         Alertfunc(message,failure)
//                       }
//                   }
//                   else{
//                     message='City not written'
//                     Alertfunc(message,failure)
//                   }
//               }
//               else{
//                 message='Country not written'
//                 Alertfunc(message,failure) 
//               }
              
//             }
//             else{
//               message='Last Name not written'
//               Alertfunc(message,failure)
//             }
//           }
//           else{
//             message='First Name not written'
//             Alertfunc(message,failure)
//           }
//         }
    
//     return(


//         <View style={{backgroundColor:'#FFF2F2',alignItems:'center'}}>

//         <ScrollView style={{width:'100%'}}>
//         <TextInput
//           value={firstName}
//           onChangeText={text=>setFirstName(text)}
//             keyboardType="default"
//             placeholderTextColor="#817f81"
//             placeholder="First Name"
//             style={{
//               alignSelf: 'center',
//               width: '80%',
//               marginTop: 30,
//               paddingLeft: 10,
//               height: 60,
//               borderColor: '#252525',
//               borderRadius: 10,
//             //   fontWeight: '500',
//               fontSize: 20,
//               padding: 5,
//               backgroundColor: 'white',
//               borderWidth: 1,
//             }}
//           />

//           <TextInput
//             value={lastName}
//             onChangeText={text=>setLastName(text)}
//             placeholderTextColor="#817f81"
//             placeholder="Last Name"
//             style={{
//               alignSelf: 'center',
//               width: '80%',
//               marginTop: 10,
//               paddingLeft: 10,
//               height: 60,
//               borderColor: '#252525',
//               borderRadius: 10,
//             //   fontWeight: '500',
//               fontSize: 20,
//               padding: 5,
//               backgroundColor: 'white',
//               borderWidth: 1,
//             }}
//           />
//           <TextInput
//           value={country}
//           onChangeText={text=>setCountry(text)}
      
//             placeholderTextColor="#817f81"
//             placeholder="Country"
//             // keyboardType="email-address"
//             style={{
//               alignSelf: 'center',
//               width: '80%',
//               marginTop: 10,
//               paddingLeft: 10,
//               height: 60,
//               borderColor: '#252525',
//               borderRadius: 10,
//             //   fontWeight: '500',
//               fontSize: 20,
//               padding: 5,
//               backgroundColor: 'white',
//               borderWidth: 1,
//             }}
//           />
//           <TextInput
//             value={city}
//             onChangeText={(text)=>setCity(text)}
          
//             placeholderTextColor="#817f81"
//             placeholder="City"
//             // secureTextEntry={true}
//             style={{
//               alignSelf: 'center',
//               width: '80%',
//               marginTop: 10,
//               paddingLeft: 10,
//               height: 60,
//               borderColor: '#252525',
//               borderRadius: 10,
//             //   fontWeight: '500',
//               fontSize: 20,
//               padding: 5,
//               backgroundColor: 'white',
//               borderWidth: 1,
//             }}
//           />
//           <TextInput
//           value={gender}
//           onChangeText={text=>setGender(text)}
//             placeholderTextColor="#817f81"
//             placeholder="Male/Female"
//             secureTextEntry={true}
//             style={{
//               alignSelf: 'center',
//               width: '80%',
//               marginTop: 10,
//               paddingLeft: 10,
//               height: 60,
//               borderColor: '#252525',
//               borderRadius: 10,
//             //   fontWeight: '500',
//               fontSize: 20,
//               padding: 5,
//               backgroundColor: 'white',
//               borderWidth: 1,
//             }}
//           />
            
//           <TouchableOpacity
//             onPress={Match_Prof}
         
//             style={{
//               height: 60,
//               width: '40%',
//               backgroundColor: '#2ac4c1',
//               justifyContent: 'center',
//               alignSelf: 'center',
//               alignItems: 'center',
//               borderRadius: 8,
//               marginTop:10,
//             }}>
//             <Text
//               style={{
//                 color: 'white',
//                 fontSize: 22,
//                 // fontWeight: '500',
//               }}>
//               Submit
//             </Text>
//           </TouchableOpacity>

          
//           </ScrollView>

          
//         </View>



//     )


// }
// export default Profile_Data;