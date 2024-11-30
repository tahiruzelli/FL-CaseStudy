import React from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import AppText from "./app-text";
import { buttonProperties, ButtonTypes } from "@/src/utils/enums/button-types";

interface ButtonProps {
  type: ButtonTypes;
  title: string;
  onTap: () => void;
  isLoading?: boolean;
  borderRadius?: number;
}

const AppButton: React.FC<ButtonProps> = ({
  type,
  title,
  onTap,
  isLoading,
  borderRadius,
}) => {
  return (
    <TouchableOpacity
      disabled={type == ButtonTypes.deactive}
      onPress={() => onTap()}
    >
      <View
        style={{
          backgroundColor: buttonProperties[type].backgroundColor,
          borderColor: buttonProperties[type].borderColor,
          borderWidth: buttonProperties[type].borderColor == null ? 0 : 1,
          marginHorizontal: 16,
          borderRadius: borderRadius ?? 8,
          paddingVertical: 18,
        }}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <AppText
            style={{
              color: buttonProperties[type].textColor,
              alignSelf: "center",
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            {title}
          </AppText>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppButton;
