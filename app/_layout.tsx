import { Pressable } from "react-native";
import { Link, /*Slot,*/ Stack } from "expo-router";
import { LogoMarvel } from "../components/Logos";
import { InfoIcon } from "../components/Icons";
import { StyledView } from "../class/styled";

export default function Layout() {
  return (
    <StyledView className="flex-1">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white",
          headerTitle: "",
          // headerTitleStyle: { fontWeight: "bold" },
          // headerTitleAlign: "center",
          // headerShadowVisible: false,
          headerLeft: () => <LogoMarvel width={100} height={40} />,
          headerRight: () => (
            <Link asChild href="/about">
              <Pressable>
                {({ pressed }) => (
                  <InfoIcon className={`${pressed ? "opacity-50" : ""}`} />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
    </StyledView>
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
