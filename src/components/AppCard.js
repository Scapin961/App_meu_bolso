import { Children } from 'react';
import {View, StyleSheet } from 'react-native';

export default function AppCard() {
    return(
        <View style={[styles.card, style]}>
            {children}
        </View>
    );
}

const styles=StyleSheet.create({
    card:{
        backgroundColor: '#fff',
        borderRadius: 16,
        marginBottom: 16
    }

});