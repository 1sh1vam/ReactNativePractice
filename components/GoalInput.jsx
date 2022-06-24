import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = ({ addGoal }) => {
  const [text, setText] = useState('');

  const handleGoalInp = (enteredText) => {
    setText(enteredText);
  };

  const handleAddGoal = () => {
    addGoal(text);
    setText('');
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleGoalInp}
        value={text}
        placeholder="Your course goal!"
        style={styles.textInput}
      />
      <Button onPress={handleAddGoal} title="Add Goal" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  textInput: {
    width: '70%',
    borderWidth: 1,
    borderColor: '#c4c4c4',
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
