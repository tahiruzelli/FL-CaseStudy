import dimensions from "@/src/utils/helpers/dimension";
import React from "react";
import { View } from "react-native";

interface CircleViewProps {
  children: any;
  height?: number;
  width?: number;
  color: string;
}

const CircleView: React.FC<CircleViewProps> = ({
  children,
  height,
  width,
  color,
}) => {
  return (
    // <View style={styles.circleView}>
    <View
      style={{
        height: height ? height : 96,
        width: width ? width : 96,
        borderRadius: dimensions()._borderRadius,
        backgroundColor: color,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
      }}
    >
      {children}
    </View>
  );
};

export default CircleView;
