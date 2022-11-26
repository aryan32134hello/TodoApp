import React from "react";
import{
View,Text,StyleSheet
} from 'react-native'

const Today= ()=>{
    return (
        <View>
        <Text style={styles.text1}>Today's Task</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    text1:{
        fontSize: 24,
        fontWeight:'bold',
        color:'#000',
    }
});

export default Today;