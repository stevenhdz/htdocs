'use strict';
import { StyleSheet } from 'react-native';
import { colors } from '../../styles/global.colors.style';

export const stylesInt = StyleSheet.create({
    ButtonSuccess: {
        backgroundColor: colors.ButtonBackgroundColorSuccess,
    },
    ButtonWarning: {
        backgroundColor: colors.ButtonBackgroundColorWarning,
    },
    ButtonError: {
        backgroundColor: colors.ButtonBackgroundColorError,
    },
    ButtonInfo: {
        backgroundColor: colors.ButtonBackgroundColorInfo,
    },
    ButtonPrimary: {
        backgroundColor: colors.ButtonBackgroundColorPrimary,  
    }
})