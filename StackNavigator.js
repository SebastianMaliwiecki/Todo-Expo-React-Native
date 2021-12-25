// React-native imports
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import DashBoard from './src/components/Dashboard';
import Alltasks from './src/components/Alltasks';
import Completed from './src/components/Completed';
import Form from './src/components/Form';

const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Dashboard"
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
          options={{  }}
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

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name="Form"
            component={Form}
            options={{ title: 'Add task', color: 'rgb(29,29,29)', }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
