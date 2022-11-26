
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from 'react-native';
import Today from './components/Today';
import Task from './components/Task';

  function App() {
    const [task,setTask] = useState();
    const [taskItems,setTaskItems] = useState([]);
    const handleAddTask  = () => {
  Keyboard.dismiss();
  setTaskItems([...taskItems,task])
}
  return (
    <View style={styles.container}>
      <View style = {styles.tasksWrap}>
      <Today/>
      <View style={styles.items}>
        {
          taskItems.map((item, index) => {
           return <Task key={index} text = {item}/>
          })
        }
        </View>
        </View>
        <KeyboardAvoidingView behavior={Platform.OS=="ios" ? "padding" : "height"}
        style={styles.taskWrapper}>
          <TextInput style={styles.input} placeholder={'Write Your Task'} value={task} onChangeText={text => setTask(text)} />
          <TouchableOpacity style={styles.addWrapper} onPress={() => handleAddTask}  >
            <View styles={styles.addWrapper}>
              <Text style ={styles.Button}>+</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
  );
  }

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#E8EAED',
  },
  taskWrapper:{
    position:'absolute',
    bottom:60,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  input:{
    paddingVertical: 15,
    width:250,
    paddingHorizontal:15,
    backgroundColor:'#fff',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    fontSize:16,
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#FFF',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#C0C0C0',
  },
  Button:{
    fontSize:20,
    color:'#000'
  },
  tasksWrap:{
    paddingTop: 80,
    paddingHorizontal:20,

  },
  items:{
    marginTop:30,
  },

});

export default App;
