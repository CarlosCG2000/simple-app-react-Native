
import { Tabs } from "expo-router";

import { HomeIcon, InfoIcon } from "../../components/Icons";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "white",
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 0,
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 90,
                },
            }}
        >
            <Tabs.Screen
                name="app"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />,
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    title: "Sobre el proyecto",
                    tabBarIcon: ({ color }) => <InfoIcon color={color} />,
                }}
            />
        </Tabs>
    );
}