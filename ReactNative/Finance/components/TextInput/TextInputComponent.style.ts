'use strict';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global.colors.style';

export const stylesInt = StyleSheet.create({
    TextInput: {
        backgroundColor: colors.TextInputBackgroundColor,
        color: colors.TextInputTextColor,
        borderRadius: 10,
        borderColor: colors.TextInputBorderColor,
        padding: 8,
        marginBottom: 8,
    },
});
