import { SafeAreaProvider } from "react-native-safe-area-context";
import { Screen } from "../../components/ScreenLayout";
import { StatusBar } from "expo-status-bar";
import { Main } from "../../components/Main";

export default function index() {
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
