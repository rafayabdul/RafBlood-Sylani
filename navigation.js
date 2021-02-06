import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home'
import SignUp from './signup'
import Options from './options'
import Dform from "./donateform";
import List_Print from "./donorslist"
import Modal_Screen from './modal'
import {Image} from 'react-native'
// import Modal_Screen from './modal';

// function LogoTitle() {
//    <Image
//       style={{ width: 50, height: 50 }}
//       source={require('../assets/blood.jpg')}
//     />
//   );
// }


const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        
        // headerStyle: {
          
        // },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontWeight: 'bold',
          
        },
        headerTitleAlign:'center',
        // headerTransparent:false
        
      }}
      >
        <Stack.Screen
          name="LogIN"
          component={Home}
          options={{ 
            title:'Welcome To',
            headerTransparent:true,
             }}
        />
        <Stack.Screen name="SignUp" component={SignUp} options={{ 
            title:'SignUP Form'}} />
        <Stack.Screen name="Options" component={Options} options={{ 
            title:'Continue..',}} />
        <Stack.Screen name="List_Print" component={List_Print} options={{ 
            title:'Available Donors',}} />
        <Stack.Screen name="Dform" component={Dform}
         options={{ 
          title:'Doner Information',
          // headerTransparent:true,
           }}
        />
        
        <Stack.Screen name="Modal_Screen" component={Modal_Screen} headerMode="none" options={{ 
            title:'Compatiblity Table',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;