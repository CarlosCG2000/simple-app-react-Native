import { Stack } from "expo-router";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/ScreenLayout";
import { useEffect, useState } from "react";
import { getFilmDetails } from "../../lib/omdbapi";
import { FilmDetails } from "../../class/FilmDetails";
import { StyledImage, StyledText, StyledView } from "../../class/styled";

export default function Detail() {
  const { id } = useLocalSearchParams(); // mismo que el nombre del archivo
  const [filmInfo, setFilmInfo] = useState<FilmDetails | null>(null);

  useEffect(() => {
    if (id && typeof id === "string") {
      getFilmDetails(id).then(setFilmInfo);
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "white",
          headerShadowVisible: false,
          headerLeft: undefined,
          headerRight: undefined,
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          headerBackTitle: "Volver",
          headerBackTitleStyle: { fontSize: 16, fontFamily: "System" },
          headerTitle: () => (
            <StyledText className="text-white font-bold text-lg">
              Detalle {id}
            </StyledText>
          ),
        }}
      />
      <View>
        {filmInfo ? (
          <StyledView className="items-center justify-center">
            <StyledText className="text-white font-bold mb-8 text-2xl">
              Hola {filmInfo.title}
            </StyledText>
            <StyledText className="text-white text-white/90 mb-4">
              Descripción de la pelicula {filmInfo.plot}
            </StyledText>
            {/* <Text className="text-white text-white/90 mb-4">
                            Puntuación de la pelicula {filmInfo.score}
                        </Text> */}
            <StyledText className="text-white text-white/90 mb-4">
              Id de la pelicula {filmInfo.id}
            </StyledText>
            <StyledText className="text-white text-white/90 mb-4">
              Tipo de pelicula {filmInfo.ratings[0].Source}
            </StyledText>
            <StyledText className="text-white text-white/90 mb-4">
              Valoración de pelicula {filmInfo.ratings[0].Value}
            </StyledText>
            <StyledImage
              className="mb-4 rounded"
              source={{ uri: filmInfo.poster }}
              style={{ width: 300, height: 400, borderRadius: 50 }}
            />
          </StyledView>
        ) : (
          <StyledText className="text-white font-bold mb-8 text-2xl">
            Cargando...
          </StyledText>
          // <ActivityIndicator
          //     size="large"
          //     color="#00ff00"
          //     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          //     style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] }}
          // />
        )}
      </View>
    </Screen>
  );
}
