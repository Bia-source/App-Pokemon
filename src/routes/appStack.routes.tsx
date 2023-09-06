import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTab } from './appTab.routes';
import { Home } from '@screens/Home';
import { Welcome } from '@screens/Welcome';
import { Profile } from '@screens/Profile';

const { Navigator, Screen }= createNativeStackNavigator();

export function AppStack(){
    return(
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name='home' component={AppTab}/>
            <Screen name='pokeStack' component={Home}/>
            <Screen name='welcomeStack' component={Welcome}/>         
            <Screen name='profileStack' component={Profile}/>         
        </Navigator>
    )
}
