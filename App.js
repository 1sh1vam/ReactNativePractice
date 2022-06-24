import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [text, setText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const handleGoalInp = (enteredText) => {
    setText(enteredText);
  };

  const addGoal = () => {
    console.log('add btn clicke', text);
    setGoalList((prev) => [...prev, {text, id: prev.length + 1}]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleGoalInp}
          value={text}
          placeholder="Your course goal!"
          style={styles.textInput}
        />
        <Button onPress={addGoal} title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goalList}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        />
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
});
