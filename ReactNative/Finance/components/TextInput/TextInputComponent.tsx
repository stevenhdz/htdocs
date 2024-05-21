import React from "react";
import { TextInput } from "react-native";
const { stylesInt } = require("./TextInputComponent.style");

interface Props {
  types?: any | undefined;
  stylesExt?: any;
  handleChange?: (text: string) => void;
  value: string;
  placeholder: string;
  editable?: boolean;
  autoCorrect?: any;
  autoComplete?: any;
  autoFocus?: any;
  autoCapitalize?: any;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  blurOnSubmit?: boolean;
  underlineColorAndroid?: string;
  returnKeyType?: any;
  enablesReturnKeyAutomatically?: boolean;
  selectTextOnFocus?: boolean;
  clearTextOnFocus?: boolean;
  contextMenuHidden?: boolean;
  secureTextEntry?: boolean;
  allowFontScaling?: boolean;
  textBreakStrategy?: any;
  textAlignVertical?: any;
  selectionColor?: string;
  placeholderTextColor?: string;
  clearButtonMode?: any;
}

/**
 * Renders a TextInput component with the provided props.
 *
 * @param {Props} props - The props object containing the following properties:
 *   - types: The type of keyboard to use for the TextInput (optional), defaults to 'default'.
 *   - styles: The styles to apply to the TextInput, defaults to an empty object.
 *   - handleChange: The function to call when the text in the TextInput changes.
 *   - value: The initial value of the TextInput.
 *   - placeholder: The placeholder text to display in the TextInput.
 *   - editable: Whether the TextInput is editable, defaults to true.
 *   - autoCorrect: Whether to enable autocorrection, defaults to true.
 *   - autoComplete: Whether to enable auto completion, defaults to 'off'.
 *   - autoFocus: Whether to focus the TextInput on mount, defaults to false.
 *   - autoCapitalize: Whether to capitalize the first letter of the text, defaults to 'none'.
 *   - maxLength: The maximum number of characters allowed in the TextInput, defaults to undefined.
 *   - multiline: Whether the TextInput should be multiline, defaults to false.
 *   - numberOfLines: The number of lines to display in the TextInput, defaults to 1.
 *   - blurOnSubmit: Whether to blur the TextInput when the return key is pressed, defaults to true.
 *   - underlineColorAndroid: The color of the TextInput underline, defaults to undefined.
 *   - returnKeyType: The return key type to use for the TextInput, defaults to 'done'.
 *   - enablesReturnKeyAutomatically: Whether the return key should be enabled automatically, defaults to false.
 *   - selectTextOnFocus: Whether to select the text in the TextInput when it is focused, defaults to false.
 *   - clearTextOnFocus: Whether to clear the text in the TextInput when it is focused, defaults to false.
 *   - contextMenuHidden: Whether the context menu should be hidden, defaults to false.
 *   - secureTextEntry: Whether the TextInput should be secure, defaults to false.
 *   - allowFontScaling: Whether to allow font scaling, defaults to true.
 *   - textBreakStrategy: The text break strategy to use for the TextInput, defaults to 'simple'.
 *   - textAlignVertical: The vertical alignment of the text in the TextInput, defaults to 'auto'.
 *   - selectionColor: The color of the selection in the TextInput, defaults to undefined.
 *   - placeholderTextColor: The color of the placeholder text in the TextInput, defaults to undefined.
 *   - clearButtonMode: The mode to use for the clear button in the TextInput, defaults to 'never'.
 * @return {ReactElement} The rendered TextInput component.
 */
export const TextInputComponents: React.FC<Props> = ({
  types,
  stylesExt,
  handleChange,
  value,
  placeholder,
  editable,
  autoCorrect,
  autoComplete,
  autoFocus,
  autoCapitalize,
  maxLength,
  multiline,
  numberOfLines,
  blurOnSubmit,
  underlineColorAndroid,
  returnKeyType,
  enablesReturnKeyAutomatically,
  selectTextOnFocus,
  clearTextOnFocus,
  contextMenuHidden,
  secureTextEntry,
  allowFontScaling,
  textBreakStrategy,
  textAlignVertical,
  selectionColor,
  placeholderTextColor,
  clearButtonMode,
}) => {

  return (
    <TextInput
      style={[stylesInt.TextInput, stylesExt]}
      placeholder={placeholder}
      keyboardType={types}
      value={value}
      onChangeText={handleChange}
      editable={editable}
      autoCorrect={autoCorrect}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      autoCapitalize={autoCapitalize}
      maxLength={maxLength}
      multiline={multiline}
      numberOfLines={numberOfLines}
      blurOnSubmit={blurOnSubmit}
      underlineColorAndroid={underlineColorAndroid}
      returnKeyType={returnKeyType}
      enablesReturnKeyAutomatically={enablesReturnKeyAutomatically}
      selectTextOnFocus={selectTextOnFocus}
      clearTextOnFocus={clearTextOnFocus}
      contextMenuHidden={contextMenuHidden}
      secureTextEntry={secureTextEntry}
      allowFontScaling={allowFontScaling}
      textBreakStrategy={textBreakStrategy}
      textAlignVertical={textAlignVertical}
      selectionColor={selectionColor}
      placeholderTextColor={placeholderTextColor}
      clearButtonMode={clearButtonMode}
    />
  );
};
