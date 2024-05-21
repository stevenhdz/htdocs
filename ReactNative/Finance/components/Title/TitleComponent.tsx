import React from "react";
import { Text } from "react-native";
const { stylesInt } = require("./TitleComponent.style");

interface Props {
  text: string;
  stylesExt?: any;
  id?: string;
  lineBreakMode?: any;
  numberOfLines?: number;
  onLayout?: (event: any) => void;
  onPress?: (event: any) => void;
  onPressIn?: (event: any) => void;
  onPressOut?: (event: any) => void;
}

/**
 * Renders a title component with the given text.
 *
 * @param {Props} props - The props object containing the following property:
 *   - text: The text to display as the title.
 * @return {ReactElement} The rendered title component.
 */
export const TitleComponent: React.FC<Props> = ({
  text,
  stylesExt,
  id,
  lineBreakMode,
  numberOfLines,
  onLayout,
  onPress,
  onPressIn,
  onPressOut,
}) => {
  return (
    <Text
      style={[stylesInt.TextTitle, stylesExt]}
      id={id}
      lineBreakMode={lineBreakMode}
      numberOfLines={numberOfLines}
      onLayout={onLayout}
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      {text}
    </Text>
  );
};
