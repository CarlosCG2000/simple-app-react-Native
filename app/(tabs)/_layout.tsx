import { Tabs } from "expo-router";

import { HomeIcon, InfoIcon, ListIcon } from "../../components/Icons";

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
      <Tabs.Screen // Tab de peliculas,inicio siempre es el Index
        name="index"
        options={{
          title: "Peliculas",
          tabBarIcon: ({ color }) => <ListIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="app"
        options={{
          title: "Perfil",
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
