import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Welcome } from "@screens/Welcome";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTab() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#ed5463",
            }}
            initialRouteName="welcome"
        >
            <Screen name="poke" component={Home} options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="game-controller" size={size} color={color} />,
                tabBarLabel: "Poke"
            }} />
            <Screen name="welcome" component={Welcome} options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
                tabBarLabel: "Welcome"
            }} />
            <Screen name="profile" component={Welcome} options={{
                tabBarIcon: ({ size, color }) => <AntDesign name="profile" size={size} color={color} />,
                tabBarLabel: "Profile"
                
            }} />
        </Navigator>
    )
}
