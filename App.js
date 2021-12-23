// React-native imports
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import DashBoard from './src/components/Dashboard';
import Alltasks from './src/components/Alltasks';
import Completed from './src/components/Completed';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
            
          },
          headerTintColor: '#03a9f4',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#fff',
            opacity: 0.5,
          },
        }}
      >

        <Stack.Screen 
          name="Dashboard" 
          component={DashBoard} 
        />

        <Stack.Screen 
          name="All tasks" 
          component={Alltasks} 
          options={{
            title: '',
          }
          }
        />

        <Stack.Screen 
          name="Completed" 
          component={Completed} 
          options={{
            title: '',
          }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;