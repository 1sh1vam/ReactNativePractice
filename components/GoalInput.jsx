import React, { useState } from 'react';
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native';

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
    <Modal>
        <View style={styles.inputContainer}>
        <TextInput
            onChangeText={handleGoalInp}
            value={text}
            placeholder="Your course goal!"
            style={styles.textInput}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.addButton}>
                <Button onPress={handleAddGoal} title="Add Goal" />
            </View>
            <View>
                <Button onPress={handleAddGoal} title="Cancel" />
            </View>
        </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
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
  buttonContainer: {
    marginTop: 20,
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {

  }
});

export default GoalInput;
