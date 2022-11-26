import React from "react";
import{
View,Text,StyleSheet,Button
} from 'react-native'

const Round= ()=>{
    return (
        <View>
        <Button title="+" style={styles.button}/>
        </View>

    );
}

const styles = StyleSheet.create({
    button:{
        width:'50%'
    }
});

export default Round;