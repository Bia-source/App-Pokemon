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
        >
            <Screen name="Poke" component={Home} options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="game-controller" size={size} color={color} />
            }} />
            <Screen name="Welcome" component={Welcome} options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
            }} />
            <Screen name="Profile" component={Welcome} options={{
                tabBarIcon: ({ size, color }) => <AntDesign name="profile" size={size} color={color} />
            }} />
        </Navigator>
    )
}
