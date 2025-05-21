import { View, Text, Pressable } from "react-native";
import { Link, Slot, Stack } from "expo-router";
import { LogoMarvel } from "../components/Logos";
import { InfoIcon } from "../components/Icons";

export default function Layout() {
    return (
        <View className="flex-1">
            {/* <Text className="text-white text-2xl">Hola</Text> */}
            <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "black" },
                headerTintColor: "white",
                headerTitle: "",
                // headerTitleStyle: { fontWeight: "bold" },
                // headerTitleAlign: "center",
                // headerShadowVisible: false,
                headerLeft: () => <LogoMarvel width={100} height={40}/>,
                headerRight: () => (
                        <Link asChild href="/about">
                            <Pressable>
                                {({ pressed }) => (
                                <InfoIcon className={`${pressed ? "opacity-50" : ""}`}/>
                                )}
                            </Pressable>
                        </Link>
                ),
            }}/>
        </View>
    );
}

    // MI HEADER DEL 'MAIN.JSX'
    //   <View className="flex-row justify-between items-center mb-4 mx-4">
    //     <View style={styles.view}>
    //       <LogoMarvel width={150} height={70} />
    //     </View>

    //     <Link asChild href="/about">
    //           <Pressable>
    //             {({ pressed }) => (
    //               <InfoIcon className={`${pressed ? "opacity-50" : ""}`}/>
    //             )}
    //           </Pressable>
    //     </Link>
    //   </View>