import { useEffect, useState } from "react";

import {
  FlatList,
  View /*, ScrollView*/,
  ActivityIndicator,
  StyleSheet,
  Pressable,
} from "react-native";
import { getFilms, getFilmsMock } from "../lib/omdbapi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedFilmCard } from "./FilmCard";
import { Film } from "../class/Film";

export function Main() {
  const [films, setFilms] = useState<Film[]>([]); // Inicializa el estado de films como un array vacío con useState es reactivo
  // const insets = useSafeAreaInsets(); // Obtiene los insets de la barra de estado y la barra de navegación

  useEffect(() => { // Se ejecuta una vez al montar el componente
    getFilms().then((films) => { // Llama a la función getFilmsMock para obtener los datos de las películas
      if (films.length === 0) {
        console.error("[Main] No se encontraron películas");
        return;
      }
      setFilms(films);
    });
  }, []); // El segundo argumento [] indica que el efecto solo se ejecutará una vez, como componentDidMount

  return (
    // style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
    <View>
      {films.length === 0 ? (
        <ActivityIndicator color={"#fff"} size={"large"} />
      ) : (
        <FlatList
          data={films}
          keyExtractor={(film) => film.id}
          contentContainerStyle={{ paddingHorizontal: 0 }}
          renderItem={({ item, index }) => (
            <AnimatedFilmCard film={item} index={index} />
          )}
        />
      )}
    </View>
  );
}

// const styles = StyleSheet.create({
//   view: {
//     // marginBottom: 10,
//     alignItems: "center"
//   }
// });