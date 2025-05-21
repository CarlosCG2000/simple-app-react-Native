
import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { Screen } from "../../components/ScreenLayout";
import { StyledText } from "../../class/styled";

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Link asChild href="/">
                    <Pressable>
                        {({ pressed }) => (
                            <HomeIcon className={`${pressed ? "opacity-50" : ""}`}/>
                        )}
                    </Pressable>
                </Link>

                <StyledText className="text-white font-pold mb-8 text-2xl">
                Sobre el proyecto
                </StyledText>
                <StyledText className=" text-white text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </ StyledText>
                <StyledText className=" text-white text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </ StyledText>
                <StyledText className=" text-white text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </ StyledText>
                <StyledText className=" text-white text-white/90 mb-4">
                lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                </ StyledText>
            </ScrollView>
        </Screen>
    )
}