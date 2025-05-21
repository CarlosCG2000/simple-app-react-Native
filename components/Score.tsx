import { View, Text } from 'react-native';
import { styled } from 'nativewind';


class ScoreProps {
    score: number;
    maxScore: number;
    constructor(score: number, maxScore: number) {
        this.score = score;
        this.maxScore = maxScore;
    }
}

const StyledView = styled(View);
const StyledText = styled(Text);

export function Score( score: ScoreProps) {
    //Obtener el color de forma dinamica de la puntuacion para el circulo
    const getColor = () => {
        const percentage = (score.score / score.maxScore) * 100; // 100%

        if (percentage > 80) { return "bg-green-500";}
        else if (percentage > 50) { return "bg-yellow-500"; }
        else { return "bg-red-500";}
    }

    // const className = getColor();
    const className = `${getColor()} w-8 h-8 rounded-full justify-center items-center`;

    return (
        <StyledView className={className}>
            <StyledText className="text-lg font-bold text-white">{score.score}</StyledText>
        </StyledView>
    );
}





