import { View, Text } from "react-native";

export function Score({ score, maxScore }){
    //Obtener el color de forma dinamica de la puntuacion para el circulo
    const getColor = () => {
        const percentage = (score / maxScore) * 100; // 100%

        if (percentage > 80) { return "bg-green-500";}
        else if (percentage > 50) { return "bg-yellow-500"; }
        else { return "bg-red-500";}
    }

    const className = getColor();

    return (
        <View className={`${className} w-8 rounded-full justify-center items-center`}>
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    );
}





