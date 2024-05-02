/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Array<string>>([]);
  const [indexToUpdate, setIndexToUpdate] = useState<number>(-1);

  const handleTextChange = (text: string) => {
    setTask(text);
  };

  const handleEditTask = (index: number) => {
    console.log('index ', index);
    setIndexToUpdate(index);
  }

  const handleDeleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    console.log('newTasks ',newTasks);
    setTasks(newTasks)

  }

  const addTask = () => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);
    setTask('');
  };

  const setUpdate = () => {
    console.log('indexToUpdate ', indexToUpdate);
    const newTasks = [...tasks];
    newTasks[indexToUpdate] = task;
    setTasks(newTasks)
    setTask('');
    // setIndexToUpdate(-1);
  };

  const handleRenderItem = ({item, index} : any) => (
    <View style={styles.itemStyle}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => handleEditTask(index)}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteTask(index)}>
        <Text>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView>
      {/* <ScrollView contentInsetAdjustmentBehavior="automatic"> */}
      <TextInput
        onChangeText={handleTextChange}
        style={styles.inputStyle}
        value={task}
      />

      <TouchableOpacity onPress={addTask}>
        <Text>Add Task</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={setUpdate}>
        <Text>Submit Update</Text>
      </TouchableOpacity>

      <FlatList renderItem={handleRenderItem} data={tasks} keyExtractor={(item, index) => `${index}-${item}`}/>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  inputStyle: {
    borderWidth: 3,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
  },
  itemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default App;
