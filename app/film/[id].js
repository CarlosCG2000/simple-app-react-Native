
import { Link, Stack } from "expo-router";
import {Image, Text, View} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../../components/ScreenLayout";
import { use, useEffect, useState } from "react";
import { getFilmDetails } from "../../lib/omdbapi";

export default function Detail(){
    const { id } = useLocalSearchParams(); // mismo que el nombre del archivo
    const[filmInfo, setFilmInfo] = useState(null);

    useEffect(() => {
        if (id){
            getFilmDetails(id).then(setFilmInfo)
        }
    }, [id]);

    return (
    <Screen>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: "green" },
                headerTintColor: "white",
                headerTitle: "",
                headerShadowVisible: false,
                headerLeft: () => {},
                headerRight: () => {},
                headerTitleStyle: { fontWeight: "bold" },
                headerTitleAlign: "center",
                headerBackTitle: "Volver",
                headerBackTitleStyle: { fontWeight: "bold" },
                headerTitle: () => <Text className="text-white font-bold text-lg">Detalle {id}</Text>,
            }}
        />
        <View>
            {
                filmInfo ? (
                    <View className="items-center justify-center">
                        <Text className="text-white font-bold mb-8 text-2xl">
                            Hola {filmInfo.title}
                        </Text>
                        <Text className="text-white text-white/90 mb-4">
                            Descripción de la pelicula {filmInfo.description}
                        </Text>
                        {/* <Text className="text-white text-white/90 mb-4">
                            Puntuación de la pelicula {filmInfo.score}
                        </Text> */}
                        <Text className="text-white text-white/90 mb-4">
                            Id de la pelicula {filmInfo.slug}
                        </Text>
                        <Text className="text-white text-white/90 mb-4">
                            Tipo de pelicula {filmInfo.reviews[0].Source}
                        </Text>
                        <Text className="text-white text-white/90 mb-4">
                            Valoración de pelicula {filmInfo.reviews[0].Value}
                        </Text>
                        <Image className="mb-4 rounded"
                        source={{ uri: filmInfo.img }}
                        style={{ width: 300, height: 400, borderRadius: 50 }}/>
                    </View>
                ) : (
                    <Text className="text-white font-bold mb-8 text-2xl">
                        Cargando...
                    </Text>
                    // <ActivityIndicator
                    //     size="large"
                    //     color="#00ff00"
                    //     className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    //     style={{ position: "absolute", top: "50%", left: "50%", transform: [{ translateX: -50 }, { translateY: -50 }] }}
                    // />
                )
            }
        </View>
    </Screen>
    )
}
