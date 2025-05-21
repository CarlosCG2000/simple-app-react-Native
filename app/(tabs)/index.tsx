import { styled } from "nativewind";
import { Text, View } from "react-native";
import { StyledText, StyledView } from "../../class/styled";

export default function index() {
    return (
        <StyledView className="flex-1 bg-black pt-4 px-2">
            <StyledText className="text-white">Página siempre por defecto</StyledText>
        </StyledView>
    );
}