import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppTab } from './appTab.routes';

const { Navigator, Screen }= createNativeStackNavigator();

export function AppStack(){
    return(
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name='Home' component={AppTab}/>
            
        </Navigator>
    )
}
