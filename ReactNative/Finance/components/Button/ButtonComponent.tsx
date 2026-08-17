import React from "react";
import { Button } from "react-native";
const { stylesInt } = require("./ButtonComponent.style");

interface Props {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    type?: string;
}
/**
 * Renders a button component with the given text and onPress handler.
 *
 * @param {Props} props - The props object containing the following properties:
 *   - text: The text to display on the button.
 *   - onPress: The function to call when the button is pressed.
 *   - disabled: Whether the button is disabled, defaults to false.
 *   - color: The color of the button, defaults to '#5C62D6'.
 * @return {ReactElement} The rendered button component.
 */
export const ButtonComponent: React.FC<Props> = ({ title, onPress, disabled, type }) => {
 
    let color;

    switch (type) {
        case "success":
            color = stylesInt.ButtonSuccess.backgroundColor        
            break;
        case "warning":
            color = stylesInt.ButtonWarning.backgroundColor
            break;
        case "error":   
            color = stylesInt.ButtonError.backgroundColor
            break;
        case "info":
            color = stylesInt.ButtonInfo.backgroundColor
            break;  
        case "primary":  
            color = stylesInt.ButtonPrimary.backgroundColor
            break;
        default:
            color = stylesInt.ButtonInfo.backgroundColor
            break;
    }

    return (
        <Button
            disabled={disabled}
            color={color}
            title={title}
            onPress={onPress}
        />
    )
}