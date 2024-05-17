import React, { useState } from 'react';
import { TextInput } from 'react-native';


interface Props {
    types?: any;
    styles: any;
    handleChange: (text: string) => void;
    value: string;
    placeholder: string;
}

export const TextInputComponents: React.FC<Props> = ({ types, styles, handleChange, value, placeholder }) => {
    return (
        <TextInput
            style={[styles.input, {backgroundColor: '#f2f2f2'}]}
            placeholder={placeholder}
            keyboardType={types}
            value={value}
            onChangeText={handleChange}
        />
    )
}