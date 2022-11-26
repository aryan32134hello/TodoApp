import React from "react";
import{
View,Text,StyleSheet
} from 'react-native'

const Login= ()=>{
    return (
        <View>
        <Text style={styles.text1}>HELLO</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    text1:{
        fontSize: 40
        
    }
});

export default Login;