import { ReactNode } from "react";
import { View } from "react-native";

type ScreenProps = {
  children: ReactNode; // Children puede ser cualquier cosa que React pueda renderizar: un string, un componente, un fragmento, etc. Y ReactNode cubre todos esos casos.
};

export function Screen({ children }: ScreenProps) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingTop: 16,
        paddingHorizontal: 8,
      }}
    >
      {children}
    </View>
  );
}
