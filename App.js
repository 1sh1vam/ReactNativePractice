import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handleGoalInp = (enteredText) => {
    setText(enteredText);
  }

  const addGoal = () => {
    console.log('add btn clicke', text);
    setGoalList((prev) => [...prev, text]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleGoalInp} value={text} placeholder='Your course goal!' style={styles.textInput} />
        <Button onPress={addGoal} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView alwaysBounceVertical={false}>
          {goalList.map((goal, index) => (
            <View key={index} style={styles.goalItem} >
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    flex: 1,
  },
  textInput: {
    width: '70%',
    borderColor: '#c4c4c4',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 8,
  },
  goalItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#2D5C54',
    margin: 5,
  },
  goalText: {
    color: '#fff',
  }
});
