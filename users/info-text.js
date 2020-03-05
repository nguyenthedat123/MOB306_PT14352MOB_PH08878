import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    Image,
    Switch,
    Modal,
    Button,
    TextInput,
    Picker
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function infoText({ data }) {
    return (
        <View>
            <Text style={style.text}>{`${data.name}`}</Text>

        </View>
    )
}
const style = StyleSheet.create({
    text:{
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'pink'
    }
    });
