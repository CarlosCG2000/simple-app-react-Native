import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated, Pressable } from "react-native";
import { Score } from "./Score";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function FilmCard({ film }) {
  return (
    <Link href={`/film/${film.slug}`} asChild>
      <StyledPressable className="active:opacity-70 border border-black active:border-white/50 mb-2 bg-gray-500/10 rounded-xl p-4">
      <View className="flex-row bg-slate.500/10 p-4 rounded-xl gap-4" key={film.slug}>
        <Image source={{ uri: film.image }} style={styles.image} />
        <View className="flex-shrink">
          <Text className="mb-2" style={styles.title}>{film.title}</Text>
          <Score score={film.score} maxScore={100} />
          <Text className="mb-2" style={styles.description}>{film.description}</Text>
        </View>
      </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedFilmCard({ film, index }) {
  const opacity = useRef(new Animated.Value(0)).current; // Inicializa la opacidad en 0 (es decir transparente)

  useEffect(() => {
    // Efecto para animar la opacidad
    Animated.timing(opacity, {
      // Crea una animación de temporización
      toValue: 1, // Cambia el valor de opacidad a 1
      duration: 1000, // Duración de la animación en milisegundos
      delay: index * 250, // Retraso en la animación basado en el índice
      useNativeDriver: true, // Utiliza el driver nativo para mejorar el rendimiento
    }).start();
  }, [opacity, index]); // Se ejecuta cuando la opacidad o el índice cambian

  return (
    <Animated.View style={{ opacity }}>
      <FilmCard film={film} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  // card: {
  //   marginBottom: 42,
  // },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginBottom: 10,
  },
});
