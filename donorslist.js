import database from '@react-native-firebase/database';
import React,{useState} from 'react';
import {Text,View,Alert,StyleSheet,TextInput,Image,ImageBackground,TouchableOpacity,ScrollView,KeyboardAvoidingView, Modal,} from 'react-native';
import { color, exp } from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';
import Modal_Screen from './modal'


const List_Print=(props)=>{

    const [selectedValue, setSelectedValue] = useState("");
    const [fullName,setFullName]=useState("");
    const [weight,setWeight]=useState();
    const [age,setAge]=useState();
    const [number,setNumber]=useState();
    const [email,setEmail]=useState("");
    const [data , setData] = useState([]);
    // var ap=['A+','A-','AB+','AB-'];
    // var an=['A-','AB-'];
    // var bp=['B+','B-','AB+','AB-'];
    // var bn=['B-','AB-'];
    // var ap=['A+','A-','AB+','AB-'];
    // var abp=['AB+','AB-'];
    // var abn=['AB-'];
    // var op=['A+','A-','AB+','AB-','B+','B-','O+','O-'];
    // var on=['A-','B-','AB-','O-'];

    // var blood=''
    // var matched=false

    // const Apply_Filter=()=>{
    //   if(selectedValue!=undefined && selectedValue!='null'){
    //     blood=selectedValue
        

    //   }
    // }
 

    // const Filtering=()=>{
    
    // }

    console.log(selectedValue)


    database()
  .ref('Donors')
  .on('value', snapshot => {
    const datas=snapshot.val();
    let data=Object.values(datas)
   setData( data );
   
  });
  
  return(
    <View style={{flex:1}}>
      <View style={{
        flex:4,
        backgroundColor:'#f7ddcd',
        paddingTop:20
        

      }}>
          <ScrollView>
            
            {
              

          data.map((v,i)=>{
            return(
              
              
       v.bloodGroup===selectedValue?
         <Text key={i} style={{paddingLeft:30, fontWeight:"bold", fontSize:16,color:'green'}} > Name: {v.fullName} {'\n'} Email:  {v.email} {'\n'} BloodGroup: {v.bloodGroup} {'\n'} Contact:{v.number}</Text>
       :
       <Text key={i} style={{paddingLeft:30, fontWeight:"bold", fontSize:16,color:'black'}} > Name: {v.fullName} {'\n'} Email:  {v.email} {'\n'} BloodGroup: {v.bloodGroup} {'\n'} Contact:{v.number}</Text>
            )
              
     })
   
     
    }
     
    
            </ScrollView>
      </View>
            <View style={{
              flex:1,
              // flexWrap:'wrap',
              // justifyContent:'space-between',
              alignSelf:'center'
            }}>
              <Text style={{fontSize:17,alignSelf:'center',paddingTop:5,fontWeight:"bold"}}>Filter:</Text>
              <Picker
        selectedValue={selectedValue}
        
        prompt={'Choose Blood Group'}
        // mode={'dropdown'}        
        style={{ height: 30, width: 150, color:'red',alignSelf:'center', }}
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
            // onPress={Modal_Screen()}
            onPress={() =>props.navigation.navigate('Modal_Screen')}
            style={{
              height: 60,
              width: '100%',
              backgroundColor: '#2ac4c1',
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: 8,
              marginTop:10,
              marginBottom:10,
              padding:10
              
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 22,
                // fontWeight: '500',
              }}>
              SEE Comapatibilty Table
            </Text>
          </TouchableOpacity>

            </View>

      </View>
  )

  
}




export default List_Print;