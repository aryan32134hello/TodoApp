import React from "react";
import{
View,Text,StyleSheet
} from 'react-native'

const Home= (props)=>{
    return (
        <View>
        <Text style={styles.text1}>HELLO</Text>
        <Text style={styles.text1}>{props.Data}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    text1:{
        fontSize: 40
        
    }
});

export default Home;