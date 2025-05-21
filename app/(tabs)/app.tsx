import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import 'nativewind/tailwind.css';

import { Main } from "../../components/Main";
import { Screen } from "../../components/ScreenLayout";

export default function App() {
  return (
    // SafeAreaProvider: Sirve para crear un contenedor seguro para la app a través de la librería react-native-safe-area-context
    // StatusBar: Sirve para controlar la barra de estado de la app, de forma que se puede cambiar el color de fondo y el color del texto
    <SafeAreaProvider>
      <Screen>
        {/* <View style={styles.container}> */}
        <StatusBar style="light" />
        <Main />
        {/* </View> */}
      </Screen>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",
    // paddingHorizontal: 12,
  },
});
